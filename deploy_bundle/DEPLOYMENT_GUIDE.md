# 🚀 Supemir Website Deployment Guide

This guide will walk you through deploying your React + Vite website to a Hostinger VPS running Ubuntu 22.04.

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ A registered domain name (e.g., `your_domain.com`)
- ✅ A Hostinger VPS running Ubuntu 22.04
- ✅ SSH access to your VPS (root or sudo user)
- ✅ Your project code pushed to a GitHub/GitLab repository
- ✅ Basic knowledge of command line operations

## 🌐 Step 1: Point Your Domain

1. **Log into your domain registrar** (GoDaddy, Namecheap, etc.)
2. **Navigate to DNS management**
3. **Create/Update A records:**
   - `your_domain.com` → `YOUR_VPS_IP_ADDRESS`
   - `www.your_domain.com` → `YOUR_VPS_IP_ADDRESS`
4. **Wait for DNS propagation** (can take up to 24 hours, usually 1-2 hours)

## 🖥️ Step 2: Initial Server Setup

### 2.1 Connect to Your VPS

```bash
ssh root@YOUR_VPS_IP_ADDRESS
# or if using a non-root user:
ssh username@YOUR_VPS_IP_ADDRESS
```

### 2.2 Upload and Run Setup Script

**Option A: Copy and paste the script**
```bash
# Create the setup script
nano setup_server.sh
# Copy the entire content from the setup_server.sh file and paste it
# Save and exit (Ctrl+X, Y, Enter)

# Make it executable and run
chmod +x setup_server.sh
sudo bash setup_server.sh
```

**Option B: Upload via SCP (from your local machine)**
```bash
# From your local machine
scp setup_server.sh root@YOUR_VPS_IP_ADDRESS:/root/
ssh root@YOUR_VPS_IP_ADDRESS
chmod +x setup_server.sh
sudo bash setup_server.sh
```

### 2.3 Update Domain in Nginx Config

After the setup script completes:

```bash
# Edit the Nginx configuration
sudo nano /etc/nginx/sites-available/supemir

# Replace 'your_domain.com' with your actual domain
# Save and exit (Ctrl+X, Y, Enter)

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## 📦 Step 3: Deploying the Application

### 3.1 Clone Your Repository

```bash
# Navigate to the application directory
cd /var/www/supemir

# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git .

# Or if using GitLab:
# git clone https://gitlab.com/YOUR_USERNAME/YOUR_REPOSITORY.git .
```

### 3.2 Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the environment file
nano .env
```

**Update the following values in your `.env` file:**
```env
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
VITE_APP_DOMAIN=your_domain.com
VITE_APP_URL=https://your_domain.com
# Add any other environment variables your app needs
```

### 3.3 Build and Run the Application

```bash
# Build and start the application
docker-compose up --build -d

# Check if the application is running
docker-compose ps

# View logs
docker-compose logs -f
```

### 3.4 Verify Application is Running

```bash
# Check if the application is accessible locally
curl http://localhost:3000

# Check if Nginx is proxying correctly
curl -H "Host: your_domain.com" http://localhost
```

## 🔒 Step 4: Setting up SSL with Let's Encrypt

### 4.1 Install SSL Certificate

```bash
# Run Certbot to get SSL certificate
sudo certbot --nginx -d your_domain.com -d www.your_domain.com

# Follow the prompts:
# - Enter your email address
# - Agree to terms of service
# - Choose whether to share your email with EFF
# - Choose redirect option (recommended: redirect HTTP to HTTPS)
```

### 4.2 Verify SSL Setup

```bash
# Test SSL certificate
sudo certbot certificates

# Test automatic renewal
sudo certbot renew --dry-run
```

### 4.3 Set up Automatic Renewal

```bash
# Add renewal to crontab
sudo crontab -e

# Add this line to run renewal check twice daily
0 12 * * * /usr/bin/certbot renew --quiet
```

## ✅ Step 5: Final Verification

### 5.1 Test Your Website

1. **Open your browser** and visit `https://your_domain.com`
2. **Check HTTPS** - ensure the lock icon appears
3. **Test all pages** - navigate through your website
4. **Check mobile responsiveness**
5. **Test form submissions** (if any)

### 5.2 Performance Check

```bash
# Check application status
systemctl status supemir

# Check Nginx status
systemctl status nginx

# View application logs
docker-compose logs -f app

# Check Nginx logs
sudo tail -f /var/log/nginx/supemir_access.log
sudo tail -f /var/log/nginx/supemir_error.log
```

## 🔄 Step 6: Future Updates

### 6.1 Update Your Website

```bash
# SSH into your server
ssh root@YOUR_VPS_IP_ADDRESS

# Navigate to application directory
cd /var/www/supemir

# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up --build -d

# Or use the update script
./update.sh
```

### 6.2 Automated Updates (Optional)

Create a GitHub Action for automatic deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          cd /var/www/supemir
          git pull origin main
          docker-compose down
          docker-compose up --build -d
```

## 🛠️ Troubleshooting

### Common Issues and Solutions

#### 1. Application Not Starting
```bash
# Check Docker logs
docker-compose logs app

# Check if port 3000 is in use
sudo netstat -tlnp | grep :3000

# Restart the application
docker-compose restart app
```

#### 2. Nginx 502 Bad Gateway
```bash
# Check if application is running
docker-compose ps

# Check Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### 3. SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Check Nginx SSL configuration
sudo nginx -t
```

#### 4. Domain Not Resolving
```bash
# Check DNS propagation
nslookup your_domain.com

# Check if domain is pointing to correct IP
dig your_domain.com
```

### Useful Commands

```bash
# View application logs
docker-compose logs -f

# Restart application
docker-compose restart

# Stop application
docker-compose down

# Start application
docker-compose up -d

# Update application
./update.sh

# Check system resources
htop
df -h
free -h

# Check running services
systemctl status supemir nginx docker
```

## 📊 Monitoring and Maintenance

### 1. Set up Monitoring (Optional)

Consider setting up monitoring with tools like:
- **Uptime Robot** - for uptime monitoring
- **Google Analytics** - for website analytics
- **Server monitoring** - with tools like New Relic or DataDog

### 2. Regular Maintenance

```bash
# Update system packages (monthly)
sudo apt update && sudo apt upgrade -y

# Clean up Docker images (monthly)
docker system prune -a

# Check disk space
df -h

# Check application logs for errors
docker-compose logs --tail=100 app | grep ERROR
```

### 3. Backup Strategy

```bash
# Backup application data
tar -czf supemir-backup-$(date +%Y%m%d).tar.gz /var/www/supemir

# Backup Nginx configuration
sudo cp -r /etc/nginx /backup/nginx-$(date +%Y%m%d)
```

## 🎉 Congratulations!

Your Supemir website is now successfully deployed and running on your Hostinger VPS! 

### Quick Reference

- **Website URL**: `https://your_domain.com`
- **Application Directory**: `/var/www/supemir`
- **Update Command**: `./update.sh`
- **Logs**: `docker-compose logs -f`
- **Status Check**: `systemctl status supemir`

### Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the logs for error messages
3. Ensure all prerequisites are met
4. Verify your domain DNS settings

---

**Happy Deploying! 🚀**
