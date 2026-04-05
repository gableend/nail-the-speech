"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("@/components/HomeClient"), {
  ssr: false,
  loading: () => (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#faf7f4] to-[#e8e1d8] h-96 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl">🎤</span>
          <p className="text-[#756c64] mt-4 font-medium">Loading...</p>
        </div>
      </div>
    </div>
  ),
});

export default function LazyHomeClient() {
  return <HomeClient />;
}
