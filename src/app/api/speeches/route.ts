import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Find speeches by Clerk user ID
    const speeches = await prisma.speech.findMany({
      where: { 
        userId: userId 
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(speeches);
  } catch (error) {
    console.error("Error fetching speeches:", error);
    return NextResponse.json(
      { error: "Failed to fetch speeches" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { content, role, occasionType, tone, length } = body;

    if (!content) {
      return NextResponse.json(
        { error: "Speech content is required" },
        { status: 400 }
      );
    }

    // Create new speech with Clerk user ID
    const speech = await prisma.speech.create({
      data: {
        userId: userId,
        content,
        role: role || "best-man",
        occasionType: occasionType || "wedding",
        tone: tone || "heartfelt",
        length: length || "medium",
      },
    });

    return NextResponse.json(speech, { status: 201 });
  } catch (error) {
    console.error("Error creating speech:", error);
    return NextResponse.json(
      { error: "Failed to create speech" },
      { status: 500 }
    );
  }
}
EOF  
cd /home/project && cd nail-the-speech && cat > src/app/api/speeches/route.ts << 'EOF'
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Find speeches by Clerk user ID
    const speeches = await prisma.speech.findMany({
      where: { 
        userId: userId 
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(speeches);
  } catch (error) {
    console.error("Error fetching speeches:", error);
    return NextResponse.json(
      { error: "Failed to fetch speeches" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { content, role, occasionType, tone, length } = body;

    if (!content) {
      return NextResponse.json(
        { error: "Speech content is required" },
        { status: 400 }
      );
    }

    // Create new speech with Clerk user ID
    const speech = await prisma.speech.create({
      data: {
        userId: userId,
        content,
        role: role || "best-man",
        occasionType: occasionType || "wedding",
        tone: tone || "heartfelt",
        length: length || "medium",
      },
    });

    return NextResponse.json(speech, { status: 201 });
  } catch (error) {
    console.error("Error creating speech:", error);
    return NextResponse.json(
      { error: "Failed to create speech" },
      { status: 500 }
    );
  }
}
