import type { NextRequest } from "next/server";
import { generateWeddingSpeechStream, generateRefinementStream, classifyInstruction } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { checkProStatusForRequest, countUserSpeeches } from "@/lib/userStatus";
import { getRoleBySlug } from "@/data/speechRoles";
import { rateLimit } from "@/lib/rateLimit";

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
    // Get user authentication info
    let userId = null;
    let anonUserId = null;

    try {
      const authResult = await auth();
      userId = authResult.userId;
      console.log('👤 [SPEECH STREAM API] Authenticated user:', { userId });
    } catch (authError) {
      console.log('👤 [SPEECH STREAM API] No authenticated user, using anonymous mode');
    }

    const formData = await request.json();

    // If no authenticated user, use the client-sent anonymous user ID
    console.log('👤 [SPEECH STREAM API] userId check:', { userId, hasClientAnonId: !!formData.clientAnonUserId, clientAnonId: formData.clientAnonUserId });
    if (!userId) {
      anonUserId = formData.clientAnonUserId || null;
      console.log('👤 [SPEECH STREAM API] Using client anonymous ID:', { anonUserId });
    }

    // Rate limit: 10 generations per hour per user/IP
    const rateLimitKey = userId || anonUserId || request.headers.get('x-forwarded-for') || 'unknown';
    const { allowed, remaining } = rateLimit(rateLimitKey, 10, 60 * 60 * 1000);
    if (!allowed) {
      console.log('🚫 [SPEECH STREAM API] Rate limit exceeded', { rateLimitKey });
      return new Response(
        JSON.stringify({
          error: "rate_limited",
          message: "You're generating speeches too quickly. Please wait a while before trying again."
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json', 'X-RateLimit-Remaining': '0' }
        }
      );
    }
    console.log(`⏱️ [SPEECH STREAM API] Rate limit OK (${remaining} remaining)`);

    // Check Pro status
    const isProUser = await checkProStatusForRequest(userId, anonUserId);

    // Gate: Block regeneration for non-Pro users
    if (formData.isRegeneration && !isProUser) {
      console.log('🚫 [SPEECH STREAM API] Regeneration blocked - user is not Pro');
      return new Response(
        JSON.stringify({
          error: "pro_required",
          message: "Upgrade to Pro to regenerate and edit your speech."
        }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Gate: Cap regenerations at 15 for Pro users
    const MAX_REGENERATIONS = 15;
    if (formData.isRegeneration && isProUser && formData.existingSpeechId) {
      const existingSpeech = await prisma.speech.findUnique({
        where: { id: formData.existingSpeechId },
        select: { regenCount: true },
      });
      if (existingSpeech && existingSpeech.regenCount >= MAX_REGENERATIONS) {
        console.log('🚫 [SPEECH STREAM API] Regeneration cap reached', { regenCount: existingSpeech.regenCount });
        return new Response(
          JSON.stringify({
            error: "regen_limit_reached",
            message: `You've used all ${MAX_REGENERATIONS} regenerations for this speech. You can still edit it directly using the inline editor.`
          }),
          {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Gate: Block 2nd+ generation for non-Pro users
    if (!formData.isRegeneration && !isProUser) {
      const speechCount = await countUserSpeeches(userId, anonUserId);
      if (speechCount >= 1) {
        console.log('🚫 [SPEECH STREAM API] Free generation limit reached', { speechCount });
        return new Response(
          JSON.stringify({
            error: "free_generation_limit",
            message: "You've used your free speech generation. Upgrade to Pro to generate more speeches."
          }),
          {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    console.log('📝 [SPEECH STREAM API] Form data received:', {
      role: formData.selectedRole,
      tone: formData.tone,
      length: formData.lengthPreference || 'medium',
      hasStory: !!formData.greatStoryMemory,
      fieldsCount: Object.keys(formData).length,
      userLoggedIn: !!userId,
      userId: userId || 'anonymous',
      isRegeneration: !!formData.isRegeneration,
      hasCustomInstructions: !!formData.regenerationInstructions,
      isProUser
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

    // ── Determine action type: refine vs start_over vs generate ───────
    const refinementInstruction = formData.refinementInstruction || formData.regenerationInstructions || null;
    const existingSpeechContent = formData.existingSpeechContent || null;
    const isRefinement = formData.isRefinement === true;
    const isStartOver = formData.isStartOver === true;

    // Server-side classification as failsafe
    let actionType: 'generate' | 'refine' | 'start_over' = 'generate';
    if (isRefinement && existingSpeechContent && refinementInstruction) {
      // Double-check with server-side classifier
      const classified = classifyInstruction(refinementInstruction);
      actionType = classified === 'start_over' ? 'start_over' : 'refine';
    } else if (isStartOver || (formData.isRegeneration && !isRefinement)) {
      actionType = 'start_over';
    }

    // Model routing: refinements use gpt-4o-mini, full generation uses gpt-4o
    const modelForAction = actionType === 'refine' ? 'gpt-4o-mini' : 'gpt-4o';
    const maxTokensForAction = actionType === 'refine' ? 1500 : 2000;

    console.log('🤖 [SPEECH STREAM API] Starting OpenAI streaming generation with options:', {
      actionType,
      model: modelForAction,
      isPremium: isProUser,
      maxTokens: maxTokensForAction,
      dataCompleteness: determineDataCompleteness(formData),
      isRegeneration: formData.isRegeneration || false,
      hasCustomInstructions: !!refinementInstruction
    });

    // Create readable stream for streaming response
    const encoder = new TextEncoder();
    const startTime = Date.now();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // ── Route to correct stream based on action type ───────
          let speechStream;
          if (actionType === 'refine' && existingSpeechContent && refinementInstruction) {
            // Refinement: use cheaper model with surgical edit prompt
            speechStream = await generateRefinementStream(
              existingSpeechContent,
              refinementInstruction,
              formData,
              { model: modelForAction, maxTokens: maxTokensForAction }
            );
          } else {
            // Full generation or start over: use GPT-4o
            const speechOptions = {
              isPremium: isProUser,
              model: modelForAction as 'gpt-4o',
              maxTokens: maxTokensForAction,
              regenerationInstructions: refinementInstruction,
              isRegeneration: actionType === 'start_over' || formData.isRegeneration || false
            };
            speechStream = await generateWeddingSpeechStream(formData, speechOptions);
          }

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

          const generationTimeMs = Date.now() - startTime;
          console.log('🎉 [SPEECH STREAM API] OpenAI streaming generation completed successfully!', {
            actionType,
            model: modelForAction,
            speechLength: fullSpeech.length,
            wordCount: fullSpeech.split(/\s+/).filter(word => word.length > 0).length,
            generationTimeMs
          });

          // Save speech to database — update existing or create new
          let savedSpeechId: string | null = null;
          try {
            const existingSpeechId = formData.existingSpeechId || null;
            const userType = userId ? 'authenticated user' : 'anonymous user';
            console.log(`💾 [SPEECH STREAM API] Saving speech (${userType}, ${existingSpeechId ? 'update' : 'create'})`);

            const wordCount = fullSpeech.split(/\s+/).filter((word: string) => word.length > 0).length;
            const speechFields = {
              title: `${getRoleTitle(formData.selectedRole, formData.customRoleLabel)} Speech for ${formData.groomName} & ${formData.brideName}`,
              content: fullSpeech,
              role: formData.selectedRole || 'best-man',
              tone: formData.tone,
              length: formData.lengthPreference || 'medium',
              wordCount,
              estimatedTime: Math.ceil(wordCount / 150),
              isAIGenerated: true,
              formData: JSON.stringify(formData),
              isCompleted: true
            };

            if (existingSpeechId) {
              // --- Version history: save old content before overwriting ---
              const oldSpeech = await prisma.speech.findUnique({
                where: { id: existingSpeechId },
                select: { content: true },
              });

              const maxVersion = await prisma.speechVersion.aggregate({
                where: { speechId: existingSpeechId },
                _max: { versionNumber: true },
              });
              let nextVersion = (maxVersion._max.versionNumber ?? 0) + 1;

              // First regeneration: save original content as v1
              if (nextVersion === 1 && oldSpeech?.content) {
                await prisma.speechVersion.create({
                  data: { speechId: existingSpeechId, content: oldSpeech.content, versionNumber: 1 },
                });
                nextVersion = 2;
              }

              // Save new content as next version
              await prisma.speechVersion.create({
                data: { speechId: existingSpeechId, content: fullSpeech, versionNumber: nextVersion },
              });

              // Update the speech — increment regenCount for start_over, refineCount for refine
              const incrementField = actionType === 'refine'
                ? { refineCount: { increment: 1 } }
                : { regenCount: { increment: 1 } };

              const updatedSpeech = await prisma.speech.update({
                where: { id: existingSpeechId },
                data: { ...speechFields, ...incrementField },
              });
              savedSpeechId = updatedSpeech.id;
              console.log(`📚 [SPEECH STREAM API] Saved version ${nextVersion} for speech ${savedSpeechId}`);
            } else {
              // Create new speech + save initial version
              const savedSpeech = await prisma.speech.create({
                data: { ...speechFields, regenCount: 0, userId, anonUserId },
              });
              savedSpeechId = savedSpeech.id;

              // Save initial content as v1
              await prisma.speechVersion.create({
                data: { speechId: savedSpeech.id, content: fullSpeech, versionNumber: 1 },
              });
            }

            console.log('✅ [SPEECH STREAM API] Speech saved successfully', { speechId: savedSpeechId, mode: existingSpeechId ? 'update' : 'create' });
          } catch (dbError: unknown) {
            const errMsg = dbError instanceof Error ? dbError.message : String(dbError);
            const errStack = dbError instanceof Error ? dbError.stack : '';
            console.error("❌ [SPEECH STREAM API] Error saving speech to database:", errMsg);
            console.error("❌ [SPEECH STREAM API] DB error stack:", errStack);
            console.error("❌ [SPEECH STREAM API] Speech data that failed:", JSON.stringify({ userId, anonUserId }));
          }

          // ── Usage logging ─────────────────────────────────────────
          try {
            await prisma.usageLog.create({
              data: {
                speechId: savedSpeechId,
                userId,
                anonUserId,
                action: actionType,
                model: modelForAction,
                instruction: refinementInstruction?.substring(0, 500) || null,
                // Token counts not available from streaming — leave null
              },
            });
            console.log('📊 [SPEECH STREAM API] Usage logged:', { actionType, model: modelForAction });
          } catch (logError) {
            console.error('⚠️ [SPEECH STREAM API] Failed to log usage:', logError);
          }

          // Fetch updated counts for the frontend credit system
          let regenCount = 0;
          let refineCount = 0;
          if (savedSpeechId) {
            try {
              const updatedSpeech = await prisma.speech.findUnique({
                where: { id: savedSpeechId },
                select: { regenCount: true, refineCount: true },
              });
              regenCount = updatedSpeech?.regenCount ?? 0;
              refineCount = updatedSpeech?.refineCount ?? 0;
            } catch { /* non-critical */ }
          }

          // Send completion message with speechId and Pro status
          const completionData = JSON.stringify({
            type: 'complete',
            speech: fullSpeech,
            speechId: savedSpeechId,
            isProUser,
            actionType,
            model: modelForAction,
            regenCount,
            refineCount,
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

function getRoleTitle(role: string, customLabel?: string): string {
  if (role === 'other' && customLabel) return customLabel;
  const found = getRoleBySlug(role);
  return found ? found.label : 'Wedding Speech';
}
