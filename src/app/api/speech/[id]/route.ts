import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { getPreviewText } from "@/lib/speechPreview";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  console.log('🔍 [SPEECH API] Fetching speech for edit:', resolvedParams.id);

  try {
    // Check auth (optional — anonymous users can fetch a preview)
    let userId: string | null = null;
    try {
      const authResult = await auth();
      userId = authResult.userId;
    } catch {
      // Not authenticated
    }

    console.log(`📚 [SPEECH API] Fetching speech ${resolvedParams.id} for user: ${userId || 'anonymous'}`);

    // Find the speech by ID
    const speech = await prisma.speech.findUnique({
      where: { id: resolvedParams.id },
      include: {
        versions: {
          orderBy: { versionNumber: 'asc' },
          select: { id: true, content: true, versionNumber: true, createdAt: true },
        },
      },
    });

    if (!speech) {
      console.log('❌ [SPEECH API] Speech not found');
      return NextResponse.json(
        { error: "Speech not found" },
        { status: 404 }
      );
    }

    // Authenticated user who owns the speech — return full data
    if (userId && speech.userId === userId) {
      console.log(`✅ [SPEECH API] Full access — speech owner`);
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
        isFinal: speech.isFinal,
        createdAt: speech.createdAt,
        updatedAt: speech.updatedAt,
        versions: speech.versions,
      });
    }

    // Anonymous or non-owner — return preview only (conversion flow)
    console.log(`✅ [SPEECH API] Preview access — anonymous/non-owner`);
    const previewContent = getPreviewText(speech.content);
    return NextResponse.json({
      id: speech.id,
      title: speech.title,
      content: previewContent,
      role: speech.role,
      tone: speech.tone,
      length: speech.length,
      wordCount: speech.wordCount,
      estimatedTime: speech.estimatedTime,
      formData: speech.formData,
      regenCount: speech.regenCount,
      isCompleted: speech.isCompleted,
      isFinal: speech.isFinal,
      createdAt: speech.createdAt,
      updatedAt: speech.updatedAt,
      versions: [],
      isPreview: true,
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
