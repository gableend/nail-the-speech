import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`📚 [USER SPEECHES API] Fetching speeches for user: ${userId}`);

    const speeches = await prisma.speech.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        updatedAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        role: true,
        tone: true,
        length: true,
        wordCount: true,
        estimatedTime: true,
        isCompleted: true,
        createdAt: true,
        updatedAt: true
      }
    });

    console.log(`✅ [USER SPEECHES API] Found ${speeches.length} speeches for user`);

    return NextResponse.json({ speeches });

  } catch (error) {
    console.error("💥 [USER SPEECHES API] Error fetching user speeches:", error);
    return NextResponse.json(
      { error: "Failed to fetch speeches" },
      { status: 500 }
    );
  }
}
