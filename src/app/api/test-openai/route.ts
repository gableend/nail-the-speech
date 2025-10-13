import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🧪 [TEST] Testing OpenAI API configuration...');

    // Check if API key exists
    const hasApiKey = !!process.env.OPENAI_API_KEY;
    const keyLength = process.env.OPENAI_API_KEY?.length || 0;
    const keyPreview = process.env.OPENAI_API_KEY?.substring(0, 20) + '...';

    if (!hasApiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'OpenAI API key not configured',
        hasApiKey: false,
        environment: process.env.NODE_ENV
      });
    }

    // Try to initialize OpenAI
    try {
      const OpenAI = (await import('openai')).default;
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      // Try a simple API call
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say "API test successful" in exactly 3 words.' }],
        model: 'gpt-3.5-turbo',
        max_tokens: 10
      });

      const testResponse = completion.choices[0]?.message?.content || 'No response';

      return NextResponse.json({
        status: 'success',
        message: 'OpenAI API is working correctly',
        hasApiKey: true,
        keyLength,
        keyPreview,
        testResponse,
        model: 'gpt-3.5-turbo',
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
      });

    } catch (openaiError) {
      const errorMessage = openaiError instanceof Error ? openaiError.message : 'Unknown OpenAI error';
      const errorType = openaiError instanceof Error ? openaiError.constructor.name : 'UnknownError';

      return NextResponse.json({
        status: 'openai_error',
        message: 'OpenAI API error',
        hasApiKey: true,
        keyLength,
        keyPreview,
        error: errorMessage,
        errorType: errorType,
        environment: process.env.NODE_ENV
      });
    }

  } catch (error) {
    console.error('🧪 [TEST] Test endpoint error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown system error';

    return NextResponse.json({
      status: 'system_error',
      message: 'System error during test',
      error: errorMessage,
      environment: process.env.NODE_ENV
    }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({
    message: 'Use GET method for testing'
  }, { status: 405 });
}
