/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(self), geolocation=(), interest-cohort=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/nailthespeech-vs-toastpal", destination: "/vs/toastpal", permanent: true },
      { source: "/nailthespeech-vs-toastwiz", destination: "/vs/toastwiz", permanent: true },
      { source: "/nailthespeech-vs-speechyai", destination: "/vs/speechyai", permanent: true },
    ];
  },
};

module.exports = nextConfig;
