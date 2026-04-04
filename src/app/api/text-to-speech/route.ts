import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest } from "@/lib/userStatus";
import { rateLimit } from "@/lib/rateLimit";

// Allow up to 60s for TTS generation on Netlify
export const maxDuration = 60;

// OpenAI TTS voices supported by tts-1
const ALLOWED_VOICES = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer'] as const;
type TTSVoice = typeof ALLOWED_VOICES[number];

export async function POST(request: NextRequest) {
  console.log('🔊 [TTS API] Text-to-speech request received');

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
    const { text, voice = 'nova', format = 'mp3', clientAnonUserId } = body;

    if (!userId) {
      anonUserId = clientAnonUserId || null;
    }

    // Pro-only feature
    const isProUser = await checkProStatusForRequest(userId, anonUserId);
    if (!isProUser) {
      return new Response(
        JSON.stringify({ error: "pro_required", message: "Upgrade to Pro to listen to and export your speech as audio." }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Rate limit: 5 TTS requests per hour (audio generation is expensive)
    const rateLimitKey = `tts:${userId || anonUserId || request.headers.get('x-forwarded-for') || 'unknown'}`;
    const { allowed, remaining } = rateLimit(rateLimitKey, 5, 60 * 60 * 1000);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "rate_limited", message: "You've used all your audio generations for this hour. Please try again later." }),
        { status: 429, headers: { 'Content-Type': 'application/json', 'X-RateLimit-Remaining': '0' } }
      );
    }
    console.log(`⏱️ [TTS API] Rate limit OK (${remaining} remaining)`);

    // Validate text
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Missing text", message: "Please provide speech text to convert to audio." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Cap text length — tts-1 supports up to 4096 chars per request
    const MAX_CHARS = 4096;
    const speechText = text.length > MAX_CHARS ? text.substring(0, MAX_CHARS) : text;

    // Validate voice — fall back to nova for unsupported voices
    const selectedVoice: TTSVoice = ALLOWED_VOICES.includes(voice as TTSVoice) ? (voice as TTSVoice) : 'nova';

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI service unavailable", message: "OpenAI API key not configured." }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    console.log('🔊 [TTS API] Generating audio:', {
      textLength: speechText.length,
      wordCount: speechText.split(/\s+/).length,
      voice: selectedVoice,
    });

    // Generate audio — single request, stream the response through
    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: selectedVoice,
      input: speechText,
      response_format: format === 'mp3' ? 'mp3' : 'mp3', // stick with mp3
    });

    // Get the response as a ReadableStream and pass it through
    // This avoids buffering the entire audio in memory
    const audioBody = response.body;

    if (!audioBody) {
      console.error('💥 [TTS API] No response body from OpenAI');
      return new Response(
        JSON.stringify({ error: "Failed to generate audio", message: "No audio data received." }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('🎉 [TTS API] Streaming audio response to client');

    return new Response(audioBody as ReadableStream, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'X-RateLimit-Remaining': remaining.toString(),
      },
    });

  } catch (error) {
    console.error('💥 [TTS API] Error generating audio:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: "Failed to generate audio", message, details: String(error) }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
