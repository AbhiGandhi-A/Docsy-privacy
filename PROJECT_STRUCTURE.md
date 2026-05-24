# Docsy Official Website - Project Structure

## 📁 Directory Layout

```
docsy-web/
│
├── 📂 app/
│   ├── layout.tsx                    # Root layout with Navbar & Footer
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global Tailwind & styles
│   │
│   ├── 📂 privacy-policy/
│   │   └── page.tsx                  # Privacy Policy page (GDPR compliant)
│   │
│   ├── 📂 delete-account/
│   │   └── page.tsx                  # Account deletion request page
│   │
│   └── 📂 api/
│       └── 📂 delete-request/
│           └── route.ts              # POST endpoint for deletion requests
│
├── 📂 components/
│   ├── Navbar.tsx                    # Navigation with dark mode toggle
│   ├── Footer.tsx                    # Footer with links & info
│   ├── Button.tsx                    # Reusable button component
│   ├── Card.tsx                      # Glass-morphism card component
│   └── Toast.tsx                     # Toast notification system
│
├── 📂 lib/
│   ├── email.ts                      # Nodemailer SMTP utilities
│   ├── validation.ts                 # Form validation functions
│   └── constants.ts                  # App configuration & constants
│
├── 📂 public/
│   └── (favicon, images, etc.)
│
├── middleware.ts                     # Security headers & CORS
│
├── 📄 Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tailwind.config.ts            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── next.config.js                # Next.js configuration
│   ├── .eslintrc.json                # ESLint rules
│   ├── .gitignore                    # Git ignore rules
│   ├── .env.example                  # Environment variables template
│   └── vercel.json                   # Vercel deployment config
│
└── 📄 Documentation
    └── README.md                     # Complete setup & deployment guide
```

## 🎯 Key Files Explained

### App Files

**app/layout.tsx**
- Root layout that wraps all pages
- Imports Navbar, Footer, and Toast components
- Sets metadata for SEO
- Configures dark mode

**app/page.tsx**
- Home page with hero section
- Feature showcase with animations
- Call-to-action buttons
- Framer Motion animations

**app/privacy-policy/page.tsx**
- GDPR-compliant privacy policy
- Google API Services User Data Policy compliance
- 7 comprehensive sections
- Table of contents with smooth scrolling
- Professional design with collapsible sections

**app/delete-account/page.tsx**
- Account deletion request form
- Form validation on both client and server
- Success confirmation message
- Professional warning UI
- Email confirmation flow

**app/api/delete-request/route.ts**
- POST endpoint handling deletion requests
- Full validation of input data
- Sends HTML-formatted email to developer
- Error handling and logging
- Production-ready CORS support

### Component Files

**components/Navbar.tsx**
- Sticky navigation bar
- Mobile hamburger menu
- Dark mode toggle
- Logo with gradient text

**components/Footer.tsx**
- Footer with multiple sections
- Developer contact information
- Legal links
- Compliance information

**components/Button.tsx**
- Reusable button with variants (primary, secondary, outline, danger)
- Size options (sm, md, lg)
- Loading state with spinner
- Fully accessible

**components/Card.tsx**
- Glass-morphism card design
- Tailwind CSS styling
- Optional hover effects
- Responsive padding

**components/Toast.tsx**
- Toast notification system
- Custom hook: `useToast()`
- Types: success, error, info
- Auto-dismiss timer

### Library Files

**lib/email.ts**
- Nodemailer SMTP transporter setup
- Gmail App Password support
- HTML email formatting
- Secure credential handling
- Error handling

**lib/validation.ts**
- Email validation
- Firebase UID validation
- Deletion reason validation
- Checkbox acceptance validation
- Comprehensive error messages

**lib/constants.ts**
- Application configuration
- External URLs
- Feature list
- Privacy sections
- Compliance information

## 🔧 Configuration Files

**package.json**
- React 18.3.1 + Next.js 14
- TypeScript 5.4.5
- Tailwind CSS 3.4.3
- Framer Motion for animations
- Nodemailer for email
- Lucide React icons

**tsconfig.json**
- Strict mode enabled
- Path aliases (@/)
- Next.js plugin configured
- ES2020 target

**tailwind.config.ts**
- Custom color palette (Indigo/Blue)
- Premium animations
- Dark mode support
- Glassmorphism utilities

**next.config.js**
- Security headers
- Compression enabled
- Optimized build

## 📧 Environment Variables

Required variables in `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
DEVELOPER_EMAIL=developer@example.com
NEXT_PUBLIC_APP_NAME=Docsy
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel dashboard
3. Add environment variables
4. Deploy (automatic on push to main)

### Local Development

```bash
npm install
npm run dev    # Start dev server
npm run build  # Build for production
npm run lint   # Check code quality
```

## 🎨 Design System

- **Colors**: Indigo (primary) & Blue (accent)
- **Animations**: Framer Motion smooth transitions
- **Icons**: Lucide React
- **Styling**: Tailwind CSS + custom utilities
- **Dark Mode**: Full support with system preference detection
- **Responsive**: Mobile-first approach

## ✅ Compliance Features

- ✅ GDPR Article 17 (Right to Erasure)
- ✅ Google Play Data Safety
- ✅ Google API Services User Data Policy
- ✅ Limited Use Requirements
- ✅ CCPA/CPRA Ready
- ✅ Accessible (WCAG 2.1)
- ✅ Mobile Optimized

## 📊 Features Included

1. **Privacy Policy Page**
   - 7 comprehensive sections
   - Google Drive Limited Use disclosure
   - Clear data handling commitments
   - FAQ-style organization

2. **Account Deletion Page**
   - User-friendly form
   - Comprehensive validation
   - Email confirmation flow
   - Success confirmation page

3. **API Endpoints**
   - POST `/api/delete-request` - Handle deletion requests

4. **Components**
   - Responsive Navigation
   - Professional Footer
   - Reusable Button variations
   - Card components with glassmorphism
   - Toast notification system

## 🔐 Security Features

- Environment variable protection
- SMTP password never exposed
- Request validation
- Security headers
- CORS configured
- Rate limiting ready
- No sensitive data in logs

## 📱 Responsive Design

- Mobile-first approach
- Tailwind responsive classes
- Touch-friendly UI
- Optimized images
- Smooth animations on all devices

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Developer**: Abhi Gandhi
