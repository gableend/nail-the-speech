import { NextResponse } from "next/server";

export async function GET() {
  console.log('🔍 [TEST API] Simple test endpoint working');

  return NextResponse.json({
    message: "Test API is working",
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    keyLength: process.env.OPENAI_API_KEY?.length || 0,
    timestamp: new Date().toISOString()
  });
}
