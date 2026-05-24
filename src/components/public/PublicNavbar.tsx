"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { INSTITUTE, NAV_LINKS } from "@/lib/siteData";
import { getPortalLoginUrl, getMarketingLoginUrl } from "@/lib/erpApi";

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className={`text-base font-extrabold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                {INSTITUTE.headerName}
              </p>
              <p className={`text-[10px] font-medium uppercase tracking-widest transition-colors ${scrolled ? "text-blue-600" : "text-blue-200"}`}>
                {INSTITUTE.tagline2}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link: { label: string; href: string }) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admission"
              className="ml-2 h-9 px-4 inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold shadow-md transition-all"
            >
              Apply Now
            </Link>
            <a
              href={getPortalLoginUrl()}
              className="ml-1 h-9 px-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-slate-900 hover:to-black transition-all"
            >
              Portal Login
            </a>
          </div>


          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className={scrolled ? "text-slate-800" : "text-white"} />
            ) : (
              <Menu size={22} className={scrolled ? "text-slate-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl">
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map((link: { label: string; href: string }) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getPortalLoginUrl()}
              onClick={() => setMobileOpen(false)}
              className="block mt-3 w-full text-center h-10 leading-10 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow-md"
            >
              Portal Login
            </a>
            <a
              href={getMarketingLoginUrl()}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2 text-xs font-semibold text-slate-500 hover:text-amber-600"
            >
              Field team login →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
