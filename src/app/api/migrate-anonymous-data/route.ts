import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 [MIGRATE-API] Migration request received');

    let clerkUserId: string | null = null;
    try {
      const authResult = await auth();
      clerkUserId = authResult.userId;
    } catch (clerkError) {
      console.error('⚠️ [MIGRATE-API] Clerk auth error:', clerkError);
      return NextResponse.json({ success: true, warning: 'Auth unavailable' });
    }

    if (!clerkUserId) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const { anonUserId } = await request.json();
    if (!anonUserId) {
      return NextResponse.json({ error: 'Anonymous user ID required' }, { status: 400 });
    }

    console.log(`🔄 [MIGRATE-API] Migrating speeches from anonUserId=${anonUserId} to userId=${clerkUserId}`);

    // Simple updateMany — no FK constraint, just reassign speeches
    const result = await prisma.speech.updateMany({
      where: { anonUserId, userId: null },
      data: { userId: clerkUserId, anonUserId: null },
    });

    console.log(`✅ [MIGRATE-API] Migrated ${result.count} speeches`);

    return NextResponse.json({
      success: true,
      speechesMigrated: result.count,
    });
  } catch (error) {
    console.error('❌ [MIGRATE-API] Migration failed:', error);
    return NextResponse.json({
      success: true,
      warning: 'Migration failed but user can proceed',
      speechesMigrated: 0,
    });
  }
}
