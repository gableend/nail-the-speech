import { useState, useEffect } from 'react';

export interface CurrencyInfo {
  key: string;
  code: string;
  symbol: string;
  amount: number;
  displayPrice: string;
  originalPrice: string;
}

interface UseCurrencyResult {
  currency: CurrencyInfo;
  availableCurrencies: CurrencyInfo[];
  setCurrency: (key: string) => void;
  loading: boolean;
}

const DEFAULT_CURRENCY: CurrencyInfo = {
  key: 'USD',
  code: 'usd',
  symbol: '$',
  amount: 2999,
  displayPrice: '$29.99',
  originalPrice: '$59.99',
};

let cachedResult: { currency: CurrencyInfo; all: CurrencyInfo[] } | null = null;

export function useCurrency(): UseCurrencyResult {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(
    cachedResult?.currency || DEFAULT_CURRENCY
  );
  const [all, setAll] = useState<CurrencyInfo[]>(cachedResult?.all || []);
  const [loading, setLoading] = useState(!cachedResult);

  useEffect(() => {
    if (cachedResult) return;

    fetch('/api/detect-currency')
      .then(res => res.json())
      .then(data => {
        const allCurrencies: CurrencyInfo[] = data.availableCurrencies;
        const detected = allCurrencies.find(c => c.code === data.currency) || DEFAULT_CURRENCY;
        setCurrencyState(detected);
        setAll(allCurrencies);
        cachedResult = { currency: detected, all: allCurrencies };
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const setCurrency = (key: string) => {
    const found = all.find(c => c.key === key);
    if (found) {
      setCurrencyState(found);
      if (cachedResult) cachedResult.currency = found;
    }
  };

  return { currency, availableCurrencies: all, setCurrency, loading };
}
