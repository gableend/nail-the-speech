import * as postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN || '');

const FROM_EMAIL = 'hello@nailthespeech.com';
const BASE_URL = 'https://www.nailthespeech.com';

function emailWrapper(content: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <span style="font-size: 36px;">🎤</span>
        <span style="font-size: 20px; font-weight: 700; color: #181615; vertical-align: middle; margin-left: 8px;">Nail The Speech</span>
      </div>
      ${content}
      <div style="border-top: 1px solid #e8e1d8; padding-top: 20px; margin-top: 32px; text-align: center;">
        <p style="color: #8f867e; font-size: 12px; margin: 0;">
          Questions? Reply to this email or contact us at
          <a href="mailto:hello@nailthespeech.com" style="color: #da5389;">hello@nailthespeech.com</a>
        </p>
        <p style="color: #c4bdb6; font-size: 11px; margin: 8px 0 0;">
          Nail The Speech &mdash; AI Wedding Speech Writer
        </p>
      </div>
    </div>
  `;
}

function ctaButton(text: string, url: string): string {
  return `<div style="text-align: center; margin: 28px 0;">
    <a href="${url}" style="display: inline-block; background: #da5389; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 15px;">${text}</a>
  </div>`;
}

// ── Payment confirmation ──────────────────────────────────

export async function sendPaymentConfirmation(email: string, expiresAt: Date) {
  const expiryDate = expiresAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  await client.sendEmail({
    From: FROM_EMAIL,
    To: email,
    Subject: 'Welcome to Nail The Speech Pro!',
    HtmlBody: emailWrapper(`
      <div style="text-align: center; margin-bottom: 24px;">
        <h1 style="font-size: 24px; color: #181615; margin: 0 0 4px;">You're all set!</h1>
        <p style="color: #8f867e; font-size: 16px; margin: 0;">Your Pro access is now active</p>
      </div>

      <div style="background: #faf7f4; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <h2 style="font-size: 16px; color: #181615; margin: 0 0 16px;">What you get with Pro:</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #4a4543; font-size: 14px;">&#10003; Unlimited speech generations</td></tr>
          <tr><td style="padding: 6px 0; color: #4a4543; font-size: 14px;">&#10003; Inline editing with change tracking</td></tr>
          <tr><td style="padding: 6px 0; color: #4a4543; font-size: 14px;">&#10003; Export to TXT, PDF, and DOCX</td></tr>
          <tr><td style="padding: 6px 0; color: #4a4543; font-size: 14px;">&#10003; Save and manage multiple speeches</td></tr>
        </table>
      </div>

      <div style="background: #fff; border: 1px solid #e8e1d8; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
        <p style="color: #8f867e; font-size: 13px; margin: 0 0 4px;">Your Pro access is valid until</p>
        <p style="color: #181615; font-size: 18px; font-weight: 600; margin: 0;">${expiryDate}</p>
      </div>

      ${ctaButton('Go to Your Dashboard', `${BASE_URL}/dashboard`)}
    `),
    MessageStream: 'outbound',
  });
}

// ── Abandoned session: Email 1 — Confirm subscription ─────

export async function sendConfirmSubscription(email: string, name: string | null, leadId: string) {
  const confirmUrl = `${BASE_URL}/api/confirm-email?id=${leadId}`;
  const greeting = name ? `Hi ${name},` : 'Hi there,';

  await client.sendEmail({
    From: FROM_EMAIL,
    To: email,
    Subject: 'Confirm your subscription to unlock your 20% discount',
    HtmlBody: emailWrapper(`
      <div style="text-align: center;">
        <h1 style="font-size: 22px; color: #181615; margin: 0 0 16px;">Confirm your subscription to unlock your 20% discount</h1>

        <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 8px;">
          ${greeting}
        </p>
        <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 8px;">
          We have a 20% off discount for you. But first we need to confirm your email.
        </p>
        <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 8px;">
          You are so close to speech perfection. Let's finish what we started.
        </p>
        <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 4px;">
          Click below to unlock your discount.
        </p>

        ${ctaButton('Yes, Unlock My Discount', confirmUrl)}

        <p style="color: #8f867e; font-size: 13px; line-height: 1.5; margin: 16px 0 0;">
          If you received this email by mistake or if you're unsure why you received it, feel free to simply ignore or delete this message.
        </p>
        <p style="color: #8f867e; font-size: 13px; line-height: 1.5; margin: 8px 0 0;">
          Rest assured, <strong>you will not be added to our mailing list unless you choose to confirm</strong> by clicking the button above.
        </p>
      </div>
    `),
    MessageStream: 'broadcast',
  });
}

// ── Abandoned session: Email 2 — Discount code ────────────

export async function sendDiscountEmail(email: string, name: string | null, discountCode: string) {
  const claimUrl = `${BASE_URL}/generator?discount=${discountCode}`;
  const greeting = name ? `Hi ${name},` : 'Hi there,';

  await client.sendEmail({
    From: FROM_EMAIL,
    To: email,
    Subject: 'Your 20% Discount is Here',
    HtmlBody: emailWrapper(`
      <h1 style="font-size: 24px; color: #181615; margin: 0 0 20px;">Enjoy 20% Off Your Speech</h1>

      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        ${greeting}
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        Congrats on unlocking your 20% discount!
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        For the next 24 hours, use code <strong style="color: #181615;">${discountCode}</strong> at checkout to get 20% off your speech.
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 4px;">
        We've saved your progress, so you can pick up right where you left off. You're so close to speech perfection.
      </p>

      ${ctaButton('Claim My Speech', claimUrl)}
    `),
    MessageStream: 'broadcast',
  });
}
