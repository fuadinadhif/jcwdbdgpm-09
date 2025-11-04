import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.lmpm.website" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "media.posterstore.com" },
    ],
  },
};

export default nextConfig;

// remotePatterns: [
//   new URL("https://media.lmpm.website/**"),
//   new URL("https://images.pexels.com/**"),
//   new URL("https://media.posterstore.com/**"),
// ]
