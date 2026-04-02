"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface VoiceInputProps {
  onTranscription: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * Pick a supported mimeType for MediaRecorder.
 * Safari doesn't support audio/webm — falls back to audio/mp4 or default.
 */
function getSupportedMimeType(): string {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/ogg;codecs=opus',
  ];
  for (const type of types) {
    if (MediaRecorder.isTypeSupported(type)) {
      return type;
    }
  }
  return ''; // let browser pick default
}

function getFileExtension(mimeType: string): string {
  if (mimeType.includes('webm')) return 'webm';
  if (mimeType.includes('mp4')) return 'mp4';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm';
}

export default function VoiceInput({ onTranscription, placeholder = "Click to speak...", disabled = false }: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>("");
  const [recordingDuration, setRecordingDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mimeTypeRef = useRef<string>('');

  const startRecording = async () => {
    try {
      setError("");
      setRecordingDuration(0);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000,
        }
      });
      streamRef.current = stream;

      const mimeType = getSupportedMimeType();
      mimeTypeRef.current = mimeType;
      console.log('🎤 [VOICE] Using mimeType:', mimeType || 'browser default');

      const options: MediaRecorderOptions = {};
      if (mimeType) {
        options.mimeType = mimeType;
      }

      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Stop duration timer
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }

        const actualMime = mimeType || mediaRecorder.mimeType || 'audio/webm';
        console.log('🎤 [VOICE] Recording stopped. Chunks:', chunksRef.current.length, 'Actual mimeType:', actualMime);

        const audioBlob = new Blob(chunksRef.current, { type: actualMime });
        console.log('🎤 [VOICE] Audio blob size:', audioBlob.size);

        // Release microphone
        for (const track of stream.getTracks()) {
          track.stop();
        }
        streamRef.current = null;

        await processAudio(audioBlob, actualMime);
      };

      mediaRecorder.start(500); // Collect data every 500ms
      setIsRecording(true);

      // Duration timer
      timerRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);

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

  const processAudio = async (audioBlob: Blob, mimeType: string) => {
    try {
      setIsProcessing(true);

      console.log('🎤 [VOICE] Processing audio blob:', { size: audioBlob.size, type: mimeType });

      if (audioBlob.size < 1000) {
        setError("Recording too short. Hold the button and speak for at least 2 seconds.");
        return;
      }

      const ext = getFileExtension(mimeType);
      const formData = new FormData();
      formData.append('audio', audioBlob, `recording.${ext}`);

      const response = await fetch('/api/speech-to-text', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('🎤 [VOICE] API error:', response.status, errorData);
        throw new Error(errorData?.error || 'Failed to transcribe audio');
      }

      const result = await response.json();
      console.log('🎤 [VOICE] Transcription result:', result);

      if (result.text && result.text.trim()) {
        onTranscription(result.text.trim());
      } else {
        setError("No speech detected. Please try again and speak clearly.");
      }
    } catch (err) {
      setError("Failed to process audio. Please try again.");
      console.error('🎤 [VOICE] Error processing audio:', err);
    } finally {
      setIsProcessing(false);
      setRecordingDuration(0);
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

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            ? 'Transcribing...'
            : isRecording
              ? `Stop Recording (${formatDuration(recordingDuration)})`
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
          Listening... Click stop when finished speaking
        </p>
      )}
    </div>
  );
}
