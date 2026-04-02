import Link from "next/link";
import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthNavigation from "@/components/AuthNavigation";

export default function SiteHeader() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#000000] text-white text-center py-2 text-sm sticky top-0 z-50">
        <div className="flex items-center justify-center gap-4">
          <span>Create perfect speeches. Get your first speech free with Nail The Speech!</span>
          <Link href="/generator">
            <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-medium transition-colors">
              Get Started
              <ArrowRight className="h-3 w-3" />
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-[#e8e1d8] sticky top-[36px] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#da5389] font-medium">
                  Speech Types <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/generator?role=groom" className="block py-2 text-[#181615] hover:text-[#da5389]">Groom</Link>
                  <Link href="/generator?role=bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Bride</Link>
                  <Link href="/generator?role=best-man" className="block py-2 text-[#181615] hover:text-[#da5389]">Best Man</Link>
                  <Link href="/generator?role=maid-of-honor" className="block py-2 text-[#181615] hover:text-[#da5389]">Maid of Honor</Link>
                  <Link href="/generator?role=father-of-bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Father of Bride</Link>
                  <Link href="/generator?role=mother-of-bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Mother of Bride</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#da5389] font-medium">
                  Help & Advice <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/advice" className="block py-2 text-[#181615] hover:text-[#da5389]">All Advice</Link>
                  <Link href="/advice#speech-tips" className="block py-2 text-[#181615] hover:text-[#da5389]">Speech Tips</Link>
                  <Link href="/advice#practice-guide" className="block py-2 text-[#181615] hover:text-[#da5389]">Practice Guide</Link>
                  <Link href="/examples" className="block py-2 text-[#181615] hover:text-[#da5389]">Examples</Link>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <AuthNavigation />
              <Button className="md:hidden rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
