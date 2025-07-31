import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { migrateAnonymousUserData } from '@/lib/anonymousUser';

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 [MIGRATE-API] Migration request received');

    // Get the authenticated user with Clerk middleware error handling
    let clerkUserId: string | null = null;

    try {
      const authResult = await auth();
      clerkUserId = authResult.userId;
    } catch (clerkError) {
      console.error('⚠️ [MIGRATE-API] Clerk auth error:', clerkError);

      // Check if it's a Clerk middleware issue
      if (clerkError instanceof Error && clerkError.message.includes('clerkMiddleware')) {
        console.log('🔍 [MIGRATE-API] Clerk middleware issue detected - graceful degradation');

        // Return success to prevent infinite retries - this is graceful degradation
        return NextResponse.json({
          success: true,
          message: 'Migration skipped due to authentication configuration - user can proceed normally',
          warning: 'Authentication middleware unavailable in current environment'
        });
      }

      // Re-throw other Clerk errors
      throw clerkError;
    }

    if (!clerkUserId) {
      console.log('❌ [MIGRATE-API] No authenticated user found');
      return NextResponse.json(
        { error: 'User not authenticated' },
        { status: 401 }
      );
    }

    const { anonUserId } = await request.json();

    if (!anonUserId) {
      console.log('❌ [MIGRATE-API] No anonymous user ID provided');
      return NextResponse.json(
        { error: 'Anonymous user ID required' },
        { status: 400 }
      );
    }

    console.log(`🔄 [MIGRATE-API] Starting migration from ${anonUserId} to ${clerkUserId}`);

    // Perform the migration with better error handling
    try {
      await migrateAnonymousUserData(anonUserId, clerkUserId);
    } catch (migrationError) {
      console.error('❌ [MIGRATE-API] Migration function failed:', migrationError);

      // Check if it's a database connection error
      if (migrationError instanceof Error) {
        const errorMessage = migrationError.message.toLowerCase();

        // Common database connection errors
        if (errorMessage.includes('enoent') ||
            errorMessage.includes('database') ||
            errorMessage.includes('connection') ||
            errorMessage.includes('sqlite') ||
            errorMessage.includes('prisma')) {

          console.log('🔍 [MIGRATE-API] Database connection issue detected, migration skipped');

          // Return success to prevent infinite retries - this is graceful degradation
          return NextResponse.json({
            success: true,
            message: 'Migration skipped due to database connection - user can proceed normally',
            warning: 'Database migration unavailable in current environment'
          });
        }
      }

      // Re-throw for other types of errors
      throw migrationError;
    }

    console.log('✅ [MIGRATE-API] Migration completed successfully');

    return NextResponse.json({
      success: true,
      message: 'Data migration completed successfully'
    });

  } catch (error) {
    console.error('❌ [MIGRATE-API] Migration failed:', error);

    // Provide more specific error information
    const errorMessage = 'Migration failed';
    const statusCode = 500;

    if (error instanceof Error) {
      const errorText = error.message.toLowerCase();

      // Check for Clerk-related errors
      if (errorText.includes('clerk') ||
          errorText.includes('middleware') ||
          errorText.includes('auth()')) {

        console.log('⚠️ [MIGRATE-API] Clerk configuration issue - returning success to prevent loops');
        return NextResponse.json({
          success: true,
          message: 'Migration skipped - authentication configuration issue',
          warning: 'User can proceed without migration'
        });
      }

      // Database-related errors should be treated as warnings, not failures
      if (errorText.includes('database') ||
          errorText.includes('prisma') ||
          errorText.includes('sqlite') ||
          errorText.includes('enoent')) {

        console.log('⚠️ [MIGRATE-API] Database issue - returning success to prevent loops');
        return NextResponse.json({
          success: true,
          message: 'Migration skipped - database unavailable',
          warning: 'User can proceed without migration'
        });
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: statusCode }
    );
  }
}
