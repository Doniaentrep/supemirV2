# n8n Google Sheets Integration Setup

## Environment Configuration

Create a `.env` file in your project root with the following content:

```env
# n8n Webhook Configuration
VITE_N8N_WEBHOOK_URL=https://your-n8n-host/webhook/your-webhook-id
```

Replace `https://your-n8n-host/webhook/your-webhook-id` with your actual n8n webhook URL.

## n8n Workflow Setup

### 1. Create a New Workflow

1. Open your n8n instance
2. Create a new workflow
3. Add a **Webhook** node as the trigger

### 2. Configure the Webhook Node

1. Set the HTTP Method to `POST`
2. Set the Response Mode to `On Received`
3. Copy the webhook URL and add it to your `.env` file
4. The webhook will receive the following JSON structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, City, Country",
  "educationalLevel": "Bachelor's Degree",
  "interests": "Web Development, Data Science, AI",
  "programType": "formation-certifiee",
  "specificProgram": "Full Stack Development",
  "motivation": "Career change",
  "previousExperience": "Some experience",
  "availability": "Full-time",
  "source": "Website",
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "site": "supemirV2"
}
```

### 3. Add Google Sheets Node

1. Add a **Google Sheets** node after the webhook
2. Connect it to the webhook node
3. Configure the Google Sheets node:

#### Authentication
- Use OAuth2 or Service Account authentication
- Follow n8n's Google Sheets authentication guide

#### Spreadsheet Configuration
- **Operation**: Create Row
- **Spreadsheet ID**: Your Google Sheets document ID
- **Sheet Name**: The specific sheet tab name (e.g., "Registrations")

#### Column Mapping
Map the incoming data to your Google Sheets columns:

| Google Sheets Column | n8n Expression |
|---------------------|----------------|
| A (First Name) | `{{ $json.firstName }}` |
| B (Last Name) | `{{ $json.lastName }}` |
| C (Email) | `{{ $json.email }}` |
| D (Phone) | `{{ $json.phone }}` |
| E (Address) | `{{ $json.address }}` |
| F (Educational Level) | `{{ $json.educationalLevel }}` |
| G (Interests) | `{{ $json.interests }}` |
| H (Program Type) | `{{ $json.programType }}` |
| I (Specific Program) | `{{ $json.specificProgram }}` |
| J (Motivation) | `{{ $json.motivation }}` |
| K (Previous Experience) | `{{ $json.previousExperience }}` |
| L (Availability) | `{{ $json.availability }}` |
| M (Source) | `{{ $json.source }}` |
| N (Submitted At) | `{{ $json.submittedAt }}` |
| O (Site) | `{{ $json.site }}` |

### 4. Optional: Add Response Node

Add a **Respond to Webhook** node to send a confirmation response:

1. Add a **Respond to Webhook** node
2. Set the response body:
```json
{
  "success": true,
  "message": "Registration received successfully"
}
```

### 5. Test the Workflow

1. Save and activate your workflow
2. Copy the webhook URL to your `.env` file
3. Test the registration form on your website
4. Check your Google Sheets for the new entry

## Google Sheets Setup

### Create a New Spreadsheet

1. Create a new Google Sheets document
2. Name it "SUPEMIR Registrations" (or your preferred name)
3. Create a header row with the following columns:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| First Name | Last Name | Email | Phone | Address | Educational Level | Interests | Program Type | Specific Program | Motivation | Previous Experience | Availability | Source | Submitted At | Site |

### Format the Headers

1. Select the header row (row 1)
2. Make it bold and add background color
3. Freeze the header row (View > Freeze > 1 row)

## Testing the Integration

### 1. Test Webhook Directly

You can test the webhook using curl or Postman:

```bash
curl -X POST "https://your-n8n-host/webhook/your-webhook-id" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "address": "Test Address",
    "educationalLevel": "Bachelor'\''s Degree",
    "interests": "Web Development",
    "programType": "formation-certifiee",
    "specificProgram": "Test Program",
    "motivation": "Testing",
    "previousExperience": "None",
    "availability": "Full-time",
    "source": "Test",
    "submittedAt": "2024-01-15T10:30:00.000Z",
    "site": "supemirV2"
  }'
```

### 2. Test from Registration Form

1. Start your development server: `npm run dev`
2. Open the registration form
3. Fill out the form and submit
4. Check your Google Sheets for the new entry

## Troubleshooting

### Common Issues

1. **Webhook not receiving data**: Check the webhook URL in your `.env` file
2. **Google Sheets authentication**: Ensure proper OAuth2 or Service Account setup
3. **Column mapping errors**: Verify the column names match your spreadsheet headers
4. **CORS issues**: Ensure your n8n instance allows requests from your domain

### Debug Steps

1. Check n8n execution logs
2. Verify the webhook URL is correct
3. Test the webhook independently
4. Check Google Sheets permissions
5. Verify the spreadsheet ID and sheet name

## Security Considerations

1. Use HTTPS for your n8n webhook URL
2. Consider adding webhook authentication if needed
3. Limit Google Sheets access to necessary users only
4. Regularly review and clean up old registrations

## Advanced Features

### Email Notifications

Add an **Email** node to send notifications when new registrations are received:

1. Add an **Email** node after the Google Sheets node
2. Configure with your email service (Gmail, SendGrid, etc.)
3. Set up email templates for new registrations

### Data Validation

Add a **Code** node to validate incoming data before saving to Google Sheets:

```javascript
// Validate required fields
const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
const missingFields = requiredFields.filter(field => !$input.first().json[field]);

if (missingFields.length > 0) {
  throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test($input.first().json.email)) {
  throw new Error('Invalid email format');
}

return $input.all();
```

### Duplicate Prevention

Add logic to check for duplicate email addresses before creating new rows in Google Sheets.