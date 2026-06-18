"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Target,
  Stethoscope,
  BookOpen,
  Trophy,
  Phone,
} from "lucide-react";
import { INSTITUTE } from "@/lib/siteData";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/brand/BrandMark";
import Button from "@/components/brand/Button";

const MAIN_LINKS = [
  { label: "Home", href: "/" },
  { label: "Faculty", href: "/faculty" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const PROGRAM_MENU = [
  { label: "IIT-JEE Coaching", href: "/iit-jee-coaching-begusarai", desc: "Class 11, 12 & Dropper", icon: Target, accent: "text-brand-blue-700 bg-brand-blue-50" },
  { label: "NEET Coaching", href: "/neet-coaching-begusarai", desc: "Medical aspirants & Droppers", icon: Stethoscope, accent: "text-brand-green-600 bg-brand-green-50" },
  { label: "Foundation & School", href: "/programs", desc: "Integrated Class 6–10", icon: GraduationCap, accent: "text-brand-red-600 bg-brand-red-50" },
  { label: "ThinkNEET Test Series", href: "/think-neet-test-series-begusarai", desc: "NCERT-based mock tests", icon: BookOpen, accent: "text-brand-gold-600 bg-brand-gold-50" },
  { label: "Scholarship Exam", href: "/scholarship", desc: "Win up to 100% fee waiver", icon: Trophy, accent: "text-brand-red-600 bg-brand-red-50" },
  { label: "Free Mock Test", href: "/free-test", desc: "Evaluate your prep level", icon: BookOpen, accent: "text-brand-blue-700 bg-brand-blue-50" },
];

const ADMISSION_MENU = [
  { label: "Admission", href: "/admission", desc: "Apply for new session", icon: BookOpen, accent: "text-brand-blue-700 bg-brand-blue-50" },
  { label: "Admission Counselling", href: "/admission-counselling", desc: "Book a free session", icon: Phone, accent: "text-brand-green-600 bg-brand-green-50" },
];

const RESULTS_MENU = [
  { label: "All Results", href: "/results", desc: "Overview of all selections", icon: Trophy, accent: "text-brand-gold-600 bg-brand-gold-50" },
  { label: "NEET Results", href: "/lakshyamarch-neet-results", desc: "Medical selections", icon: Stethoscope, accent: "text-brand-green-600 bg-brand-green-50" },
  { label: "JEE Results", href: "/lakshyamarch-jee-results", desc: "Engineering selections", icon: Target, accent: "text-brand-blue-700 bg-brand-blue-50" },
  { label: "Board Results", href: "/lakshyamarch-boards-results", desc: "CBSE, ICSE & BSEB", icon: GraduationCap, accent: "text-brand-red-600 bg-brand-red-50" },
];

const STUDY_MATERIAL_MENU = [
  { label: "All Material", href: "/study-material", desc: "Main hub for resources", icon: BookOpen, accent: "text-brand-blue-700 bg-brand-blue-50" },
  { label: "Course Booklets", href: "/study-material/modules", desc: "JEE & NEET module books", icon: BookOpen, accent: "text-brand-red-600 bg-brand-red-50" },
  { label: "DPPs", href: "/study-material/dpps", desc: "Daily Practice Papers", icon: Target, accent: "text-brand-red-600 bg-brand-red-50" },
  { label: "NCERT Books", href: "/study-material/ncert", desc: "Official NCERT textbooks", icon: BookOpen, accent: "text-brand-green-600 bg-brand-green-50" },
  { label: "Class Notes", href: "/study-material/notes", desc: "Detailed chapter notes", icon: BookOpen, accent: "text-brand-gold-600 bg-brand-gold-50" },
  { label: "Syllabus", href: "/study-material/syllabus", desc: "Latest exam patterns", icon: GraduationCap, accent: "text-ink-600 bg-ink-100" },
];

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [studyMaterialOpen, setStudyMaterialOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setAdmissionOpen(false);
    setResultsOpen(false);
    setStudyMaterialOpen(false);
  }, [pathname]);

  const onDark = !scrolled;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-200 bg-white shadow-brand-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark size={40} />
          <span className="leading-tight">
            <span className={cn("block font-display text-base font-extrabold tracking-tight", onDark ? "text-white" : "text-ink-900")}>
              {INSTITUTE.headerName}
            </span>
            <span className={cn("block font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em]", onDark ? "text-brand-gold-400" : "text-brand-red-600")}>
              Begusarai · Estd {INSTITUTE.established}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <NavItem href="/" label="Home" onDark={onDark} active={pathname === "/"} />

          {/* Programs mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-sm font-medium transition-colors",
                onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
              )}
            >
              Programs
              <ChevronDown size={15} strokeWidth={2} className={cn("transition-transform", megaOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[28rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-1 gap-1 rounded-lg border border-ink-200 bg-white p-3 shadow-brand-xl">
                    {PROGRAM_MENU.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", p.accent)}>
                          <p.icon size={20} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-display text-sm font-semibold text-ink-900">{p.label}</span>
                          <span className="block font-sans text-xs text-ink-500">{p.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Admissions mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setAdmissionOpen(true)}
            onMouseLeave={() => setAdmissionOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-sm font-medium transition-colors",
                onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
              )}
            >
              Admissions
              <ChevronDown size={15} strokeWidth={2} className={cn("transition-transform", admissionOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {admissionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-1 gap-1 rounded-lg border border-ink-200 bg-white p-3 shadow-brand-xl">
                    {ADMISSION_MENU.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", p.accent)}>
                          <p.icon size={20} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-display text-sm font-semibold text-ink-900">{p.label}</span>
                          <span className="block font-sans text-xs text-ink-500">{p.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setResultsOpen(true)}
            onMouseLeave={() => setResultsOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-sm font-medium transition-colors",
                onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
              )}
            >
              Results
              <ChevronDown size={15} strokeWidth={2} className={cn("transition-transform", resultsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {resultsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-1 gap-1 rounded-lg border border-ink-200 bg-white p-3 shadow-brand-xl">
                    {RESULTS_MENU.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", p.accent)}>
                          <p.icon size={20} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-display text-sm font-semibold text-ink-900">{p.label}</span>
                          <span className="block font-sans text-xs text-ink-500">{p.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Study Material mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setStudyMaterialOpen(true)}
            onMouseLeave={() => setStudyMaterialOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-sm font-medium transition-colors",
                onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
              )}
            >
              Study Material
              <ChevronDown size={15} strokeWidth={2} className={cn("transition-transform", studyMaterialOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {studyMaterialOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-1 gap-1 rounded-lg border border-ink-200 bg-white p-3 shadow-brand-xl">
                    {STUDY_MATERIAL_MENU.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", p.accent)}>
                          <p.icon size={20} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-display text-sm font-semibold text-ink-900">{p.label}</span>
                          <span className="block font-sans text-xs text-ink-500">{p.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {MAIN_LINKS.slice(1).map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} onDark={onDark} active={pathname === link.href} />
          ))}

          <div className="ml-2 flex items-center gap-2">
            <a
              href={`tel:+91${INSTITUTE.primaryPhone}`}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                onDark ? "text-white/85 hover:bg-white/10" : "text-ink-600 hover:bg-ink-100",
              )}
              aria-label="Call admissions"
            >
              <Phone size={18} strokeWidth={1.75} />
            </a>
            <Button href="/admission" variant="primary" size="sm" withArrow>
              Apply Now
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("rounded-lg p-2 lg:hidden", onDark ? "text-white" : "text-ink-900")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-y-auto max-h-[calc(100dvh-64px)] sm:max-h-[calc(100dvh-72px)] border-t border-ink-200 bg-white lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {MAIN_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 font-sans text-sm font-semibold text-ink-700 transition-colors hover:bg-ink-50 hover:text-brand-red-600"
                >
                  {link.label}
                </Link>
              ))}
              <p className="px-4 pb-1 pt-4 font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">
                Programs
              </p>
              {PROGRAM_MENU.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-ink-50"
                >
                  <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", p.accent)}>
                    <p.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink-700">{p.label}</span>
                </Link>
              ))}
              <p className="px-4 pb-1 pt-4 font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">
                Admissions
              </p>
              {ADMISSION_MENU.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-ink-50"
                >
                  <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", p.accent)}>
                    <p.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink-700">{p.label}</span>
                </Link>
              ))}
              <p className="px-4 pb-1 pt-4 font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">
                Results
              </p>
              {RESULTS_MENU.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-ink-50"
                >
                  <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", p.accent)}>
                    <p.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink-700">{p.label}</span>
                </Link>
              ))}
              <p className="px-4 pb-1 pt-4 font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">
                Study Material
              </p>
              {STUDY_MATERIAL_MENU.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-ink-50"
                >
                  <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", p.accent)}>
                    <p.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink-700">{p.label}</span>
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="outline" size="sm">
                  Call Us
                </Button>
                <Button href="/admission" variant="primary" size="sm" withArrow>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ href, label, onDark, active }: { href: string; label: string; onDark: boolean; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-lg px-2 py-2 font-sans text-sm font-medium transition-colors",
        onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
        active && (onDark ? "text-white" : "text-brand-red-600"),
      )}
    >
      {label}
      {active && (
        <span
          className={cn(
            "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
            onDark ? "bg-brand-gold-400" : "bg-brand-red-600",
          )}
        />
      )}
    </Link>
  );
}
