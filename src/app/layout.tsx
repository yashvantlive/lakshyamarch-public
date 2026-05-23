import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import FloatingCTA from "@/components/public/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://lakshyamarch.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LakshyaMarch Education Begusarai | IIT JEE | NEET | 11th & 12th Board",
    template: "%s | LakshyaMarch Begusarai",
  },
  description:
    "Begusarai's #1 Coaching Institute — Specializing in IIT JEE, NEET, 11th, 12th CBSE/ICSE Boards & Foundation (Class 6-10). 100+ Selections, 4.9/5 Rating, IIT/NIT Faculty. Admissions open for 2026-2027.",
  keywords: [
    "LakshyaMarch",
    "Begusarai coaching",
    "IIT JEE coaching Begusarai",
    "NEET coaching Begusarai",
    "CBSE & ICSE Board Exams",
    "Best coaching Begusarai Bihar",
    "Foundation classes Begusarai",
    "Integrated school model",
    "Ram Sir Begusarai",
  ],
  authors: [{ name: "LakshyaMarch Education" }],
  creator: "LakshyaMarch Education",
  openGraph: {
    title: "LakshyaMarch Education | Best Coaching in Begusarai",
    description:
      "100+ IIT/NEET Selections. Begusarai's most trusted coaching institute for IIT JEE, NEET & Foundation. 4.9/5 Rated based on student success.",
    url: BASE_URL,
    siteName: "LakshyaMarch Education",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LakshyaMarch Education Begusarai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LakshyaMarch Education | IIT JEE | NEET | Begusarai",
    description: "Begusarai's top coaching with 100+ Selections & IIT/NIT Faculty. Quality results guaranteed.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "I5ux7PLjemL_3C1p9AOdqgXut0FFMpjDbVyyXJ5YxiM",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LakshyaMarch",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="h-full font-sans antialiased bg-slate-50 text-slate-900" suppressHydrationWarning>
        <JsonLd />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
