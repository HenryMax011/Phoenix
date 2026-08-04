import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sem standalone — Hostinger Next.js usa `next start` + pasta `.next`
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
