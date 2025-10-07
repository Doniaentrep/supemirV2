#!/bin/bash

# Health Check Script for Supemir Website
# This script checks the health of all services

set -e

echo "🏥 Starting health check for Supemir website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check if Docker is running
echo "🐳 Checking Docker..."
if systemctl is-active --quiet docker; then
    print_status 0 "Docker is running"
else
    print_status 1 "Docker is not running"
    exit 1
fi

# Check if Docker Compose is available
echo "🐙 Checking Docker Compose..."
if command -v docker-compose &> /dev/null; then
    print_status 0 "Docker Compose is available"
else
    print_status 1 "Docker Compose is not available"
    exit 1
fi

# Check if application container is running
echo "📱 Checking application container..."
if docker-compose ps | grep -q "supemir-app.*Up"; then
    print_status 0 "Application container is running"
else
    print_status 1 "Application container is not running"
    print_warning "Try running: docker-compose up -d"
fi

# Check if application is responding
echo "🌐 Checking application health..."
if curl -f -s http://localhost:3000 > /dev/null; then
    print_status 0 "Application is responding on port 3000"
else
    print_status 1 "Application is not responding on port 3000"
    print_warning "Check application logs: docker-compose logs app"
fi

# Check if Nginx is running
echo "🔧 Checking Nginx..."
if systemctl is-active --quiet nginx; then
    print_status 0 "Nginx is running"
else
    print_status 1 "Nginx is not running"
    print_warning "Try running: sudo systemctl start nginx"
fi

# Check if Nginx configuration is valid
echo "⚙️ Checking Nginx configuration..."
if sudo nginx -t &> /dev/null; then
    print_status 0 "Nginx configuration is valid"
else
    print_status 1 "Nginx configuration has errors"
    print_warning "Run: sudo nginx -t to see errors"
fi

# Check if SSL certificate is valid (if exists)
echo "🔒 Checking SSL certificate..."
if [ -f "/etc/letsencrypt/live/$(hostname)/fullchain.pem" ]; then
    if openssl x509 -in /etc/letsencrypt/live/$(hostname)/fullchain.pem -text -noout | grep -q "Not After"; then
        EXPIRY=$(openssl x509 -in /etc/letsencrypt/live/$(hostname)/fullchain.pem -noout -dates | grep "notAfter" | cut -d= -f2)
        print_status 0 "SSL certificate found (expires: $EXPIRY)"
    else
        print_status 1 "SSL certificate is invalid"
    fi
else
    print_warning "No SSL certificate found. Run: sudo certbot --nginx -d your_domain.com"
fi

# Check disk space
echo "💾 Checking disk space..."
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -lt 80 ]; then
    print_status 0 "Disk usage is healthy ($DISK_USAGE%)"
else
    print_warning "Disk usage is high ($DISK_USAGE%)"
fi

# Check memory usage
echo "🧠 Checking memory usage..."
MEMORY_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEMORY_USAGE -lt 80 ]; then
    print_status 0 "Memory usage is healthy ($MEMORY_USAGE%)"
else
    print_warning "Memory usage is high ($MEMORY_USAGE%)"
fi

# Check if ports are listening
echo "🔌 Checking open ports..."
if netstat -tlnp | grep -q ":80 "; then
    print_status 0 "Port 80 is listening"
else
    print_status 1 "Port 80 is not listening"
fi

if netstat -tlnp | grep -q ":443 "; then
    print_status 0 "Port 443 is listening"
else
    print_warning "Port 443 is not listening (HTTPS not configured)"
fi

if netstat -tlnp | grep -q ":3000 "; then
    print_status 0 "Port 3000 is listening"
else
    print_status 1 "Port 3000 is not listening"
fi

# Check recent error logs
echo "📋 Checking recent errors..."
ERROR_COUNT=$(docker-compose logs --tail=100 app 2>/dev/null | grep -i error | wc -l)
if [ $ERROR_COUNT -eq 0 ]; then
    print_status 0 "No recent errors in application logs"
else
    print_warning "Found $ERROR_COUNT recent errors in application logs"
    print_warning "Run: docker-compose logs app | grep -i error"
fi

echo ""
echo "🏁 Health check completed!"
echo ""
echo "📊 Quick status summary:"
echo "- Application: $(docker-compose ps | grep supemir-app | awk '{print $4}')"
echo "- Nginx: $(systemctl is-active nginx)"
echo "- Docker: $(systemctl is-active docker)"
echo "- Disk usage: $DISK_USAGE%"
echo "- Memory usage: $MEMORY_USAGE%"
