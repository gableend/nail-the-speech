"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Users, Clock, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { countWords, estimateReadingTime } from "@/lib/openai";
import VoiceInput from "@/components/VoiceInput";
import { getOrCreateAnonymousUserId } from "@/lib/clientAnonymousUser";
import ProUpgradePrompt from "@/components/ProUpgradePrompt";
import { useProStatus } from "@/hooks/useProStatus";

interface FormData {
  // Role Selection (if needed)
  selectedRole: string;

  // Section 1: Essentials (Required to Generate a Free Speech)
  yourName: string;
  groomName: string;
  brideName: string;
  relationshipToGroom: string;
  tone: string;
  lengthPreference: string;
  greatStoryMemory: string;

  // Section 2: Pro Features (Optional – Adds Personality & Emotional Depth)
  howLongKnown: string;
  sharedHobbiesJokes: string;
  groomIn3Words: string;
  whatYouAdmire: string;
  relationshipWithBride: string;
  momentSeenTogether: string;

  // Section 3: Optional Extras (Premium Unlock or Power User Inputs)
  mentionBrideEnding: boolean;
  includeShoutOuts: string;
  humorLevel: string;
  includeToastClosing: boolean;

  // Internal tracking (optional, used during restoration)
  generatedFromStep?: number;
}

const getRoleTitle = (role: string): string => {
  switch (role) {
    case 'best-man': return 'Best Man';
    case 'maid-of-honor': return 'Maid of Honor';
    case 'father-of-bride': return 'Father of Bride';
    case 'mother-of-bride': return 'Mother of Bride';
    case 'groom': return 'Groom';
    case 'bride': return 'Bride';
    default: return 'Wedding';
  }
};

function GeneratorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if user came from a specific role link, generic CTA, or edit link
  const roleFromUrl = searchParams.get('role');
  const stepFromUrl = searchParams.get('step');
  const speechIdFromUrl = searchParams.get('speechId');
  const paymentSuccess = searchParams.get('success') === 'true';
  const paymentCanceled = searchParams.get('canceled') === 'true';
  const sessionId = searchParams.get('session_id');
  const needsRoleSelection = !roleFromUrl && !speechIdFromUrl;
  const initialStep = stepFromUrl ? Number.parseInt(stepFromUrl) : (needsRoleSelection ? 0 : 1);
  const totalSteps = needsRoleSelection ? 4 : 3;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [demoMode, setDemoMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRestored, setIsRestored] = useState(false);

  // New state for Step 2: Speech Outline Generation
  const [generatedSpeech, setGeneratedSpeech] = useState<string>("");
  const [editCount, setEditCount] = useState(0);
  const [speechGenerated, setSpeechGenerated] = useState(false);
  const [speechError, setSpeechError] = useState<string>("");
  const MAX_FREE_EDITS = 2;

  // Regeneration with instructions state
  const [regenerationInstructions, setRegenerationInstructions] = useState("");
  const [selectedPill, setSelectedPill] = useState<string | null>(null);
  const [showProModal, setShowProModal] = useState(false);
  const { isProUser, loading: proStatusLoading } = useProStatus();
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(paymentSuccess);
  const [showPaymentCanceled, setShowPaymentCanceled] = useState(paymentCanceled);

  const [formData, setFormData] = useState<FormData>({
    // Role Selection (if needed)
    selectedRole: roleFromUrl || "",

    // Section 1: Essentials (Required to Generate a Free Speech)
    yourName: "",
    groomName: "",
    brideName: "",
    relationshipToGroom: "",
    tone: "",
    lengthPreference: "",
    greatStoryMemory: "",

    // Section 2: Pro Features (Optional – Adds Personality & Emotional Depth)
    howLongKnown: "",
    sharedHobbiesJokes: "",
    groomIn3Words: "",
    whatYouAdmire: "",
    relationshipWithBride: "",
    momentSeenTogether: "",

    // Section 3: Optional Extras (Premium Unlock or Power User Inputs)
    mentionBrideEnding: false,
    includeShoutOuts: "",
    humorLevel: "",
    includeToastClosing: false,
  });

  // Initialize anonymous user and restore form data when user comes back from result page
  useEffect(() => {
    // Ensure anonymous user ID is created for tracking
    getOrCreateAnonymousUserId();

    // If editing an existing speech, load it
    if (speechIdFromUrl) {
      const loadSpeechForEdit = async () => {
        try {
          console.log('🔄 Loading speech for edit:', speechIdFromUrl);
          const response = await fetch(`/api/speech/${speechIdFromUrl}`);
          if (response.ok) {
            const speechData = await response.json();
            console.log('✅ Speech loaded for edit:', speechData);

            // Parse the stored form data and set it
            if (speechData.formData) {
              const parsedFormData = JSON.parse(speechData.formData);
              setFormData(parsedFormData);
            }

            // Set the generated speech
            setGeneratedSpeech(speechData.content);
            setSpeechGenerated(true);

            console.log('🎯 Speech loaded and ready for editing');
          } else {
            console.error('❌ Failed to load speech for edit');
          }
        } catch (error) {
          console.error('❌ Error loading speech for edit:', error);
        }
      };

      loadSpeechForEdit();
      return; // Skip the normal restore logic when editing
    }

    const restoreData = localStorage.getItem('restoreFormData');
    if (restoreData) {
      try {
        const parsedData = JSON.parse(restoreData);

        // Extract the step they generated from and the form data
        const { generatedFromStep, ...formDataOnly } = parsedData;
        setFormData(formDataOnly);

        // Restore them to the exact step they were on when they hit generate
        if (typeof generatedFromStep === 'number') {
          setCurrentStep(generatedFromStep);
          setIsRestored(true);
          // Hide the restored indicator after 3 seconds
          setTimeout(() => setIsRestored(false), 3000);
          console.log('Restored to step:', generatedFromStep);
        } else {
          // Fallback to step detection if generatedFromStep is missing (backward compatibility)
          console.log('No generatedFromStep found, using fallback detection');
          if (parsedData.yourName && parsedData.groomName && parsedData.brideName &&
              parsedData.relationshipToGroom && parsedData.tone && parsedData.lengthPreference &&
              parsedData.greatStoryMemory) {
            setCurrentStep(needsRoleSelection ? 2 : 1); // Default to pro step
          } else if (parsedData.selectedRole) {
            setCurrentStep(needsRoleSelection ? 1 : 0); // Essentials step
          }
        }

        // Clear the restore data
        localStorage.removeItem('restoreFormData');
      } catch (error) {
        console.error('Failed to restore form data:', error);
      }
    }
  }, [needsRoleSelection, speechIdFromUrl]);

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // If demo mode is on and user changes role, update with new role's demo data
    if (demoMode && field === 'selectedRole' && typeof value === 'string') {
      const newDemoData = getDemoData(value);
      setFormData(prev => ({ ...prev, ...newDemoData, selectedRole: value }));
    }
  };

  const getDemoData = (role: string) => {
    const demoData: Record<string, Partial<FormData>> = {
      'best-man': {
        yourName: "Michael",
        groomName: "James",
        brideName: "Sarah",
        relationshipToGroom: "best friends since college",
        tone: "balanced",
        lengthPreference: "medium",
        greatStoryMemory: "I'll never forget when James tried to impress Sarah by cooking dinner for her on their third date. He called me in a panic because he'd burned the chicken and set off the smoke alarm. We spent an hour at the grocery store buying ingredients for plan B - pasta. Sarah still says it was the most memorable date because James was so genuine about the disaster. That's when I knew he was completely smitten.",
        howLongKnown: "8 years",
        sharedHobbiesJokes: "We both love hiking and have an ongoing debate about who's the better fantasy football manager",
        groomIn3Words: "loyal, funny, caring",
        whatYouAdmire: "James has this incredible ability to make anyone feel welcome. He's the guy who remembers your birthday, checks in when you're having a tough time, and always shows up when you need him. He's become an even better version of himself since meeting Sarah.",
        relationshipWithBride: "I've gotten to know Sarah well over the past few years",
        momentSeenTogether: "Last Christmas, I watched them decorate their tree together. James kept trying to direct where ornaments should go, and Sarah would just smile and move them when he wasn't looking. When he finally noticed, instead of being annoyed, he just laughed and said 'your way is better.' That's when I knew they were perfect for each other."
      },
      'maid-of-honor': {
        yourName: "Emma",
        groomName: "David",
        brideName: "Jessica",
        relationshipToGroom: "We've become close friends",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "Jessica called me crying tears of joy after her first date with David. She said she'd never met someone who listened so intently when she talked about her dreams. He asked about her work at the animal shelter and genuinely wanted to know about every rescue story. That night, she said 'Emma, I think I just met my person.' And she was absolutely right.",
        howLongKnown: "15 years - since we were college roommates",
        sharedHobbiesJokes: "We have matching friendship bracelets and still do our Sunday coffee dates",
        groomIn3Words: "thoughtful, patient, devoted",
        whatYouAdmire: "Jessica has the biggest heart of anyone I know. She sees the good in everyone and has this gift for making people feel loved and accepted exactly as they are.",
        relationshipWithBride: "She's my sister in every way that matters",
        momentSeenTogether: "At Jessica's birthday last year, David surprised her by donating to the animal shelter in her name and arranging for all her friends to volunteer for a day. Watching her face light up, and seeing how proud he was to make her happy, I knew he truly understood what makes her heart sing."
      },
      'father-of-bride': {
        yourName: "Robert",
        groomName: "Alexander",
        brideName: "Emily",
        relationshipToGroom: "I've grown to love him like a son",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "The first time Alexander came to Sunday dinner, Emily was nervous about how we'd all get along. Within an hour, he was helping me fix the fence in the backyard and asking thoughtful questions about Emily's childhood. When Emily's mom brought out baby photos, instead of looking embarrassed, Alexander studied each one with genuine interest. That's when I knew he truly wanted to be part of our family.",
        howLongKnown: "3 years",
        sharedHobbiesJokes: "We bond over terrible dad jokes and he actually laughs at mine",
        groomIn3Words: "respectful, genuine, devoted",
        whatYouAdmire: "Emily has always been independent and strong-willed - qualities that make me incredibly proud. She's compassionate, intelligent, and has never been afraid to stand up for what she believes in.",
        relationshipWithBride: "She's my daughter and my pride and joy",
        momentSeenTogether: "Last Thanksgiving, I watched Alexander quietly help Emily's grandmother to her seat and spend the entire dinner patiently listening to her stories he'd heard before. Emily looked at him with such love and gratitude. In that moment, I knew she'd found someone who would cherish not just her, but our entire family."
      },
      'mother-of-bride': {
        yourName: "Margaret",
        groomName: "Thomas",
        brideName: "Catherine",
        relationshipToGroom: "He's become like another son to me",
        tone: "light-funny",
        lengthPreference: "medium",
        greatStoryMemory: "When Catherine brought Thomas home for the first time, she warned me he was 'a little nervous about meeting mom.' What she didn't mention was that he'd researched my favorite flowers and brought a beautiful bouquet of peonies. He then proceeded to compliment my cooking so enthusiastically that I made him take home enough leftovers for a week. Catherine later told me he'd Googled 'how to make a good impression on girlfriend's mother.' The effort was so sweet and genuine.",
        howLongKnown: "2 years",
        sharedHobbiesJokes: "We both love cooking shows and he actually tries my recipe suggestions",
        groomIn3Words: "thoughtful, funny, devoted",
        whatYouAdmire: "Catherine has always been my little sunshine - optimistic, creative, and incredibly kind. She has this wonderful ability to find joy in simple moments and bring out the best in everyone around her.",
        relationshipWithBride: "She's my daughter and my best friend",
        momentSeenTogether: "During Catherine's bout with flu last winter, Thomas showed up with homemade soup, tissues, and every season of her favorite show. He didn't just drop them off - he stayed to take care of her, even though he was terrified of getting sick before an important work presentation. Watching him fuss over her like a mother hen, I knew my daughter had found her perfect match."
      },
      'groom': {
        yourName: "Matthew",
        groomName: "Matthew",
        brideName: "Amanda",
        relationshipToGroom: "I am the groom",
        tone: "balanced",
        lengthPreference: "medium",
        greatStoryMemory: "Our first date was supposed to be a simple coffee, but we ended up talking for six hours. When the coffee shop closed, we moved to a nearby park and kept talking until the sun set. Amanda told me about her dreams of traveling to every national park, and I shared my ridiculous collection of vintage vinyl records. By the end of the night, I knew I wanted to hear all her stories and share all of mine for the rest of my life.",
        howLongKnown: "4 years",
        sharedHobbiesJokes: "We're both terrible at mini golf but love trying every course we can find",
        groomIn3Words: "adventurous, loyal, optimistic",
        whatYouAdmire: "Amanda's incredible strength and kindness. She faces every challenge with grace and always finds a way to help others, even when she's going through tough times herself.",
        relationshipWithBride: "She's my best friend, my adventure partner, and my home",
        momentSeenTogether: "Last month, Amanda surprised me by planning a proposal picnic at the exact spot where we had our first real conversation. She'd remembered every detail about that night and wanted to give me a perfect memory to match it."
      },
      'bride': {
        yourName: "Sophia",
        groomName: "Daniel",
        brideName: "Sophia",
        relationshipToGroom: "He's my husband and soulmate",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "Daniel and I met at a bookstore where we both reached for the same copy of our favorite novel. Instead of letting me have it, he suggested we grab coffee and discuss why we both loved the book so much. Three hours later, we were still talking, and I realized I wanted to hear all his stories and share all of mine for the rest of my life.",
        howLongKnown: "5 years",
        sharedHobbiesJokes: "We love cooking together, though Daniel insists on dancing while chopping vegetables",
        groomIn3Words: "patient, romantic, hilarious",
        whatYouAdmire: "Daniel's unwavering optimism and the way he makes everyone around him feel special. He remembers small details about people's lives and always knows exactly what to say to brighten someone's day.",
        relationshipWithBride: "I am the bride",
        momentSeenTogether: "Every morning, Daniel makes me coffee and leaves little notes by the cup. Even on his busiest days, even when we've had disagreements, there's always a note. Sometimes they're funny, sometimes sweet, but they always remind me that I'm loved. It's these small, consistent acts of love that show me who he really is."
      }
    };

    return demoData[role] || demoData['best-man'];
  };

  const toggleDemoMode = () => {
    if (!demoMode) {
      // Turning demo mode ON - populate with demo data
      const demoData = getDemoData(formData.selectedRole || 'best-man');
      setFormData(prev => ({ ...prev, ...demoData }));
    } else {
      // Turning demo mode OFF - clear form
      setFormData({
        selectedRole: formData.selectedRole,
        yourName: "",
        groomName: "",
        brideName: "",
        relationshipToGroom: "",
        tone: "",
        lengthPreference: "",
        greatStoryMemory: "",
        howLongKnown: "",
        sharedHobbiesJokes: "",
        groomIn3Words: "",
        whatYouAdmire: "",
        relationshipWithBride: "",
        momentSeenTogether: "",
        mentionBrideEnding: false,
        includeShoutOuts: "",
        humorLevel: "",
        includeToastClosing: false,
      });
    }
    setDemoMode(!demoMode);
  };

  const nextStep = () => {
    // If trying to access step 3 (Pro features) without pro status, show upgrade modal
    if (currentStep === 2 && !isProUser && !proStatusLoading) {
      setShowProModal(true);
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsGenerating(true);

      // Store form data AND the current step for the result page to access
      const dataToStore = {
        ...formData,
        generatedFromStep: currentStep // Track which step they generated from
      };
      localStorage.setItem('speechFormData', JSON.stringify(dataToStore));
      localStorage.setItem('speechGenerating', 'true');

      // Navigate immediately to result page with loading state
      router.push('/result');

      // Start generating speech in the background (this will continue even after navigation)
      fetch('/api/generate-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(async response => {
        if (!response.ok) {
          throw new Error('Failed to generate speech');
        }

        const speechData = await response.json();

        // Store the generated speech data
        localStorage.setItem('generatedSpeech', JSON.stringify(speechData));
        localStorage.removeItem('speechGenerating');

        // Trigger a storage event to notify the result page
        window.dispatchEvent(new Event('speech-generated'));
      })
      .catch(error => {
        console.error('Error generating speech:', error);
        localStorage.setItem('speechError', error.message);
        localStorage.removeItem('speechGenerating');
        window.dispatchEvent(new Event('speech-error'));
      });

    } catch (error) {
      console.error('Error starting speech generation:', error);
      alert('Failed to start speech generation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Generate contextual regeneration suggestions based on user's speech
  const getRegenerationSuggestions = () => {
    const directSuggestions = []; // These can be used directly
    const contextualSuggestions = []; // These need more info from user

    // Direct suggestions (can be used as-is)
    if (formData.tone === 'light-funny') {
      directSuggestions.push("Make it more heartfelt", "Add more humor");
    } else if (formData.tone === 'sentimental') {
      directSuggestions.push("Add some light humor", "Make it more emotional");
    } else if (formData.tone === 'balanced') {
      directSuggestions.push("Make it funnier", "Make it more touching");
    } else if (formData.tone === 'clean-roast') {
      directSuggestions.push("Add more playful teasing", "Make it more clever");
    }

    // Length-based (direct)
    directSuggestions.push("Make it shorter", "Make it longer");

    // Content-focused (direct)
    directSuggestions.push("Focus more on the couple together", "Add more about the groom");

    // Contextual suggestions (need more info)
    contextualSuggestions.push("Add a specific story", "Include a particular memory", "Mention someone special");

    // Role-specific contextual suggestions
    if (formData.selectedRole === 'best-man') {
      contextualSuggestions.push("Add friendship details", "Include specific advice");
    } else if (formData.selectedRole === 'maid-of-honor') {
      contextualSuggestions.push("Add sisterly moments", "Include specific qualities");
    } else if (formData.selectedRole === 'father-of-bride') {
      contextualSuggestions.push("Add childhood memory", "Include parental wisdom");
    } else if (formData.selectedRole === 'mother-of-bride') {
      contextualSuggestions.push("Add mother-daughter moment", "Include proud memory");
    }

    return {
      direct: directSuggestions.slice(0, 6),
      contextual: contextualSuggestions.slice(0, 4)
    };
  };

  // New function for Step 2: Generate speech outline with streaming and stay on page
  const handleGenerateSpeech = async (customInstructions?: string) => {
    if (editCount >= MAX_FREE_EDITS) {
      // Show Pro upgrade modal
      setShowProModal(true);
      return;
    }

    try {
      setIsGenerating(true);
      setSpeechError("");
      setGeneratedSpeech(""); // Clear previous speech to show streaming

      const requestData = {
        ...formData,
        regenerationInstructions: customInstructions || null,
        isRegeneration: !!customInstructions || speechGenerated
      };

      const response = await fetch('/api/generate-speech-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response stream available');
      }

      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        // Add new chunk to buffer
        buffer += decoder.decode(value, { stream: true });

        // Process complete lines from buffer
        const lines = buffer.split('\n');
        // Keep incomplete line in buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6).trim();
              if (jsonStr) {
                const data = JSON.parse(jsonStr);

                if (data.type === 'chunk') {
                  setGeneratedSpeech(data.fullContent);
                } else if (data.type === 'complete') {
                  setGeneratedSpeech(data.speech);
                  setSpeechGenerated(true);
                  setIsGenerating(false);

                  // Increment edit count if this is a regeneration
                  if (speechGenerated) {
                    setEditCount(prev => prev + 1);
                  }
                } else if (data.type === 'error') {
                  throw new Error(data.error);
                }
              }
            } catch (parseError) {
              console.warn('Failed to parse streaming data:', parseError);
            }
          }
        }
      }

    } catch (error) {
      console.error('Error generating speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to generate speech');
      setIsGenerating(false);
    }
  };

  // New function: Navigate to Step 2 and start streaming speech generation
  const handleGenerateAndGoToStep2 = async () => {
    if (!isStepValid()) return;

    // Navigate to Step 2 first
    setCurrentStep(2);

    // Start streaming speech generation
    try {
      setIsGenerating(true);
      setSpeechError("");
      setGeneratedSpeech(""); // Clear any previous speech

      const requestData = {
        ...formData,
        regenerationInstructions: null,
        isRegeneration: false
      };

      const response = await fetch('/api/generate-speech-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response stream available');
      }

      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        // Add new chunk to buffer
        buffer += decoder.decode(value, { stream: true });

        // Process complete lines from buffer
        const lines = buffer.split('\n');
        // Keep incomplete line in buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6).trim();
              if (jsonStr) {
                const data = JSON.parse(jsonStr);

                if (data.type === 'chunk') {
                  setGeneratedSpeech(data.fullContent);
                } else if (data.type === 'complete') {
                  setGeneratedSpeech(data.speech);
                  setSpeechGenerated(true);
                  setIsGenerating(false);
                } else if (data.type === 'error') {
                  throw new Error(data.error);
                }
              }
            } catch (parseError) {
              console.warn('Failed to parse streaming data:', parseError);
            }
          }
        }
      }

    } catch (error) {
      console.error('Error generating speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to generate speech');
      setIsGenerating(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        // Role Selection - Required if we're in generic flow
        return formData.selectedRole !== "";
      case 1:
        // Section 1: Essentials - All required to generate free speech (removed lengthPreference)
        return formData.yourName && formData.groomName && formData.brideName &&
               formData.relationshipToGroom && formData.tone && formData.greatStoryMemory;
      case 2:
        // Step 2: Your Speech Outline - Valid if essentials are complete (removed lengthPreference)
        return formData.yourName && formData.groomName && formData.brideName &&
               formData.relationshipToGroom && formData.tone && formData.greatStoryMemory;
      case 3:
        // Section 3: Premium - All optional, always valid
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f4] via-[#fdfcfa] to-[#f8f4f0] transition-theme relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#da5389]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#e9a41a]/5 rounded-full blur-3xl" />
      </div>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#e8e1d8]/50 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="h-4 w-4 mr-1" />
                Speech Generator
              </Badge>

              {/* Form Restored Indicator */}
              {isRestored && (
                <div className="text-xs px-2 py-1 rounded-full border bg-green-100 border-green-300 text-green-700 animate-pulse">
                  ✓ Form Restored
                </div>
              )}

              {/* Demo Mode Toggle - Subtle */}
              <button
                onClick={toggleDemoMode}
                className={`text-xs px-2 py-1 rounded-full border transition-all duration-200 ${
                  demoMode
                    ? 'bg-[#e9a41a] text-white border-[#e9a41a]'
                    : 'bg-white text-[#8f867e] border-[#e8e1d8] hover:border-[#e9a41a] hover:text-[#e9a41a]'
                }`}
                title={demoMode ? "Click to clear demo data" : "Click to fill with demo data"}
              >
                {demoMode ? "Demo ON" : "Demo"}
              </button>

              <Link href="/">
                <Button className="hidden md:block bg-black hover:bg-black/90 text-white rounded-full">
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Payment Success Notification */}
        {showPaymentSuccess && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800">Payment Successful!</div>
                  <div className="text-sm text-green-700">You now have access to all Pro features. You can now access step 3 to add premium details!</div>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentSuccess(false)}
                className="text-green-600 hover:text-green-800"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Payment Canceled Notification */}
        {showPaymentCanceled && (
          <div className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">!</span>
                </div>
                <div>
                  <div className="font-semibold text-yellow-800">Payment Canceled</div>
                  <div className="text-sm text-yellow-700">No worries! You can upgrade to Pro anytime to unlock premium features.</div>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentCanceled(false)}
                className="text-yellow-600 hover:text-yellow-800"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}
        {/* Progress Header */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#181615] mb-2">
              {needsRoleSelection ? (
                <>🎤 Wedding Speech Generator</>
              ) : (
                <>🕴️ {getRoleTitle(formData.selectedRole)} Speech Generator</>
              )}
            </h1>
            <p className="text-xl text-[#8f867e]">
              {needsRoleSelection ?
                "Tell us your role, then a few details—We'll do the rest" :
                "Tell us a few things—We'll do the rest"
              }
            </p>
          </div>
        </div>

        {/* Step Progress Bar */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5" />
          <CardContent className="p-8 relative">
            <div className={`grid gap-6 items-center ${needsRoleSelection ? 'grid-cols-7' : 'grid-cols-3'} ${!needsRoleSelection ? 'max-w-md mx-auto' : ''}`}>
              {(needsRoleSelection ? [0, 1, 2, 3] : [1, 2, 3]).map((step, index) => (
                <React.Fragment key={`step-row-${step}`}>
                  {/* Step Content */}
                  <div className="flex items-center col-span-1">
                    {/* Step Circle */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 mx-auto ${
                      step < currentStep
                        ? 'bg-[#da5389] border-[#da5389] text-white'
                        : step === currentStep
                        ? 'bg-[#da5389] border-[#da5389] text-white shadow-lg'
                        : 'bg-white border-[#e8e1d8] text-[#8f867e]'
                    }`}>
                      {step < currentStep ? '✓' : (step === 0 ? <User className="h-4 w-4" /> : step)}
                    </div>
                  </div>

                  {/* Progress Line */}
                  {needsRoleSelection && step < 3 && (
                    <div className="col-span-1 flex justify-center">
                      <div className={`h-1 w-full rounded-full transition-all duration-500 ${
                        step < currentStep ? 'bg-[#da5389]' : 'bg-[#e8e1d8]'
                      }`} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Labels Row */}
            <div className={`grid gap-6 mt-4 ${needsRoleSelection ? 'grid-cols-7' : 'grid-cols-3'} ${!needsRoleSelection ? 'max-w-md mx-auto' : ''}`}>
              {(needsRoleSelection ? [0, 1, 2, 3] : [1, 2, 3]).map((step, index) => (
                <React.Fragment key={`label-row-${step}`}>
                  {/* Step Label */}
                  <div className="col-span-1 text-center">
                    <div className={`text-base font-medium whitespace-nowrap ${
                      step <= currentStep ? 'text-[#181615]' : 'text-[#8f867e]'
                    }`}>
                      {step === 0 && <><User className="h-4 w-4 inline mr-1" />Role</>}
                      {step === 1 && '🎯 Essentials'}
                      {step === 2 && '📝 Your Speech'}
                      {step === 3 && '💎 Pro'}
                    </div>
                    <div className={`text-sm mt-1 ${
                      step <= currentStep ? 'text-[#8f867e]' : 'text-[#d1ccc4]'
                    }`}>
                      {step === 0 && 'Required'}
                      {step === 1 && 'Required'}
                      {step === 2 && 'Generate'}
                      {step === 3 && 'Pro'}
                    </div>
                  </div>

                  {/* Empty space for line alignment */}
                  {needsRoleSelection && step < 3 && <div className="col-span-1" />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#faf7f4]/30" />
          <CardHeader className="text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              {currentStep === 0 && <span className="text-2xl">👤</span>}
              {currentStep === 1 && <span className="text-2xl">🎯</span>}
              {currentStep === 2 && <span className="text-2xl">📝</span>}
              {currentStep === 3 && <span className="text-2xl">💎</span>}
              <CardTitle className="text-2xl text-[#181615]">
                {currentStep === 0 && "Choose Your Role"}
                {currentStep === 1 && "Essentials"}
                {currentStep === 2 && "Your Speech Outline"}
                {currentStep === 3 && "Pro"}
              </CardTitle>
            </div>
            <p className="text-sm text-[#8f867e]">
              {currentStep === 0 && "Select your role in the wedding to personalize your speech"}
              {currentStep === 1 && "Required fields for your speech foundation"}
              {currentStep === 2 && "Generate your basic speech and make edits"}
              {currentStep === 3 && "💎 Upgrade to Pro to add personality & premium features"}
            </p>
          </CardHeader>
          <CardContent className="p-8 relative z-10">

            {/* Role Selection Step */}
            {currentStep === 0 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { id: 'best-man', title: 'Best Man', emoji: '🥂', description: 'Lead groomsman speech' },
                    { id: 'maid-of-honor', title: 'Maid of Honor', emoji: '👸', description: 'Lead bridesmaid speech' },
                    { id: 'father-of-bride', title: 'Father of Bride', emoji: '🥃', description: 'Proud father\'s words' },
                    { id: 'mother-of-bride', title: 'Mother of Bride', emoji: '🌸', description: 'Loving mother\'s speech' },
                    { id: 'groom', title: 'Groom', emoji: '🤵', description: 'Thank you speech' },
                    { id: 'bride', title: 'Bride', emoji: '👰', description: 'Thank you speech' }
                  ].map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => updateFormData('selectedRole', role.id)}
                      className={`p-6 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-lg ${
                        formData.selectedRole === role.id
                          ? 'bg-[#da5389] border-[#da5389] text-white shadow-lg scale-105'
                          : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                      }`}
                    >
                      <div className="text-4xl mb-3">{role.emoji}</div>
                      <div className="font-semibold text-lg mb-2">{role.title}</div>
                      <div className={`text-sm ${
                        formData.selectedRole === role.id ? 'text-white/80' : 'text-[#8f867e]'
                      }`}>
                        {role.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Section 1: Essentials (Required to Generate a Free Speech) */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      What's your name? *
                    </label>
                    <Input
                      placeholder="Your first name"
                      value={formData.yourName}
                      onChange={(e) => updateFormData('yourName', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      Who's the groom? *
                    </label>
                    <Input
                      placeholder="Groom's first name"
                      value={formData.groomName}
                      onChange={(e) => updateFormData('groomName', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      What's the bride's name? *
                    </label>
                    <Input
                      placeholder="Bride's first name"
                      value={formData.brideName}
                      onChange={(e) => updateFormData('brideName', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-3">
                    How do you know the groom? *
                  </label>
                  <div className="space-y-3">
                    <Input
                      placeholder="e.g., best friends since uni"
                      value={formData.relationshipToGroom}
                      onChange={(e) => updateFormData('relationshipToGroom', e.target.value)}
                      className="darker-placeholder"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8f867e]">Or use voice input:</span>
                      <VoiceInput
                        onTranscription={(text) => updateFormData('relationshipToGroom', text)}
                        placeholder="Speak your relationship to the groom"
                        disabled={isGenerating}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-3">
                    What kind of speech are you aiming for? *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "light-funny", label: "Light & Funny" },
                      { value: "sentimental", label: "Sentimental" },
                      { value: "balanced", label: "Balanced" },
                      { value: "clean-roast", label: "Clean Roast" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateFormData('tone', option.value)}
                        className={`px-4 py-2 rounded-full border-2 text-base font-medium transition-all duration-200 ${
                          formData.tone === option.value
                            ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                            : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Tell us a moment worth sharing—funny, meaningful, or both *
                  </label>
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Don't worry—we'll make it great"
                      value={formData.greatStoryMemory}
                      onChange={(e) => updateFormData('greatStoryMemory', e.target.value)}
                      rows={4}
                      className="darker-placeholder"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8f867e]">Or tell your story with voice:</span>
                      <VoiceInput
                        onTranscription={(text) => updateFormData('greatStoryMemory', text)}
                        placeholder="Speak your story"
                        disabled={isGenerating}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Pro Features (Premium - Adds Personality & Emotional Depth) */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#da5389]/10 to-[#e9a41a]/10 rounded-lg p-6 mb-6 border border-[#da5389]/30">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#181615] mb-1">💎 Pro - Premium Features</h3>
                    <p className="text-base text-[#8f867e]">
                      Add personality and emotional depth to make your speech truly memorable
                    </p>
                  </div>
                  <div className="text-sm text-[#da5389] font-medium">
                    ✨ Unlock these fields to enhance your speech with personal details
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      How long have you known the groom?
                    </label>
                    <Input
                      placeholder="e.g., 'Since college,' '20 years'"
                      value={formData.howLongKnown}
                      onChange={(e) => updateFormData('howLongKnown', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      Any inside jokes or mutual hobbies?
                    </label>
                    <Input
                      placeholder="Shared interests or inside references"
                      value={formData.sharedHobbiesJokes}
                      onChange={(e) => updateFormData('sharedHobbiesJokes', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      Describe the groom in three words
                    </label>
                    <Input
                      placeholder="Three adjectives that capture him"
                      value={formData.groomIn3Words}
                      onChange={(e) => updateFormData('groomIn3Words', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      How well do you know the bride?
                    </label>
                    <Input
                      placeholder="Your relationship with her"
                      value={formData.relationshipWithBride}
                      onChange={(e) => updateFormData('relationshipWithBride', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    What do you really respect or admire about him?
                  </label>
                  <Textarea
                    placeholder="Share what makes him special as a person and friend"
                    value={formData.whatYouAdmire}
                    onChange={(e) => updateFormData('whatYouAdmire', e.target.value)}
                    rows={3}
                    className="darker-placeholder"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Have you seen a moment between them that stood out to you?
                  </label>
                  <Textarea
                    placeholder="A special moment that shows their connection"
                    value={formData.momentSeenTogether}
                    onChange={(e) => updateFormData('momentSeenTogether', e.target.value)}
                    rows={3}
                    className="darker-placeholder"
                  />
                </div>

                {/* Speech Length Selection */}
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-3">
                    How long should your speech be?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "short", label: "Short (~2 min)", description: "Quick and impactful" },
                      { value: "medium", label: "Medium (~4 min)", description: "Perfect balance" },
                      { value: "long", label: "Long (~6 min)", description: "Full storytelling" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateFormData('lengthPreference', option.value)}
                        className={`px-6 py-3 rounded-lg border-2 text-center transition-all duration-200 min-w-[140px] ${
                          formData.lengthPreference === option.value
                            ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                            : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                        }`}
                      >
                        <div className="text-base font-medium">{option.label}</div>
                        <div className={`text-sm mt-1 ${
                          formData.lengthPreference === option.value ? 'text-white/80' : 'text-[#8f867e]'
                        }`}>
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-[#8f867e] mt-2">
                    💡 Speech timing is based on a natural speaking pace of ~150 words per minute
                  </p>
                </div>

                {/* Premium Features Section */}
                <div className="bg-[#faf7f4] rounded-lg p-6 border border-[#e8e1d8] mt-8">
                  <h4 className="text-lg font-semibold text-[#181615] mb-4">💎 Bonus Premium Features</h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="mentionBrideEnding"
                        checked={formData.mentionBrideEnding}
                        onChange={(e) => updateFormData('mentionBrideEnding', e.target.checked)}
                      />
                      <label htmlFor="mentionBrideEnding" className="text-base font-medium text-[#181615]">
                        Add a special message to the bride at the end
                      </label>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-[#181615] mb-2">
                        Anyone else to mention? (family, mutual friends, etc.)
                      </label>
                      <Textarea
                        placeholder="List anyone you'd like to acknowledge"
                        value={formData.includeShoutOuts}
                        onChange={(e) => updateFormData('includeShoutOuts', e.target.value)}
                        rows={2}
                        className="darker-placeholder"
                      />
                    </div>

                    <div>
                      <label className="block text-base font-medium text-[#181615] mb-3">
                        Humor level for playful roasting
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { value: "none", label: "None" },
                          { value: "light", label: "Light" },
                          { value: "medium", label: "Medium" },
                          { value: "go-for-it", label: "Go for it" }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => updateFormData('humorLevel', option.value)}
                            className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                              formData.humorLevel === option.value
                                ? 'bg-[#da5389] border-[#da5389] text-white'
                                : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="includeToastClosing"
                        checked={formData.includeToastClosing}
                        onChange={(e) => updateFormData('includeToastClosing', e.target.checked)}
                      />
                      <label htmlFor="includeToastClosing" className="text-base font-medium text-[#181615]">
                        End with a traditional toast
                      </label>
                    </div>
                  </div>
                </div>

                {/* Generate Enhanced Speech CTA */}
                <div className="bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5 border border-[#da5389]/20 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#181615] mb-2">
                      Generate Your Enhanced Speech
                    </h4>
                    <p className="text-[#8f867e] text-sm mb-4">
                      Include all the pro details above to create a more personalized and memorable speech.
                    </p>
                    <Button
                      onClick={handleSubmit}
                      className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Enhanced Speech
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Your Speech Outline */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Progress message based on generation status */}
                {!speechGenerated && !isGenerating && (
                  <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#0369a1] mb-2">✨ Ready to Generate Your Speech!</h3>
                    <p className="text-[#0c4a6e] mb-4">
                      You've provided all the essentials. Click below to generate your personalized speech outline using AI.
                    </p>
                    <p className="text-sm text-[#0369a1]">
                      💡 You'll get {MAX_FREE_EDITS} free edits to perfect your speech before accessing premium features.
                    </p>
                  </div>
                )}

                {/* Generating message with live preview */}
                {isGenerating && (
                  <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="animate-spin h-5 w-5 border-2 border-[#ea580c] border-t-transparent rounded-full mr-3" />
                      <h3 className="text-lg font-semibold text-[#ea580c]">🎤 Crafting Your Speech...</h3>
                    </div>
                    <p className="text-[#9a3412] mb-4">
                      Watch your personalized speech come to life in real-time using AI.
                    </p>
                    <p className="text-sm text-[#ea580c] mb-4">
                      ✨ Using your story about {formData.groomName} and {formData.brideName} to create something special!
                    </p>

                    {/* Live streaming preview */}
                    {generatedSpeech && (
                      <div className="bg-white/50 rounded-lg p-4 border border-[#fed7aa]/50">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-[#ea580c]">✍️ Live Preview</h4>
                          <div className="flex items-center space-x-3 text-xs text-[#9a3412]">
                            <span>📝 {countWords(generatedSpeech)} words</span>
                            <span>⏱️ ~{estimateReadingTime(generatedSpeech)} min</span>
                          </div>
                        </div>
                        <div className="max-h-32 overflow-y-auto text-sm text-[#9a3412] leading-relaxed">
                          {generatedSpeech.split('\n').map((paragraph, index) => (
                            <p key={`preview-${index}-${paragraph.slice(0, 15)}`} className="mb-2">
                              {paragraph}
                            </p>
                          ))}
                          <span className="inline-block w-2 h-4 bg-[#ea580c] animate-pulse ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Generated Speech Display */}
                {speechGenerated && generatedSpeech && !isGenerating && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#181615]">✨ Your Speech is Ready!</h3>
                        <p className="text-sm text-[#8f867e] mt-1">Generated with AI • Personalized for {formData.groomName} & {formData.brideName}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#8f867e]">
                        <span>Edits: {editCount}/{MAX_FREE_EDITS}</span>
                        {editCount >= MAX_FREE_EDITS && (
                          <span className="text-[#da5389] font-medium">• Upgrade for unlimited</span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Speech Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-[#da5389]/10 to-[#da5389]/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#da5389]">{countWords(generatedSpeech)}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Words</div>
                      </div>
                      <div className="bg-gradient-to-br from-[#e9a41a]/10 to-[#e9a41a]/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#e9a41a]">{estimateReadingTime(generatedSpeech)}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Minutes</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">{formData.tone === 'light-funny' ? '😄' : formData.tone === 'sentimental' ? '💝' : formData.tone === 'balanced' ? '⚖️' : '😏'}</div>
                        <div className="text-sm font-medium text-[#8f867e] capitalize">{formData.tone.replace('-', ' ')}</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">{getRoleTitle(formData.selectedRole).split(' ')[0]}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Role</div>
                      </div>
                    </div>

                    {/* Speech Content */}
                    <div className="bg-white border-2 border-[#e8e1d8] rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-[#181615] flex items-center">
                          <span className="text-xl mr-2">📝</span>
                          Your Speech
                        </h4>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(generatedSpeech);
                              // Could add a toast notification here
                            }}
                            className="flex items-center space-x-1 px-3 py-2 bg-[#da5389] text-white text-sm font-medium rounded-lg hover:bg-[#da5389]/90 transition-colors"
                          >
                            <span>📋</span>
                            <span>Copy Speech</span>
                          </button>
                        </div>
                      </div>

                      <div className="prose prose-lg max-w-none max-h-80 overflow-y-auto">
                        {generatedSpeech.split('\n').map((paragraph, index) => (
                          <p key={`speech-paragraph-${index}-${paragraph.slice(0, 20)}`} className="mb-4 text-[#181615] leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Regeneration Options - Always show when speech is generated */}
                    {editCount < MAX_FREE_EDITS && (
                      <div className="bg-[#faf7f4] rounded-lg p-6 border border-[#e8e1d8]">
                        <div className="mb-4">
                          <h4 className="font-semibold text-[#181615] flex items-center mb-2">
                            <span className="text-lg mr-2">🔄</span>
                            Improve Your Speech
                          </h4>
                          <div className="text-xs text-[#8f867e]">
                            {editCount + 1}/{MAX_FREE_EDITS} edits remaining
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Selected Pill Display */}
                          {selectedPill && (
                            <div className="bg-white/50 border border-[#e8e1d8] rounded-lg p-3">
                              <div className="text-sm text-[#8f867e] mb-1">Selected improvement:</div>
                              <div className="text-sm font-medium text-[#8f867e] italic">"{selectedPill}"</div>
                            </div>
                          )}

                          {/* Direct Action Pills */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-3">
                              Quick improvements:
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {getRegenerationSuggestions().direct.map((suggestion, index) => (
                                <button
                                  key={`direct-${index}`}
                                  onClick={() => {
                                    handleGenerateSpeech(suggestion);
                                  }}
                                  disabled={isGenerating}
                                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isGenerating
                                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                      : 'bg-white border border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-[#da5389]/5'
                                  }`}
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Contextual Pills (need more info) */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-3">
                              Add specific details:
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {getRegenerationSuggestions().contextual.map((suggestion, index) => (
                                <button
                                  key={`contextual-${index}`}
                                  onClick={() => {
                                    setSelectedPill(suggestion);
                                    setRegenerationInstructions("");
                                  }}
                                  disabled={isGenerating}
                                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedPill === suggestion
                                      ? 'bg-[#da5389] text-white'
                                      : isGenerating
                                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                      : 'bg-white border border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-[#da5389]/5'
                                  }`}
                                >
                                  {suggestion} →
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Custom Instructions */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-2">
                              {selectedPill ? `Provide details for "${selectedPill}":` : "Or describe your own changes:"}
                            </label>
                            <textarea
                              value={regenerationInstructions}
                              onChange={(e) => setRegenerationInstructions(e.target.value)}
                              placeholder={
                                selectedPill
                                  ? selectedPill === "Add a specific story"
                                    ? "Describe the story you want to include..."
                                    : selectedPill === "Include a particular memory"
                                    ? "Tell us about the memory you want to add..."
                                    : selectedPill === "Mention someone special"
                                    ? "Who should be mentioned and how?"
                                    : `Provide details for: ${selectedPill}...`
                                  : "e.g., Make it funnier, add more details about our college days, include a specific memory..."
                              }
                              rows={3}
                              className="w-full p-3 border border-[#e8e1d8] rounded-lg text-[#181615] placeholder-[#8f867e] focus:border-[#da5389] focus:outline-none focus:ring-1 focus:ring-[#da5389]"
                            />
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between gap-3">
                            {selectedPill && (
                              <button
                                onClick={() => {
                                  setSelectedPill(null);
                                  setRegenerationInstructions("");
                                }}
                                className="text-sm text-[#8f867e] hover:text-[#da5389]"
                              >
                                Clear selection
                              </button>
                            )}

                            <div className="flex gap-2 ml-auto">
                              <button
                                onClick={() => handleGenerateSpeech()}
                                disabled={isGenerating}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                  isGenerating
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-100 text-[#181615] hover:bg-gray-200'
                                }`}
                              >
                                🔄 Simple Regenerate
                              </button>

                              <button
                                onClick={() => {
                                  const instruction = selectedPill && regenerationInstructions.trim()
                                    ? `${selectedPill}: ${regenerationInstructions}`
                                    : regenerationInstructions.trim();

                                  if (instruction) {
                                    handleGenerateSpeech(instruction);
                                    setRegenerationInstructions("");
                                    setSelectedPill(null);
                                  } else {
                                    handleGenerateSpeech();
                                  }
                                }}
                                disabled={isGenerating || (!!selectedPill && !regenerationInstructions.trim())}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                  isGenerating || (!!selectedPill && !regenerationInstructions.trim())
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#e9a41a] hover:bg-[#e9a41a]/90 text-white shadow-md hover:shadow-lg'
                                }`}
                              >
                                {isGenerating ? (
                                  <>
                                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full inline-block mr-2" />
                                    Regenerating...
                                  </>
                                ) : (
                                  <>
                                    ✨ Regenerate with {selectedPill || regenerationInstructions.trim() ? 'Changes' : 'Instructions'}
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Upgrade message for users who have exceeded free edits */}
                    {editCount >= MAX_FREE_EDITS && (
                      <div className="bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5 border border-[#da5389]/20 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-[#181615] mb-2">🔒 Unlock Unlimited Editing</h3>
                        <p className="text-[#8f867e] mb-4">
                          You've used your {MAX_FREE_EDITS} free edits. Upgrade to Pro to continue editing with unlimited regenerations.
                        </p>
                        <button
                          onClick={() => setShowProModal(true)}
                          className="bg-[#da5389] hover:bg-[#da5389]/90 text-white px-6 py-3 rounded-full font-semibold"
                        >
                          💎 Upgrade to Pro
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Error Display */}
                {speechError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-red-800 font-semibold mb-2">Generation Error</h3>
                    <p className="text-red-700 text-sm">{speechError}</p>
                    <button
                      onClick={() => setSpeechError("")}
                      className="text-red-600 hover:text-red-800 text-sm font-medium mt-2"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                {/* Generate/Regenerate Button - only show if not currently generating */}
                <div className="text-center">
                  {!speechGenerated && !isGenerating && (
                    <button
                      onClick={() => handleGenerateSpeech()}
                      disabled={!isStepValid()}
                      className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 ${
                        !isStepValid()
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      }`}
                    >
                      <Sparkles className="inline h-5 w-5 mr-2" />
                      Generate My Speech Outline
                    </button>
                  )}

                  {/* Paywall message for users who have exceeded free edits - REMOVED DUPLICATE */}
                </div>

                {/* Helpful Tips */}
                {!speechGenerated && (
                  <div className="bg-[#faf7f4] rounded-lg p-4">
                    <h4 className="font-semibold text-[#181615] mb-2">💡 Tips for a Great Speech:</h4>
                    <ul className="text-sm text-[#8f867e] space-y-1">
                      <li>• Your speech will include the story you shared in Step 1</li>
                      <li>• We'll match the tone and length you selected</li>
                      <li>• You can regenerate {MAX_FREE_EDITS} times to get it just right</li>
                      <li>• Step 3 adds even more personality and customization</li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className={`flex mt-8 pt-6 border-t border-border ${
              currentStep === 0 ? 'justify-center' : 'justify-between'
            }`}>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="bg-white border-2 border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] rounded-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
              )}

              {/* Spacer for step 1 when no previous button */}
              {currentStep === 1 && <div />}

              <div className="flex gap-3">
                {/* Next button for Step 0 (role selection) */}
                {currentStep === 0 && (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next Step - Add Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {/* Generate Speech button for step 1 - goes to step 2 and starts generation */}
                {currentStep === 1 && (
                  <Button
                    onClick={handleGenerateAndGoToStep2}
                    disabled={isGenerating || !isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isGenerating || !isStepValid()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                    }`}
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full inline-block mr-2" />
                        Generating Speech...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Speech
                      </>
                    )}
                  </Button>
                )}

                {/* Upgrade to Pro button for step 2 */}
                {currentStep === 2 && !isProUser && (
                  <Button
                    onClick={() => setShowProModal(true)}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-[#da5389] to-[#e9a41a] hover:from-[#da5389]/90 hover:to-[#e9a41a]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    💎 Upgrade to Pro - Add Premium Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {/* Next button for pro users on step 2 */}
                {currentStep === 2 && isProUser && (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next - Add Pro Features ✨
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {/* Generate Enhanced Speech button for final step */}
                {currentStep === totalSteps && (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Enhanced Speech
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-[#8f867e] text-sm mb-4">
            Need help? Here are some tips for each step:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Users className="h-4 w-4" />
              <span>Be specific about your relationship</span>
            </div>
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Sparkles className="h-4 w-4" />
              <span>Include personal, meaningful details</span>
            </div>
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Clock className="h-4 w-4" />
              <span>Keep stories concise but heartfelt</span>
            </div>
          </div>
        </div>

        {/* Pro Upgrade Modal */}
        {showProModal && (
          <ProUpgradePrompt
            variant="modal"
            showCloseButton={true}
            onClose={() => setShowProModal(false)}
            context="generator"
            currentEditCount={editCount}
            maxEditCount={MAX_FREE_EDITS}
          />
        )}
      </div>
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389] mx-auto mb-4" />
        <p className="text-[#8f867e]">Loading speech generator...</p>
      </div>
    </div>}>
      <GeneratorContent />
    </Suspense>
  );
}
