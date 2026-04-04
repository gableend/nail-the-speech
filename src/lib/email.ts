import * as postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN || '');

const FROM_EMAIL = 'hello@nailthespeech.com';

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
    HtmlBody: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <span style="font-size: 48px;">🎤</span>
          <h1 style="font-size: 24px; color: #181615; margin: 12px 0 4px;">You're all set!</h1>
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

        <div style="text-align: center; margin-bottom: 32px;">
          <a href="https://www.nailthespeech.com/dashboard" style="display: inline-block; background: #da5389; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 15px;">Go to Your Dashboard</a>
        </div>

        <div style="border-top: 1px solid #e8e1d8; padding-top: 20px; text-align: center;">
          <p style="color: #8f867e; font-size: 12px; margin: 0;">
            Questions? Reply to this email or contact us at
            <a href="mailto:hello@nailthespeech.com" style="color: #da5389;">hello@nailthespeech.com</a>
          </p>
          <p style="color: #c4bdb6; font-size: 11px; margin: 8px 0 0;">
            Nail The Speech &mdash; AI Wedding Speech Writer
          </p>
        </div>
      </div>
    `,
    MessageStream: 'outbound',
  });
}
