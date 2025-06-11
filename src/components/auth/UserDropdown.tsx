"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { User, LogOut, FileText, Settings, Crown } from "lucide-react";
import Link from "next/link";

export default function UserDropdown() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session?.user) return null;

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 rounded-full p-0 hover:bg-gray-100"
      >
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-[#da5389] flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {session.user.name?.charAt(0).toUpperCase() ||
               session.user.email?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {/* User Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-[#da5389] flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {session.user.name?.charAt(0).toUpperCase() ||
                     session.user.email?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {session.user.name || "User"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {session.user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4" />
              Profile Settings
            </Link>

            <button
              className="flex items-center gap-3 px-4 py-2 text-sm text-[#da5389] hover:bg-gray-50 w-full"
              onClick={() => setIsOpen(false)}
            >
              <Crown className="h-4 w-4" />
              Upgrade to Premium
            </button>

            <div className="border-t border-gray-100 my-2" />

            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
