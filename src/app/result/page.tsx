"use client";

import { useEffect, useState, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, FileText, RefreshCw, Star, Crown, Sparkles, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import SocialSignupModal from "@/components/auth/SocialSignupModal";
import UserDropdown from "@/components/auth/UserDropdown";

interface SpeechFormData {
  // Role Selection
  selectedRole: string;

  // Section 1: Essentials (Required to Generate a Free Speech)
  yourName: string;
  groomName: string;
  brideName: string;
  relationshipToGroom: string;
  tone: string;
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
  lengthPreference: string;
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

export default function ResultPage() {
  const { data: session, status } = useUser();
  const [formData, setFormData] = useState<SpeechFormData | null>(null);
  const [generatedSpeech, setGeneratedSpeech] = useState("");
  const [isGenerating, setIsGenerating] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('serif');
  const [lineHeight, setLineHeight] = useState(1.6);
  const [speechDuration, setSpeechDuration] = useState(4); // minutes
  const [showDurationControls, setShowDurationControls] = useState(false);

  // Calculate speech duration based on word count
  const calculateDuration = useCallback((text: string, wordsPerMinute = 150) => {
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    return Math.max(1, Math.round((wordCount / wordsPerMinute) * 10) / 10); // Round to 1 decimal
  }, []);

  // Format duration display
  const formatDuration = useCallback((minutes: number) => {
    if (minutes < 1) return "< 1 min";
    if (minutes === 1) return "1 min";
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  }, []);

  // Count words in text (for logging)
  const countWords = useCallback((text: string): number => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }, []);

  const saveSpeechToDatabase = useCallback(async (speech: string, formData: SpeechFormData) => {
    if (!user) return;

    try {
      const speechData = {
        title: `${getRoleTitle(formData.selectedRole)} Speech for ${formData.groomName} & ${formData.brideName}`,
        content: speech,
        role: formData.selectedRole,
        tone: formData.tone,
        length: formData.lengthPreference || "medium",
        formData: formData
      };

      const response = await fetch('/api/speeches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(speechData),
      });

      if (response.ok) {
        console.log("Speech saved successfully");
      } else {
        console.error("Failed to save speech:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving speech:", error);
    }
  }, [user]);





  const generateSpeech = useCallback(async (data: SpeechFormData) => {
    console.log('🎬 [CLIENT] Starting speech generation with data:', {
      role: data.selectedRole,
      tone: data.tone,
      length: data.lengthPreference,
      hasStory: !!data.greatStoryMemory,
      enrichmentFields: [data.howLongKnown, data.groomIn3Words, data.whatYouAdmire, data.momentSeenTogether].filter(Boolean).length
    });

    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate speech');
      }

      const result = await response.json();
      setGeneratedSpeech(result.speech);

      // Calculate and set speech duration
      const duration = calculateDuration(result.speech);
      setSpeechDuration(duration);

      // Save to database if user is logged in
      if (user) {
        saveSpeechToDatabase(result.speech, data);
      }

      // Show additional info if available
      if (result.wordCount) {
        console.log(`Generated speech: ${result.wordCount} words, ~${result.estimatedTime} minutes`);
      }

      // Log generation details for debugging
      console.log('🎉 [CLIENT] Speech generation successful!', {
        isAIGenerated: result.isAIGenerated,
        model: result.model,
        dataCompleteness: result.dataCompleteness,
        isPremium: result.isPremium,
        wordCount: result.wordCount,
        estimatedTime: result.estimatedTime,
        message: result.message
      });

      if (result.error) {
        console.warn('Generation warning:', result.error);
      }

    } catch (error) {
      console.error('💥 [CLIENT] Error generating speech:', error);

      // Show clean error message - no fallback, just ask user to try again
      setGeneratedSpeech(`Sorry, we're having trouble generating your speech right now. Please try again in a few moments.

If the problem persists, please check back later as our AI service may be temporarily unavailable.`);

      // Set a minimal duration for the error message
      setSpeechDuration(1);

      console.log('❌ [CLIENT] Error state set - user should regenerate');
    }

    setIsGenerating(false);
  }, [calculateDuration, saveSpeechToDatabase, user]);

  useEffect(() => {
    // Get form data from localStorage
    const savedData = localStorage.getItem('speechFormData');
    if (savedData) {
      const data = JSON.parse(savedData);
      // Ensure we have a length preference, default to medium if not set
      if (!data.lengthPreference) {
        data.lengthPreference = 'medium';
      }
      setFormData(data);
      generateSpeech(data);
    }
  }, [generateSpeech]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedSpeech);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const exportToPDF = () => {
    // In a real app, this would generate a proper PDF
    alert("PDF export would be implemented with a library like jsPDF");
  };

  const exportToGoogleDoc = () => {
    // In a real app, this would integrate with Google Docs API
    alert("Google Docs export would be implemented with the Google Docs API");
  };

  const regenerateSpeech = (targetDuration?: number) => {
    if (formData) {
      // Update form data with new duration preference if specified
      const updatedFormData = targetDuration ? {
        ...formData,
        lengthPreference: targetDuration <= 2.5 ? 'short' : targetDuration <= 5 ? 'medium' : 'long'
      } : formData;

      generateSpeech(updatedFormData);
    }
  };

  if (!formData) {
    return (
      <div className="min-h-screen gradient-warm flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No speech data found. Please start over.</p>
            <Link href="/generator">
              <Button className="mt-4 rounded-full">Create New Speech</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background transition-theme">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e8e1d8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="h-4 w-4 mr-1" />
                {session ? "Speech Generated" : "Free Trial Used"}
              </Badge>
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
              <Button variant="outline" size="sm" className="rounded-full">
                <Crown className="h-4 w-4 mr-1" />
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Speech Content */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-[#181615]">
                    Your Wedding Speech
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-[#da5389]/10 text-[#da5389] border-[#da5389]/20">
                      {formData.tone.charAt(0).toUpperCase() + formData.tone.slice(1)} Tone
                    </Badge>
                    <button
                      onClick={() => setShowDurationControls(!showDurationControls)}
                      className="group"
                    >
                      <Badge variant="outline" className="bg-[#e9a41a]/10 text-[#e9a41a] border-[#e9a41a]/20 hover:bg-[#e9a41a]/20 transition-colors cursor-pointer">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDuration(speechDuration)}
                        <ChevronDown className={`h-3 w-3 ml-1 transition-transform ${showDurationControls ? 'rotate-180' : ''}`} />
                      </Badge>
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {isGenerating ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <RefreshCw className="h-8 w-8 text-[#da5389] animate-spin mx-auto mb-4" />
                      <h3 className="text-xl text-[#181615] mb-2">
                        Creating Your Perfect Speech
                      </h3>
                      <p className="text-[#6b5b73]">
                        Our AI is crafting a heartfelt speech just for you...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Duration Controls Dropdown */}
                    {showDurationControls && (
                      <div className="bg-gradient-to-r from-[#e9a41a]/5 to-[#da5389]/5 rounded-lg p-6 mb-4 border border-[#e9a41a]/20">
                        <h4 className="text-lg font-semibold text-[#181615] mb-3 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-[#e9a41a]" />
                          Adjust Speech Duration
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          {[
                            { target: 2, label: "Quick (2 min)", description: "Concise and impactful" },
                            { target: 4, label: "Standard (4 min)", description: "Perfect balance" },
                            { target: 6, label: "Extended (6 min)", description: "Full storytelling" }
                          ].map((option) => (
                            <button
                              key={option.target}
                              onClick={() => {
                                setSpeechDuration(option.target);
                                regenerateSpeech(option.target);
                                setShowDurationControls(false);
                              }}
                              className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                                Math.abs(speechDuration - option.target) < 0.5
                                  ? 'bg-[#e9a41a] border-[#e9a41a] text-white shadow-md'
                                  : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#e9a41a] hover:text-[#e9a41a]'
                              }`}
                            >
                              <div className="text-base font-medium">{option.label}</div>
                              <div className={`text-sm mt-1 ${
                                Math.abs(speechDuration - option.target) < 0.5 ? 'text-white/80' : 'text-[#8f867e]'
                              }`}>
                                {option.description}
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-[#8f867e]">
                          <span>💡 Current speech: ~{speechDuration} minutes at 150 words/min</span>
                          <button
                            onClick={() => setShowDurationControls(false)}
                            className="text-[#da5389] hover:underline"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Speech Display Controls */}
                    <div className="bg-[#faf7f4] rounded-lg p-4 mb-4 border border-[#e8e1d8]">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#181615]">Font Size:</span>
                          <button
                            onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                            className="w-8 h-8 rounded-full bg-white border border-[#e8e1d8] hover:border-[#da5389] flex items-center justify-center text-[#181615] hover:text-[#da5389]"
                          >
                            -
                          </button>
                          <span className="text-sm text-[#6b5b73] min-w-[3rem] text-center">{fontSize}px</span>
                          <button
                            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                            className="w-8 h-8 rounded-full bg-white border border-[#e8e1d8] hover:border-[#da5389] flex items-center justify-center text-[#181615] hover:text-[#da5389]"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#181615]">Font:</span>
                          <select
                            value={fontFamily}
                            onChange={(e) => setFontFamily(e.target.value)}
                            className="text-sm border border-[#e8e1d8] rounded-md px-2 py-1 bg-white text-[#181615] hover:border-[#da5389] focus:border-[#da5389] focus:outline-none"
                          >
                            <option value="serif">Serif</option>
                            <option value="sans">Sans Serif</option>
                            <option value="mono">Monospace</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#181615]">Line Height:</span>
                          <select
                            value={lineHeight}
                            onChange={(e) => setLineHeight(Number(e.target.value))}
                            className="text-sm border border-[#e8e1d8] rounded-md px-2 py-1 bg-white text-[#181615] hover:border-[#da5389] focus:border-[#da5389] focus:outline-none"
                          >
                            <option value={1.4}>Tight</option>
                            <option value={1.6}>Normal</option>
                            <option value={1.8}>Relaxed</option>
                            <option value={2.0}>Loose</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-2 ml-auto">
                          <button
                            onClick={() => {
                              setFontSize(16);
                              setFontFamily('serif');
                              setLineHeight(1.6);
                            }}
                            className="text-xs text-[#6b5b73] hover:text-[#da5389] underline"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>

                    <Textarea
                      value={generatedSpeech}
                      onChange={(e) => setGeneratedSpeech(e.target.value)}
                      rows={20}
                      className="text-black placeholder:text-[#8f867e] border-[#e8e1d8] focus:border-[#da5389]"
                      placeholder="Your speech will appear here..."
                      style={{
                        fontSize: `${fontSize}px`,
                        fontFamily: fontFamily === 'serif' ? 'Georgia, serif' :
                                   fontFamily === 'sans' ? 'system-ui, sans-serif' :
                                   'Monaco, monospace',
                        lineHeight: lineHeight
                      }}
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#e8e1d8]">
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        className="flex-1 min-w-0 rounded-full border-[#da5389]/30 text-[#da5389] hover:bg-[#da5389] hover:text-white hover:border-[#da5389]"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        {copied ? "Copied!" : "Copy Text"}
                      </Button>

                      <Button
                        onClick={exportToPDF}
                        variant="outline"
                        className="flex-1 min-w-0 rounded-full border-[#da5389]/30 text-[#da5389] hover:bg-[#da5389] hover:text-white hover:border-[#da5389]"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export PDF
                      </Button>

                      <Button
                        onClick={exportToGoogleDoc}
                        variant="outline"
                        className="flex-1 min-w-0 rounded-full border-[#da5389]/30 text-[#da5389] hover:bg-[#da5389] hover:text-white hover:border-[#da5389]"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Google Doc
                      </Button>

                      <Button
                        onClick={() => regenerateSpeech()}
                        className="flex-1 min-w-0 rounded-full bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with Upgrade and Tips */}
          <div className="space-y-6">
            {/* Upgrade Card */}
            <Card className="border-[#da5389]/20 shadow-lg ring-2 ring-[#da5389]/20 bg-gradient-to-br from-white to-[#da5389]/5">
              <CardHeader>
                <CardTitle className="text-xl text-[#181615] flex items-center gap-2">
                  <Crown className="h-5 w-5 text-[#da5389]" />
                  Upgrade to Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-[#6b5b73] mb-4">
                  Unlock more features to make your speech even better:
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#e9a41a]" />
                    <span className="text-[#181615]">Unlimited speech generations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#e9a41a]" />
                    <span className="text-[#181615]">Multiple tone variations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#e9a41a]" />
                    <span className="text-[#181615]">Longer speech options (3-5 minutes)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#e9a41a]" />
                    <span className="text-[#181615]">Premium export formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#e9a41a]" />
                    <span className="text-[#181615]">Speech practice tips</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-lg rounded-full">
                  Upgrade for $9.99
                </Button>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="border-[#e8e1d8]">
              <CardHeader>
                <CardTitle className="text-xl text-[#181615]">
                  Delivery Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm text-[#6b5b73]">
                  <li>📖 Practice reading your speech out loud several times</li>
                  <li>⏱️ Time yourself to ensure you stay within your limit</li>
                  <li>😌 Take deep breaths and speak slowly</li>
                  <li>👀 Make eye contact with the couple</li>
                  <li>💧 Have water nearby during your speech</li>
                  <li>📱 Consider printing a backup copy</li>
                </ul>
              </CardContent>
            </Card>

            {/* Create Another Speech */}
            <Card className="border-[#e8e1d8]">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg text-[#181615] mb-2">
                  Need Another Speech?
                </h3>
                <p className="text-[#6b5b73] text-sm mb-4">
                  Create speeches for different wedding roles or events.
                </p>
                <Link href="/generator">
                  <Button variant="outline" className="w-full rounded-full border-[#da5389] text-[#da5389] hover:bg-[#da5389] hover:text-white">
                    Create New Speech
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <SocialSignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        redirectTo="/result"
      />
    </div>
  );
}
