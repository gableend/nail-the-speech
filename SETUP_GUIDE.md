# Complete Setup Guide - Nail The Speech

This guide covers setting up the complete Nail The Speech application with authentication, dashboard, and premium features.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   cd nail-the-speech
   bun install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```

3. **Database Setup**
   ```bash
   bunx prisma generate
   bunx prisma db push
   ```

4. **Start Development Server**
   ```bash
   bun run dev
   ```

The app will be available at `http://localhost:3000`

## 🔐 Authentication Setup

### Demo Mode (Default)
The app runs in demo mode with placeholder OAuth credentials. Social login buttons will show demo messages instead of actual authentication.

### Production Setup

#### 1. NextAuth.js Configuration
Update your `.env.local`:
```bash
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000  # or your production URL
```

Generate a secret:
```bash
openssl rand -base64 32
```

#### 2. Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create/select project → Enable Google+ API
3. Credentials → Create OAuth 2.0 Client ID
4. Add redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### 3. Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create app → Add Facebook Login
3. Add Valid OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook`

```bash
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

#### 4. Twitter/X OAuth
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Create project → Enable OAuth 2.0
3. Add callback URLs:
   - `http://localhost:3000/api/auth/callback/twitter`

```bash
TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret
```

## 💳 Payment Setup (Stripe)

### Demo Mode (Default)
Stripe integration runs in demo mode. Payment buttons will show placeholder messages.

### Production Setup

#### 1. Create Stripe Account
1. Sign up at [Stripe](https://stripe.com)
2. Get your API keys from Dashboard

#### 2. Configure Environment Variables
```bash
STRIPE_SECRET_KEY=sk_live_your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
```

#### 3. Create Products & Prices
In Stripe Dashboard:
1. Create a "Premium Plan" product
2. Create a recurring price (e.g., $9.99/month)
3. Copy the Price ID and update in `src/app/pricing/page.tsx`

#### 4. Configure Webhooks
1. Add webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
2. Select events: `checkout.session.completed`, `customer.subscription.updated`
3. Copy webhook secret to environment variables

## 🗄️ Database Configuration

### Development (SQLite - Default)
No additional setup required. Database file created automatically.

### Production (PostgreSQL/MySQL)

#### 1. Update Prisma Schema
In `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql" // or "mysql"
  url      = env("DATABASE_URL")
}
```

#### 2. Update Environment
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/nailthespeech"
```

#### 3. Deploy Database
```bash
bunx prisma db push
```

## 🌟 Features Overview

### ✅ Authentication System
- **Social Login**: Google, Facebook, Twitter/X, Magic Link
- **Session Management**: Persistent across pages
- **Protected Routes**: Dashboard and premium features
- **User Profiles**: Account management and settings

### ✅ Speech Generation
- **3-Step Generator**: Essentials, Enrichment, Premium
- **AI Simulation**: Realistic speech generation
- **Multiple Roles**: Best Man, Maid of Honor, etc.
- **Tone Selection**: Funny, Sentimental, Balanced, Roast

### ✅ User Dashboard
- **Speech History**: View, edit, delete saved speeches
- **Account Management**: Profile settings and information
- **Usage Analytics**: Speech count and plan status
- **Export Options**: Copy, PDF, Google Doc integration

### ✅ Premium Features
- **Subscription Management**: Stripe integration
- **Feature Gating**: Free vs Premium limits
- **Billing Dashboard**: Subscription status and history
- **Advanced Options**: Extended customization

### ✅ Responsive Design
- **Mobile Optimized**: Works on all device sizes
- **Wedding Theme**: Elegant colors and typography
- **Smooth Animations**: Loading states and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### 1. Netlify (Recommended)
```bash
# Build and deploy
bun run build
```

Update `netlify.toml` for production:
```toml
[build]
  command = "bun run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Vercel
```bash
# Deploy with Vercel CLI
npx vercel --prod
```

### 3. Environment Variables for Production
Ensure all environment variables are set in your deployment platform:
- NextAuth.js configuration
- OAuth credentials
- Stripe API keys
- Database URL
- Email SMTP settings (if using)

## 🔧 Development

### File Structure
```
nail-the-speech/
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── dashboard/    # User dashboard
│   │   ├── generator/    # Speech generator
│   │   ├── pricing/      # Pricing page
│   │   └── result/       # Speech result
│   ├── components/
│   │   ├── auth/         # Authentication components
│   │   └── ui/           # UI components
│   └── lib/              # Utilities and configs
├── prisma/               # Database schema
└── public/               # Static assets
```

### Key Components
- **ProtectedRoute**: Authentication wrapper
- **SocialSignupModal**: Login/signup modal
- **UserDropdown**: User profile menu
- **Dashboard**: Complete user management
- **Pricing**: Stripe integration

### API Routes
- `/api/auth/*` - NextAuth.js authentication
- `/api/speeches` - CRUD operations for speeches
- `/api/create-checkout-session` - Stripe checkout

## 🎯 Next Steps

### Immediate Production Readiness
1. Set up real OAuth credentials
2. Configure Stripe for payments
3. Set up production database
4. Deploy to hosting platform

### Feature Enhancements
1. Email notifications for subscriptions
2. Speech sharing functionality
3. Team collaboration features
4. Advanced AI integration
5. Multi-language support

### Monitoring & Analytics
1. Error tracking (Sentry)
2. User analytics (Google Analytics)
3. Performance monitoring
4. Payment analytics

## 🆘 Troubleshooting

### Common Issues
1. **OAuth Error**: Check callback URLs match exactly
2. **Database Connection**: Verify DATABASE_URL format
3. **Stripe Errors**: Ensure webhook endpoints are configured
4. **Session Issues**: Check NEXTAUTH_SECRET is set

### Debug Mode
Add to `.env.local`:
```bash
NEXTAUTH_DEBUG=true
```

### Support
- Review error logs in development console
- Check network requests for API failures
- Verify environment variables are loaded correctly

---

**Status**: Production ready with demo credentials
**Last Updated**: December 2024
**Version**: 38
