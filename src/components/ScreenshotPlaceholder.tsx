"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon, X } from "lucide-react";

interface ScreenshotPlaceholderProps {
  subject: string;
  caption: string;
  annotation?: string;
  src?: string;
  alt?: string;
}

export default function ScreenshotPlaceholder({
  subject,
  caption,
  annotation,
  src,
  alt,
}: ScreenshotPlaceholderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-8">
        {src ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full bg-white border border-[#e8e1d8] rounded-xl overflow-hidden shadow-sm cursor-zoom-in hover:shadow-md transition-shadow group"
          >
            <Image
              src={src}
              alt={alt || subject}
              width={800}
              height={500}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <span className="block py-1.5 text-xs text-[#756c64] opacity-0 group-hover:opacity-100 transition-opacity">
              Click to enlarge
            </span>
          </button>
        ) : (
          <div className="bg-white border-2 border-dashed border-[#e8e1d8] rounded-xl overflow-hidden">
            <div className="flex flex-col items-center justify-center py-16 px-6 bg-[#faf7f4]/50">
              <div className="w-14 h-14 rounded-full bg-[#c44578]/10 flex items-center justify-center mb-4">
                <ImageIcon className="h-7 w-7 text-[#c44578]" />
              </div>
              <span className="text-xs font-medium text-[#756c64] uppercase tracking-wider mb-1">
                Screenshot placeholder
              </span>
              <span className="text-sm font-semibold text-[#181615] text-center">
                {subject}
              </span>
              {annotation && (
                <span className="mt-2 text-xs text-[#756c64] text-center max-w-md italic">
                  {annotation}
                </span>
              )}
            </div>
          </div>
        )}
        <figcaption className="mt-2 text-sm text-[#756c64] text-center">
          {caption}
        </figcaption>
      </figure>

      {/* Lightbox overlay — uses unoptimized img for full-resolution zoom */}
      {open && src && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || subject}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
