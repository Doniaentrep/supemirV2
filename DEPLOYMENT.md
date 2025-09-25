# Deployment Guide for Hostinger

## Pre-deployment Optimization Checklist

✅ **Completed Optimizations:**
- Vite build configuration optimized
- Code splitting with lazy loading implemented
- Browser caching enabled via .htaccess
- Gzip compression configured
- Bundle size optimization
- Production build scripts added

## Build for Production

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build:prod
   ```

3. **The `dist` folder will contain all optimized files for deployment**

## Hostinger Deployment Steps

### Method 1: File Manager Upload
1. Login to your Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. Delete any existing files (if this is a new site)
5. Upload all contents from the `dist` folder to `public_html`
6. Make sure `.htaccess` file is uploaded and visible

### Method 2: GitHub Integration (Recommended)
1. Push your code to GitHub repository
2. In Hostinger panel, go to **Git**
3. Connect your repository
4. Set up auto-deployment from your main branch
5. Build command: `npm run build:prod`
6. Publish directory: `dist`

## Post-Deployment Checklist

- [ ] Check if all pages load correctly
- [ ] Verify logo images are displaying
- [ ] Test navigation between pages
- [ ] Confirm mobile responsiveness
- [ ] Test form submissions
- [ ] Verify SSL certificate is working
- [ ] Check page load speeds

## Performance Optimizations Applied

1. **Code Splitting**: Pages are lazy-loaded to reduce initial bundle size
2. **Image Optimization**: Logos are properly compressed and cached
3. **Browser Caching**: 1-year cache for static assets, 1-day for HTML
4. **Gzip Compression**: All text-based files are compressed
5. **Bundle Analysis**: Vendor chunks separated for better caching
6. **React Router Support**: SPA routing configured for Apache servers

## Troubleshooting

**If pages don't load:**
- Check if `.htaccess` file is in the root directory
- Verify mod_rewrite is enabled on your hosting

**If images don't show:**
- Check file paths in browser developer tools
- Verify images are uploaded to `logos` folder

**If builds fail:**
- Run `npm run clean` then `npm run build:prod`
- Check for any TypeScript errors

## File Structure After Build
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
└── logos/
    ├── LOGO-PM.png
    ├── ISO21001-2018.png
    ├── PL-Seal-final.webp
    └── iso2015-1024x395-1.webp
```

## Performance Metrics Target
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 4s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms