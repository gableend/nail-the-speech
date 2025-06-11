import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { generateWeddingSpeech, estimateReadingTime, countWords } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

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
    const { userId } = await auth();
    console.log('🔐 [SPEECH API] User authentication:', userId ? 'authenticated' : 'anonymous');

    const formData = await request.json();
    console.log('📝 [SPEECH API] Form data received:', Object.keys(formData));
    
    // Determine data completeness
    const dataCompleteness = determineDataCompleteness(formData);
    console.log('📊 [SPEECH API] Data completeness level:', dataCompleteness);

    // Generate speech based on data completeness and user authentication
    const speechData = {
      ...formData,
      userLoggedIn: !!userId
    };

    console.log('🤖 [SPEECH API] Starting speech generation...');
    const speechContent = await generateWeddingSpeech(speechData);
    
    if (!speechContent) {
      console.error('❌ [SPEECH API] No speech content generated');
      return NextResponse.json(
        { error: "Failed to generate speech content" },
        { status: 500 }
      );
    }

    console.log('✅ [SPEECH API] Speech generated successfully');
    console.log('📏 [SPEECH API] Content length:', speechContent.length, 'characters');
    
    // Calculate reading time and word count
    const wordCount = countWords(speechContent);
    const readingTime = estimateReadingTime(speechContent);
    
    console.log('📊 [SPEECH API] Speech stats - Words:', wordCount, 'Reading time:', readingTime, 'minutes');

    // Check if user exists and is authenticated for database operations
    let userRecord = null;
    if (userId) {
      try {
        // Try to find existing user record by Clerk user ID
        userRecord = await prisma.user.findUnique({
          where: { id: userId },
        });

        // If no user record exists, we can optionally create one
        // For now, we'll just log this situation
        if (!userRecord) {
          console.log('ℹ️ [SPEECH API] No user record found for Clerk user ID:', userId);
        }
      } catch (error) {
        console.error('⚠️ [SPEECH API] Error checking user record:', error);
      }
    }

    // Prepare response data
    const responseData = {
      speech: speechContent,
      wordCount,
      readingTime,
      dataCompleteness,
      role: formData.role || 'best-man',
      occasionType: formData.occasionType || 'wedding'
    };

    // Save to database if user is authenticated
    if (userId) {
      console.log('💾 [SPEECH API] Saving speech to database for user:', userId);
      
      try {
        const savedSpeech = await prisma.speech.create({
          data: {
            content: speechContent,
            role: formData.role || 'best-man',
            occasionType: formData.occasionType || 'wedding',
            tone: formData.tone || 'heartfelt',
            length: formData.lengthPreference || 'medium',
            wordCount,
            readingTime,
            dataCompleteness,
            // Use the Clerk user ID directly
            userId: userId,
          },
        });
        
        console.log('✅ [SPEECH API] Speech saved with ID:', savedSpeech.id);
        responseData.speechId = savedSpeech.id;
      } catch (saveError) {
        console.error('❌ [SPEECH API] Failed to save speech:', saveError);
        // Don't fail the whole request if saving fails
        console.log('⚠️ [SPEECH API] Continuing without saving to database');
      }
    } else {
      console.log('ℹ️ [SPEECH API] User not authenticated, skipping database save');
    }

    console.log('🎉 [SPEECH API] Request completed successfully');
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('❌ [SPEECH API] Error in speech generation:', error);
    return NextResponse.json(
      { 
        error: "Failed to generate speech",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
EOF  
cd /home/project && cd nail-the-speech && cat > src/app/api/generate-speech/route.ts << 'EOF'
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { generateWeddingSpeech, estimateReadingTime, countWords } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

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
    const { userId } = await auth();
    console.log('🔐 [SPEECH API] User authentication:', userId ? 'authenticated' : 'anonymous');

    const formData = await request.json();
    console.log('📝 [SPEECH API] Form data received:', Object.keys(formData));
    
    // Determine data completeness
    const dataCompleteness = determineDataCompleteness(formData);
    console.log('📊 [SPEECH API] Data completeness level:', dataCompleteness);

    // Generate speech based on data completeness and user authentication
    const speechData = {
      ...formData,
      userLoggedIn: !!userId
    };

    console.log('🤖 [SPEECH API] Starting speech generation...');
    const speechContent = await generateWeddingSpeech(speechData);
    
    if (!speechContent) {
      console.error('❌ [SPEECH API] No speech content generated');
      return NextResponse.json(
        { error: "Failed to generate speech content" },
        { status: 500 }
      );
    }

    console.log('✅ [SPEECH API] Speech generated successfully');
    console.log('📏 [SPEECH API] Content length:', speechContent.length, 'characters');
    
    // Calculate reading time and word count
    const wordCount = countWords(speechContent);
    const readingTime = estimateReadingTime(speechContent);
    
    console.log('📊 [SPEECH API] Speech stats - Words:', wordCount, 'Reading time:', readingTime, 'minutes');

    // Check if user exists and is authenticated for database operations
    let userRecord = null;
    if (userId) {
      try {
        // Try to find existing user record by Clerk user ID
        userRecord = await prisma.user.findUnique({
          where: { id: userId },
        });

        // If no user record exists, we can optionally create one
        // For now, we'll just log this situation
        if (!userRecord) {
          console.log('ℹ️ [SPEECH API] No user record found for Clerk user ID:', userId);
        }
      } catch (error) {
        console.error('⚠️ [SPEECH API] Error checking user record:', error);
      }
    }

    // Prepare response data
    const responseData = {
      speech: speechContent,
      wordCount,
      readingTime,
      dataCompleteness,
      role: formData.role || 'best-man',
      occasionType: formData.occasionType || 'wedding'
    };

    // Save to database if user is authenticated
    if (userId) {
      console.log('💾 [SPEECH API] Saving speech to database for user:', userId);
      
      try {
        const savedSpeech = await prisma.speech.create({
          data: {
            content: speechContent,
            role: formData.role || 'best-man',
            occasionType: formData.occasionType || 'wedding',
            tone: formData.tone || 'heartfelt',
            length: formData.lengthPreference || 'medium',
            wordCount,
            readingTime,
            dataCompleteness,
            // Use the Clerk user ID directly
            userId: userId,
          },
        });
        
        console.log('✅ [SPEECH API] Speech saved with ID:', savedSpeech.id);
        responseData.speechId = savedSpeech.id;
      } catch (saveError) {
        console.error('❌ [SPEECH API] Failed to save speech:', saveError);
        // Don't fail the whole request if saving fails
        console.log('⚠️ [SPEECH API] Continuing without saving to database');
      }
    } else {
      console.log('ℹ️ [SPEECH API] User not authenticated, skipping database save');
    }

    console.log('🎉 [SPEECH API] Request completed successfully');
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('❌ [SPEECH API] Error in speech generation:', error);
    return NextResponse.json(
      { 
        error: "Failed to generate speech",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
