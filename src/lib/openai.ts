import OpenAI from 'openai';
import { getRoleBySlug } from '@/data/speechRoles';

interface SpeechFormData {
  // Role Selection
  selectedRole: string;

  // Section 1: Essentials
  yourName: string;
  groomName: string;
  brideName: string;
  relationshipToGroom: string;
  tone: string;
  greatStoryMemory: string;

  // Section 2: Pro Features
  howLongKnown: string;
  sharedHobbiesJokes: string;
  groomIn3Words: string;
  whatYouAdmire: string;
  relationshipWithBride: string;
  momentSeenTogether: string;

  // Section 3: Premium Features
  mentionBrideEnding: boolean;
  includeShoutOuts: string;
  humorLevel: string;
  includeToastClosing: boolean;
  lengthPreference: string;
}

interface SpeechOptions {
  isPremium?: boolean;
  model?: 'gpt-3.5-turbo' | 'gpt-4';
  maxTokens?: number;
  regenerationInstructions?: string | null;
  isRegeneration?: boolean;
}

export async function generateWeddingSpeechStream(
  formData: SpeechFormData,
  options: SpeechOptions = {}
) {
  const {
    isPremium = false,
    model = 'gpt-3.5-turbo',
    maxTokens = 1000,
    regenerationInstructions = null,
    isRegeneration = false
  } = options;

  // Build the prompt based on form data and regeneration instructions
  const prompt = buildSpeechPrompt(formData, isPremium, regenerationInstructions);

  try {
    // Create OpenAI client fresh each time to avoid build-time issues
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    console.log('🤖 [OPENAI LIB] Calling OpenAI API with streaming...');

    const stream = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: "You are an expert wedding speech writer who creates heartfelt, personalized, and memorable speeches. You understand the nuances of different wedding roles and can adapt tone, length, and content accordingly. Your speeches are natural, engaging, and avoid clichés while incorporating personal details seamlessly. IMPORTANT: Always write speeches that meet the requested word count. A typical wedding speech should be at least 600 words. Never write a speech shorter than the minimum requested — expand with more stories, anecdotes, and heartfelt detail rather than cutting short."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
      stream: true,
    });

    return stream;
  } catch (error) {
    console.error('💥 [OPENAI LIB] Error generating speech with OpenAI streaming:', error);

    // Log specific error details
    if (error instanceof Error) {
      console.error('🔍 [OPENAI LIB] Error details:', {
        name: error.name,
        message: error.message,
        cause: error.cause
      });
    }

    throw new Error('Failed to generate speech. Please try again.');
  }
}

export async function generateWeddingSpeech(
  formData: SpeechFormData,
  options: SpeechOptions = {}
): Promise<string> {
  const { isPremium = false, model = 'gpt-3.5-turbo', maxTokens = 1000 } = options;

  // Build the prompt based on form data
  const prompt = buildSpeechPrompt(formData, isPremium);

  try {
    // Create OpenAI client fresh each time to avoid build-time issues
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    console.log('🤖 [OPENAI LIB] Calling OpenAI API...');

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: "You are an expert wedding speech writer who creates heartfelt, personalized, and memorable speeches. You understand the nuances of different wedding roles and can adapt tone, length, and content accordingly. Your speeches are natural, engaging, and avoid clichés while incorporating personal details seamlessly. IMPORTANT: Always write speeches that meet the requested word count. A typical wedding speech should be at least 600 words. Never write a speech shorter than the minimum requested — expand with more stories, anecdotes, and heartfelt detail rather than cutting short."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const generatedSpeech = completion.choices[0]?.message?.content;

    if (!generatedSpeech) {
      throw new Error('No speech content generated');
    }

    return generatedSpeech.trim();
  } catch (error) {
    console.error('💥 [OPENAI LIB] Error generating speech with OpenAI:', error);

    // Log specific error details
    if (error instanceof Error) {
      console.error('🔍 [OPENAI LIB] Error details:', {
        name: error.name,
        message: error.message,
        cause: error.cause
      });
    }

    throw new Error('Failed to generate speech. Please try again.');
  }
}

function buildSpeechPrompt(formData: SpeechFormData, isPremium: boolean, regenerationInstructions?: string | null): string {
  const {
    selectedRole,
    yourName,
    groomName,
    brideName,
    relationshipToGroom,
    tone,
    greatStoryMemory,
    howLongKnown,
    sharedHobbiesJokes,
    groomIn3Words,
    whatYouAdmire,
    relationshipWithBride,
    momentSeenTogether,
    mentionBrideEnding,
    includeShoutOuts,
    humorLevel,
    includeToastClosing,
    lengthPreference
  } = formData;

  // Role-specific context
  const roleContext = getRoleContext(selectedRole);

  // Tone guidance
  const toneGuidance = getToneGuidance(tone);

  // Length guidance
  const lengthGuidance = getLengthGuidance(lengthPreference || 'medium', isPremium);

  let prompt = `Write a ${tone} wedding speech for ${yourName} as the ${roleContext.title}.

SPEECH DETAILS:
- Speaker: ${yourName}
- Role: ${roleContext.title}
- Groom: ${groomName}
- Bride: ${brideName}
- Relationship to groom: ${relationshipToGroom}
- Tone: ${toneGuidance}
- Length: ${lengthGuidance}

CORE STORY/MEMORY:
${greatStoryMemory}

ADDITIONAL CONTEXT:`;

  // Add pro feature details if provided
  if (howLongKnown) prompt += `\n- Known ${groomName} for: ${howLongKnown}`;
  if (groomIn3Words) prompt += `\n- ${groomName} in 3 words: ${groomIn3Words}`;
  if (whatYouAdmire) prompt += `\n- What I admire about ${groomName}: ${whatYouAdmire}`;
  if (relationshipWithBride) prompt += `\n- Relationship with ${brideName}: ${relationshipWithBride}`;
  if (momentSeenTogether) prompt += `\n- Special moment between them: ${momentSeenTogether}`;
  if (sharedHobbiesJokes) prompt += `\n- Shared interests/jokes: ${sharedHobbiesJokes}`;

  // Add premium features if applicable
  if (isPremium) {
    if (mentionBrideEnding) prompt += `\n- Include a special message to ${brideName} at the end`;
    if (includeShoutOuts) prompt += `\n- Mention these people: ${includeShoutOuts}`;
    if (humorLevel && humorLevel !== 'none') prompt += `\n- Humor level: ${humorLevel}`;
    if (includeToastClosing) prompt += "\n- End with a traditional toast";
  }

  // Add regeneration instructions if this is a regeneration
  if (regenerationInstructions) {
    prompt += `

SPECIFIC CHANGES REQUESTED:
${regenerationInstructions}

Please incorporate these changes while maintaining the overall quality and structure of the speech.`;
  }

  prompt += `

REQUIREMENTS:
1. ${roleContext.requirements}
2. Use a natural, conversational tone that sounds like ${yourName} speaking
3. Incorporate the provided story/memory naturally into the speech
4. ${toneGuidance === 'light-funny' ? 'Include appropriate humor that gets laughs without being offensive' : ''}
5. ${toneGuidance === 'sentimental' ? 'Focus on emotional moments and heartfelt sentiments' : ''}
6. Make it feel personal and authentic, not generic
7. Include specific details provided to make it unique
8. ${lengthGuidance}
9. End with a toast to the couple

Please write the complete speech now:`;

  return prompt;
}

function getRoleContext(role: string) {
  const roleContexts = {
    'best-man': {
      title: 'Best Man',
      requirements: 'Include your friendship with the groom, how you met, and why you\'re honored to be his best man'
    },
    'maid-of-honor': {
      title: 'Maid of Honor',
      requirements: 'Include your friendship with the bride, special memories together, and your joy for her happiness'
    },
    'father-of-bride': {
      title: 'Father of the Bride',
      requirements: 'Include pride in your daughter, memories of her growing up, and welcoming the groom to the family'
    },
    'mother-of-bride': {
      title: 'Mother of the Bride',
      requirements: 'Include love for your daughter, special mother-daughter moments, and joy for her new journey'
    },
    'groom': {
      title: 'Groom',
      requirements: 'Include gratitude to everyone present, love for your bride, and appreciation for family and friends'
    },
    'bride': {
      title: 'Bride',
      requirements: 'Include thanks to family and friends, love for your groom, and excitement for your future together'
    }
  };

  if (roleContexts[role as keyof typeof roleContexts]) {
    return roleContexts[role as keyof typeof roleContexts];
  }

  // Dynamic fallback for all other roles: derive a sensible title and requirements from the slug
  const found = getRoleBySlug(role);
  const label = found ? found.label : role.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

  return {
    title: label,
    requirements: `You are writing a wedding speech as the ${label}. Include your personal connection to the couple, meaningful memories, and warm wishes for their future together. Tailor the content to reflect the unique perspective of someone in this role.`
  };
}

function getToneGuidance(tone: string): string {
  const toneMap = {
    'light-funny': 'Light-hearted and humorous, but tasteful and wedding-appropriate',
    'sentimental': 'Heartfelt and emotional, focusing on deep feelings and meaningful moments',
    'balanced': 'A good mix of humor and sentiment, keeping the audience engaged and moved',
    'clean-roast': 'Playfully teasing but respectful, with gentle humor about the groom/bride'
  };

  return toneMap[tone as keyof typeof toneMap] || toneMap.balanced;
}

function getLengthGuidance(length: string, isPremium: boolean): string {
  const lengthMap = {
    'short': 'Aim for 3 minutes (approximately 450-500 words). This is NOT optional — the speech MUST be at least 450 words.',
    'medium': 'Aim for 4-5 minutes (approximately 600-750 words). This is NOT optional — the speech MUST be at least 600 words. Write a full, complete speech with rich detail.',
    'long': 'Aim for 6-7 minutes (approximately 900-1050 words). This is NOT optional — the speech MUST be at least 900 words.'
  };

  // Free tier gets medium length max
  if (!isPremium && length === 'long') {
    return lengthMap.medium;
  }

  return lengthMap[length as keyof typeof lengthMap] || lengthMap.medium;
}

// Utility function to estimate speech reading time
export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 150; // Average speaking pace
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Utility function to count words in speech
export function countWords(text: string): number {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}
