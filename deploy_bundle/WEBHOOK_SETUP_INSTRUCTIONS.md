# Webhook Setup Instructions

## ✅ Webhook URL Configured

Your webhook URL has been configured:
```
https://n8n.srv952805.hstgr.cloud/webhook-test/academy-lead-registration
```

## 🔧 Next Steps in n8n

1. **Open your n8n workflow** at https://n8n.srv952805.hstgr.cloud
2. **Click "Execute Workflow"** to activate the webhook in test mode
3. **Test the integration** using the provided test script
4. **Activate the workflow** for production use

## 🧪 Testing

### Test the webhook:
```bash
# Set the webhook URL
$env:VITE_N8N_WEBHOOK_URL="https://n8n.srv952805.hstgr.cloud/webhook-test/academy-lead-registration"

# Run the test
node -e "import('./test-n8n-webhook.js').then(m => m.testWebhook()).catch(console.error)"
```

### Test from the website:
1. Start development server: `npm run dev`
2. Open registration form
3. Fill out and submit the form
4. Check n8n execution logs

## 📊 Expected Data Structure

The webhook will receive this JSON structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, City, Country",
  "educationalLevel": "Bachelor's Degree",
  "interests": "Web Development, Data Science, AI",
  "programType": "formation-certifiee",
  "specificProgram": "Full Stack Development",
  "motivation": "Career advancement",
  "previousExperience": "Some experience",
  "availability": "Full-time",
  "source": "Website",
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "site": "supemirV2"
}
```

## 🔄 Production Deployment

Once your n8n workflow is ready:

1. **Update the webhook URL** in your `.env` file to remove `-test`:
   ```
   VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration
   ```

2. **Build for production**:
   ```bash
   npm run build:prod
   ```

3. **Deploy** the `dist` folder to your hosting service

## 🚨 Current Status

- ✅ RegistrationForm.tsx is ready
- ✅ Webhook integration implemented
- ✅ Test script working
- ⏳ Waiting for n8n workflow activation
- ⏳ Ready for production deployment
