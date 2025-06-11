import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const speech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId, // Ensure user can only access their own speeches
      },
    });

    if (!speech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    return NextResponse.json(speech);
  } catch (error) {
    console.error("Error fetching speech:", error);
    return NextResponse.json(
      { error: "Failed to fetch speech" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { content, role, occasionType, tone, length } = body;

    // First, verify the speech belongs to the user
    const existingSpeech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId,
      },
    });

    if (!existingSpeech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    // Update the speech
    const updatedSpeech = await prisma.speech.update({
      where: { id: params.id },
      data: {
        content,
        role,
        occasionType,
        tone,
        length,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedSpeech);
  } catch (error) {
    console.error("Error updating speech:", error);
    return NextResponse.json(
      { error: "Failed to update speech" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // First, verify the speech belongs to the user
    const existingSpeech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId,
      },
    });

    if (!existingSpeech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    // Delete the speech
    await prisma.speech.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Speech deleted successfully" });
  } catch (error) {
    console.error("Error deleting speech:", error);
    return NextResponse.json(
      { error: "Failed to delete speech" },
      { status: 500 }
    );
  }
}
EOF  
cd /home/project && cd nail-the-speech && cat > src/app/api/speeches/[id]/route.ts << 'EOF'
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const speech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId, // Ensure user can only access their own speeches
      },
    });

    if (!speech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    return NextResponse.json(speech);
  } catch (error) {
    console.error("Error fetching speech:", error);
    return NextResponse.json(
      { error: "Failed to fetch speech" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { content, role, occasionType, tone, length } = body;

    // First, verify the speech belongs to the user
    const existingSpeech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId,
      },
    });

    if (!existingSpeech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    // Update the speech
    const updatedSpeech = await prisma.speech.update({
      where: { id: params.id },
      data: {
        content,
        role,
        occasionType,
        tone,
        length,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedSpeech);
  } catch (error) {
    console.error("Error updating speech:", error);
    return NextResponse.json(
      { error: "Failed to update speech" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // First, verify the speech belongs to the user
    const existingSpeech = await prisma.speech.findFirst({
      where: {
        id: params.id,
        userId: userId,
      },
    });

    if (!existingSpeech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    // Delete the speech
    await prisma.speech.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Speech deleted successfully" });
  } catch (error) {
    console.error("Error deleting speech:", error);
    return NextResponse.json(
      { error: "Failed to delete speech" },
      { status: 500 }
    );
  }
}
