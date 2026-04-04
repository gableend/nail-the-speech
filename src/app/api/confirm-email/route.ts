import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.redirect('https://www.nailthespeech.com/generator');
  }

  try {
    await prisma.emailLead.update({
      where: { id },
      data: {
        confirmed: true,
        confirmedAt: new Date(),
      },
    });
  } catch {
    // Lead might not exist — still redirect gracefully
  }

  // Redirect to generator with a thank-you flag
  return NextResponse.redirect('https://www.nailthespeech.com/generator?subscribed=true');
}
