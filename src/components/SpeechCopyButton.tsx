'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function SpeechCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-[#756c64] hover:text-[#b33c6c] transition-colors px-3 py-1.5 rounded-lg border border-[#e8e1d8] hover:border-[#b33c6c]"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" /> Copied!
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> Copy speech
        </>
      )}
    </button>
  );
}
