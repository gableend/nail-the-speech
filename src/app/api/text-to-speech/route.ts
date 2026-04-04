import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest } from "@/lib/userStatus";
import { rateLimit } from "@/lib/rateLimit";

const ALLOWED_VOICES = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer'] as const;
type TTSVoice = typeof ALLOWED_VOICES[number];

export async function POST(request: NextRequest) {
  try {
    let userId: string | null = null;
    let anonUserId: string | null = null;
    try {
      const authResult = await auth();
      userId = authResult.userId;
    } catch { /* not authenticated */ }

    const body = await request.json();
    const { text, voice = 'nova', clientAnonUserId } = body;
    if (!userId) anonUserId = clientAnonUserId || null;

    const isProUser = await checkProStatusForRequest(userId, anonUserId);
    if (!isProUser) {
      return Response.json(
        { error: "pro_required", message: "Upgrade to Pro to listen to your speech." },
        { status: 403 }
      );
    }

    const rateLimitKey = `tts:${userId || anonUserId || request.headers.get('x-forwarded-for') || 'unknown'}`;
    const { allowed } = rateLimit(rateLimitKey, 20, 60 * 60 * 1000);
    if (!allowed) {
      return Response.json(
        { error: "rate_limited", message: "Audio generation limit reached. Try again later." },
        { status: 429 }
      );
    }

    if (!text?.trim()) {
      return Response.json({ error: "missing_text" }, { status: 400 });
    }
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ error: "service_unavailable" }, { status: 503 });
    }

    const selectedVoice: TTSVoice = ALLOWED_VOICES.includes(voice as TTSVoice)
      ? (voice as TTSVoice) : 'nova';
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: selectedVoice,
      input: text,
      response_format: 'mp3',
    });

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error('💥 [TTS] Error:', error);
    return Response.json(
      { error: "tts_failed", message: "Please try again." },
      { status: 503 }
    );
  }
}
