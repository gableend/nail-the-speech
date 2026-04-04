import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@clerk/nextjs/server';
import { checkProStatusForRequest } from '@/lib/userStatus';
import { rateLimit } from '@/lib/rateLimit';

// Keeps the function alive up to 25s on Netlify
export const maxDuration = 25;

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

    const { text, voice = 'nova', clientAnonUserId } = await request.json();
    if (!userId) anonUserId = clientAnonUserId || null;

    const isProUser = await checkProStatusForRequest(userId, anonUserId);
    if (!isProUser) {
      return NextResponse.json(
        { error: 'pro_required', message: 'Upgrade to Pro to listen to your speech.' },
        { status: 403 }
      );
    }

    const rateLimitKey = `tts:${userId || anonUserId || request.headers.get('x-forwarded-for') || 'unknown'}`;
    const { allowed } = rateLimit(rateLimitKey, 20, 60 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: 'rate_limited', message: 'Audio generation limit reached. Try again later.' },
        { status: 429 }
      );
    }

    if (!text?.trim()) {
      return new NextResponse('Missing text payload', { status: 400 });
    }
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse('OpenAI API key not configured', { status: 503 });
    }

    const selectedVoice: TTSVoice = ALLOWED_VOICES.includes(voice as TTSVoice)
      ? (voice as TTSVoice) : 'nova';

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: selectedVoice,
      input: text,
    });

    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('💥 [TTS] Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
