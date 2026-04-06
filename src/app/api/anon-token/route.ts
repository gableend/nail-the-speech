import type { NextRequest } from 'next/server';
import { createAnonToken } from '@/lib/anonToken';
import { hashIp, getRequestIp } from '@/lib/rateLimit';

/**
 * GET /api/anon-token
 *
 * Issues a server-signed anonymous token for unauthenticated users.
 * IP-rate-limited: max 3 tokens per IP per 24 hours.
 *
 * Returns: { token: string } or { error: string }
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getRequestIp(request);
    const ipHash = hashIp(ip);

    const token = await createAnonToken(ipHash);

    if (!token) {
      return new Response(
        JSON.stringify({
          error: 'token_limit_exceeded',
          message: 'Too many token requests from this IP. Please try again later.',
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ token }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('💥 [ANON TOKEN API] Error issuing token:', error);
    return new Response(
      JSON.stringify({
        error: 'internal_error',
        message: 'Failed to issue anonymous token.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
