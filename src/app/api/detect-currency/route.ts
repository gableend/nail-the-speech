import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getCurrencyForCountry, CURRENCY_CONFIGS } from "@/lib/stripe";

export async function GET() {
  const headersList = await headers();

  // Netlify provides geo headers automatically
  const country = headersList.get('x-country') ||
                  headersList.get('x-nf-country-code') ||
                  null;

  const config = getCurrencyForCountry(country);

  return NextResponse.json({
    currency: config.code,
    detectedCountry: country,
    availableCurrencies: Object.entries(CURRENCY_CONFIGS).map(([key, c]) => ({
      key,
      code: c.code,
      symbol: c.symbol,
      amount: c.amount,
      displayPrice: c.displayPrice,
      originalPrice: c.originalPrice,
    })),
  });
}
