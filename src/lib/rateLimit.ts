import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

const IP_SALT = process.env.RATE_LIMIT_SALT || 'nts-default-salt-change-me';

/**
 * Hash an IP address for privacy-safe storage.
 */
export function hashIp(ip: string): string {
  return crypto.createHash('sha256').update(ip + IP_SALT).digest('hex').slice(0, 32);
}

/**
 * Extract the client IP from a request, handling proxies.
 */
export function getRequestIp(request: Request): string {
  const forwarded = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim();
  return forwarded || 'unknown';
}

/**
 * Persistent rate limiter backed by Supabase/PostgreSQL via Prisma.
 * Works correctly on Netlify serverless (no in-memory state).
 *
 * Uses a single upsert per check — resets the window if expired,
 * increments if still active.
 */
export async function rateLimit(
  identifier: string,
  maxRequests: number,
  windowMinutes: number
): Promise<{ allowed: boolean; remaining: number }> {
  try {
    const now = new Date();

    // Try to find existing rate limit entry
    const existing = await prisma.rateLimit.findUnique({
      where: { id: identifier },
    });

    if (!existing) {
      // First request — create entry
      await prisma.rateLimit.create({
        data: { id: identifier, requestCount: 1, windowStart: now, windowMinutes },
      });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    // Check if window has expired
    const windowEnd = new Date(existing.windowStart.getTime() + existing.windowMinutes * 60 * 1000);

    if (now > windowEnd) {
      // Window expired — reset
      await prisma.rateLimit.update({
        where: { id: identifier },
        data: { requestCount: 1, windowStart: now, windowMinutes },
      });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    // Window still active
    if (existing.requestCount >= maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    // Increment
    await prisma.rateLimit.update({
      where: { id: identifier },
      data: { requestCount: { increment: 1 } },
    });
    return { allowed: true, remaining: maxRequests - existing.requestCount - 1 };
  } catch (error) {
    // If rate limiting fails (DB issue), allow the request but log it
    console.error('⚠️ [RATE LIMIT] DB error, allowing request:', error);
    return { allowed: true, remaining: 0 };
  }
}

/**
 * Compute a basic suspicion score from request headers.
 * Returns a score (0-10+) and an array of triggered flags.
 */
export function computeSuspicionScore(request: Request): { score: number; flags: string[] } {
  const flags: string[] = [];
  let score = 0;

  const ua = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const acceptLang = request.headers.get('accept-language') || '';

  if (!ua || ua.length < 10) {
    score += 3;
    flags.push('missing_or_short_user_agent');
  }

  if (!referer || !referer.includes('nailthespeech.com')) {
    score += 2;
    flags.push('missing_or_foreign_referer');
  }

  if (!acceptLang) {
    score += 1;
    flags.push('missing_accept_language');
  }

  // Known bot patterns
  const botPatterns = /curl|wget|python|httpie|postman|insomnia|bot|spider|crawl/i;
  if (botPatterns.test(ua)) {
    score += 4;
    flags.push('bot_user_agent');
  }

  return { score, flags };
}
