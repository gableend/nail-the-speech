'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
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
      // Reset if more than 24 hours passed
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
    const status = {
      attempts,
      lastAttempt: Date.now(),
      failed
    };
    sessionStorage.setItem(`${MIGRATION_STORAGE_KEY}_${userId}`, JSON.stringify(status));
  } catch (error) {
    console.error('Error saving migration status:', error);
  }
}

export default function AuthSyncHandler({ children }: AuthSyncHandlerProps) {
  const { user, isLoaded, isSignedIn } = useUser();
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [showSyncMessage, setShowSyncMessage] = useState(false);
  const [migrationAttempts, setMigrationAttempts] = useState(0);
  const [emergencyBypass, setEmergencyBypass] = useState(false);
  const [loadingStartTime] = useState(Date.now());

  useEffect(() => {
    const handleAuthSync = async () => {
      // Wait for Clerk to fully load
      if (!isLoaded) return;

      // If user is signed in and we haven't migrated yet
      if (isSignedIn && user && !migrationComplete && !isMigrating && !emergencyBypass) {
        const anonUserId = getAnonymousUserId();

        // Check if we have an anonymous user to migrate
        if (anonUserId) {
          // Check migration status from session storage (emergency safety)
          const migrationStatus = getMigrationStatus(user.id);

          // Emergency bypass: if too many attempts or marked as failed, skip migration
          if (migrationStatus.attempts >= MAX_DAILY_ATTEMPTS || migrationStatus.failed) {
            console.log('⚠️ [AUTH-SYNC] Emergency bypass activated - clearing anonymous data to prevent loops');
            clearAnonymousUserId();
            setEmergencyBypass(true);
            setMigrationComplete(true);
            return;
          }

          // Prevent infinite retries - max 3 attempts in this session
          if (migrationAttempts >= 3) {
            console.log('⚠️ [AUTH-SYNC] Maximum session attempts reached, activating emergency bypass');
            clearAnonymousUserId();
            setMigrationStatus(user.id, migrationStatus.attempts + 1, true);
            setEmergencyBypass(true);
            setMigrationComplete(true);
            return;
          }

          console.log(`🔄 [AUTH-SYNC] Starting data migration attempt ${migrationAttempts + 1}/3`);
          setIsMigrating(true);
          setMigrationAttempts(prev => prev + 1);

          try {
            await migrateAnonymousData(user.id);
            setMigrationComplete(true);
            setMigrationStatus(user.id, migrationStatus.attempts + 1, false);
            console.log('✅ [AUTH-SYNC] Data migration completed successfully');
          } catch (error) {
            console.error(`❌ [AUTH-SYNC] Data migration failed (attempt ${migrationAttempts + 1}/3):`, error);

            // Update migration status
            setMigrationStatus(user.id, migrationStatus.attempts + 1, true);

            // If this was the final attempt, clear the cookie to prevent loops
            if (migrationAttempts >= 2) {
              console.log('⚠️ [AUTH-SYNC] All session attempts failed, activating emergency bypass');
              clearAnonymousUserId();
              setEmergencyBypass(true);
              setMigrationComplete(true);
            }
          } finally {
            setIsMigrating(false);
          }
        } else {
          // No anonymous user to migrate
          setMigrationComplete(true);
        }
      }
    };

    // Show sync message only if there's a real problem
    const syncTimeout = setTimeout(() => {
      const loadingTime = Date.now() - loadingStartTime;

      // Only show sync message if Clerk hasn't loaded after 10 seconds (increased from 5)
      if (!isLoaded && !isMigrating && !showSyncMessage && loadingTime > 10000) {
        console.log('⚠️ [AUTH-SYNC] Clerk taking exceptionally long to load, showing sync message');
        setShowSyncMessage(true);
      }
    }, 10000); // Increased to 10 seconds to reduce false positives

    // Hide sync message once loaded
    if (isLoaded && showSyncMessage) {
      setShowSyncMessage(false);
    }

    handleAuthSync();

    return () => clearTimeout(syncTimeout);
  }, [isLoaded, isSignedIn, user, migrationComplete, isMigrating, showSyncMessage, migrationAttempts, emergencyBypass, loadingStartTime]);

  // Show sync message only if Clerk is really having problems
  if (showSyncMessage && !isLoaded && !isMigrating) {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#da5389] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#181615] mb-2">
            Authentication Taking Longer Than Expected
          </h2>
          <p className="text-[#8f867e] mb-4">
            Please wait a moment or try refreshing the page.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#da5389] hover:bg-[#da5389]/90 text-white px-6 py-3 rounded-full font-medium w-full"
            >
              Refresh Page
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="text-[#8f867e] hover:text-[#da5389] px-6 py-2 rounded-full font-medium w-full"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show migration progress if migrating
  if (isMigrating) {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#da5389] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#181615] mb-2">
            🔄 Syncing Your Data
          </h2>
          <p className="text-[#8f867e]">
            We're transferring your speech drafts to your account{migrationAttempts > 1 && ` (attempt ${migrationAttempts}/3)`}...
          </p>
          {migrationAttempts > 1 && (
            <button
              onClick={() => {
                clearAnonymousUserId();
                setEmergencyBypass(true);
                setMigrationComplete(true);
                setIsMigrating(false);
              }}
              className="mt-4 text-[#da5389] hover:underline text-sm"
            >
              Skip migration and continue
            </button>
          )}
        </div>
      </div>
    );
  }

  // Render children normally
  return <>{children}</>;
}
