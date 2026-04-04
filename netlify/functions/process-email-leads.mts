import type { Config } from "@netlify/functions";

export default async () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com';
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error("[CRON] CRON_SECRET not set");
    return new Response("CRON_SECRET not configured", { status: 500 });
  }

  try {
    const response = await fetch(`${baseUrl}/api/cron/process-email-leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log("[CRON] Process email leads result:", data);

    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    console.error("[CRON] Failed to call process-email-leads:", error);
    return new Response("Failed", { status: 500 });
  }
};

export const config: Config = {
  schedule: "*/15 * * * *", // Every 15 minutes
};
