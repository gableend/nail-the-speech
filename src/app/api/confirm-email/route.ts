import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const speechId = searchParams.get('speechId');
  const discountCode = searchParams.get('code');

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

  // Build redirect URL with speechId and discount code if available
  const params = new URLSearchParams();
  if (speechId) params.set('speechId', speechId);
  if (discountCode) params.set('discount', discountCode);
  params.set('subscribed', 'true');

  return NextResponse.redirect(`https://www.nailthespeech.com/generator?${params.toString()}`);
}
