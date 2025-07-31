import type { NextRequest } from "next/server";
import { generateWeddingSpeechStream } from "@/lib/openai";
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
  console.log('🎤 [SPEECH STREAM API] Speech generation stream request received');

  try {
    // Get user authentication info or anonymous user ID
    let userId = null;
    let anonUserId = null;

    try {
      const authResult = await auth();
      userId = authResult.userId;
      console.log('👤 [SPEECH STREAM API] Authenticated user:', { userId });
    } catch (authError) {
      console.log('👤 [SPEECH STREAM API] No authenticated user, using anonymous mode');
    }

    // If no authenticated user, get or create anonymous user
    if (!userId) {
      anonUserId = await getOrCreateAnonymousUser();
      console.log('👤 [SPEECH STREAM API] Anonymous user ID:', { anonUserId });
    }

    const formData = await request.json();

    console.log('📝 [SPEECH STREAM API] Form data received:', {
      role: formData.selectedRole,
      tone: formData.tone,
      length: formData.lengthPreference || 'medium',
      hasStory: !!formData.greatStoryMemory,
      fieldsCount: Object.keys(formData).length,
      userLoggedIn: !!userId,
      userId: userId || 'anonymous',
      isRegeneration: !!formData.isRegeneration,
      hasCustomInstructions: !!formData.regenerationInstructions
    });

    // Validate required fields for speech generation
    if (!formData.yourName || !formData.groomName || !formData.brideName ||
        !formData.relationshipToGroom || !formData.tone || !formData.greatStoryMemory) {
      console.log('❌ [SPEECH STREAM API] Validation failed - missing required fields');
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          details: "Please provide your name, groom's name, bride's name, your relationship to the groom, tone, and a story/memory."
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('✅ [SPEECH STREAM API] Validation passed - all required fields present');

    // Check if OpenAI is configured
    if (!process.env.OPENAI_API_KEY) {
      console.warn("🚫 [SPEECH STREAM API] OpenAI API key not configured, service unavailable");

      return new Response(
        JSON.stringify({
          error: "AI service temporarily unavailable",
          message: "OpenAI API key not configured. Please check environment variables."
        }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Set default length if not provided
    if (!formData.lengthPreference) {
      formData.lengthPreference = 'medium';
    }

    // For now, everyone gets free tier access (no premium features)
    const isPremium = false;

    // Choose model based on premium status
    const speechOptions = {
      isPremium,
      model: 'gpt-3.5-turbo' as const,
      maxTokens: 1000,
      regenerationInstructions: formData.regenerationInstructions || null,
      isRegeneration: formData.isRegeneration || false
    };

    console.log('🤖 [SPEECH STREAM API] Starting OpenAI streaming generation with options:', {
      model: speechOptions.model,
      isPremium: speechOptions.isPremium,
      maxTokens: speechOptions.maxTokens,
      dataCompleteness: determineDataCompleteness(formData),
      isRegeneration: speechOptions.isRegeneration,
      hasCustomInstructions: !!speechOptions.regenerationInstructions
    });

    // Create readable stream for streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Generate speech with OpenAI streaming
          const speechStream = await generateWeddingSpeechStream(formData, speechOptions);

          let fullSpeech = '';

          for await (const chunk of speechStream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              fullSpeech += content;

              // Send the chunk to the client
              const data = JSON.stringify({
                type: 'chunk',
                content: content,
                fullContent: fullSpeech
              });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }

          console.log('🎉 [SPEECH STREAM API] OpenAI streaming generation completed successfully!', {
            speechLength: fullSpeech.length,
            wordCount: fullSpeech.split(/\s+/).filter(word => word.length > 0).length
          });

          // Save speech to database with user association (authenticated or anonymous)
          try {
            const userType = userId ? 'authenticated user' : 'anonymous user';
            console.log(`💾 [SPEECH STREAM API] Saving speech to database (${userType})`);

            const speechData = {
              title: `${getRoleTitle(formData.selectedRole)} Speech for ${formData.groomName} & ${formData.brideName}`,
              content: fullSpeech,
              role: formData.selectedRole || 'best-man',
              tone: formData.tone,
              length: formData.lengthPreference || 'medium',
              wordCount: fullSpeech.split(/\s+/).filter(word => word.length > 0).length,
              estimatedTime: Math.ceil(fullSpeech.split(/\s+/).filter(word => word.length > 0).length / 150),
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

            console.log('✅ [SPEECH STREAM API] Speech saved to database successfully');
          } catch (dbError) {
            console.error("❌ [SPEECH STREAM API] Error saving speech to database:", dbError);
          }

          // Send completion message
          const completionData = JSON.stringify({
            type: 'complete',
            speech: fullSpeech,
            wordCount: fullSpeech.split(/\s+/).filter(word => word.length > 0).length,
            estimatedTime: Math.ceil(fullSpeech.split(/\s+/).filter(word => word.length > 0).length / 150),
            dataCompleteness: determineDataCompleteness(formData)
          });
          controller.enqueue(encoder.encode(`data: ${completionData}\n\n`));
          controller.close();

        } catch (error) {
          console.error("💥 [SPEECH STREAM API] Error in streaming generation:", error);
          const errorData = JSON.stringify({
            type: 'error',
            error: 'Failed to generate speech. Please try again.'
          });
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error("💥 [SPEECH STREAM API] Error in speech generation:", error);
    return new Response(
      JSON.stringify({
        error: "AI service temporarily unavailable",
        message: "Please try again in a few moments."
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
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
