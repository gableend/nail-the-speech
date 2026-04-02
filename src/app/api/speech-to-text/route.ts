import { type NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

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

    // Convert the Web API File to a format the OpenAI SDK can handle
    // In serverless environments, the native File may not be fully compatible
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const file = new File([buffer], audioFile.name || 'recording.webm', {
      type: audioFile.type || 'audio/webm',
    });

    // Convert audio to text using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file,
      model: 'whisper-1',
      language: 'en', // Can be made dynamic if needed
      response_format: 'json',
      temperature: 0.2, // Lower temperature for more consistent transcription
    });

    console.log('✅ [SPEECH-TO-TEXT] Transcription successful:', {
      text: transcription.text,
      // Note: duration is not available in OpenAI Whisper API response
    });

    return NextResponse.json({
      text: transcription.text,
      // Note: duration is not provided by OpenAI Whisper API
    });

  } catch (error) {
    console.error('💥 [SPEECH-TO-TEXT] Error:', error);

    return NextResponse.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    );
  }
}
