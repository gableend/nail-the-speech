'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { migrateAnonymousData, getAnonymousUserId, clearAnonymousUserId } from '@/lib/clientAnonymousUser';

interface AuthSyncHandlerProps {
  children: React.ReactNode;
}

interface DebugInfo {
  timestamp: string;
  loadingTime: string;
  isLoaded: boolean;
  isSignedIn: boolean;
  hasUser: boolean;
  userId: string;
  userEmail: string;
  isMigrating: boolean;
  migrationComplete: boolean;
  showSyncMessage: boolean;
  migrationAttempts: number;
  emergencyBypass: boolean;
  pathname: string;
  anonUserId: string | null;
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

function setMigrationStatus(userId: string, attempts: number, failed: boolean = false) {
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
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    timestamp: '',
    loadingTime: '',
    isLoaded: false,
    isSignedIn: false,
    hasUser: false,
    userId: '',
    userEmail: '',
    isMigrating: false,
    migrationComplete: false,
    showSyncMessage: false,
    migrationAttempts: 0,
    emergencyBypass: false,
    pathname: '',
    anonUserId: null,
  });

  useEffect(() => {
    // COMPREHENSIVE DEBUG LOGGING
    const currentTime = Date.now();
    const loadingTime = currentTime - loadingStartTime;

    const debugData: DebugInfo = {
      timestamp: new Date().toISOString(),
      loadingTime: `${loadingTime}ms`,
      isLoaded,
      isSignedIn,
      hasUser: !!user,
      userId: user?.id || 'null',
      userEmail: user?.emailAddresses?.[0]?.emailAddress || 'null',
      isMigrating,
      migrationComplete,
      showSyncMessage,
      migrationAttempts,
      emergencyBypass,
      pathname: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      anonUserId: getAnonymousUserId(),
    };

    setDebugInfo(debugData);

    console.log('🔍 [AUTH-SYNC-DEBUG]', {
      ...debugData,
      component: 'AuthSyncHandler useEffect'
    });

    const handleAuthSync = async () => {
      console.log('🔍 [AUTH-SYNC-DEBUG] handleAuthSync called', {
        isLoaded,
        isSignedIn,
        hasUser: !!user,
        migrationComplete,
        isMigrating,
        emergencyBypass
      });

      // Wait for Clerk to fully load
      if (!isLoaded) {
        console.log('🔍 [AUTH-SYNC-DEBUG] Clerk not loaded yet, waiting...');
        return;
      }

      console.log('🔍 [AUTH-SYNC-DEBUG] Clerk is loaded!', {
        isSignedIn,
        hasUser: !!user,
        userId: user?.id
      });

      // If user is signed in and we haven't migrated yet
      if (isSignedIn && user && !migrationComplete && !isMigrating && !emergencyBypass) {
        console.log('🔍 [AUTH-SYNC-DEBUG] User is authenticated, checking for migration...');

        const anonUserId = getAnonymousUserId();
        console.log('🔍 [AUTH-SYNC-DEBUG] Anonymous user ID:', anonUserId);

        // Check if we have an anonymous user to migrate
        if (anonUserId) {
          console.log('🔍 [AUTH-SYNC-DEBUG] Found anonymous user to migrate');

          // Check migration status from session storage (emergency safety)
          const migrationStatus = getMigrationStatus(user.id);
          console.log('🔍 [AUTH-SYNC-DEBUG] Migration status:', migrationStatus);

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

            // Don't break the user experience - continue anyway
          } finally {
            setIsMigrating(false);
          }
        } else {
          console.log('🔍 [AUTH-SYNC-DEBUG] No anonymous user to migrate, setting migration complete');
          // No anonymous user to migrate
          setMigrationComplete(true);
        }
      } else {
        console.log('🔍 [AUTH-SYNC-DEBUG] Auth sync conditions not met:', {
          isSignedIn,
          hasUser: !!user,
          migrationComplete,
          isMigrating,
          emergencyBypass
        });
      }
    };

    // Show sync message only if there's a real problem - increased timeout and better detection
    const syncTimeout = setTimeout(() => {
      const loadingTime = Date.now() - loadingStartTime;

      console.log('🔍 [AUTH-SYNC-DEBUG] Sync timeout triggered', {
        loadingTime,
        isLoaded,
        isMigrating,
        showSyncMessage
      });

      // Only show sync message if:
      // 1. Clerk hasn't loaded after 5 seconds (was 2 seconds)
      // 2. AND we're not currently migrating
      // 3. AND we haven't already shown the message
      if (!isLoaded && !isMigrating && !showSyncMessage && loadingTime > 5000) {
        console.log('⚠️ [AUTH-SYNC] Clerk taking longer than expected to load, showing sync message');
        setShowSyncMessage(true);
      } else {
        console.log('🔍 [AUTH-SYNC-DEBUG] Not showing sync message:', {
          isLoaded,
          isMigrating,
          showSyncMessage,
          loadingTime
        });
      }
    }, 5000); // Increased from 2000ms to 5000ms

    // Hide sync message once loaded
    if (isLoaded && showSyncMessage) {
      console.log('🔍 [AUTH-SYNC-DEBUG] Hiding sync message - Clerk is now loaded');
      setShowSyncMessage(false);
    }

    handleAuthSync();

    return () => clearTimeout(syncTimeout);
  }, [isLoaded, isSignedIn, user, migrationComplete, isMigrating, showSyncMessage, migrationAttempts, emergencyBypass, loadingStartTime]);

  // Show sync message only if Clerk is really having problems
  if (showSyncMessage && !isLoaded && !isMigrating) {
    console.log('🔍 [AUTH-SYNC-DEBUG] Rendering sync message screen');

    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#da5389] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#181615] mb-2">
            Authentication Sync Issue
          </h2>
          <p className="text-[#8f867e] mb-4">
            Your account was created successfully, but there's a brief sync delay. Please try signing in again.
          </p>

          {/* DEBUG INFO FOR TROUBLESHOOTING */}
          <details className="mb-4 text-left bg-gray-100 p-3 rounded text-xs">
            <summary className="cursor-pointer font-medium">Debug Info (click to expand)</summary>
            <pre className="mt-2 text-xs overflow-auto">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </details>

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#da5389] hover:bg-[#da5389]/90 text-white px-6 py-3 rounded-full font-medium w-full"
            >
              Refresh & Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="text-[#8f867e] hover:text-[#da5389] px-6 py-2 rounded-full font-medium w-full"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => {
                setShowSyncMessage(false);
                setEmergencyBypass(true);
                setMigrationComplete(true);
              }}
              className="text-red-600 hover:text-red-800 px-6 py-2 rounded-full font-medium w-full text-sm"
            >
              Skip Sync & Continue (Debug)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show migration progress if migrating
  if (isMigrating) {
    console.log('🔍 [AUTH-SYNC-DEBUG] Rendering migration screen');

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

  console.log('🔍 [AUTH-SYNC-DEBUG] Rendering normal children');

  // Render children normally
  return <>{children}</>;
}
