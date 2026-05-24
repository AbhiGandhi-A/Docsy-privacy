# 🚀 Docsy Official Website - Quick Start Guide

## 📋 Prerequisites

- **Node.js**: 18+ or 20+
- **npm**: 9+ or higher
- **Git**: Latest version
- **Gmail Account**: For SMTP email service (optional for local development)

## ⚡ 5-Minute Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
# Copy example to local
cp .env.example .env.local

# Edit with your values (optional for local development)
# SMTP settings only needed if testing email
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📁 Key Files to Review

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `app/privacy-policy/page.tsx` | Privacy policy (Google Play compliant) |
| `app/delete-account/page.tsx` | Account deletion request form |
| `app/api/delete-request/route.ts` | API endpoint for deletion requests |
| `components/` | Reusable UI components |
| `lib/` | Utilities (email, validation) |

---

## 🎨 Styling & Dark Mode

- **Framework**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Dark Mode**: Automatic based on system preference
- **Theme Colors**: Indigo & Blue

Dark mode toggle in navbar to manually switch.

---

## 🧪 Testing Locally

### Test Privacy Policy
```
http://localhost:3000/privacy-policy
```

### Test Account Deletion (Without Email)
```
1. Navigate to http://localhost:3000/delete-account
2. Fill the form
3. Submit (will fail if SMTP not configured, but shows form validation)
```

### Test with Email Service
```bash
# Set up SMTP in .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Gmail App Password
DEVELOPER_EMAIL=your-email@gmail.com

# Restart dev server
npm run dev

# Test deletion form - email will be sent
```

---

## 📊 Project Structure

```
docsy-web/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── privacy-policy/    # Privacy policy page
│   ├── delete-account/    # Account deletion page
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utilities & helpers
├── public/                # Static files
└── README.md             # Full documentation
```

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 📧 Gmail Setup for Email Service

### Required for Production (Optional for Local Testing)

1. **Enable 2-Factor Authentication**
   - Go to [Google Account](https://myaccount.google.com/)
   - Security → 2-Step Verification

2. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Configure Environment**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   DEVELOPER_EMAIL=developer@example.com
   ```

---

## 🚀 Deploy to Vercel

### Quickest Way

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - Vercel Dashboard → Settings → Environment Variables
   - Add all `.env.example` variables
   - Deploy

That's it! Your site is live at `https://yourdomain.vercel.app`

📖 See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## 🎯 Compliance Features Included

✅ **GDPR Compliant**
- Right to erasure implemented
- Clear data collection disclosure
- Account deletion page

✅ **Google Play Data Safety**
- Transparent data handling
- Privacy policy meets Google's requirements

✅ **Google API Services User Data Policy**
- Limited use disclosure for Google Drive
- No data sharing commitments

✅ **Account Deletion**
- User-initiated deletion
- Email confirmation flow
- SMTP integration

---

## 🔐 Security Features

- ✅ Environment variable protection
- ✅ TypeScript strict mode
- ✅ Security headers configured
- ✅ Input validation
- ✅ CORS ready
- ✅ No sensitive data in logs

---

## 📱 Responsive & Accessible

- ✅ Mobile-first design
- ✅ Tailwind responsive classes
- ✅ Semantic HTML
- ✅ Proper color contrast
- ✅ Touch-friendly UI
- ✅ Keyboard accessible

---

## 🎨 Dark Mode

Dark mode is automatically enabled based on system preference.

**Disable** if needed in `app/layout.tsx`:
```tsx
// Remove suppressHydrationWarning and dark mode logic
```

---

## 🐛 Troubleshooting

### Installation Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
npm run type-check
```

### Build Errors

```bash
npm run build
```

---

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [Nodemailer Guide](https://nodemailer.com)

---

## 📞 Support

**Developer**: Abhi Gandhi  
**Email**: abhi@docsy.app  
**App**: Docsy - AI PDF Toolkit  

---

## ✨ What's Included

### Pages
- ✅ Home page with features showcase
- ✅ Privacy policy (7 sections, Google Play compliant)
- ✅ Account deletion request form
- ✅ Professional 404 page (Next.js default)

### Components
- ✅ Sticky navigation with dark mode toggle
- ✅ Professional footer
- ✅ Reusable button variations
- ✅ Card components
- ✅ Toast notification system

### Backend
- ✅ API route for deletion requests
- ✅ Nodemailer SMTP integration
- ✅ Input validation
- ✅ Error handling

### Styling
- ✅ Tailwind CSS with custom theme
- ✅ Dark mode support
- ✅ Framer Motion animations
- ✅ Lucide React icons
- ✅ Glassmorphism effects

### Deployment
- ✅ Vercel ready
- ✅ Security headers
- ✅ Performance optimized
- ✅ Automatic SSL

---

## 🎯 Next Steps

1. ✅ Review and customize privacy policy
2. ✅ Set up email service for deletion requests
3. ✅ Test all pages and forms
4. ✅ Deploy to Vercel
5. ✅ Monitor analytics

---

**Built with ❤️ using Next.js 14 + TypeScript + Tailwind CSS**

**Version**: 1.0.0  
**Last Updated**: 2024
