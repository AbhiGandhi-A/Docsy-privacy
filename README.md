# Docsy - Official Website

Official website for the **Docsy** document privacy and deletion workflow. Built with Next.js 14, TypeScript, and Tailwind CSS.

- **App Name**: Docsy  
- **Developer**: Abhi Gandhi  
- **App Type**: AI PDF Toolkit / OCR Scanner / Secure Vault

## Features

- 📄 PDF Management & OCR Scanning
- 🤖 AI-Powered Summaries
- 🌍 Multi-language Translation
- 🔒 AES-256 Encrypted Vault
- 🔐 Firebase Authentication
- 📱 Google Drive Backup/Sync
- 📺 Google AdMob Ads
- 🎨 Premium Dark Mode UI
- 📱 Mobile-First Responsive Design
- ✅ Privacy and API Compliance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Email**: Nodemailer (SMTP)
- **Deployment**: Vercel Compatible

## Project Structure

```
docsy-web/
├── app/
│   ├── layout.tsx              # Root layout with navbar & footer
│   ├── page.tsx                # Home page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy Policy page
│   ├── delete-account/
│   │   └── page.tsx            # Account Deletion page
│   ├── api/
│   │   └── delete-request/
│   │       └── route.ts        # Email deletion request API
│   └── globals.css             # Global Tailwind styles
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   ├── Button.tsx              # Reusable button component
│   ├── Card.tsx                # Card component
│   └── Toast.tsx               # Toast notification component
├── lib/
│   ├── email.ts                # Email utilities
│   └── validation.ts           # Form validation utilities
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── .env.example                # Environment variables template
└── README.md                   # This file
```

## Installation

### Prerequisites

- Node.js 18+ or Node.js 20+
- npm 9+

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhiGandhi/docsy-web.git
   cd docsy-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   DEVELOPER_EMAIL=developer@example.com
   NEXT_PUBLIC_APP_NAME=Docsy
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Visit [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## SMTP Setup Guide (Gmail)

### 1. Enable 2-Factor Authentication
- Go to your [Google Account](https://myaccount.google.com/)
- Navigate to **Security** → **2-Step Verification**
- Follow setup steps if not already enabled

### 2. Generate App Password
- Go to [App Passwords](https://myaccount.google.com/apppasswords)
- Select **Mail** and **Windows Computer** (or your OS)
- Google will generate a 16-character password
- Copy this password to `.env.local` as `SMTP_PASS`

### 3. Configure Environment
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-generated-app-password
DEVELOPER_EMAIL=your-email@gmail.com
```

### 4. Test Email Sending
The API will automatically test the connection when you submit the account deletion form.

## API Endpoints

### POST `/api/delete-request`
Handles user account deletion requests.

**Request Body:**
```json
{
  "email": "user@example.com",
  "uid": "optional-firebase-uid",
  "reason": "Reason for deletion"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Deletion request received"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation error message"
}
```

## Pages

### Privacy Policy (`/privacy-policy`)
- GDPR-compliant privacy policy
- Google API Services User Data Policy compliance
- Data collection and usage disclosure
- Permissions explanation
- AI processing disclosure
- Account deletion information

### Account Deletion (`/delete-account`)
- User-friendly form for deletion requests
- Email validation
- Optional Firebase UID
- Deletion reason textarea
- Confirmation checkbox
- Sends request to backend API
- Toast notification on success

## Compliance

✅ **Google Play Data Safety** - Transparent data collection  
✅ **Google API Services User Data Policy** - Limited use requirements met  
✅ **GDPR Compliance** - User data transparency and deletion options  
✅ **Account Deletion** - User-initiated deletion with verification  
✅ **Mobile-First Design** - Responsive on all devices  
✅ **Accessibility** - Semantic HTML, proper contrast ratios  

## Deployment on Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Connect to Vercel
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Select GitHub repository
- Vercel auto-detects Next.js

### 3. Set Environment Variables
- In Vercel dashboard, go to **Settings** → **Environment Variables**
- Add variables from `.env.example`:
  ```
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_USER=your-email@gmail.com
  SMTP_PASS=your-app-password
  DEVELOPER_EMAIL=developer@example.com
  NEXT_PUBLIC_APP_NAME=Docsy
  NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
  ```

### 4. Deploy
- Vercel automatically deploys on push to main
- Visit your production URL

### 5. Custom Domain (Optional)
- In Vercel: **Settings** → **Domains**
- Add your custom domain
- Update DNS records as guided

## Deployment Notes

This project is optimized for Vercel deployment and secure hosting.

- Use the `.env.example` file to configure SMTP and API variables.
- Set `NEXT_PUBLIC_APP_NAME=Docsy` in your deployment environment.
- Keep `SMTP_USER` and `SMTP_PASS` secure and never expose them in client-side code.

## Development

### Available Scripts

```bash
npm run dev        # Start dev server on :3000
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code quality checks
- **Dark Mode**: Automatic system preference detection
- **Responsive**: Mobile-first approach

## Security Features

- ✅ Environment variable protection
- ✅ SMTP password not exposed to frontend
- ✅ Request validation
- ✅ HTTP security headers
- ✅ CSRF protection ready
- ✅ Rate limiting ready (implement with middleware)

## Styling & Design

- **Color Scheme**: Indigo/Blue premium palette
- **Components**: Tailwind CSS + Lucide icons
- **Animations**: Framer Motion smooth transitions
- **Glassmorphism**: Modern card designs
- **Dark Mode**: Full dark theme support
- **Accessibility**: WCAG 2.1 compliant

## Troubleshooting

### Email Not Sending
1. Check `.env.local` variables
2. Verify Gmail App Password is correct
3. Ensure 2-Factor Authentication is enabled
4. Check spam folder
5. Review server logs in Vercel dashboard

### TypeScript Errors
```bash
npm run type-check
```

### Build Failures
```bash
rm -rf .next node_modules
npm install
npm run build
```

## License

© 2024 Abhi Gandhi. All rights reserved.

## Support

For issues or questions:
- Email: developer@example.com
- Privacy: See [/privacy-policy](/privacy-policy)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Google Play Data Safety](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Google API User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
