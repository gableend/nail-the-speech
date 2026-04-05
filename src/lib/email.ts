import * as postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN || '');

const FROM_EMAIL = 'hello@nailthespeech.com';
const BASE_URL = 'https://www.nailthespeech.com';

// ── Shared email components ──────────────────────────────────

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nail The Speech</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f4f0; -webkit-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f4f0;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px; text-align: center; border-bottom: 1px solid #f0ebe5;">
              <span style="font-size: 32px; vertical-align: middle;">🎤</span>
              <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 700; color: #181615; vertical-align: middle; margin-left: 8px;">Nail The Speech</span>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #faf7f4; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <p style="color: #8f867e; font-size: 12px; margin: 0; line-height: 1.5;">
                Questions? Reply to this email or contact
                <a href="mailto:hello@nailthespeech.com" style="color: #da5389; text-decoration: none;">hello@nailthespeech.com</a>
              </p>
              <p style="color: #c4bdb6; font-size: 11px; margin: 8px 0 0;">
                Nail The Speech &mdash; AI Wedding Speech Writer
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function ctaButton(text: string, url: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 28px 0;">
    <tr>
      <td align="center">
        <a href="${url}" style="display: inline-block; background-color: #da5389; color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 50px; font-weight: 600; font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; mso-padding-alt: 0; text-align: center;">
          <!--[if mso]><i style="mso-font-width: 150%; mso-text-raise: 24pt;">&nbsp;</i><![endif]-->
          <span style="mso-text-raise: 12pt;">${text}</span>
          <!--[if mso]><i style="mso-font-width: 150%;">&nbsp;</i><![endif]-->
        </a>
      </td>
    </tr>
  </table>`;
}

function discountBadge(code: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" style="background-color: #fdf2f7; border: 2px dashed #da5389; border-radius: 12px;">
          <tr>
            <td style="padding: 16px 28px; text-align: center;">
              <p style="margin: 0 0 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #8f867e; text-transform: uppercase; letter-spacing: 1px;">Your discount code</p>
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 700; color: #da5389; letter-spacing: 2px;">${code}</p>
              <p style="margin: 6px 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #4a4543;">20% off &mdash; applied automatically</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

function featureList(): string {
  const features = [
    'Generate &amp; refine your speech',
    'Inline editing with change tracking',
    'Export to TXT, PDF &amp; DOCX',
    'Save and manage multiple speeches',
  ];
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; background-color: #faf7f4; border-radius: 12px;">
    <tr>
      <td style="padding: 20px 24px;">
        ${features.map(f => `<p style="margin: 0; padding: 5px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #4a4543;">&#10003;&nbsp; ${f}</p>`).join('')}
      </td>
    </tr>
  </table>`;
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
    Subject: 'Welcome to Nail The Speech Pro! 🎤',
    HtmlBody: emailWrapper(`
      <h1 style="font-size: 22px; color: #181615; margin: 0 0 6px; text-align: center;">You're all set!</h1>
      <p style="color: #8f867e; font-size: 15px; margin: 0 0 24px; text-align: center;">Your Pro access is now active</p>

      ${featureList()}

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
        <tr>
          <td align="center" style="background-color: #ffffff; border: 1px solid #e8e1d8; border-radius: 12px; padding: 16px 24px;">
            <p style="color: #8f867e; font-size: 13px; margin: 0 0 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">Your Pro access is valid until</p>
            <p style="color: #181615; font-size: 18px; font-weight: 600; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${expiryDate}</p>
          </td>
        </tr>
      </table>

      ${ctaButton('Go to Your Dashboard', `${BASE_URL}/dashboard`)}
    `),
    MessageStream: 'outbound',
  });
}

// ── Email 1: Claim your speech + 20% off (confirms subscription on click) ──

export async function sendClaimSpeechEmail(
  email: string,
  name: string | null,
  leadId: string,
  discountCode: string,
  speechId: string | null = null
) {
  // Confirm link includes leadId (for double opt-in), discount code, and speechId
  const confirmUrl = `${BASE_URL}/api/confirm-email?id=${leadId}&code=${discountCode}${speechId ? `&speechId=${speechId}` : ''}`;
  const greeting = name ? `Hi ${name},` : 'Hi there,';

  await client.sendEmail({
    From: FROM_EMAIL,
    To: email,
    Subject: "Your speech is ready — here's 20% off 🎁",
    HtmlBody: emailWrapper(`
      <h1 style="font-size: 22px; color: #181615; margin: 0 0 20px; text-align: center;">Your speech is waiting for you</h1>

      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        ${greeting}
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        You started writing something special &mdash; a speech people will remember. We've saved your progress and your speech preview is ready.
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 4px;">
        To welcome you back, here's <strong style="color: #da5389;">20% off</strong> when you unlock your full speech:
      </p>

      ${discountBadge(discountCode)}

      ${ctaButton('Claim My Speech', confirmUrl)}

      <p style="color: #8f867e; font-size: 13px; line-height: 1.5; margin: 16px 0 0; text-align: center;">
        By clicking above you confirm your email and subscribe to occasional updates. You can unsubscribe at any time.
      </p>
    `),
    MessageStream: 'broadcast',
  });
}

// ── Email 2: Discount expiring reminder ─────────────────────

export async function sendDiscountReminderEmail(
  email: string,
  name: string | null,
  discountCode: string,
  speechId: string | null = null
) {
  const claimUrl = speechId
    ? `${BASE_URL}/generator?speechId=${speechId}&discount=${discountCode}`
    : `${BASE_URL}/generator?discount=${discountCode}`;
  const greeting = name ? `${name}, your` : 'Your';

  await client.sendEmail({
    From: FROM_EMAIL,
    To: email,
    Subject: `${greeting} 20% discount expires tonight ⏰`,
    HtmlBody: emailWrapper(`
      <h1 style="font-size: 22px; color: #181615; margin: 0 0 20px; text-align: center;">Your discount expires soon</h1>

      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        Just a quick reminder &mdash; your <strong style="color: #da5389;">20% discount</strong> expires tonight.
      </p>
      <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0 0 4px;">
        Your speech is still saved and ready to go. One click and you're back where you left off.
      </p>

      ${discountBadge(discountCode)}

      ${featureList()}

      ${ctaButton('Finish My Speech', claimUrl)}

      <p style="color: #8f867e; font-size: 13px; line-height: 1.5; margin: 16px 0 0; text-align: center;">
        Don't need this? No worries &mdash; just ignore this email.
      </p>
    `),
    MessageStream: 'broadcast',
  });
}

// ── Help contact form notification ──────────────────────────

export async function sendHelpContactNotification(
  email: string,
  question: string,
  speechType: string | null = null
) {
  const speechTypeLine = speechType
    ? `<p style="color: #8f867e; font-size: 13px; margin: 0 0 4px;">Speech type: <strong style="color: #181615;">${speechType}</strong></p>`
    : '';

  await client.sendEmail({
    From: FROM_EMAIL,
    To: FROM_EMAIL,
    ReplyTo: email,
    Subject: `Help question from ${email}`,
    HtmlBody: emailWrapper(`
      <h1 style="font-size: 22px; color: #181615; margin: 0 0 20px; text-align: center;">New help centre question</h1>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px; background-color: #faf7f4; border-radius: 12px;">
        <tr>
          <td style="padding: 20px 24px;">
            <p style="color: #8f867e; font-size: 13px; margin: 0 0 4px;">From: <strong style="color: #181615;">${email}</strong></p>
            ${speechTypeLine}
            <hr style="border: none; border-top: 1px solid #e8e1d8; margin: 12px 0;" />
            <p style="color: #4a4543; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${question}</p>
          </td>
        </tr>
      </table>

      <p style="color: #8f867e; font-size: 13px; text-align: center;">Reply directly to this email to respond to the user.</p>
    `),
    MessageStream: 'outbound',
  });
}
