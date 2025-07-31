import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  console.log('🔍 [USER SPEECHES API] Starting API call...');

  try {
    // Check auth first
    console.log('🔍 [USER SPEECHES API] Attempting auth()...');
    let authResult: any;
    try {
      authResult = await auth();
      console.log('🔍 [USER SPEECHES API] Auth result:', {
        hasUserId: !!authResult.userId,
        userIdLength: authResult.userId?.length || 0
      });
    } catch (authError) {
      console.error('❌ [USER SPEECHES API] Auth failed:', authError);
      return NextResponse.json(
        { error: "Authentication failed", details: authError instanceof Error ? authError.message : 'Unknown auth error' },
        { status: 401 }
      );
    }

    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [USER SPEECHES API] No userId found');
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`📚 [USER SPEECHES API] Fetching speeches for user: ${userId}`);

    // Check database connection
    console.log('🔍 [USER SPEECHES API] Testing database connection...');
    try {
      await prisma.$connect();
      console.log('✅ [USER SPEECHES API] Database connected successfully');
    } catch (dbError) {
      console.error('❌ [USER SPEECHES API] Database connection failed:', dbError);
      return NextResponse.json(
        { error: "Database connection failed", details: dbError instanceof Error ? dbError.message : 'Unknown DB error' },
        { status: 500 }
      );
    }

    // Query speeches
    console.log('🔍 [USER SPEECHES API] Querying speeches...');
    const speeches = await prisma.speech.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        updatedAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        role: true,
        tone: true,
        length: true,
        wordCount: true,
        estimatedTime: true,
        isCompleted: true,
        createdAt: true,
        updatedAt: true
      }
    });

    // Add default values for potentially missing fields
    const speechesWithDefaults = speeches.map(speech => ({
      ...speech,
      customTitle: null,
      isFinal: false
    }));

    console.log(`✅ [USER SPEECHES API] Found ${speechesWithDefaults.length} speeches for user`);

    return NextResponse.json({ speeches: speechesWithDefaults });

  } catch (error) {
    console.error("💥 [USER SPEECHES API] Unexpected error:", {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : 'No stack trace',
      name: error instanceof Error ? error.name : 'Unknown error type'
    });
    return NextResponse.json(
      {
        error: "Failed to fetch speeches",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
