import { type NextRequest, NextResponse } from 'next/server';
import OpenAI, { toFile } from 'openai';

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // Create OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    console.log('🎤 [SPEECH-TO-TEXT] Processing audio file:', {
      name: audioFile.name,
      size: audioFile.size,
      type: audioFile.type
    });

    if (audioFile.size < 1000) {
      return NextResponse.json(
        { error: 'Audio file too small — recording may have been too short' },
        { status: 400 }
      );
    }

    // Convert the Web API File to a format the OpenAI SDK reliably handles
    // using the official toFile helper (works in serverless environments)
    const arrayBuffer = await audioFile.arrayBuffer();
    const file = await toFile(
      Buffer.from(arrayBuffer),
      audioFile.name || 'recording.webm',
      { type: audioFile.type || 'audio/webm' }
    );

    // Convert audio to text using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file,
      model: 'whisper-1',
      language: 'en',
      response_format: 'verbose_json', // Get more detail for debugging
      temperature: 0,
    });

    console.log('✅ [SPEECH-TO-TEXT] Transcription successful:', {
      text: transcription.text,
      duration: transcription.duration,
    });

    return NextResponse.json({
      text: transcription.text,
      duration: transcription.duration,
    });

  } catch (error) {
    console.error('💥 [SPEECH-TO-TEXT] Error:', error);

    return NextResponse.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    );
  }
}
