# Production Integrations Setup Guide

This guide will walk you through setting up all the necessary third-party services for the Nail The Speech application.

## 🚨 Priority Integrations (Required for Launch)

### 1. OpenAI API (Speech Generation)
**Purpose**: Generate AI-powered wedding speeches
**Setup Steps**:
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create account and add payment method
3. Generate API key in API Keys section
4. Set usage limits (recommend $50-100/month initially)
5. Add to `.env.local`: `OPENAI_API_KEY="sk-..."`

**Recommended Models**:
- `gpt-4` for premium speeches (higher quality, more expensive)
- `gpt-3.5-turbo` for free tier speeches (good quality, cost-effective)

### 2. Stripe (Payment Processing)
**Purpose**: Handle premium subscriptions and one-time payments
**Setup Steps**:
1. Create account at [stripe.com](https://stripe.com)
2. Complete business verification
3. Get API keys from Developers > API Keys
4. Set up webhook endpoint: `your-domain.com/api/webhooks/stripe`
5. Add webhook events: `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.deleted`

**Environment Variables**:
```
STRIPE_SECRET_KEY="sk_test_..." (use sk_live_ for production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### 3. Google OAuth (Authentication)
**Purpose**: Allow users to sign in with Google
**Setup Steps**:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable Google+ API
4. Go to Credentials > Create Credentials > OAuth 2.0 Client ID
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

**Environment Variables**:
```
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

### 4. Database (Production)
**Purpose**: Store user data, speeches, subscriptions
**Options**:

**Option A: PlanetScale (Recommended)**
1. Create account at [planetscale.com](https://planetscale.com)
2. Create database
3. Get connection string
4. Update `DATABASE_URL` in `.env.local`

**Option B: Supabase**
1. Create account at [supabase.com](https://supabase.com)
2. Create project
3. Get PostgreSQL connection string
4. Update Prisma schema for PostgreSQL

## 🎯 High Priority Integrations

### 5. Email Service (User Communications)
**Purpose**: Send welcome emails, password resets, speech delivery

**Option A: Resend (Recommended)**
1. Create account at [resend.com](https://resend.com)
2. Verify your domain
3. Get API key
4. Set up email templates

**Option B: SendGrid**
1. Create account at [sendgrid.com](https://sendgrid.com)
2. Verify sender identity
3. Create API key with Mail Send permissions

### 6. Error Monitoring
**Purpose**: Track and fix production errors

**Sentry Setup**:
1. Create account at [sentry.io](https://sentry.io)
2. Create new Next.js project
3. Install Sentry SDK: `npm install @sentry/nextjs`
4. Follow setup wizard

### 7. Analytics
**Purpose**: Track user behavior and conversion

**Google Analytics 4**:
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID
3. Add tracking code

**Vercel Analytics (if hosting on Vercel)**:
1. Enable in Vercel dashboard
2. Add analytics package: `npm install @vercel/analytics`

## 🔧 Medium Priority Integrations

### 8. Customer Support
**Purpose**: Help users with questions and issues

**Intercom Setup**:
1. Create account at [intercom.com](https://intercom.com)
2. Install JavaScript widget
3. Set up automated responses

**Crisp Chat (Free Alternative)**:
1. Create account at [crisp.chat](https://crisp.chat)
2. Get website ID
3. Add chat widget

### 9. Content Management
**Purpose**: Manage blog posts, testimonials, FAQ

**Contentful Setup**:
1. Create account at [contentful.com](https://contentful.com)
2. Create content models for blog posts, testimonials
3. Generate API keys

### 10. File Storage
**Purpose**: Store exported speeches, user uploads

**AWS S3 Setup**:
1. Create AWS account
2. Create S3 bucket
3. Set up IAM user with S3 permissions
4. Configure CORS for file uploads

## 🚀 Future/Advanced Integrations

### 11. Advanced Analytics
- **PostHog**: Product analytics and feature flags
- **Mixpanel**: Event tracking and cohort analysis

### 12. Marketing Tools
- **Mailchimp/ConvertKit**: Email marketing campaigns
- **Facebook Pixel**: Social media advertising
- **Google Tag Manager**: Tag management

### 13. Security & Performance
- **Cloudflare**: CDN and DDoS protection
- **Upstash Redis**: Rate limiting and caching
- **Auth0**: Advanced authentication features

## 📋 Implementation Checklist

### Phase 1: Core Functionality
- [ ] OpenAI API integration
- [ ] Stripe payment processing
- [ ] Google OAuth setup
- [ ] Production database migration
- [ ] Basic error monitoring

### Phase 2: User Experience
- [ ] Email service integration
- [ ] Customer support chat
- [ ] Analytics tracking
- [ ] File storage for exports

### Phase 3: Growth & Optimization
- [ ] Advanced analytics
- [ ] Marketing integrations
- [ ] Performance optimization
- [ ] Security hardening

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit real API keys to git
2. **API Key Rotation**: Regularly rotate sensitive keys
3. **Rate Limiting**: Implement rate limiting for AI API calls
4. **Input Validation**: Sanitize all user inputs
5. **HTTPS Only**: Force HTTPS in production
6. **CORS Configuration**: Properly configure CORS policies

## 💰 Cost Estimates (Monthly)

**Starter Plan (~$50-100/month)**:
- OpenAI API: $30-50 (500-1000 speeches)
- Stripe: $0 (no monthly fee, 2.9% + 30¢ per transaction)
- PlanetScale: $0-29 (free tier available)
- Vercel/Netlify: $0-20 (free tier available)

**Growth Plan (~$200-400/month)**:
- OpenAI API: $100-200 (2000-5000 speeches)
- Database: $29-99
- Email service: $15-50
- Analytics/monitoring: $20-100

**Scale Plan (~$500-1000/month)**:
- All above services at higher tiers
- Advanced customer support tools
- Enterprise analytics
- Dedicated infrastructure

## 📞 Next Steps

1. **Start with Phase 1**: Set up core integrations first
2. **Test thoroughly**: Use test/sandbox modes for all services
3. **Monitor costs**: Set up billing alerts for all services
4. **Plan scaling**: Design architecture to handle growth
5. **Document everything**: Keep integration docs updated

Ready to start setting up? Let's begin with the highest priority integrations!
