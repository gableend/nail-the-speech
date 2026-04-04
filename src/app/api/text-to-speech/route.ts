import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest } from "@/lib/userStatus";
import { rateLimit } from "@/lib/rateLimit";

// Allow up to 120s for full-speech TTS streaming
export const maxDuration = 120;

// OpenAI TTS voices supported by tts-1
const ALLOWED_VOICES = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer'] as const;
type TTSVoice = typeof ALLOWED_VOICES[number];

// Merge paragraphs into chunks. First chunk is small (~400 chars) for fast startup,
// subsequent chunks are larger (~1000 chars) to reduce total API calls.
function buildChunks(text: string): string[] {
  const FIRST_TARGET = 400;  // Small first chunk = fast first audio
  const REST_TARGET = 1000;  // Larger chunks = fewer calls, natural pacing
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  const chunks: string[] = [];
  let current = '';
  let isFirst = true;

  for (const para of paragraphs) {
    const target = isFirst ? FIRST_TARGET : REST_TARGET;
    if (current.length + para.length + 2 > target && current.length > 0) {
      chunks.push(current.trim());
      current = para;
      isFirst = false;
    } else {
      current += (current ? '\n\n' : '') + para;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export async function POST(request: NextRequest) {
  console.log('🔊 [TTS API] Streaming text-to-speech request received');

  try {
    // Authentication
    let userId: string | null = null;
    let anonUserId: string | null = null;
    try {
      const authResult = await auth();
      userId = authResult.userId;
    } catch {
      // Not authenticated
    }

    const body = await request.json();
    const { text, voice = 'nova', clientAnonUserId } = body;

    if (!userId) {
      anonUserId = clientAnonUserId || null;
    }

    // Pro-only feature
    const isProUser = await checkProStatusForRequest(userId, anonUserId);
    if (!isProUser) {
      return new Response(
        JSON.stringify({ error: "pro_required", message: "Upgrade to Pro to listen to your speech." }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Rate limit: 5 TTS requests per hour
    const rateLimitKey = `tts:${userId || anonUserId || request.headers.get('x-forwarded-for') || 'unknown'}`;
    const { allowed, remaining } = rateLimit(rateLimitKey, 5, 60 * 60 * 1000);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "rate_limited", message: "Audio generation limit reached. Try again later." }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate text
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "missing_text", message: "No speech text provided." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const selectedVoice: TTSVoice = ALLOWED_VOICES.includes(voice as TTSVoice) ? (voice as TTSVoice) : 'nova';

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "service_unavailable", message: "OpenAI not configured." }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const chunks = buildChunks(text);

    console.log('🔊 [TTS API] Generating', chunks.length, 'chunks, voice:', selectedVoice);

    // Stream binary audio chunks back to client
    // Protocol: [4-byte big-endian length][MP3 bytes] repeated, then 4 zero bytes as EOF
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

            const buffer = await response.arrayBuffer();
            const audioBytes = new Uint8Array(buffer);

            // Write 4-byte length header (big-endian)
            const header = new Uint8Array(4);
            const view = new DataView(header.buffer);
            view.setUint32(0, audioBytes.length, false);
            controller.enqueue(header);

            // Write audio data
            controller.enqueue(audioBytes);

            console.log(`🔊 [TTS API] Chunk ${i + 1}/${chunks.length} streamed (${audioBytes.length} bytes)`);
          }

          // EOF marker: 4 zero bytes
          controller.enqueue(new Uint8Array(4));
          controller.close();
        } catch (error) {
          console.error('💥 [TTS API] Error in stream:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-TTS-Chunks': chunks.length.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
      },
    });

  } catch (error) {
    console.error('💥 [TTS API] Error:', error);
    return new Response(
      JSON.stringify({ error: "tts_failed", message: "Please try again." }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
