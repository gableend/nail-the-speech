import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * TEMPORARY debug endpoint — remove after fixing migration.
 * Shows recent speeches and users in the DB.
 */
export async function GET() {
  try {
    const recentSpeeches = await prisma.speech.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        title: true,
        userId: true,
        anonUserId: true,
        createdAt: true,
        isCompleted: true,
      },
    });

    const pendingPayments = await prisma.pendingPayment.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        email: true,
        isProUser: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      recentSpeeches,
      pendingPayments,
      users,
      counts: {
        speeches: await prisma.speech.count(),
        pendingPayments: await prisma.pendingPayment.count(),
        users: await prisma.user.count(),
      },
    });
  } catch (error: unknown) {
    return NextResponse.json({
      error: "Debug query failed",
      details: error instanceof Error ? error.message : "Unknown",
    }, { status: 500 });
  }
}
