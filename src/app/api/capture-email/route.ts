import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, name, role } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Upsert — don't overwrite if they've already confirmed or paid
    await prisma.emailLead.upsert({
      where: { email: normalizedEmail },
      create: {
        email: normalizedEmail,
        name: name || null,
        role: role || null,
      },
      update: {
        name: name || undefined,
        role: role || undefined,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CAPTURE-EMAIL] Error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
