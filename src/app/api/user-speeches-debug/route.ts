import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const startTime = Date.now();
  console.log('🔍 [USER SPEECHES DEBUG] Starting API call...');

  try {
    // Step 1: Check auth
    console.log('🔍 [USER SPEECHES DEBUG] Step 1: Checking auth...');
    const authResult = await auth();
    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [USER SPEECHES DEBUG] No userId found');
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log('✅ [USER SPEECHES DEBUG] Auth successful');

    // Step 2: Test basic database connection
    console.log('🔍 [USER SPEECHES DEBUG] Step 2: Testing database connection...');
    await prisma.$connect();
    console.log('✅ [USER SPEECHES DEBUG] Database connected');

    // Step 3: Test user-specific count
    console.log('🔍 [USER SPEECHES DEBUG] Step 3: Testing user count query...');
    const userCount = await prisma.speech.count({
      where: { userId: userId }
    });
    console.log('✅ [USER SPEECHES DEBUG] User speech count:', userCount);

    // Step 4: Try full query
    console.log('🔍 [USER SPEECHES DEBUG] Step 4: Testing full query...');
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
        customTitle: true,
        role: true,
        tone: true,
        length: true,
        wordCount: true,
        estimatedTime: true,
        isCompleted: true,
        isFinal: true,
        createdAt: true,
        updatedAt: true
      }
    });

    console.log(`✅ [USER SPEECHES DEBUG] Found ${speeches.length} speeches`);

    const duration = Date.now() - startTime;
    await prisma.$disconnect();

    return NextResponse.json({
      success: true,
      debug: {
        duration,
        totalSpeeches: speeches.length,
        userCount,
        timestamp: new Date().toISOString()
      },
      speeches
    });

  } catch (error: unknown) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    console.error("💥 [USER SPEECHES DEBUG] Error:", {
      message: errorMessage,
      duration,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        debug: {
          duration,
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    );
  }
}
