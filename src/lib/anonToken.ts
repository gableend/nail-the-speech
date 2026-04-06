import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import { hashIp } from '@/lib/rateLimit';

const ANON_TOKEN_SECRET = process.env.ANON_TOKEN_SECRET || 'nts-anon-token-secret-change-me';

// Max tokens an IP can request in 24 hours
const MAX_TOKENS_PER_IP_PER_DAY = 3;

/**
 * Create an HMAC signature for a token ID.
 */
function sign(tokenId: string): string {
  return crypto
    .createHmac('sha256', ANON_TOKEN_SECRET)
    .update(tokenId)
    .digest('base64url');
}

/**
 * Build the wire-format token: base64url(id).base64url(hmac)
 */
function encodeToken(tokenId: string): string {
  const idPart = Buffer.from(tokenId).toString('base64url');
  const sigPart = sign(tokenId);
  return `${idPart}.${sigPart}`;
}

/**
 * Decode a wire-format token back to its ID, verifying the HMAC.
 * Returns null if the signature is invalid.
 */
function decodeAndVerify(token: string): string | null {
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [idPart, sigPart] = parts;
  let tokenId: string;
  try {
    tokenId = Buffer.from(idPart, 'base64url').toString('utf-8');
  } catch {
    return null;
  }

  const expectedSig = sign(tokenId);
  // Timing-safe comparison
  if (sigPart.length !== expectedSig.length) return null;
  const sigBuffer = Buffer.from(sigPart);
  const expectedBuffer = Buffer.from(expectedSig);
  if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return null;

  return tokenId;
}

/**
 * Issue a new anonymous token for the given IP address.
 * Returns the signed token string, or null if the IP has exceeded the daily limit.
 */
export async function createAnonToken(ipHash: string): Promise<string | null> {
  // Check how many tokens this IP has been issued in the last 24 hours
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentCount = await prisma.anonToken.count({
    where: {
      ipHash,
      createdAt: { gte: oneDayAgo },
    },
  });

  if (recentCount >= MAX_TOKENS_PER_IP_PER_DAY) {
    console.log(`🚫 [ANON TOKEN] IP ${ipHash.slice(0, 8)}... exceeded daily token limit (${recentCount}/${MAX_TOKENS_PER_IP_PER_DAY})`);
    return null;
  }

  // Create the token record in the database
  const record = await prisma.anonToken.create({
    data: {
      ipHash,
      budget: 1,
      consumed: false,
    },
  });

  console.log(`🎫 [ANON TOKEN] Issued token ${record.id} for IP ${ipHash.slice(0, 8)}... (${recentCount + 1}/${MAX_TOKENS_PER_IP_PER_DAY} today)`);

  return encodeToken(record.id);
}

/**
 * Verify and consume an anonymous token.
 *
 * Checks:
 * 1. HMAC signature is valid
 * 2. Token exists in DB and has budget > 0
 * 3. Token IP matches the requester's IP
 *
 * On success, decrements budget (sets consumed = true if budget reaches 0).
 * Returns the token's database ID on success, or an error string.
 */
export async function consumeAnonToken(
  token: string,
  requestIpHash: string
): Promise<{ success: true; tokenId: string; anonUserId: string } | { success: false; error: string }> {
  // Step 1: Verify HMAC
  const tokenId = decodeAndVerify(token);
  if (!tokenId) {
    return { success: false, error: 'invalid_signature' };
  }

  // Step 2: Look up in DB
  const record = await prisma.anonToken.findUnique({
    where: { id: tokenId },
  });

  if (!record) {
    return { success: false, error: 'token_not_found' };
  }

  if (record.budget <= 0 || record.consumed) {
    return { success: false, error: 'token_exhausted' };
  }

  // Step 3: Verify IP matches
  if (record.ipHash !== requestIpHash) {
    console.warn(`⚠️ [ANON TOKEN] IP mismatch for token ${tokenId}: expected ${record.ipHash.slice(0, 8)}..., got ${requestIpHash.slice(0, 8)}...`);
    return { success: false, error: 'ip_mismatch' };
  }

  // Step 4: Consume — decrement budget atomically
  const newBudget = record.budget - 1;
  await prisma.anonToken.update({
    where: { id: tokenId },
    data: {
      budget: newBudget,
      consumed: newBudget <= 0,
    },
  });

  console.log(`✅ [ANON TOKEN] Consumed token ${tokenId} (remaining budget: ${newBudget})`);

  // Use the token ID as the anonymous user ID for speech ownership
  return { success: true, tokenId, anonUserId: tokenId };
}

/**
 * Verify a token without consuming it.
 * Used for read-only checks (e.g., loading a speech).
 */
export async function verifyAnonToken(
  token: string,
  requestIpHash: string
): Promise<{ valid: true; tokenId: string } | { valid: false; error: string }> {
  const tokenId = decodeAndVerify(token);
  if (!tokenId) {
    return { valid: false, error: 'invalid_signature' };
  }

  const record = await prisma.anonToken.findUnique({
    where: { id: tokenId },
  });

  if (!record) {
    return { valid: false, error: 'token_not_found' };
  }

  if (record.ipHash !== requestIpHash) {
    return { valid: false, error: 'ip_mismatch' };
  }

  return { valid: true, tokenId };
}
