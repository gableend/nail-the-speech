import { type NextRequest, NextResponse } from "next/server";
import { generateWeddingSpeech, estimateReadingTime, countWords } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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
    // Get user authentication info
    const { userId } = await auth();
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
          message: "Please try again in a few moments."
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

    // Save speech to database with user association if authenticated
    try {
      console.log(`💾 [SPEECH API] Saving speech to database (${userId ? 'authenticated user' : 'anonymous'})`);
      await prisma.speech.create({
        data: {
          title: `${getRoleTitle(formData.selectedRole)} Speech for ${formData.groomName} & ${formData.brideName}`,
          content: generatedSpeech,
          role: formData.selectedRole || 'best-man',
          tone: formData.tone,
          length: formData.lengthPreference || 'medium',
          wordCount: countWords(generatedSpeech),
          estimatedTime: estimateReadingTime(generatedSpeech),
          isAIGenerated: true,
          formData: JSON.stringify(formData),
          userId: userId, // Will be null for anonymous users
          isCompleted: true
        }
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

    return NextResponse.json(
      {
        error: "AI service temporarily unavailable",
        message: "Please try again in a few moments."
      },
      { status: 503 }
    );
  }
}

export async function GET() {
  console.log('🔍 [GET API] Simple test endpoint');

  return NextResponse.json({
    message: "API is working",
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    keyLength: process.env.OPENAI_API_KEY?.length || 0,
    timestamp: new Date().toISOString()
  });
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
