import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#181615] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎤</span>
              <span className="font-bold text-xl">Nail The Speech</span>
            </div>
            <p className="text-gray-300 mb-4">
              Create unforgettable wedding speeches with AI that understands the heart of your message.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-4">Speech Types</p>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/generator?role=best-man" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Best Man</Link></li>
              <li><Link href="/generator?role=maid-of-honor" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Maid of Honor</Link></li>
              <li><Link href="/generator?role=father-of-bride" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Father of the Bride</Link></li>
              <li><Link href="/generator?role=mother-of-bride" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Mother of the Bride</Link></li>
              <li><Link href="/generator?role=groom" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Groom</Link></li>
              <li><Link href="/generator?role=bride" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Bride</Link></li>
              <li><Link href="/#all-roles" className="hover:text-[#b33c6c] text-[#c44578] block py-1.5 min-h-[44px] flex items-center">All Roles &rarr;</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-semibold mb-4">Help</p>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/help" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Help Centre</Link></li>
              <li><Link href="/advice#speech-tips" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Speech Tips</Link></li>
              <li><Link href="/examples" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Examples</Link></li>
              <li><Link href="/advice#practice-guide" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Practice Guide</Link></li>
              <li><Link href="/articles" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">Articles</Link></li>
              <li><Link href="/advice" className="hover:text-[#b33c6c] block py-1.5 min-h-[44px] flex items-center">All Advice</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Nail The Speech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#b33c6c]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#b33c6c]">Terms of Service</Link>
            <Link href="/data-deletion" className="hover:text-[#b33c6c]">Data Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
