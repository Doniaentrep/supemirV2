# 🚀 Deployment Guide

## ✅ Production Build Ready

Your application has been successfully built for production in the `dist` folder.

## 📁 Deployment Files

The `dist` folder contains all the files needed for hosting:
- `index.html` - Main HTML file
- `assets/` - CSS, JS, and other assets
- All files are optimized and minified for production

## 🌐 Hosting Options

### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag & drop the `dist` folder
- **Vercel**: Connect your GitHub repo or upload `dist` folder
- **GitHub Pages**: Upload `dist` contents to your repository
- **Firebase Hosting**: Use Firebase CLI to deploy

### Option 2: Traditional Web Hosting
- Upload all files from `dist` folder to your web server's public directory
- Ensure your server supports SPA routing (redirect all routes to `index.html`)

## 🔧 Environment Configuration

### For Production Deployment:

1. **Set the webhook URL** in your hosting environment:
   ```
   VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration
   ```

2. **Build with production environment**:
   ```bash
   npm run build:prod
   ```

## 🧪 Testing Before Deployment

1. **Test locally**:
   ```bash
   npm run preview
   ```

2. **Test webhook integration**:
   ```bash
   $env:VITE_N8N_WEBHOOK_URL="https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration"
   node -e "import('./test-n8n-webhook.js').then(m => m.testWebhook()).catch(console.error)"
   ```

## 📋 Pre-Deployment Checklist

- [ ] n8n workflow is activated and working
- [ ] Webhook URL is correctly configured
- [ ] Registration form is tested
- [ ] Production build completed successfully
- [ ] All assets are optimized
- [ ] Environment variables are set

## 🚀 Quick Deploy Commands

### Build for production:
```bash
npm run build:prod
```

### Preview locally:
```bash
npm run preview
```

### Clean build (if needed):
```bash
npm run clean
npm run build:prod
```

## 🔗 Webhook Integration Status

- ✅ RegistrationForm.tsx configured
- ✅ Webhook URL: `https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration`
- ✅ Test mode working (waiting for activation)
- ✅ Production build ready
- ✅ Ready for hosting

## 📊 Data Flow

1. User fills registration form
2. Form submits to n8n webhook
3. n8n processes the data
4. Data is sent to Google Sheets (when configured)
5. User receives confirmation

## 🎯 Next Steps

1. **Activate your n8n workflow**
2. **Deploy the `dist` folder to your hosting service**
3. **Test the live registration form**
4. **Configure Google Sheets integration in n8n**

Your landing pages are now ready for hosting! 🎉