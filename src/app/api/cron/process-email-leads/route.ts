import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { sendClaimSpeechEmail, sendDiscountReminderEmail } from "@/lib/email";

// Protect cron endpoint with a secret
function isAuthorized(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;
  return authHeader === `Bearer ${cronSecret}`;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  // Use short delays for testing: ?test=true uses 2 min instead of production delays
  const { searchParams } = new URL(request.url);
  const testMode = searchParams.get('test') === 'true';
  const email1Delay = testMode ? 2 * 60 * 1000 : 2 * 60 * 60 * 1000;       // 2 min vs 2 hours
  const email2Delay = testMode ? 2 * 60 * 1000 : 24 * 60 * 60 * 1000;      // 2 min vs 24 hours
  const email1Cutoff = new Date(now.getTime() - email1Delay);
  let email1Count = 0;
  let email2Count = 0;

  try {
    // ── Email 1: Claim speech + 20% off (also confirms subscription) ──
    // Leads created > delay ago, not yet sent email 1, not paid, not unsubscribed
    const leadsForEmail1 = await prisma.emailLead.findMany({
      where: {
        hasPaid: false,
        unsubscribed: false,
        email1SentAt: null,
        createdAt: { lte: email1Cutoff },
      },
      take: 50,
    });

    for (const lead of leadsForEmail1) {
      try {
        // Create a Stripe coupon (20% off, 48hr expiry to cover reminder window)
        const coupon = await stripe.coupons.create({
          percent_off: 20,
          duration: 'once',
          max_redemptions: 1,
          redeem_by: Math.floor((now.getTime() + 48 * 60 * 60 * 1000) / 1000),
          name: `20% Off - ${lead.email}`,
        });

        // Create a promotion code from the coupon
        const promoCode = await stripe.promotionCodes.create({
          coupon: coupon.id,
          max_redemptions: 1,
        });

        const code = promoCode.code;

        // Find the lead's most recent speech
        const latestSpeech = await prisma.speech.findFirst({
          where: { formData: { contains: lead.email } },
          orderBy: { createdAt: 'desc' },
          select: { id: true },
        });

        await sendClaimSpeechEmail(lead.email, lead.name, lead.id, code, latestSpeech?.id || null);
        await prisma.emailLead.update({
          where: { id: lead.id },
          data: { email1SentAt: now, discountCode: code },
        });
        email1Count++;
      } catch (err) {
        console.error(`[CRON] Failed to send email 1 to ${lead.email}:`, err);
      }
    }

    // ── Email 2: Discount expiring reminder ──
    // Email 1 sent > delay ago, confirmed (clicked email 1), email 2 not yet sent, not paid
    const email2Cutoff = new Date(now.getTime() - email2Delay);
    const leadsForEmail2 = await prisma.emailLead.findMany({
      where: {
        hasPaid: false,
        unsubscribed: false,
        confirmed: true,
        email1SentAt: { lte: email2Cutoff },
        email2SentAt: null,
        discountCode: { not: null },
      },
      take: 50,
    });

    for (const lead of leadsForEmail2) {
      try {
        // Find the lead's most recent speech
        const latestSpeech = await prisma.speech.findFirst({
          where: { formData: { contains: lead.email } },
          orderBy: { createdAt: 'desc' },
          select: { id: true },
        });

        await sendDiscountReminderEmail(lead.email, lead.name, lead.discountCode!, latestSpeech?.id || null);
        await prisma.emailLead.update({
          where: { id: lead.id },
          data: { email2SentAt: now },
        });
        email2Count++;
      } catch (err) {
        console.error(`[CRON] Failed to send email 2 to ${lead.email}:`, err);
      }
    }

    return NextResponse.json({
      ok: true,
      testMode,
      email1Sent: email1Count,
      email2Sent: email2Count,
    });
  } catch (error) {
    console.error("[CRON] Error processing email leads:", error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
