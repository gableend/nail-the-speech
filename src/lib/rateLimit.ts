// Simple in-memory rate limiter
// Resets on server restart, which is fine for Netlify serverless functions
// Each function instance has its own memory, so this is per-instance limiting

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (entry.resetAt < now) {
      store.delete(key);
    }
  }
}, 60 * 1000); // Clean every minute

export function rateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60 * 60 * 1000 // 1 hour default
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || entry.resetAt < now) {
    // New window
    store.set(identifier, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count++;
  return { allowed: true, remaining: maxRequests - entry.count, resetAt: entry.resetAt };
}
