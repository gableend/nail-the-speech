"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Copy,
  Download,
  Users,
  Clock,
  FileText,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

interface SpeechData {
  speech: string;
  wordCount: number | null;
  readingTime: number | null;
  role: string;
  dataCompleteness: string;
}

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [speechData, setSpeechData] = useState<SpeechData | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);

  useEffect(() => {
    // Check if speech is currently being generated
    const isGeneratingFromStorage = localStorage.getItem('speechGenerating') === 'true';
    setIsGenerating(isGeneratingFromStorage);

    // Try to get speech data from URL params first
    const speechParam = searchParams.get('speech');
    const wordCountParam = searchParams.get('wordCount');
    const readingTimeParam = searchParams.get('readingTime');

    if (speechParam) {
      // Speech data was passed via URL (old method)
      setSpeechData({
        speech: decodeURIComponent(speechParam),
        wordCount: wordCountParam ? Number.parseInt(wordCountParam) : null,
        readingTime: readingTimeParam ? Number.parseInt(readingTimeParam) : null,
        role: searchParams.get('role') || 'best-man',
        dataCompleteness: searchParams.get('dataCompleteness') || 'basic'
      });
      setIsGenerating(false);
    } else {
      // Try localStorage for already generated speech
      const savedSpeech = localStorage.getItem('generatedSpeech');
      if (savedSpeech && !isGeneratingFromStorage) {
        try {
          const speechDataFromStorage = JSON.parse(savedSpeech);
          setSpeechData({
            speech: speechDataFromStorage.speech,
            wordCount: speechDataFromStorage.wordCount || null,
            readingTime: speechDataFromStorage.estimatedTime || null,
            role: speechDataFromStorage.role || 'best-man',
            dataCompleteness: speechDataFromStorage.dataCompleteness || 'basic'
          });
        } catch (error) {
          console.error('Failed to parse saved speech data:', error);
        }
      }
    }

    // Listen for speech generation completion
    const handleSpeechGenerated = () => {
      const savedSpeech = localStorage.getItem('generatedSpeech');
      if (savedSpeech) {
        try {
          const speechDataFromStorage = JSON.parse(savedSpeech);
          setSpeechData({
            speech: speechDataFromStorage.speech,
            wordCount: speechDataFromStorage.wordCount || null,
            readingTime: speechDataFromStorage.estimatedTime || null,
            role: speechDataFromStorage.role || 'best-man',
            dataCompleteness: speechDataFromStorage.dataCompleteness || 'basic'
          });
          setIsGenerating(false);
        } catch (error) {
          console.error('Failed to parse generated speech data:', error);
        }
      }
    };

    const handleSpeechError = () => {
      const error = localStorage.getItem('speechError');
      setGenerationError(error || 'Failed to generate speech');
      setIsGenerating(false);
    };

    // Add event listeners
    window.addEventListener('speech-generated', handleSpeechGenerated);
    window.addEventListener('speech-error', handleSpeechError);

    // Cleanup
    return () => {
      window.removeEventListener('speech-generated', handleSpeechGenerated);
      window.removeEventListener('speech-error', handleSpeechError);
    };
  }, [searchParams]);

  const handleCopyToClipboard = async () => {
    if (speechData?.speech) {
      try {
        await navigator.clipboard.writeText(speechData.speech);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
    }
  };

  const handleDownload = () => {
    if (speechData?.speech) {
      const element = document.createElement('a');
      const file = new Blob([speechData.speech], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `wedding-speech-${speechData.role}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const handleEditAndRegenerate = () => {
    // Get the stored form data to restore the user's previous state
    const formData = localStorage.getItem('speechFormData');
    if (formData) {
      // Store the form data for the generator to restore
      localStorage.setItem('restoreFormData', formData);
    }
    // Navigate back to generator
    router.push('/generator');
  };

  if (generationError) {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <FileText className="h-12 w-12 text-red-500 mx-auto" />
            <h2 className="text-xl font-semibold text-[#181615]">Speech Generation Failed</h2>
            <p className="text-[#8f867e]">{generationError}</p>
            <Link href="/generator">
              <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                Try Again
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!speechData && !isGenerating) {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <FileText className="h-12 w-12 text-[#8f867e] mx-auto" />
            <h2 className="text-xl font-semibold text-[#181615]">No Speech Found</h2>
            <p className="text-[#8f867e]">
              It looks like you haven't generated a speech yet or the data was lost.
            </p>
            <Link href="/generator">
              <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                Generate Speech
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#e8e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
              </Link>
              <Badge className="bg-[#fffaf7] text-[#e9a41a] border-[#e9a41a]">
                <CheckCircle className="h-4 w-4 mr-1" />
                Speech Generated
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleEditAndRegenerate}
                variant="outline"
                className="rounded-full border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Edit & Regenerate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 text-[#da5389] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#181615]">
                  {isGenerating ? (
                    <div className="animate-pulse bg-gray-200 h-6 w-12 mx-auto rounded"></div>
                  ) : (
                    speechData?.wordCount || 'N/A'
                  )}
                </div>
                <div className="text-sm text-[#8f867e]">Words</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-[#da5389] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#181615]">
                  {isGenerating ? (
                    <div className="animate-pulse bg-gray-200 h-6 w-16 mx-auto rounded"></div>
                  ) : (
                    `${speechData?.readingTime || 'N/A'} min`
                  )}
                </div>
                <div className="text-sm text-[#8f867e]">Reading Time</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-[#da5389] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#181615] capitalize">
                  {isGenerating ? (
                    <div className="animate-pulse bg-gray-200 h-6 w-20 mx-auto rounded"></div>
                  ) : (
                    speechData?.role?.replace('-', ' ') || 'Wedding'
                  )}
                </div>
                <div className="text-sm text-[#8f867e]">Speech Type</div>
              </CardContent>
            </Card>
          </div>

          {/* Speech Content */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-[#181615]">Your Generated Speech</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleCopyToClipboard}
                    disabled={isGenerating || !speechData?.speech}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {copySuccess ? (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </Button>
                  <Button
                    onClick={handleDownload}
                    disabled={isGenerating || !speechData?.speech}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {isGenerating ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center py-8">
                      <div className="flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#da5389]"></div>
                        <span className="text-[#da5389] font-medium">Generating your speech...</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className={`bg-gray-200 h-4 rounded ${i % 2 === 0 ? 'w-5/6' : 'w-full'}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap text-[#181615] leading-relaxed text-lg">
                    {speechData?.speech}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleEditAndRegenerate}
              className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8"
            >
              Edit & Regenerate
            </Button>
            <Link href="/generator">
              <Button variant="outline" className="rounded-full px-8 border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-white">
                Start New Speech
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8 border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389] mx-auto mb-4" />
        <p className="text-[#8f867e]">Loading speech results...</p>
      </div>
    </div>}>
      <ResultContent />
    </Suspense>
  );
}
