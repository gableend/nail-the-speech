import { NextResponse } from "next/server";
import { sendHelpContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email, question, speechType } = await request.json();

    if (!email || !question) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendHelpContactNotification(email, question, speechType || null);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[help-contact] Failed to send:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
