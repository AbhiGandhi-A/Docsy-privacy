# Vercel Deployment Guide - Docsy Official Website

## Quick Start: Deploy to Vercel in 5 Minutes

### Option 1: Automatic Deployment (Recommended)

#### Step 1: Prepare Your Repository
```bash
git init
git add .
git commit -m "Initial Docsy website commit"
git remote add origin https://github.com/yourusername/docsy-web.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Search for and select your `docsy-web` repository
5. Vercel will auto-detect Next.js configuration

#### Step 3: Configure Environment Variables
In the Vercel Dashboard:
1. Click **"Settings"** → **"Environment Variables"**
2. Add the following variables:

```
SMTP_HOST                 = smtp.gmail.com
SMTP_PORT                 = 587
SMTP_USER                 = your-email@gmail.com
SMTP_PASS                 = your-app-password
DEVELOPER_EMAIL           = developer@example.com
NEXT_PUBLIC_APP_NAME      = Docsy
NEXT_PUBLIC_API_URL       = https://yourdomain.vercel.app
```

#### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for deployment to complete
3. Visit your live site at `https://yourdomain.vercel.app`

---

## SMTP Setup for Email Notifications

### Gmail App Password Setup

**Important**: Gmail requires App Passwords (not your regular password)

#### 1. Enable 2-Factor Authentication
1. Go to [Google Account](https://myaccount.google.com/)
2. Click **"Security"** in left menu
3. Scroll to **"2-Step Verification"**
4. Click **"Get Started"**
5. Follow the prompts

#### 2. Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **"Mail"** from dropdown
3. Select **"Windows Computer"** (or your platform)
4. Google generates a 16-character password
5. Copy this password
6. Add to Vercel as `SMTP_PASS`

#### 3. Configure SMTP Variables
```env
SMTP_HOST     = smtp.gmail.com
SMTP_PORT     = 587          # Use 587 for TLS
SMTP_USER     = your-email@gmail.com
SMTP_PASS     = xxxx xxxx xxxx xxxx  # Your 16-char app password
DEVELOPER_EMAIL = developer@example.com
```

---

## Domain Configuration

### Add Custom Domain

#### Step 1: In Vercel
1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain name
4. Vercel shows DNS configuration

#### Step 2: Update DNS Records
Update your domain registrar (GoDaddy, Namecheap, etc.):

**For apex domain (example.com):**
- Type: `A`
- Name: `@` (or left blank)
- Value: `76.76.19.89`

**For subdomain (www.example.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

#### Step 3: Verify
- Wait 24-48 hours for DNS propagation
- Vercel will automatically issue SSL certificate
- Your site is now live at `https://yourdomain.com`

---

## Environment Variables Reference

### Production Variables

```env
# SMTP Email Service (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # App Password (not regular password)
DEVELOPER_EMAIL=abhi@docsy.app

# App Information
NEXT_PUBLIC_APP_NAME=Docsy

# API Configuration
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

### Vercel Set Environment

In Vercel Dashboard:
1. Project → Settings → Environment Variables
2. Click "Add New..."
3. Add variable name and value
4. Select which environments (Production/Preview/Development)
5. Click "Save"
6. Redeploy

---

## Testing Email Locally

### Test Before Deploying

```bash
# Create .env.local file with:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
DEVELOPER_EMAIL=your-email@gmail.com

# Start dev server
npm run dev

# Navigate to http://localhost:3000/delete-account
# Fill form and submit to test
```

---

## Production Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Custom domain added and DNS configured
- [ ] SSL certificate issued (automatic in Vercel)
- [ ] Email service tested
- [ ] Privacy policy content reviewed
- [ ] Account deletion flow tested
- [ ] Mobile responsiveness verified
- [ ] Dark mode tested
- [ ] All pages accessible
- [ ] Analytics configured (optional)
- [ ] Monitoring enabled

---

## Vercel Deployment Features

### Automatic Benefits

✅ **Automatic HTTPS** - Free SSL certificate  
✅ **CDN** - Global edge network  
✅ **Auto Scaling** - Handles traffic spikes  
✅ **Preview Deployments** - Test PRs before merge  
✅ **Performance Analytics** - Built-in monitoring  
✅ **Environment Variables** - Secure secret management  
✅ **Git Integration** - Auto-deploy on push  

---

## Troubleshooting

### Email Not Sending

**Problem**: Deletion requests not sending emails

**Solutions**:
1. Verify SMTP credentials are correct
2. Check Gmail 2-Factor Authentication is enabled
3. Verify App Password (not regular password)
4. Check SMTP_PORT is 587 (TLS)
5. Review Vercel function logs for errors

**View Logs**:
```
Vercel Dashboard → Deployments → Select deployment → Logs
```

### DNS Not Working

**Problem**: Domain not resolving

**Solutions**:
1. Verify DNS records added correctly
2. Wait 24-48 hours for propagation
3. Check nameservers point to Vercel
4. Use [DNS Propagation Checker](https://www.whatsmydns.net/)

### Build Failures

**Problem**: Deployment fails

**Solutions**:
1. Check build logs in Vercel Dashboard
2. Verify all environment variables set
3. Run locally: `npm run build`
4. Check TypeScript errors: `npm run type-check`

---

## Performance Optimization

### Vercel Best Practices

1. **Enable Incremental Static Regeneration (ISR)**
   - Already configured in Next.js 14

2. **Image Optimization**
   - Vercel auto-optimizes images via next/image

3. **API Route Caching**
   - Already configured

4. **Database Connection Pooling**
   - Firebase handles this

---

## Monitoring & Analytics

### Vercel Analytics

1. **Web Vitals** - Monitor performance
2. **Error Tracking** - Automatic error reporting
3. **Logs** - View function and error logs
4. **Usage** - Monitor bandwidth and function invocations

Access in: **Project Settings → Analytics**

---

## Costs

### Free Tier Includes

- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ 100 GB bandwidth/month
- ✅ 1 seat
- ✅ Community support

**Cost**: FREE

### Paid Tiers (Optional)

- **Pro**: $20/month - Advanced features
- **Enterprise**: Custom pricing

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://support.vercel.com)
- [GitHub Issues](https://github.com/vercel/next.js)

---

## Quick Commands

```bash
# Local development
npm run dev                 # Start dev server

# Build and test
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Check code quality
npm run type-check         # TypeScript checking

# Deployment
git push origin main       # Auto-deploys to Vercel
```

---

**Next Steps**:
1. Set up Gmail App Password
2. Configure Vercel environment variables
3. Add custom domain (optional)
4. Test deletion flow
5. Monitor performance

**Happy Deploying! 🚀**
