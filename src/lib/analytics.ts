// ── GA4 Analytics Layer ─────────────────────────────────────────
// Simple, SSR-safe tracking via window.gtag (no GTM, no external libs)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a GA4 custom event. Safe to call server-side (no-ops).
 */
export function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
}

// ── Step name map ───────────────────────────────────────────────
export const STEP_NAMES: Record<number, string> = {
  0: 'name_email',
  1: 'role_selection',
  2: 'couple_names',
  3: 'connection_tone',
  4: 'story',
  5: 'speech_output',
};

// ── First-touch UTM attribution ─────────────────────────────────
const ATTRIBUTION_KEY = 'nts_first_touch';

interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  landing_page?: string;
  captured_at?: string;
}

/**
 * Capture UTM params from the current URL into localStorage.
 * Only sets on first visit (never overwrites).
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(ATTRIBUTION_KEY)) return; // already captured

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get('utm_source');
  const utm_medium = params.get('utm_medium');
  const utm_campaign = params.get('utm_campaign');

  // Only store if at least one UTM param is present
  if (!utm_source && !utm_medium && !utm_campaign) return;

  const attribution: Attribution = {
    utm_source: utm_source || undefined,
    utm_medium: utm_medium || undefined,
    utm_campaign: utm_campaign || undefined,
    landing_page: window.location.pathname,
    captured_at: new Date().toISOString(),
  };

  localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
}

/**
 * Read stored first-touch attribution (for purchase/conversion events).
 */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(ATTRIBUTION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
