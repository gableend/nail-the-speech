import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#181615] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎤</span>
              <span className="font-bold text-xl">Nail The Speech</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-sm">
              Talk it out. We&apos;ll shape your speech. Turn your ideas into a wedding speech that sounds like you.
            </p>
          </div>

          {/* Start Here */}
          <div>
            <p className="font-semibold mb-4">Start Here</p>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/advice/how-to-write-a-wedding-speech" className="hover:text-[#b33c6c] block py-1.5">Write Your Speech</Link></li>
              <li><Link href="/examples" className="hover:text-[#b33c6c] block py-1.5">Speech Examples</Link></li>
              <li><Link href="/advice/how-to-practise-a-wedding-speech" className="hover:text-[#b33c6c] block py-1.5">Practise Your Speech</Link></li>
              <li><Link href="/advice/wedding-speech-checklist" className="hover:text-[#b33c6c] block py-1.5">Speech Checklist</Link></li>
              <li><Link href="/generator" className="hover:text-[#e87aa8] text-[#e06b9c] block py-1.5">Create Your Speech &rarr;</Link></li>
            </ul>
          </div>

          {/* By Role */}
          <div>
            <p className="font-semibold mb-4">By Role</p>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/generator?role=best-man" className="hover:text-[#b33c6c] block py-1.5">Best Man</Link></li>
              <li><Link href="/generator?role=maid-of-honor" className="hover:text-[#b33c6c] block py-1.5">Maid of Honor</Link></li>
              <li><Link href="/generator?role=father-of-bride" className="hover:text-[#b33c6c] block py-1.5">Father of the Bride</Link></li>
              <li><Link href="/generator?role=mother-of-bride" className="hover:text-[#b33c6c] block py-1.5">Mother of the Bride</Link></li>
              <li><Link href="/generator?role=groom" className="hover:text-[#b33c6c] block py-1.5">Groom</Link></li>
              <li><Link href="/generator?role=bride" className="hover:text-[#b33c6c] block py-1.5">Bride</Link></li>
              <li><Link href="/#all-roles" className="hover:text-[#e87aa8] text-[#e06b9c] block py-1.5">All Roles &rarr;</Link></li>
            </ul>
          </div>

          {/* Help & Resources */}
          <div>
            <p className="font-semibold mb-4">Help & Resources</p>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/help" className="hover:text-[#b33c6c] block py-1.5">Help Centre</Link></li>
              <li><Link href="/advice" className="hover:text-[#b33c6c] block py-1.5">Advice & Guides</Link></li>
              <li><Link href="/articles" className="hover:text-[#b33c6c] block py-1.5">Articles</Link></li>
              <li><Link href="/advice#speech-tips" className="hover:text-[#b33c6c] block py-1.5">Speech Tips</Link></li>
              <li><Link href="/advice#practice-guide" className="hover:text-[#b33c6c] block py-1.5">Practice Guide</Link></li>
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
