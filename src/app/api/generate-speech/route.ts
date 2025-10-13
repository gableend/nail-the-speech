import { type NextRequest, NextResponse } from "next/server";
import { generateWeddingSpeech, estimateReadingTime, countWords } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { getOrCreateAnonymousUser } from "@/lib/anonymousUser";

function determineDataCompleteness(formData: Record<string, unknown>): 'minimal' | 'enriched' | 'premium' {
  const hasEnrichmentData = !!(
    formData.howLongKnown ||
    formData.sharedHobbiesJokes ||
    formData.groomIn3Words ||
    formData.whatYouAdmire ||
    formData.relationshipWithBride ||
    formData.momentSeenTogether
  );

  const hasPremiumData = !!(
    formData.mentionBrideEnding ||
    formData.includeShoutOuts ||
    formData.humorLevel ||
    formData.includeToastClosing ||
    formData.lengthPreference
  );

  if (hasPremiumData) return 'premium';
  if (hasEnrichmentData) return 'enriched';
  return 'minimal';
}

export async function POST(request: NextRequest) {
  console.log('🎤 [SPEECH API] Speech generation request received');

  try {
    // Get user authentication info or anonymous user ID
    let userId = null;
    let anonUserId = null;

    try {
      const authResult = await auth();
      userId = authResult.userId;
      console.log('👤 [SPEECH API] Authenticated user:', { userId });
    } catch (authError) {
      console.log('👤 [SPEECH API] No authenticated user, using anonymous mode');
    }

    // If no authenticated user, get or create anonymous user
    if (!userId) {
      anonUserId = await getOrCreateAnonymousUser();
      console.log('👤 [SPEECH API] Anonymous user ID:', { anonUserId });
    }

    const formData = await request.json();

    console.log('📝 [SPEECH API] Form data received:', {
      role: formData.selectedRole,
      tone: formData.tone,
      length: formData.lengthPreference,
      hasStory: !!formData.greatStoryMemory,
      fieldsCount: Object.keys(formData).length,
      userLoggedIn: !!userId,
      userId: userId || 'anonymous'
    });

    // Validate required fields for speech generation
    if (!formData.yourName || !formData.groomName || !formData.brideName ||
        !formData.relationshipToGroom || !formData.tone || !formData.lengthPreference || !formData.greatStoryMemory) {
      console.log('❌ [SPEECH API] Validation failed - missing required fields');
      return NextResponse.json(
        {
          error: "Missing required fields",
          details: "Please provide your name, groom's name, bride's name, your relationship to the groom, tone, speech length, and a story/memory."
        },
        { status: 400 }
      );
    }

    console.log('✅ [SPEECH API] Validation passed - all required fields present');

    // Check if OpenAI is configured
    if (!process.env.OPENAI_API_KEY) {
      console.warn("🚫 [SPEECH API] OpenAI API key not configured, service unavailable");

      return NextResponse.json(
        {
          error: "AI service temporarily unavailable",
          message: "OpenAI API key not configured. Please check environment variables.",
          debug: {
            hasKey: !!process.env.OPENAI_API_KEY,
            environment: process.env.NODE_ENV || 'unknown'
          }
        },
        { status: 503 }
      );
    }

    // For now, everyone gets free tier access (no premium features)
    const isPremium = false;

    // Choose model based on premium status
    const speechOptions = {
      isPremium,
      model: 'gpt-3.5-turbo' as const,
      maxTokens: 1000
    };

    console.log('🤖 [SPEECH API] Starting OpenAI generation with options:', {
      model: speechOptions.model,
      isPremium: speechOptions.isPremium,
      maxTokens: speechOptions.maxTokens,
      dataCompleteness: determineDataCompleteness(formData)
    });

    // Generate speech with OpenAI
    const startTime = Date.now();
    const generatedSpeech = await generateWeddingSpeech(formData, speechOptions);
    const generationTime = Date.now() - startTime;

    console.log('🎉 [SPEECH API] OpenAI generation completed successfully!', {
      generationTimeMs: generationTime,
      speechLength: generatedSpeech.length,
      wordCount: countWords(generatedSpeech),
      estimatedTime: estimateReadingTime(generatedSpeech)
    });

    // Save speech to database with user association (authenticated or anonymous)
    try {
      const userType = userId ? 'authenticated user' : 'anonymous user';
      console.log(`💾 [SPEECH API] Saving speech to database (${userType})`);

      const speechData = {
        title: `${getRoleTitle(formData.selectedRole)} Speech for ${formData.groomName} & ${formData.brideName}`,
        content: generatedSpeech,
        role: formData.selectedRole || 'best-man',
        tone: formData.tone,
        length: formData.lengthPreference || 'medium',
        wordCount: countWords(generatedSpeech),
        estimatedTime: estimateReadingTime(generatedSpeech),
        isAIGenerated: true,
        formData: JSON.stringify(formData),
        regenCount: 0,
        userId: userId,
        anonUserId: anonUserId,
        isCompleted: true
      };

      await prisma.speech.create({
        data: speechData
      });

      console.log('✅ [SPEECH API] Speech saved to database successfully');
    } catch (dbError) {
      console.error("❌ [SPEECH API] Error saving speech to database:", dbError);
      // Continue anyway, don't fail the request
    }

    const responseData = {
      speech: generatedSpeech,
      wordCount: countWords(generatedSpeech),
      estimatedTime: estimateReadingTime(generatedSpeech),
      isAIGenerated: true,
      isPremium,
      dataCompleteness: determineDataCompleteness(formData),
      model: speechOptions.model,
      message: `Speech generated successfully using ${speechOptions.model}`
    };

    console.log('📤 [SPEECH API] Sending successful response:', {
      wordCount: responseData.wordCount,
      estimatedTime: responseData.estimatedTime,
      model: responseData.model,
      isAIGenerated: responseData.isAIGenerated,
      isPremium: responseData.isPremium,
      dataCompleteness: responseData.dataCompleteness
    });

    return NextResponse.json(responseData);

  } catch (error) {
    console.error("💥 [SPEECH API] Error generating speech:", error);

    // Provide more specific error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorType = error instanceof Error ? error.constructor.name : 'UnknownError';

    return NextResponse.json(
      {
        error: "AI service temporarily unavailable",
        message: "Please try again in a few moments.",
        debug: {
          errorType,
          errorMessage,
          hasOpenAIKey: !!process.env.OPENAI_API_KEY,
          environment: process.env.NODE_ENV || 'unknown',
          timestamp: new Date().toISOString()
        }
      },
      { status: 503 }
    );
  }
}

export async function GET() {
  console.log('🔍 [GET API] Simple test endpoint');

  try {
    // Test OpenAI initialization
    let openaiStatus = 'not_configured';
    let openaiError = null;

    if (process.env.OPENAI_API_KEY) {
      try {
        const { OpenAI } = await import('openai');
        const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        });
        openaiStatus = 'configured';
      } catch (err) {
        openaiStatus = 'error';
        openaiError = (err as Error).message;
      }
    }

    return NextResponse.json({
      message: "API is working",
      hasOpenAIKey: !!process.env.OPENAI_API_KEY,
      keyLength: process.env.OPENAI_API_KEY?.length || 0,
      keyPreview: `${process.env.OPENAI_API_KEY?.substring(0, 10)}...`,
      openaiStatus,
      openaiError,
      environment: process.env.NODE_ENV || 'unknown',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('🔍 [GET API] Error in test endpoint:', error);
    return NextResponse.json({
      message: "API error",
      error: (error as Error).message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

function getRoleTitle(role: string): string {
  const roleTitles: Record<string, string> = {
    'best-man': 'Best Man',
    'maid-of-honor': 'Maid of Honor',
    'father-of-bride': 'Father of the Bride',
    'mother-of-bride': 'Mother of the Bride',
    'groom': 'Groom',
    'bride': 'Bride'
  };

  return roleTitles[role] || 'Best Man';
}
