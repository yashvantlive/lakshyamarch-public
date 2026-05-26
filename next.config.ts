import type { NextConfig } from "next";

const erpBase =
  process.env.NEXT_PUBLIC_ERP_API_URL?.replace(/\/$/, "") ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://erp.lakshyamarch.com");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/login", destination: `${erpBase}/login`, permanent: false },
      {
        source: "/marketing/login",
        destination: `${erpBase}/marketing/login`,
        permanent: false,
      },
      { source: "/admin", destination: `${erpBase}/admin`, permanent: false },
      { source: "/admin/:path*", destination: `${erpBase}/admin/:path*`, permanent: false },
      { source: "/student", destination: `${erpBase}/student`, permanent: false },
      { source: "/student/:path*", destination: `${erpBase}/student/:path*`, permanent: false },
      { source: "/teacher", destination: `${erpBase}/teacher`, permanent: false },
      { source: "/teacher/:path*", destination: `${erpBase}/teacher/:path*`, permanent: false },
    ];
  },
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
