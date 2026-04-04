import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { sendConfirmSubscription, sendDiscountEmail } from "@/lib/email";

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
  const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
  let email1Count = 0;
  let email2Count = 0;

  try {
    // ── Email 1: Confirm subscription ──
    // Leads created >2 hours ago, not yet sent email 1, not paid, not unsubscribed
    const leadsForEmail1 = await prisma.emailLead.findMany({
      where: {
        hasPaid: false,
        unsubscribed: false,
        email1SentAt: null,
        createdAt: { lte: twoHoursAgo },
      },
      take: 50, // batch size
    });

    for (const lead of leadsForEmail1) {
      try {
        await sendConfirmSubscription(lead.email, lead.name, lead.id);
        await prisma.emailLead.update({
          where: { id: lead.id },
          data: { email1SentAt: now },
        });
        email1Count++;
      } catch (err) {
        console.error(`[CRON] Failed to send email 1 to ${lead.email}:`, err);
      }
    }

    // ── Email 2: Discount code ──
    // Confirmed >2 hours ago, email 1 sent, email 2 not yet sent, not paid
    const twoHoursAfterConfirm = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    const leadsForEmail2 = await prisma.emailLead.findMany({
      where: {
        hasPaid: false,
        unsubscribed: false,
        confirmed: true,
        confirmedAt: { lte: twoHoursAfterConfirm },
        email1SentAt: { not: null },
        email2SentAt: null,
      },
      take: 50,
    });

    for (const lead of leadsForEmail2) {
      try {
        // Create a Stripe coupon for this lead (20% off, 24hr expiry, single use)
        const coupon = await stripe.coupons.create({
          percent_off: 20,
          duration: 'once',
          max_redemptions: 1,
          redeem_by: Math.floor((now.getTime() + 24 * 60 * 60 * 1000) / 1000),
          name: `20% Off - ${lead.email}`,
        });

        // Create a promotion code from the coupon
        const promoCode = await stripe.promotionCodes.create({
          coupon: coupon.id,
          max_redemptions: 1,
        });

        const code = promoCode.code;

        await sendDiscountEmail(lead.email, lead.name, code);
        await prisma.emailLead.update({
          where: { id: lead.id },
          data: { email2SentAt: now, discountCode: code },
        });
        email2Count++;
      } catch (err) {
        console.error(`[CRON] Failed to send email 2 to ${lead.email}:`, err);
      }
    }

    return NextResponse.json({
      ok: true,
      email1Sent: email1Count,
      email2Sent: email2Count,
    });
  } catch (error) {
    console.error("[CRON] Error processing email leads:", error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
