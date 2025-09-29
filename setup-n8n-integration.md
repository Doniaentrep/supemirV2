# Quick Setup Guide for n8n Integration

## 1. Environment Setup

Create a `.env` file in your project root:

```bash
# Create .env file
echo "VITE_N8N_WEBHOOK_URL=https://your-n8n-host/webhook/your-webhook-id" > .env
```

Replace `https://your-n8n-host/webhook/your-webhook-id` with your actual n8n webhook URL.

## 2. Test the Integration

### Option A: Test with the provided script

```bash
# Set your webhook URL
export VITE_N8N_WEBHOOK_URL="https://your-n8n-host/webhook/your-webhook-id"

# Run the test
node test-n8n-webhook.js
```

### Option B: Test from the website

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the registration form on your website

3. Fill out the form and submit

4. Check your n8n workflow execution logs

## 3. n8n Workflow Setup

1. **Create Webhook Node**:
   - Method: POST
   - Response Mode: On Received
   - Copy the webhook URL to your `.env` file

2. **Add Google Sheets Node**:
   - Operation: Create Row
   - Map the incoming data to your spreadsheet columns
   - See `N8N_GOOGLE_SHEETS_INTEGRATION.md` for detailed mapping

3. **Test the Workflow**:
   - Activate the workflow
   - Submit a test registration
   - Verify data appears in Google Sheets

## 4. Data Structure

The webhook receives this JSON structure:

```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "educationalLevel": "Bachelor's Degree",
  "interests": "Web Development, Data Science",
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

## 5. Troubleshooting

- **Webhook not working**: Check the URL in `.env` file
- **No data in Google Sheets**: Verify authentication and column mapping
- **CORS errors**: Ensure n8n allows requests from your domain
- **Form submission fails**: Check browser console for errors

## 6. Next Steps

1. Set up your n8n instance
2. Create the webhook workflow
3. Configure Google Sheets integration
4. Test with the provided script
5. Deploy and test with real form submissions
