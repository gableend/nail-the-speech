import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const maxDuration = 10;

export async function POST(request: Request) {
  try {
    const { text, voice } = await request.json();

    if (!text) {
      return new NextResponse('Missing text payload', { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse('OpenAI API key not configured', { status: 503 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice || 'nova',
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
