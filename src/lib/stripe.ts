import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

export const STRIPE_CONFIG = {
  currency: 'usd',
  mode: 'payment' as const,
  priceAmount: 999, // $9.99 in cents
  productName: 'Nail The Speech Pro',
  productDescription: 'Unlimited speech regeneration and premium features',
};
