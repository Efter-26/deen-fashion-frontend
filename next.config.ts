import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deenfashionbd.com',
        port: '',
        pathname: '/public/storage/images/**',
      },
    ],
  },
};

export default nextConfig;
