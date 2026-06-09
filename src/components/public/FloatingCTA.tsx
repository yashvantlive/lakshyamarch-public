"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, INSTITUTE } from "@/lib/siteData";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Chatbot from "./Chatbot";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show after slight delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hide on admin/teacher/student/marketing dashboards to keep UI clean
  if (
    pathname?.startsWith("/admin") || 
    pathname?.startsWith("/teacher") || 
    pathname?.startsWith("/student") ||
    pathname?.startsWith("/marketing")
  ) {
    return null;
  }

  return (
    <div className={`fixed bottom-6 right-6 z-[90] flex flex-col gap-3 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
      {/* Chatbot Support AI CTA (placed above the call button) */}
      <Chatbot />

      {/* Phone CTA */}
      <a 
        href={`tel:+91${INSTITUTE.primaryPhone || "6206323869"}`} 
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-blue-800 text-white flex items-center justify-center shadow-brand-lg hover:scale-110 hover:bg-brand-blue-900 transition-all duration-300"
        aria-label="Call Admissions"
      >
        <span className="absolute right-full mr-4 whitespace-nowrap bg-ink-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:border-4 after:border-transparent after:border-l-ink-900">
          Call Admissions
        </span>
        <Phone size={22} strokeWidth={1.75} />
      </a>

      {/* WhatsApp CTA */}
      <a 
        href={whatsappLink()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-green-500 text-white flex items-center justify-center shadow-brand-lg hover:scale-110 hover:bg-brand-green-600 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-brand-green-500 before:animate-ping"
        aria-label="WhatsApp Us"
      >
        <span className="absolute right-full mr-4 whitespace-nowrap bg-ink-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:border-4 after:border-transparent after:border-l-ink-900">
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-500"></span>
          </span>
          Chat with Us
        </span>
        <MessageCircle size={26} strokeWidth={1.75} />
      </a>
    </div>
  );
}

