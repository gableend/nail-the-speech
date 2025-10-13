import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST - Create new speech
export async function POST(request: Request) {
  console.log('🔍 [SPEECH API] Starting speech creation...');

  try {
    // Check auth first
    console.log('🔍 [SPEECH API] Attempting auth()...');
    let authResult: { userId: string | null };

    try {
      authResult = await auth();
      console.log('🔍 [SPEECH API] Auth result:', {
        hasUserId: !!authResult.userId,
        userIdLength: authResult.userId?.length || 0
      });
    } catch (authError: unknown) {
      console.error('❌ [SPEECH API] Auth failed:', authError);
      return NextResponse.json(
        { error: "Authentication failed", details: authError instanceof Error ? authError.message : 'Unknown auth error' },
        { status: 401 }
      );
    }

    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [SPEECH API] No userId found');
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content || !body.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Calculate estimated time (approx 150 words per minute)
    const wordCount = body.content.split(/\s+/).filter(Boolean).length;
    const estimatedTime = Math.ceil(wordCount / 150);

    // Create speech in database
    console.log(`📝 [SPEECH API] Creating speech for user: ${userId}`);
    const speech = await prisma.speech.create({
      data: {
        title: body.title,
        customTitle: body.customTitle || null,
        content: body.content,
        role: body.role,
        tone: body.tone || "balanced",
        length: body.length || "medium",
        wordCount,
        estimatedTime,
        formData: JSON.stringify(body.formData || {}),
        userId,
        isCompleted: true,
        isFinal: false,
      }
    });

    console.log(`✅ [SPEECH API] Speech created with ID: ${speech.id}`);

    return NextResponse.json({
      success: true,
      speech: {
        id: speech.id,
        title: speech.title,
        customTitle: speech.customTitle,
        role: speech.role,
        wordCount: speech.wordCount,
        estimatedTime: speech.estimatedTime,
        createdAt: speech.createdAt,
      }
    });

  } catch (error: unknown) {
    console.error("💥 [SPEECH API] Error creating speech:", error);
    return NextResponse.json(
      {
        error: "Failed to create speech",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET - List all speeches
export async function GET() {
  return NextResponse.json({
    error: "Use the /api/user-speeches endpoint to list speeches"
  }, { status: 400 });
}
