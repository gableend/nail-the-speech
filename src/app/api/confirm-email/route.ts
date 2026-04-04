import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const speechId = searchParams.get('speechId');

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

  // Redirect to generator — include speechId if available so they see their speech
  const redirectUrl = speechId
    ? `https://www.nailthespeech.com/generator?speechId=${speechId}&subscribed=true`
    : 'https://www.nailthespeech.com/generator?subscribed=true';
  return NextResponse.redirect(redirectUrl);
}
