import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">🎤</div>
        <h1 className="text-3xl font-bold text-[#181615] mb-2">Page Not Found</h1>
        <p className="text-[#756c64] mb-8">
          Looks like this page missed its cue. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#c44578] text-white font-medium hover:bg-[#c4447a] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/generator"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#e8e1d8] text-[#181615] font-medium hover:border-[#b33c6c] hover:text-[#b33c6c] transition-colors"
          >
            Write a Speech
          </Link>
        </div>
      </div>
    </div>
  );
}
