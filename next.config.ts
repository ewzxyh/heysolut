import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.launchuicomponents.com',
      },
      {
        protocol: 'https',
        hostname: 'farmui.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mhvzjal0ig61abwu.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
