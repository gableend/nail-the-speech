import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest } from "@/lib/userStatus";
import { rateLimit } from "@/lib/rateLimit";

// Allow up to 120s — full speech TTS can take a while
export const maxDuration = 120;

const ALLOWED_VOICES = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer'] as const;
type TTSVoice = typeof ALLOWED_VOICES[number];

// Split text into chunks ≤4096 chars at paragraph boundaries
function splitForTTS(text: string): string[] {
  const MAX = 4000;
  const paragraphs = text.split(/\n+/).filter(p => p.trim());
  const chunks: string[] = [];
  let current = '';

  for (const para of paragraphs) {
    if (current.length + para.length + 2 > MAX && current) {
      chunks.push(current.trim());
      current = para;
    } else {
      current += (current ? '\n\n' : '') + para;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

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
    const { allowed } = rateLimit(rateLimitKey, 5, 60 * 60 * 1000);
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
    const chunks = splitForTTS(text);

    console.log(`🔊 [TTS] Generating ${chunks.length} chunk(s), voice: ${selectedVoice}`);

    // Stream MP3 bytes as each chunk completes — keeps the connection alive
    // and avoids Netlify function timeout on long speeches.
    // Client receives a single audio/mpeg stream it can blob().
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for (let i = 0; i < chunks.length; i++) {
            const response = await openai.audio.speech.create({
              model: 'tts-1',
              voice: selectedVoice,
              input: chunks[i],
              response_format: 'mp3',
            });
            const buf = new Uint8Array(await response.arrayBuffer());
            controller.enqueue(buf);
            console.log(`🔊 [TTS] Chunk ${i + 1}/${chunks.length} streamed (${buf.length} bytes)`);
          }
          console.log(`🎉 [TTS] All chunks streamed`);
          controller.close();
        } catch (err) {
          console.error('💥 [TTS] Stream error:', err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Transfer-Encoding': 'chunked',
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
