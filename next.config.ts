import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mendozaplastic.wpenginepowered.com',
      },
      {
        protocol: 'https',
        hostname: '*.wpenginepowered.com',
      }
    ],
  },
};

export default nextConfig;
