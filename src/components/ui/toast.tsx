"use client";

import { useState, useEffect, useCallback } from 'react';
import { X, AlertCircle, CheckCircle, Mic } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'error' | 'success' | 'hint';
}

let toastId = 0;
let addToastFn: ((message: string, type?: 'error' | 'success' | 'hint') => void) | null = null;

export function showToast(message: string, type: 'error' | 'success' | 'hint' = 'error') {
  addToastFn?.(message, type);
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: 'error' | 'success' | 'hint' = 'error') => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 6000);
  }, []);

  useEffect(() => {
    addToastFn = addToast;
    return () => { addToastFn = null; };
  }, [addToast]);

  const dismiss = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] flex flex-col gap-3 w-full max-w-md px-4">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`flex items-start gap-3 px-5 py-4 rounded-2xl shadow-xl border backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-300 ${
            toast.type === 'error'
              ? 'bg-white/95 border-[#c44578]/30 text-[#181615]'
              : toast.type === 'hint'
              ? 'bg-white/95 border-[#c44578]/30 text-[#181615]'
              : 'bg-white/95 border-green-300 text-[#181615]'
          }`}
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" />
          ) : toast.type === 'hint' ? (
            <Mic className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#c44578]" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#c44578]" />
          )}
          <p className="text-sm leading-relaxed flex-1">{toast.message}</p>
          <button onClick={() => dismiss(toast.id)} className="flex-shrink-0 hover:opacity-70 text-[#756c64]">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
