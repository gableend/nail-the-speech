import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  subject: string;
  caption: string;
  annotation?: string;
}

export default function ScreenshotPlaceholder({
  subject,
  caption,
  annotation,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className="my-8">
      <div className="bg-white border-2 border-dashed border-[#e8e1d8] rounded-xl overflow-hidden">
        {/* Placeholder image area */}
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-[#faf7f4]/50">
          <div className="w-14 h-14 rounded-full bg-[#da5389]/10 flex items-center justify-center mb-4">
            <ImageIcon className="h-7 w-7 text-[#da5389]" />
          </div>
          <span className="text-xs font-medium text-[#8f867e] uppercase tracking-wider mb-1">
            Screenshot placeholder
          </span>
          <span className="text-sm font-semibold text-[#181615] text-center">
            {subject}
          </span>
          {annotation && (
            <span className="mt-2 text-xs text-[#8f867e] text-center max-w-md italic">
              {annotation}
            </span>
          )}
        </div>
      </div>
      <figcaption className="mt-2 text-sm text-[#8f867e] text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
