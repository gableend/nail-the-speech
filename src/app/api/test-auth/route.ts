import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('🔍 [TEST-AUTH] API endpoint called');

  try {
    // Check environment variables first
    const hasSecretKey = !!process.env.CLERK_SECRET_KEY;
    const hasPublishableKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

    console.log('🔍 [TEST-AUTH] Environment check:', {
      hasSecretKey,
      hasPublishableKey,
      secretKeyLength: process.env.CLERK_SECRET_KEY?.length || 0,
      publishableKeyLength: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.length || 0
    });

    if (!hasSecretKey) {
      return NextResponse.json({
        success: false,
        error: 'CLERK_SECRET_KEY missing',
        hasSecretKey,
        hasPublishableKey
      }, { status: 500 });
    }

    // Try server-side auth
    console.log('🔍 [TEST-AUTH] Attempting auth() call...');
    const { userId } = await auth();

    console.log('🔍 [TEST-AUTH] Auth result:', {
      hasUserId: !!userId,
      userIdLength: userId?.length || 0
    });

    return NextResponse.json({
      success: true,
      hasUserId: !!userId,
      userId: userId || null,
      hasSecretKey,
      hasPublishableKey
    });

  } catch (error) {
    console.error('❌ [TEST-AUTH] Auth failed:', error);

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorName: error instanceof Error ? error.name : 'Unknown',
      hasSecretKey: !!process.env.CLERK_SECRET_KEY,
      hasPublishableKey: !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    }, { status: 500 });
  }
}
