# Environment Variables Setup Guide

## 🔧 Local Development (.env.local)

Create a `.env.local` file in your project root with these variables:

```env
# Clerk Authentication - Development Keys
# Get these from https://dashboard.clerk.dev (use test keys for development)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk URLs (optional - Clerk will use defaults if not provided)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# OpenAI API
OPENAI_API_KEY=your_openai_api_key_here

# Stripe (for payments - use test keys for development)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL="file:./prisma/dev.db"
```

## 🌐 Netlify Production Environment

### Method 1: Netlify Dashboard (Recommended)

1. Go to your Netlify site dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Add these variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_live_your_production_key_here
CLERK_SECRET_KEY = sk_live_your_production_secret_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /dashboard
OPENAI_API_KEY = your_openai_api_key_here
STRIPE_SECRET_KEY = sk_live_your_production_stripe_secret_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_your_production_stripe_publishable_here
NEXT_PUBLIC_APP_URL = https://your-site-name.netlify.app
DATABASE_URL = file:./prisma/dev.db
```

### Method 2: Import from File

1. Create a file called `netlify-env.txt` with the format:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key_here
CLERK_SECRET_KEY=sk_live_your_production_secret_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
OPENAI_API_KEY=your_openai_api_key_here
STRIPE_SECRET_KEY=sk_live_your_production_stripe_secret_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_production_stripe_publishable_here
NEXT_PUBLIC_APP_URL=https://your-site-name.netlify.app
DATABASE_URL=file:./prisma/dev.db
```

2. In Netlify dashboard, go to Environment variables
3. Click "Import from file"
4. Upload your `netlify-env.txt` file

## 🔑 Where to Get Your Keys

### Clerk Keys
1. Go to [Clerk Dashboard](https://dashboard.clerk.dev)
2. Select your application
3. Navigate to **API Keys**
4. Copy:
   - **Publishable key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - **Secret key** → `CLERK_SECRET_KEY`

### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key → `OPENAI_API_KEY`

### Stripe Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

## ⚠️ Important Security Notes

1. **Never commit `.env.local` to git** - it's already in `.gitignore`
2. **Use test keys for development** - live keys only for production
3. **Keep secret keys secure** - never expose them in client-side code
4. **Rotate keys regularly** - especially if compromised

## 🚀 Quick Start

1. **Copy the template above** into `.env.local`
2. **Replace placeholder values** with your actual keys
3. **Start your development server**: `bun run dev`
4. **For production**: Add the same variables to Netlify dashboard

The application will automatically use these environment variables for authentication and API calls.
