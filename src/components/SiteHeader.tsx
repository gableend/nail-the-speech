import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import LazyAuthNavigation from "@/components/LazyAuthNavigation";
import LazyMobileNav from "@/components/LazyMobileNav";

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      {/* Top Banner — slimmer on mobile */}
      <div className="bg-[#000000] text-white text-center py-1.5 sm:py-2.5 text-xs sm:text-sm">
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-4">
          <span className="hidden sm:inline">Create perfect wedding speeches with AI. Get started for free!</span>
          <span className="sm:hidden">Get started for free!</span>
          <Link href="/generator">
            <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 min-h-[36px] rounded-full text-xs font-medium transition-colors">
              Get Started
              <ArrowRight className="h-3 w-3" />
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-[#e8e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-2xl sm:text-3xl">🎤</span>
              <span className="font-bold text-xl sm:text-2xl text-[#181615]">Nail The Speech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#b33c6c] font-medium min-h-[44px]">
                  Speech Types <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/generator?role=best-man" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Best Man</Link>
                  <Link href="/generator?role=maid-of-honor" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Maid of Honor</Link>
                  <Link href="/generator?role=father-of-bride" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Father of the Bride</Link>
                  <Link href="/generator?role=mother-of-bride" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Mother of the Bride</Link>
                  <Link href="/generator?role=groom" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Groom</Link>
                  <Link href="/generator?role=bride" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Bride</Link>
                  <div className="border-t border-[#e8e1d8] mt-2 pt-2">
                    <Link href="/#all-roles" className="block py-2 text-[#c44578] hover:text-[#b33c6c] font-medium text-sm">All Roles &rarr;</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#b33c6c] font-medium min-h-[44px]">
                  Help & Advice <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/help" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Help Centre</Link>
                  <Link href="/advice" className="block py-2 text-[#181615] hover:text-[#b33c6c]">All Advice</Link>
                  <Link href="/advice#speech-tips" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Speech Tips</Link>
                  <Link href="/advice#practice-guide" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Practice Guide</Link>
                  <Link href="/examples" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Speech Examples</Link>
                  <Link href="/articles" className="block py-2 text-[#181615] hover:text-[#b33c6c]">Articles</Link>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-4">
                <LazyAuthNavigation />
              </div>
              <LazyMobileNav />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
