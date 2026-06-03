"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { INSTITUTE, NAV_LINKS } from "@/lib/siteData";

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group hover:-translate-y-0.5 transition-transform duration-300">
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
            {NAV_LINKS.map((link: { label: string; href: string }) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    scrolled
                      ? isActive ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      : isActive ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive && scrolled && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                  )}
                </a>
              );
            })}
            <Link
              href="/admission"
              className="ml-2 h-9 px-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 animate-pulse-glow"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-slate-100/10"
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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map((link: { label: string; href: string }) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
