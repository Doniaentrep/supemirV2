# SUPEMIR Marrakech Academy Website

Welcome to the official website of SUPEMIR Marrakech Academy, built with React, TypeScript, and Vite.

## Features

- Modern, responsive design
- Interactive registration form
- Program listings and details
- Campus information and location
- Enterprise solutions
- Testimonials and statistics

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd supemir-marrakech-digital-39-main
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8081` (or the next available port).

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## n8n and Google Sheets Integration

This website is configured to send registration form submissions to n8n, which can then automatically save the data to Google Sheets.

### Setup Instructions

1. Set up an n8n instance (self-hosted or n8n Cloud)
2. Create a new workflow with a Webhook trigger
3. Add a Google Sheets node to append data to your spreadsheet
4. Configure the `.env` file with your n8n webhook URL:

   ```env
   VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook/academy-lead-registration
   ```

For detailed setup instructions, see [N8N_GOOGLE_SHEETS_INTEGRATION.md](N8N_GOOGLE_SHEETS_INTEGRATION.md).

### Data Structure

The registration form sends the following data to n8n:

- Personal Information (name, email, phone, address)
- Educational Level
- Interests
- Program Selection
- Motivation and Source Information
- Submission Timestamp

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_N8N_WEBHOOK_URL=https://n8n.srv952805.hstgr.cloud/webhook-test/academy-lead-registration
```

See [.env.example](.env.example) for a template.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── contexts/       # React contexts
├── hooks/          # Custom hooks
├── lib/            # Utility functions
└── App.tsx         # Main application component
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router DOM
- React Hook Form
- Zod (validation)
- Lucide React (icons)

## Deployment

The site can be deployed to any static hosting service. For production deployment:

1. Run `npm run build` to create the production build
2. Deploy the contents of the `dist/` folder to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is proprietary to SUPEMIR Marrakech Academy.