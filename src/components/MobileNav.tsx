"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthNavigation from "@/components/AuthNavigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [speechTypesOpen, setSpeechTypesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        className="rounded-full min-h-[44px] min-w-[44px] p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#e8e1d8]">
          <span className="font-bold text-lg text-[#181615]">Menu</span>
          <Button
            variant="ghost"
            className="rounded-full min-h-[44px] min-w-[44px] p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-65px)] py-4">
          {/* Speech Types Accordion */}
          <div className="px-4">
            <button
              onClick={() => setSpeechTypesOpen(!speechTypesOpen)}
              className="w-full flex items-center justify-between py-3 min-h-[44px] text-[#181615] font-medium"
            >
              Speech Types
              <ChevronDown className={`h-4 w-4 transition-transform ${speechTypesOpen ? "rotate-180" : ""}`} />
            </button>
            {speechTypesOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {[
                  { href: "/generator?role=best-man", label: "Best Man" },
                  { href: "/generator?role=maid-of-honor", label: "Maid of Honor" },
                  { href: "/generator?role=father-of-bride", label: "Father of the Bride" },
                  { href: "/generator?role=mother-of-bride", label: "Mother of the Bride" },
                  { href: "/generator?role=groom", label: "Groom" },
                  { href: "/generator?role=bride", label: "Bride" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 min-h-[44px] flex items-center text-[#756c64] hover:text-[#b33c6c]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#all-roles"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 min-h-[44px] flex items-center text-[#c44578] font-medium text-sm"
                >
                  All Roles →
                </Link>
              </div>
            )}
          </div>

          {/* Help & Advice Accordion */}
          <div className="px-4">
            <button
              onClick={() => setHelpOpen(!helpOpen)}
              className="w-full flex items-center justify-between py-3 min-h-[44px] text-[#181615] font-medium"
            >
              Help & Advice
              <ChevronDown className={`h-4 w-4 transition-transform ${helpOpen ? "rotate-180" : ""}`} />
            </button>
            {helpOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {[
                  { href: "/help", label: "Help Centre" },
                  { href: "/advice", label: "All Advice" },
                  { href: "/advice#speech-tips", label: "Speech Tips" },
                  { href: "/advice#practice-guide", label: "Practice Guide" },
                  { href: "/advice/wedding-speech-checklist", label: "Speech Checklist" },
                  { href: "/examples", label: "Speech Examples" },
                  { href: "/articles", label: "Articles" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 min-h-[44px] flex items-center text-[#756c64] hover:text-[#b33c6c]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[#e8e1d8] my-4 mx-4" />

          {/* Auth Buttons */}
          <div className="px-4 space-y-3">
            <AuthNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
