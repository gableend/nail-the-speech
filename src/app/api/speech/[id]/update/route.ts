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
    const { customTitle, isFinal } = await request.json();

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
    const updateData: { customTitle?: string | null; isFinal?: boolean } = {};
    if (customTitle !== undefined) {
      updateData.customTitle = customTitle.trim() || null;
    }
    if (isFinal !== undefined) {
      updateData.isFinal = isFinal;
    }

    // Update the speech
    const updatedSpeech = await prisma.speech.updateMany({
      where: {
        id: resolvedParams.id,
        userId: userId // Ensure user can only update their own speeches
      },
      data: updateData
    });

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
