# 🔧 Webhook Troubleshooting Guide

## ❌ Current Issue: "Failed to fetch" Error

The error you're seeing is because the n8n webhook is in **test mode** and needs to be activated.

### 🎯 Root Cause
```
{"code":404,"message":"The requested webhook \"academy-lead-registration\" is not registered.","hint":"Click the 'Execute workflow' button on the canvas, then try again. (In test mode, the webhook only works for one call after you click this button)"}
```

## ✅ Solution Steps

### 1. Activate Your n8n Workflow

1. **Go to your n8n instance**: https://n8n.srv952805.hstgr.cloud
2. **Open your workflow** with the webhook
3. **Click "Execute Workflow"** button on the canvas
4. **Activate the workflow** for production use

### 2. Test the Webhook

After activation, test with this command:
```bash
$env:VITE_N8N_WEBHOOK_URL="https://n8n.srv952805.hstgr.cloud/webhook-test/academy-lead-registration"
node -e "import('./test-n8n-webhook.js').then(m => m.testWebhook()).catch(console.error)"
```

### 3. Update Webhook URL (After Activation)

Once activated, use the production webhook URL (no `-test`):
```env
VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration
```

## 🔄 Alternative: Use Production Webhook URL

If you have a production webhook URL, update it in your environment:

```env
VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration
```

## 🧪 Testing Steps

### Step 1: Test Webhook Directly
```bash
# Test with PowerShell
Invoke-WebRequest -Uri "https://n8n.srv952805.hstgr.cloud/webhook-test/academy-lead-registration" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"test": "data"}' -UseBasicParsing
```

### Step 2: Test from Browser
1. Open browser developer tools (F12)
2. Go to Console tab
3. Try the registration form
4. Check for any CORS or network errors

### Step 3: Test with Our Script
```bash
node -e "import('./test-n8n-webhook.js').then(m => m.testWebhook()).catch(console.error)"
```

## 🚨 Common Issues & Solutions

### Issue 1: Webhook Not Activated
- **Error**: 404 "webhook not registered"
- **Solution**: Activate the workflow in n8n

### Issue 2: CORS Issues
- **Error**: CORS policy blocks the request
- **Solution**: Configure CORS in n8n webhook settings

### Issue 3: Wrong Webhook URL
- **Error**: Connection refused or timeout
- **Solution**: Verify the webhook URL is correct

### Issue 4: Network Issues
- **Error**: Failed to fetch
- **Solution**: Check internet connection and firewall settings

## 🔧 Quick Fix for Testing

If you want to test the form without n8n, the form will automatically fall back to localStorage:

1. The form will show a warning about webhook not being configured
2. Data will be saved to browser's localStorage
3. You can view saved data in browser dev tools > Application > Local Storage

## 📊 Expected Behavior After Fix

Once the webhook is activated:
1. ✅ Form submission will work
2. ✅ Data will be sent to n8n
3. ✅ User will see success message
4. ✅ Data will be processed by your n8n workflow

## 🎯 Next Steps

1. **Activate your n8n workflow** (most important!)
2. **Test the webhook** with our test script
3. **Try the registration form** again
4. **Check n8n execution logs** for incoming data

The form is working correctly - it just needs the webhook to be activated! 🚀
