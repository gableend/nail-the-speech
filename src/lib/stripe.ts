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
  mode: 'payment' as const,
  productName: 'Nail The Speech Pro',
  productDescription: 'Generate, refine and perfect your wedding speech with premium features',
};

export interface CurrencyConfig {
  code: string;
  symbol: string;
  amount: number;       // in smallest unit (cents/pence)
  displayPrice: string; // e.g. "$19.99"
  originalPrice: string; // e.g. "$39.99" (strike-through)
}

export const CURRENCY_CONFIGS: Record<string, CurrencyConfig> = {
  USD: { code: 'usd', symbol: '$',  amount: 2999, displayPrice: '$29.99',  originalPrice: '$59.99' },
  GBP: { code: 'gbp', symbol: '£',  amount: 2499, displayPrice: '£24.99',  originalPrice: '£49.99' },
  EUR: { code: 'eur', symbol: '€',  amount: 2799, displayPrice: '€27.99',  originalPrice: '€55.99' },
  AUD: { code: 'aud', symbol: 'A$', amount: 4499, displayPrice: 'A$44.99', originalPrice: 'A$89.99' },
  CAD: { code: 'cad', symbol: 'C$', amount: 3999, displayPrice: 'C$39.99', originalPrice: 'C$79.99' },
};

// Map countries to currencies
const COUNTRY_CURRENCY: Record<string, string> = {
  US: 'USD', GB: 'GBP', IE: 'EUR', DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR',
  NL: 'EUR', BE: 'EUR', AT: 'EUR', PT: 'EUR', GR: 'EUR', FI: 'EUR',
  AU: 'AUD', NZ: 'AUD', CA: 'CAD',
};

export function getCurrencyForCountry(countryCode: string | null): CurrencyConfig {
  if (!countryCode) return CURRENCY_CONFIGS.USD;
  const currency = COUNTRY_CURRENCY[countryCode.toUpperCase()];
  return currency ? CURRENCY_CONFIGS[currency] : CURRENCY_CONFIGS.USD;
}

export const DEFAULT_CURRENCY = CURRENCY_CONFIGS.USD;
