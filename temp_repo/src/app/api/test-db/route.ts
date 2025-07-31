import { NextResponse } from "next/server";

export async function GET() {
  console.log('🧪 [DB TEST] Starting database test...');

  try {
    // Test 1: Check if Prisma can be imported
    console.log('🧪 [DB TEST] Step 1: Testing Prisma import...');
    const { prisma } = await import("@/lib/prisma");
    console.log('✅ [DB TEST] Prisma imported successfully');

    // Test 2: Check if we can connect to the database
    console.log('🧪 [DB TEST] Step 2: Testing database connection...');
    await prisma.$connect();
    console.log('✅ [DB TEST] Database connected successfully');

    // Test 3: Check if we can query the database
    console.log('🧪 [DB TEST] Step 3: Testing database query...');
    const speechCount = await prisma.speech.count();
    console.log(`✅ [DB TEST] Database query successful - found ${speechCount} speeches`);

    // Test 4: Check database file path
    console.log('🧪 [DB TEST] Step 4: Checking environment...');
    const dbUrl = process.env.DATABASE_URL || 'file:./dev.db';
    console.log(`🧪 [DB TEST] Database URL: ${dbUrl}`);
    console.log(`🧪 [DB TEST] Working directory: ${process.cwd()}`);
    console.log(`🧪 [DB TEST] Node environment: ${process.env.NODE_ENV}`);

    await prisma.$disconnect();

    return NextResponse.json({
      success: true,
      message: "Database test passed",
      data: {
        speechCount,
        dbUrl,
        workingDir: process.cwd(),
        nodeEnv: process.env.NODE_ENV
      }
    });

  } catch (error) {
    console.error('💥 [DB TEST] Database test failed:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : 'No stack trace',
      name: error instanceof Error ? error.name : 'Unknown error type'
    });

    return NextResponse.json({
      success: false,
      error: "Database test failed",
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
