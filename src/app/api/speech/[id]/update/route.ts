import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log('🔄 [SPEECH UPDATE API] Starting speech update...');

  try {
    const resolvedParams = await params;
    const { customTitle, isFinal, content, wordCount: clientWordCount } = await request.json();

    // Check auth
    const authResult = await auth();
    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [SPEECH UPDATE API] No userId found');
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`🔄 [SPEECH UPDATE API] Updating speech ${resolvedParams.id} for user: ${userId}`);

    // Validate input
    if (customTitle !== undefined && typeof customTitle !== 'string') {
      return NextResponse.json(
        { error: "Invalid customTitle - must be a string" },
        { status: 400 }
      );
    }

    if (isFinal !== undefined && typeof isFinal !== 'boolean') {
      return NextResponse.json(
        { error: "Invalid isFinal - must be a boolean" },
        { status: 400 }
      );
    }

    // Build update data
    const updateData: { customTitle?: string | null; isFinal?: boolean; content?: string; wordCount?: number; estimatedTime?: number } = {};
    if (customTitle !== undefined) {
      updateData.customTitle = customTitle.trim() || null;
    }
    if (isFinal !== undefined) {
      updateData.isFinal = isFinal;
    }
    if (content !== undefined && typeof content === 'string') {
      updateData.content = content;
      const wc = clientWordCount || content.split(/\s+/).filter((w: string) => w.length > 0).length;
      updateData.wordCount = wc;
      updateData.estimatedTime = Math.ceil(wc / 150);
    }

    // Update the speech
    const updatedSpeech = await prisma.speech.updateMany({
      where: {
        id: resolvedParams.id,
        userId: userId // Ensure user can only update their own speeches
      },
      data: updateData
    });

    // If content was updated, create a version entry
    if (content !== undefined && updatedSpeech.count > 0) {
      try {
        const maxVersion = await prisma.speechVersion.aggregate({
          where: { speechId: resolvedParams.id },
          _max: { versionNumber: true },
        });
        const nextVersion = (maxVersion._max.versionNumber ?? 0) + 1;
        await prisma.speechVersion.create({
          data: { speechId: resolvedParams.id, content, versionNumber: nextVersion },
        });
        console.log(`📚 [SPEECH UPDATE API] Created version ${nextVersion} for manual edit`);
      } catch (versionError) {
        console.error('⚠️ [SPEECH UPDATE API] Failed to create version:', versionError);
      }
    }

    if (updatedSpeech.count === 0) {
      console.log('❌ [SPEECH UPDATE API] Speech not found or unauthorized');
      return NextResponse.json(
        { error: "Speech not found" },
        { status: 404 }
      );
    }

    console.log('✅ [SPEECH UPDATE API] Speech updated successfully');

    return NextResponse.json({
      success: true,
      message: "Speech updated successfully"
    });

  } catch (error) {
    console.error("💥 [SPEECH UPDATE API] Error updating speech:", error);
    return NextResponse.json(
      {
        error: "Failed to update speech",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
