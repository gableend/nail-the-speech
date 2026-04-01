import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  console.log('🔍 [SPEECH API] Fetching speech for edit:', resolvedParams.id);

  try {
    // Check auth
    const authResult = await auth();
    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [SPEECH API] No userId found');
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`📚 [SPEECH API] Fetching speech ${resolvedParams.id} for user: ${userId}`);

    // Find the speech with version history
    const speech = await prisma.speech.findFirst({
      where: {
        id: resolvedParams.id,
        userId: userId // Ensure user can only access their own speeches
      },
      include: {
        versions: {
          orderBy: { versionNumber: 'asc' },
          select: { id: true, content: true, versionNumber: true, createdAt: true },
        },
      },
    });

    if (!speech) {
      console.log('❌ [SPEECH API] Speech not found or unauthorized');
      return NextResponse.json(
        { error: "Speech not found" },
        { status: 404 }
      );
    }

    console.log(`✅ [SPEECH API] Speech found with ${speech.versions.length} versions`);

    return NextResponse.json({
      id: speech.id,
      title: speech.title,
      content: speech.content,
      role: speech.role,
      tone: speech.tone,
      length: speech.length,
      wordCount: speech.wordCount,
      estimatedTime: speech.estimatedTime,
      formData: speech.formData,
      regenCount: speech.regenCount,
      isCompleted: speech.isCompleted,
      createdAt: speech.createdAt,
      updatedAt: speech.updatedAt,
      versions: speech.versions,
    });

  } catch (error) {
    console.error("💥 [SPEECH API] Error fetching speech:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch speech",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
