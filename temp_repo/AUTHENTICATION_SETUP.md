# Authentication Setup Guide

This guide will help you set up real OAuth credentials for the Nail The Speech authentication system.

## Current Status

The application is currently running in **development mode** with placeholder credentials. When users click on social login buttons, they'll see demo messages instead of actual authentication.

To enable real authentication, you need to set up OAuth applications with each provider and update your environment variables.

## Required Environment Variables

Copy `.env.example` to `.env.local` and update the following values:

### 1. NextAuth.js Configuration

```bash
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000  # or your production URL
```

**Generate a secret key:**
```bash
openssl rand -base64 32
```

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

```bash
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

### 3. Facebook OAuth Setup

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → "Consumer" type
3. Add "Facebook Login" product
4. In Facebook Login settings, add Valid OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook` (development)
   - `https://yourdomain.com/api/auth/callback/facebook` (production)

```bash
FACEBOOK_CLIENT_ID=your-facebook-app-id-here
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret-here
```

### 4. Twitter/X OAuth Setup

1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Create a new project and app
3. Enable OAuth 2.0 in app settings
4. Add callback URLs:
   - `http://localhost:3000/api/auth/callback/twitter` (development)
   - `https://yourdomain.com/api/auth/callback/twitter` (production)

```bash
TWITTER_CLIENT_ID=your-twitter-client-id-here
TWITTER_CLIENT_SECRET=your-twitter-client-secret-here
```

### 5. Email Provider Setup (Optional)

For magic link email authentication, configure your SMTP settings:

```bash
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an "App Password"
3. Use the app password (not your regular password)

## Database Setup

The app uses Prisma with SQLite for development. For production, update `prisma/schema.prisma` to use PostgreSQL or MySQL:

```prisma
datasource db {
  provider = "postgresql" // or "mysql"
  url      = env("DATABASE_URL")
}
```

## Testing Authentication

1. Update your `.env.local` file with real credentials
2. Restart the development server: `bun run dev`
3. Click "Sign up" or "Log in" buttons
4. Test each social provider
5. Check that user sessions persist across page refreshes

## Production Deployment

For production deployment:

1. Update `NEXTAUTH_URL` to your production domain
2. Add production callback URLs to all OAuth apps
3. Use a secure database (PostgreSQL recommended)
4. Generate a strong `NEXTAUTH_SECRET`
5. Set up proper email SMTP for production

## Troubleshooting

### Common Issues:

1. **"OAuth Error"**: Check callback URLs match exactly
2. **"Client ID not found"**: Verify environment variables are loaded
3. **Email not sending**: Check SMTP credentials and Gmail app password
4. **Session not persisting**: Verify `NEXTAUTH_SECRET` is set

### Debug Mode:

Add to `.env.local` for detailed logs:
```bash
NEXTAUTH_DEBUG=true
```

## Security Notes

- Never commit `.env.local` to version control
- Use different OAuth apps for development and production
- Regularly rotate secrets and API keys
- Enable 2FA on all developer accounts

## Need Help?

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [OAuth Provider Guides](https://next-auth.js.org/providers/)
- [Prisma Documentation](https://www.prisma.io/docs/)

---

**Current Status**: Demo mode enabled. Replace placeholder credentials to enable real authentication.
