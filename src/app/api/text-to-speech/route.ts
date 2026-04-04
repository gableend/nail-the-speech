import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest } from "@/lib/userStatus";
import { rateLimit } from "@/lib/rateLimit";

// Allow up to 60s for TTS generation (full speeches can take a while)
export const maxDuration = 60;

// OpenAI TTS voices — warm, natural-sounding options for wedding speeches
const ALLOWED_VOICES = ['alloy', 'ash', 'ballad', 'coral', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer', 'verse'] as const;
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

    // Cap text length (OpenAI TTS has a 4096 char limit per request, so we chunk)
    const MAX_CHARS = 20000; // ~3000 words, well beyond any speech
    if (text.length > MAX_CHARS) {
      return new Response(
        JSON.stringify({ error: "text_too_long", message: "Speech text is too long for audio generation." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate voice
    const selectedVoice: TTSVoice = ALLOWED_VOICES.includes(voice) ? voice : 'nova';

    // Validate format
    const allowedFormats = ['mp3', 'opus', 'aac', 'flac'] as const;
    const selectedFormat = allowedFormats.includes(format) ? format : 'mp3';

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI service unavailable", message: "OpenAI API key not configured." }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    console.log('🔊 [TTS API] Generating audio:', {
      textLength: text.length,
      wordCount: text.split(/\s+/).length,
      voice: selectedVoice,
      format: selectedFormat,
    });

    // OpenAI TTS supports up to 4096 chars per request
    // For longer speeches, we chunk and concatenate
    const CHUNK_SIZE = 4000;
    const chunks: string[] = [];

    if (text.length <= CHUNK_SIZE) {
      chunks.push(text);
    } else {
      // Split on paragraph breaks to preserve natural pacing
      const paragraphs = text.split(/\n+/);
      let currentChunk = '';

      for (const para of paragraphs) {
        if (currentChunk.length + para.length + 1 > CHUNK_SIZE) {
          if (currentChunk) chunks.push(currentChunk.trim());
          // If a single paragraph exceeds chunk size, split on sentences
          if (para.length > CHUNK_SIZE) {
            const sentences = para.match(/[^.!?]+[.!?]+/g) || [para];
            let sentenceChunk = '';
            for (const sentence of sentences) {
              if (sentenceChunk.length + sentence.length > CHUNK_SIZE) {
                if (sentenceChunk) chunks.push(sentenceChunk.trim());
                sentenceChunk = sentence;
              } else {
                sentenceChunk += sentence;
              }
            }
            if (sentenceChunk) currentChunk = sentenceChunk;
          } else {
            currentChunk = para;
          }
        } else {
          currentChunk += (currentChunk ? '\n\n' : '') + para;
        }
      }
      if (currentChunk.trim()) chunks.push(currentChunk.trim());
    }

    console.log(`🔊 [TTS API] Processing ${chunks.length} chunk(s)`);

    // Generate audio for each chunk
    // Try gpt-4o-mini-tts first (supports instructions), fall back to tts-1
    const audioBuffers: ArrayBuffer[] = [];
    let ttsModel = 'gpt-4o-mini-tts';

    for (let i = 0; i < chunks.length; i++) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ttsParams: any = {
          model: ttsModel,
          voice: selectedVoice,
          input: chunks[i],
          response_format: selectedFormat,
        };
        // gpt-4o-mini-tts supports instructions for tone control
        if (ttsModel === 'gpt-4o-mini-tts') {
          ttsParams.instructions = 'Speak in a warm, confident, and slightly emotional tone — as if delivering a heartfelt wedding speech at a reception. Pace yourself naturally, pausing slightly between paragraphs.';
        }
        const response = await openai.audio.speech.create(ttsParams);
        const buffer = await response.arrayBuffer();
        audioBuffers.push(buffer);
        console.log(`🔊 [TTS API] Chunk ${i + 1}/${chunks.length} generated with ${ttsModel} (${buffer.byteLength} bytes)`);
      } catch (chunkError: unknown) {
        // If gpt-4o-mini-tts fails on first chunk, fall back to tts-1 for all remaining
        if (i === 0 && ttsModel === 'gpt-4o-mini-tts') {
          console.warn('⚠️ [TTS API] gpt-4o-mini-tts failed, falling back to tts-1:', chunkError instanceof Error ? chunkError.message : chunkError);
          ttsModel = 'tts-1';
          // Retry this chunk with tts-1
          const response = await openai.audio.speech.create({
            model: 'tts-1',
            voice: selectedVoice as 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer',
            input: chunks[i],
            response_format: selectedFormat,
          });
          const buffer = await response.arrayBuffer();
          audioBuffers.push(buffer);
          console.log(`🔊 [TTS API] Chunk ${i + 1}/${chunks.length} generated with tts-1 fallback (${buffer.byteLength} bytes)`);
        } else {
          throw chunkError;
        }
      }
    }

    // Concatenate buffers
    const totalLength = audioBuffers.reduce((sum, buf) => sum + buf.byteLength, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of audioBuffers) {
      combined.set(new Uint8Array(buf), offset);
      offset += buf.byteLength;
    }

    console.log('🎉 [TTS API] Audio generation complete:', {
      totalBytes: totalLength,
      chunks: chunks.length,
      voice: selectedVoice,
      format: selectedFormat,
    });

    const contentTypeMap: Record<string, string> = {
      mp3: 'audio/mpeg',
      opus: 'audio/opus',
      aac: 'audio/aac',
      flac: 'audio/flac',
    };

    return new Response(combined.buffer, {
      headers: {
        'Content-Type': contentTypeMap[selectedFormat] || 'audio/mpeg',
        'Content-Length': totalLength.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
      },
    });

  } catch (error) {
    console.error('💥 [TTS API] Error generating audio:', error);
    return new Response(
      JSON.stringify({ error: "Failed to generate audio", message: "Please try again in a few moments." }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
