import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  console.log('🔍 [DEBUG API] Starting diagnostic check...');

  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      DATABASE_URL_length: process.env.DATABASE_URL?.length || 0,
      DATABASE_URL_prefix: process.env.DATABASE_URL?.substring(0, 20) + '...',
      CLERK_SECRET_KEY: !!process.env.CLERK_SECRET_KEY,
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      NODE_ENV: process.env.NODE_ENV,
      NETLIFY: !!process.env.NETLIFY,
      BUILD_ID: process.env.BUILD_ID || 'unknown',
    };

    console.log('🔍 [DEBUG API] Environment check:', envCheck);

    // Check auth
    let authResult: { userId: string | null } | null = null;
    let authError: string | null = null;
    try {
      authResult = await auth();
      console.log('🔍 [DEBUG API] Auth check passed:', { hasUserId: !!authResult.userId });
    } catch (error: unknown) {
      authError = error instanceof Error ? error.message : 'Unknown auth error';
      console.error('❌ [DEBUG API] Auth failed:', authError);
    }

    // Check Prisma
    let prismaStatus = 'not-tested';
    let prismaError: string | null = null;
    try {
      // Try to import prisma dynamically
      const { prisma } = await import('@/lib/prisma');
      console.log('🔍 [DEBUG API] Prisma import successful');

      // Test basic connection
      await prisma.$connect();
      console.log('🔍 [DEBUG API] Prisma connection successful');

      // Try a simple query
      const result = await prisma.$queryRaw`SELECT 1 as test`;
      console.log('🔍 [DEBUG API] Prisma query test:', result);
      prismaStatus = 'connected';

      await prisma.$disconnect();
    } catch (error: unknown) {
      prismaError = error instanceof Error ? error.message : 'Unknown prisma error';
      prismaStatus = 'failed';
      console.error('❌ [DEBUG API] Prisma error:', prismaError);
    }

    const diagnostics = {
      timestamp: new Date().toISOString(),
      environment: envCheck,
      auth: {
        success: !!authResult,
        error: authError,
        userId: authResult?.userId || null,
      },
      database: {
        status: prismaStatus,
        error: prismaError,
      },
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        architecture: process.arch,
      }
    };

    console.log('✅ [DEBUG API] Diagnostic complete:', diagnostics);

    return NextResponse.json({
      success: true,
      diagnostics
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('💥 [DEBUG API] Diagnostic failed:', error);

    return NextResponse.json({
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
