import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:location-coaching',
        destination: '/seo/general/:location',
      },
      {
        source: '/iit-jee-coaching-:location',
        destination: '/seo/iit-jee/:location',
      },
      {
        source: '/neet-coaching-:location',
        destination: '/seo/neet/:location',
      },
    ];
  },
};

export default nextConfig;
