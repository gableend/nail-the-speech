"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Users, Clock, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialSignupModal from "@/components/auth/SocialSignupModal";
import UserDropdown from "@/components/auth/UserDropdown";

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

  // Section 2: Enrichment (Optional – Adds Personality & Emotional Depth)
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
  const { data: session, status } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if user came from a specific role link or generic CTA
  const roleFromUrl = searchParams.get('role');
  const needsRoleSelection = !roleFromUrl;
  const initialStep = needsRoleSelection ? 0 : 1;
  const totalSteps = needsRoleSelection ? 4 : 3;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
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

    // Section 2: Enrichment (Optional – Adds Personality & Emotional Depth)
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
        greatStoryMemory: "Daniel and I met at a bookstore where we both reached for the same copy of our favorite novel. Instead of letting me have it, he suggested we grab coffee and discuss why we both loved the book so much. Three hours later, we were still talking, and I realized I'd found someone who understood not just my thoughts, but my heart. That book is now on our nightstand, with notes we've written to each other in the margins.",
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
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Store form data and navigate to results
    localStorage.setItem('speechFormData', JSON.stringify(formData));
    router.push('/result');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        // Role Selection - Required if we're in generic flow
        return formData.selectedRole !== "";
      case 1:
        // Section 1: Essentials - All required to generate free speech
        return formData.yourName && formData.groomName && formData.brideName &&
               formData.relationshipToGroom && formData.tone && formData.lengthPreference && formData.greatStoryMemory;
      case 2:
        // Section 2: Enrichment - All optional, always valid
        return true;
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
                {session ? "Logged In" : "Free Trial"}
              </Badge>

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

              {status === "loading" ? (
                <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
              ) : session ? (
                <UserDropdown />
              ) : (
                <>
                  <Button
                    onClick={() => setShowSignupModal(true)}
                    className="hidden md:block bg-black hover:bg-black/90 text-white rounded-full"
                  >
                    Log in
                  </Button>
                  <Button
                    onClick={() => setShowSignupModal(true)}
                    className="hidden md:block bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
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
                      {step === 2 && '🌟 Enrichment'}
                      {step === 3 && '✨ Bonus'}
                    </div>
                    <div className={`text-sm mt-1 ${
                      step <= currentStep ? 'text-[#8f867e]' : 'text-[#d1ccc4]'
                    }`}>
                      {step === 0 && 'Required'}
                      {step === 1 && 'Required'}
                      {step === 2 && 'Optional'}
                      {step === 3 && 'Optional'}
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
              {currentStep === 2 && <span className="text-2xl">🌟</span>}
              {currentStep === 3 && <span className="text-2xl">➕</span>}
              <CardTitle className="text-2xl text-[#181615]">
                {currentStep === 0 && "Choose Your Role"}
                {currentStep === 1 && "Essentials"}
                {currentStep === 2 && "Enrichment"}
                {currentStep === 3 && "Bonus Features"}
              </CardTitle>
            </div>
            <p className="text-sm text-[#8f867e]">
              {currentStep === 0 && "Select your role in the wedding to personalize your speech"}
              {currentStep === 1 && "Required fields for your speech foundation"}
              {currentStep === 2 && "Optional—boosts personality (Free Tier)"}
              {currentStep === 3 && "Optional extras to make your speech even better"}
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
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    How do you know the groom? *
                  </label>
                  <Input
                    placeholder="e.g., best friends since uni"
                    value={formData.relationshipToGroom}
                    onChange={(e) => updateFormData('relationshipToGroom', e.target.value)}
                    className="darker-placeholder"
                  />
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
                  <label className="block text-base font-medium text-[#181615] mb-3">
                    How long should your speech be? *
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

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Tell us a moment worth sharing—funny, meaningful, or both *
                  </label>
                  <Textarea
                    placeholder="Don't worry—we'll make it great"
                    value={formData.greatStoryMemory}
                    onChange={(e) => updateFormData('greatStoryMemory', e.target.value)}
                    rows={4}
                    className="darker-placeholder"
                  />
                </div>
              </div>
            )}

            {/* Section 2: Enrichment (Optional – Adds Personality & Emotional Depth) */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="bg-[#faf7f4] rounded-lg p-4 mb-6">
                  <p className="text-base text-[#8f867e]">
                    💡 <strong>Optional fields</strong> - Skip any that don't apply. These add personality and emotional depth to your speech.
                  </p>
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
              </div>
            )}

            {/* Section 3: Bonus Personalization (Optional) */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5 rounded-lg p-6 mb-6 border border-[#da5389]/20">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#181615] mb-1">✨ Bonus Personalization</h3>
                    <p className="text-base text-[#8f867e]">
                      Add extra touches to make your speech even more special
                    </p>
                  </div>
                  <div className="text-sm text-[#8f867e] italic">
                    💡 These are premium features - explore what's possible, then generate your free speech below
                  </div>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <input
                    type="checkbox"
                    id="mentionBrideEnding"
                    checked={formData.mentionBrideEnding}
                    onChange={(e) => updateFormData('mentionBrideEnding', e.target.checked)}
                    disabled
                    className="opacity-50"
                  />
                  <label htmlFor="mentionBrideEnding" className="text-sm font-medium text-[#8f867e]">
                    Want to wrap with a message to the bride? 🔒
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8f867e] mb-2">
                    Anyone else to mention? (family, mutual friends, etc.) 🔒
                  </label>
                  <Textarea
                    placeholder="List anyone you'd like to acknowledge"
                    value={formData.includeShoutOuts}
                    onChange={(e) => updateFormData('includeShoutOuts', e.target.value)}
                    rows={3}
                    disabled
                    className="opacity-50 darker-placeholder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8f867e] mb-3">
                    How much heat do you want in your roasts? 🔒
                  </label>
                  <div className="flex flex-wrap gap-3 opacity-50">
                    {[
                      { value: "none", label: "None" },
                      { value: "light", label: "Light" },
                      { value: "medium", label: "Medium" },
                      { value: "go-for-it", label: "Go for it" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        disabled
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium cursor-not-allowed ${
                          formData.humorLevel === option.value
                            ? 'bg-[#da5389] border-[#da5389] text-white'
                            : 'bg-white border-[#e8e1d8] text-[#181615]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <input
                    type="checkbox"
                    id="includeToastClosing"
                    checked={formData.includeToastClosing}
                    onChange={(e) => updateFormData('includeToastClosing', e.target.checked)}
                    disabled
                    className="opacity-50"
                  />
                  <label htmlFor="includeToastClosing" className="text-sm font-medium text-[#8f867e]">
                    End with a traditional toast? 🔒
                  </label>
                </div>

                {/* Generate Speech CTA after exploring premium options */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">
                      Ready to Create Your Speech?
                    </h4>
                    <p className="text-green-600 text-sm mb-4">
                      Your free speech includes all the essentials plus any enrichment details you added. Upgrade anytime for premium features!
                    </p>
                    <Button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate My Free Speech
                    </Button>
                  </div>
                </div>
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
                {/* Early Generate Speech option for steps 1 and 2 */}
                {(currentStep === 1 || currentStep === 2) && isStepValid() && (
                  <Button
                    onClick={handleSubmit}
                    variant="outline"
                    className="bg-green-600 hover:bg-green-700 text-white hover:text-white border-green-600 hover:border-green-700 rounded-full"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Speech
                  </Button>
                )}

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {currentStep === 1 ? 'Next - make it personal' :
                     currentStep === 2 ? 'Next - premium features' : 'Next'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
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
                    Generate Speech
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
      </div>

      {/* Authentication Modal */}
      <SocialSignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        redirectTo="/generator"
      />
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
