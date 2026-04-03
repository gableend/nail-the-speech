'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState, useRef } from 'react';
import { migrateAnonymousData, getAnonymousUserId, clearAnonymousUserId } from '@/lib/clientAnonymousUser';

interface AuthSyncHandlerProps {
  children: React.ReactNode;
}

const MIGRATION_STORAGE_KEY = 'migration_status';
const MAX_DAILY_ATTEMPTS = 3;

function getMigrationStatus(userId: string) {
  if (typeof window === 'undefined') return { attempts: 0, lastAttempt: 0, failed: false };

  try {
    const stored = sessionStorage.getItem(`${MIGRATION_STORAGE_KEY}_${userId}`);
    if (stored) {
      const data = JSON.parse(stored);
      if (Date.now() - data.lastAttempt > 24 * 60 * 60 * 1000) {
        return { attempts: 0, lastAttempt: 0, failed: false };
      }
      return data;
    }
  } catch (error) {
    console.error('Error reading migration status:', error);
  }

  return { attempts: 0, lastAttempt: 0, failed: false };
}

function setMigrationStatus(userId: string, attempts: number, failed = false) {
  if (typeof window === 'undefined') return;

  try {
    sessionStorage.setItem(`${MIGRATION_STORAGE_KEY}_${userId}`, JSON.stringify({
      attempts,
      lastAttempt: Date.now(),
      failed
    }));
  } catch (error) {
    console.error('Error saving migration status:', error);
  }
}

/**
 * AuthSyncHandler runs auth migration in the background.
 * It NEVER blocks page rendering — children are always rendered immediately.
 */
export default function AuthSyncHandler({ children }: AuthSyncHandlerProps) {
  const { user, isLoaded, isSignedIn } = useUser();
  const [migrationComplete, setMigrationComplete] = useState(false);
  const migrationAttempts = useRef(0);
  const isMigrating = useRef(false);

  useEffect(() => {
    const handleAuthSync = async () => {
      if (!isLoaded) return;
      if (!isSignedIn || !user) return;
      if (migrationComplete || isMigrating.current) return;

      const anonUserId = getAnonymousUserId();

      if (anonUserId) {
        const migrationStatus = getMigrationStatus(user.id);

        // Emergency bypass: too many attempts
        if (migrationStatus.attempts >= MAX_DAILY_ATTEMPTS || migrationStatus.failed) {
          console.log('⚠️ [AUTH-SYNC] Emergency bypass — clearing anonymous data');
          clearAnonymousUserId();
          setMigrationComplete(true);
          return;
        }

        if (migrationAttempts.current >= 3) {
          console.log('⚠️ [AUTH-SYNC] Max session attempts reached, bypassing');
          clearAnonymousUserId();
          setMigrationStatus(user.id, migrationStatus.attempts + 1, true);
          setMigrationComplete(true);
          return;
        }

        const savedAnonId = getAnonymousUserId();
        console.log(`🔄 [AUTH-SYNC] Starting background migration attempt ${migrationAttempts.current + 1}/3`);
        isMigrating.current = true;
        migrationAttempts.current += 1;

        try {
          await migrateAnonymousData(user.id);
          setMigrationComplete(true);
          setMigrationStatus(user.id, migrationStatus.attempts + 1, false);
          console.log('✅ [AUTH-SYNC] Migration completed');
        } catch (error) {
          console.error(`❌ [AUTH-SYNC] Migration failed (attempt ${migrationAttempts.current}/3):`, error);
          setMigrationStatus(user.id, migrationStatus.attempts + 1, true);

          if (migrationAttempts.current >= 3) {
            clearAnonymousUserId();
            setMigrationComplete(true);
          }
        } finally {
          isMigrating.current = false;
        }

        // Claim pending payments in background
        try {
          const claimRes = await fetch('/api/claim-pending-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientAnonUserId: savedAnonId }),
          });
          const claimData = await claimRes.json();
          if (claimData.claimed) {
            console.log('✅ [AUTH-SYNC] Pending payment claimed — user upgraded to Pro');
          }
          if (claimData.speechesMigrated > 0) {
            console.log(`✅ [AUTH-SYNC] Migrated ${claimData.speechesMigrated} anonymous speeches`);
            clearAnonymousUserId();
          }
        } catch (claimError) {
          console.error('⚠️ [AUTH-SYNC] Claim error:', claimError);
        }
      } else {
        // No anonymous user — still check for pending payments
        setMigrationComplete(true);

        try {
          const claimRes = await fetch('/api/claim-pending-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientAnonUserId: null }),
          });
          const claimData = await claimRes.json();
          if (claimData.claimed) {
            console.log('✅ [AUTH-SYNC] Pending payment claimed — user upgraded to Pro');
          }
        } catch (claimError) {
          console.error('⚠️ [AUTH-SYNC] Failed to check pending payments:', claimError);
        }
      }
    };

    handleAuthSync();
  }, [isLoaded, isSignedIn, user, migrationComplete]);

  // Always render children immediately — never block the page
  return <>{children}</>;
}
