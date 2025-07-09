"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface VoiceInputProps {
  onTranscription: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function VoiceInput({ onTranscription, placeholder = "Click to speak...", disabled = false }: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      setError("");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm'
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);

        // Stop all tracks to release microphone
        for (const track of stream.getTracks()) {
          track.stop();
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      setError("Could not access microphone. Please check permissions.");
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    try {
      setIsProcessing(true);

      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

      const response = await fetch('/api/speech-to-text', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const result = await response.json();

      if (result.text) {
        onTranscription(result.text);
      } else {
        setError("No speech detected. Please try again.");
      }
    } catch (err) {
      setError("Failed to process audio. Please try again.");
      console.error('Error processing audio:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClick = () => {
    if (disabled) return;

    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button
        type="button"
        variant="outline"
        onClick={handleClick}
        disabled={disabled || isProcessing}
        className={`flex items-center space-x-2 h-10 px-4 transition-all duration-200 ${
          isRecording
            ? 'bg-red-50 border-red-300 text-red-700 hover:bg-red-100'
            : 'bg-white border-[#e8e1d8] text-[#8f867e] hover:border-[#da5389] hover:text-[#da5389]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isProcessing ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : isRecording ? (
          <MicOff className="h-4 w-4" />
        ) : (
          <Mic className="h-4 w-4" />
        )}
        <span className="text-sm">
          {isProcessing
            ? 'Processing...'
            : isRecording
              ? 'Stop Recording'
              : 'Voice Input'
          }
        </span>
      </Button>

      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}

      {isRecording && (
        <p className="text-xs text-[#8f867e] flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2" />
          Recording... Click stop when finished
        </p>
      )}
    </div>
  );
}
