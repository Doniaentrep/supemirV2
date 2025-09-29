#!/bin/bash

# Backup Script for Supemir Website
# This script creates backups of the application and database

set -e

# Configuration
BACKUP_DIR="/var/backups/supemir"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="supemir_backup_$DATE"
RETENTION_DAYS=30

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Create backup directory
mkdir -p $BACKUP_DIR

echo "💾 Starting backup process for Supemir website..."

# Create backup directory for this backup
mkdir -p "$BACKUP_DIR/$BACKUP_NAME"

# 1. Backup application files
print_info "Backing up application files..."
if [ -d "/var/www/supemir" ]; then
    tar -czf "$BACKUP_DIR/$BACKUP_NAME/application.tar.gz" -C /var/www/supemir .
    print_status 0 "Application files backed up"
else
    print_status 1 "Application directory not found"
fi

# 2. Backup Nginx configuration
print_info "Backing up Nginx configuration..."
if [ -d "/etc/nginx" ]; then
    tar -czf "$BACKUP_DIR/$BACKUP_NAME/nginx_config.tar.gz" -C /etc nginx
    print_status 0 "Nginx configuration backed up"
else
    print_status 1 "Nginx configuration not found"
fi

# 3. Backup SSL certificates (if they exist)
print_info "Backing up SSL certificates..."
if [ -d "/etc/letsencrypt" ]; then
    tar -czf "$BACKUP_DIR/$BACKUP_NAME/ssl_certificates.tar.gz" -C /etc letsencrypt
    print_status 0 "SSL certificates backed up"
else
    print_warning "No SSL certificates found"
fi

# 4. Backup Docker volumes (if any)
print_info "Backing up Docker volumes..."
if docker volume ls | grep -q supemir; then
    docker run --rm -v supemir_data:/data -v "$BACKUP_DIR/$BACKUP_NAME":/backup alpine tar czf /backup/docker_volumes.tar.gz -C /data .
    print_status 0 "Docker volumes backed up"
else
    print_info "No Docker volumes to backup"
fi

# 5. Backup database (if PostgreSQL is running)
print_info "Checking for database backup..."
if docker-compose ps | grep -q "database.*Up"; then
    # Get database credentials from environment
    DB_NAME=$(grep POSTGRES_DB .env | cut -d= -f2)
    DB_USER=$(grep POSTGRES_USER .env | cut -d= -f2)
    
    if [ ! -z "$DB_NAME" ] && [ ! -z "$DB_USER" ]; then
        docker-compose exec -T database pg_dump -U $DB_USER $DB_NAME > "$BACKUP_DIR/$BACKUP_NAME/database.sql"
        print_status 0 "Database backed up"
    else
        print_warning "Database credentials not found in .env"
    fi
else
    print_info "No database container running"
fi

# 6. Backup environment files
print_info "Backing up environment files..."
if [ -f "/var/www/supemir/.env" ]; then
    cp /var/www/supemir/.env "$BACKUP_DIR/$BACKUP_NAME/"
    print_status 0 "Environment file backed up"
else
    print_warning "No .env file found"
fi

# 7. Create backup metadata
print_info "Creating backup metadata..."
cat > "$BACKUP_DIR/$BACKUP_NAME/backup_info.txt" << EOF
Backup Date: $(date)
Backup Name: $BACKUP_NAME
Application Version: $(cd /var/www/supemir && git rev-parse HEAD 2>/dev/null || echo "Unknown")
Docker Compose Version: $(docker-compose --version)
System Info: $(uname -a)
Disk Usage: $(df -h /)
Memory Usage: $(free -h)
EOF

# 8. Create compressed archive
print_info "Creating compressed backup archive..."
cd "$BACKUP_DIR"
tar -czf "${BACKUP_NAME}.tar.gz" "$BACKUP_NAME"
rm -rf "$BACKUP_NAME"

# 9. Calculate backup size
BACKUP_SIZE=$(du -h "${BACKUP_NAME}.tar.gz" | cut -f1)
print_status 0 "Backup created: ${BACKUP_NAME}.tar.gz (Size: $BACKUP_SIZE)"

# 10. Clean up old backups
print_info "Cleaning up old backups (keeping last $RETENTION_DAYS days)..."
find "$BACKUP_DIR" -name "supemir_backup_*.tar.gz" -type f -mtime +$RETENTION_DAYS -delete
OLD_BACKUPS=$(find "$BACKUP_DIR" -name "supemir_backup_*.tar.gz" -type f | wc -l)
print_status 0 "Old backups cleaned up. Total backups remaining: $OLD_BACKUPS"

# 11. Test backup integrity
print_info "Testing backup integrity..."
if tar -tzf "${BACKUP_NAME}.tar.gz" > /dev/null; then
    print_status 0 "Backup integrity verified"
else
    print_status 1 "Backup integrity check failed"
fi

echo ""
echo "🎉 Backup completed successfully!"
echo "📁 Backup location: $BACKUP_DIR/${BACKUP_NAME}.tar.gz"
echo "📊 Backup size: $BACKUP_SIZE"
echo "🗓️  Retention: $RETENTION_DAYS days"
echo ""
echo "📋 To restore from backup:"
echo "1. Stop the application: docker-compose down"
echo "2. Extract backup: tar -xzf $BACKUP_DIR/${BACKUP_NAME}.tar.gz"
echo "3. Restore files: cp -r $BACKUP_NAME/* /var/www/supemir/"
echo "4. Restart application: docker-compose up -d"
