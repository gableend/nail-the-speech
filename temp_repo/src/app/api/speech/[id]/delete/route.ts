import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log('🗑️ [SPEECH DELETE API] Starting speech deletion...');

  try {
    const resolvedParams = await params;

    // Check auth
    const authResult = await auth();
    const { userId } = authResult;

    if (!userId) {
      console.log('❌ [SPEECH DELETE API] No userId found');
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`🗑️ [SPEECH DELETE API] Deleting speech ${resolvedParams.id} for user: ${userId}`);

    // Delete the speech (only if it belongs to the user)
    const deletedSpeech = await prisma.speech.deleteMany({
      where: {
        id: resolvedParams.id,
        userId: userId // Ensure user can only delete their own speeches
      }
    });

    if (deletedSpeech.count === 0) {
      console.log('❌ [SPEECH DELETE API] Speech not found or unauthorized');
      return NextResponse.json(
        { error: "Speech not found" },
        { status: 404 }
      );
    }

    console.log('✅ [SPEECH DELETE API] Speech deleted successfully');

    return NextResponse.json({
      success: true,
      message: "Speech deleted successfully"
    });

  } catch (error) {
    console.error("💥 [SPEECH DELETE API] Error deleting speech:", error);
    return NextResponse.json(
      {
        error: "Failed to delete speech",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
