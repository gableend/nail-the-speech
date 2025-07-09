'use client';

import { v4 as uuidv4 } from 'uuid';

const ANON_COOKIE_NAME = 'anonUserId';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function getAnonymousUserId(): string | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const anonCookie = cookies.find(cookie =>
    cookie.trim().startsWith(`${ANON_COOKIE_NAME}=`)
  );

  return anonCookie ? anonCookie.split('=')[1] : null;
}

export function setAnonymousUserId(anonUserId: string): void {
  if (typeof document === 'undefined') return;

  const maxAge = COOKIE_MAX_AGE;
  const secure = window.location.protocol === 'https:';

  document.cookie = `${ANON_COOKIE_NAME}=${anonUserId}; max-age=${maxAge}; path=/; ${secure ? 'secure;' : ''} samesite=lax`;
}

export function getOrCreateAnonymousUserId(): string {
  let anonUserId = getAnonymousUserId();

  if (!anonUserId) {
    anonUserId = uuidv4();
    setAnonymousUserId(anonUserId);
  }

  return anonUserId;
}

export function clearAnonymousUserId(): void {
  if (typeof document === 'undefined') return;

  document.cookie = `${ANON_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export async function migrateAnonymousData(clerkUserId: string): Promise<void> {
  const anonUserId = getAnonymousUserId();

  if (!anonUserId) {
    console.log('📍 [ANON-MIGRATION] No anonymous user to migrate');
    return;
  }

  try {
    console.log(`🔄 [ANON-MIGRATION] Starting migration from ${anonUserId} to ${clerkUserId}`);

    const response = await fetch('/api/migrate-anonymous-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        anonUserId,
        clerkUserId
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`Migration failed: ${response.statusText}${errorData?.details ? ` - ${errorData.details}` : ''}`);
    }

    const result = await response.json();

    // Handle successful migration or graceful degradation
    if (result.success) {
      // Clear the anonymous user cookie after successful migration (or graceful degradation)
      clearAnonymousUserId();

      if (result.warning) {
        console.log(`⚠️ [ANON-MIGRATION] Migration completed with warning: ${result.warning}`);
      } else {
        console.log('✅ [ANON-MIGRATION] Data migration completed successfully');
      }
    } else {
      throw new Error(result.error || 'Unknown migration error');
    }

  } catch (error) {
    console.error('❌ [ANON-MIGRATION] Failed to migrate anonymous data:', error);
    throw error;
  }
}
