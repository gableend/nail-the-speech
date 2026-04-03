import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-07-30.basil',
  typescript: true,
});

// Export Stripe type for use in other files
export type { Stripe };

export const STRIPE_CONFIG = {
  currency: 'usd',
  mode: 'payment' as const,
  priceAmount: 1999, // $19.99 in cents
  productName: 'Nail The Speech Pro',
  productDescription: 'Unlimited speech regeneration and premium features',
};
