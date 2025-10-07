#!/bin/bash

# Server Setup Script for Supemir Website Deployment
# Ubuntu 22.04 LTS on Hostinger VPS
# Run with: sudo bash setup_server.sh

set -e  # Exit on any error

echo "🚀 Starting server setup for Supemir website deployment..."

# Update system packages
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install essential packages
echo "🔧 Installing essential packages..."
apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add current user to docker group
usermod -aG docker $USER

# Install Docker Compose (standalone)
echo "🐙 Installing Docker Compose..."
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*?(?=")')
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

# Install Nginx
echo "🌐 Installing Nginx..."
apt install -y nginx

# Install Certbot for SSL certificates
echo "🔒 Installing Certbot for SSL certificates..."
apt install -y certbot python3-certbot-nginx

# Configure UFW firewall
echo "🔥 Configuring firewall..."
ufw --force enable
ufw allow ssh
ufw allow 'Nginx Full'
ufw allow 3000  # For direct app access if needed

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /var/www/supemir
chown -R $USER:$USER /var/www/supemir

# Create logs directory
mkdir -p /var/log/supemir
chown -R $USER:$USER /var/log/supemir

# Configure Nginx
echo "⚙️ Configuring Nginx..."
cat > /etc/nginx/sites-available/supemir << 'EOF'
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
    
    # Handle static assets with caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/supemir /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Start and enable services
echo "🔄 Starting services..."
systemctl start docker
systemctl enable docker
systemctl start nginx
systemctl enable nginx

# Create systemd service for the application
echo "⚙️ Creating systemd service..."
cat > /etc/systemd/system/supemir.service << 'EOF'
[Unit]
Description=Supemir Website
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/var/www/supemir
ExecStart=/usr/bin/docker-compose up -d
ExecStop=/usr/bin/docker-compose down
TimeoutStartSec=0
User=root

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable supemir.service

# Create update script
echo "📝 Creating update script..."
cat > /var/www/supemir/update.sh << 'EOF'
#!/bin/bash
cd /var/www/supemir
git pull origin main
docker-compose down
docker-compose up --build -d
echo "✅ Application updated successfully!"
EOF

chmod +x /var/www/supemir/update.sh

# Set up log rotation
echo "📊 Setting up log rotation..."
cat > /etc/logrotate.d/supemir << 'EOF'
/var/log/supemir/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
}
EOF

echo "✅ Server setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Replace 'your_domain.com' in /etc/nginx/sites-available/supemir with your actual domain"
echo "2. Clone your repository to /var/www/supemir"
echo "3. Create .env file with your production values"
echo "4. Run: docker-compose up --build -d"
echo "5. Run: sudo certbot --nginx -d your_domain.com -d www.your_domain.com"
echo ""
echo "🔧 Useful commands:"
echo "- View logs: docker-compose logs -f"
echo "- Update app: /var/www/supemir/update.sh"
echo "- Restart app: systemctl restart supemir"
echo "- Check status: systemctl status supemir"
echo ""
echo "⚠️  Don't forget to:"
echo "- Update your domain DNS to point to this server's IP"
echo "- Configure your .env file with production values"
echo "- Test your application before going live"
