"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Target, Sparkles, Info, BookOpen } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { PROGRAMS, whatsappLink } from "@/lib/siteData";
import {
  Badge, SectionHeader, HeroSection, ProgramCard, CTASection, Button, Reveal,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

function batchClassLabel(code: string): string {
  const labels: Record<string, string> = {
    "6": "Class 6", "7": "Class 7", "8": "Class 8", "9": "Class 9", "10": "Class 10",
    "10th NLQ": "Class 10 NLQ", "11th JEE": "Class 11 JEE", "11th NEET": "Class 11 NEET",
    "12th JEE": "Class 12 JEE", "12th NEET": "Class 12 NEET",
    "Dropper JEE": "JEE Dropper", "Dropper NEET": "NEET Dropper",
  };
  return labels[code] ?? code;
}

function sortClassCodes(a: string, b: string): number {
  const dropA = a.toLowerCase().includes("dropper");
  const dropB = b.toLowerCase().includes("dropper");
  if (dropA && !dropB) return 1;
  if (!dropA && dropB) return -1;
  const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
  const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}

const CLASS_FILTERS = (() => {
  const codes = new Set<string>();
  for (const batch of [...PROGRAMS.school.batches, ...PROGRAMS.coaching.batches]) {
    for (const c of batch.classes) codes.add(c);
  }
  const sorted = Array.from(codes).sort(sortClassCodes);
  return [{ value: "All", label: "All Programs" }, ...sorted.map((code) => ({ value: code, label: batchClassLabel(code) }))];
})();

function pickIcon(classes: string[]) {
  const joined = classes.join(" ").toLowerCase();
  if (joined.includes("jee")) return Target;
  if (joined.includes("neet")) return BookOpen;
  return GraduationCap;
}

function pickAccent(classes: string[]): "red" | "blue" | "gold" | "green" {
  const joined = classes.join(" ").toLowerCase();
  if (joined.includes("jee")) return "blue";
  if (joined.includes("neet")) return "green";
  if (joined.includes("dropper")) return "red";
  return "gold";
}

export default function ProgramsClient() {
  const [activeClass, setActiveClass] = useState("All");

  const filteredSchool = useMemo(
    () => (activeClass === "All" ? PROGRAMS.school.batches : PROGRAMS.school.batches.filter((b) => b.classes.includes(activeClass))),
    [activeClass],
  );
  const filteredCoaching = useMemo(
    () => (activeClass === "All" ? PROGRAMS.coaching.batches : PROGRAMS.coaching.batches.filter((b) => b.classes.includes(activeClass))),
    [activeClass],
  );

  return (
    <div className="min-h-screen bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[58vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={Sparkles}>Academic Programs 2026–27</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Elite Education for <span className="text-brand-gold-400">Future Leaders</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              A premium academic catalog — from integrated schooling to competitive coaching, built for success in Begusarai.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-40 border-b border-ink-200 bg-white sm:top-[72px]">
        <div className={cn(layout.container, "flex items-center gap-2 overflow-x-auto py-4 no-scrollbar")}>
          {CLASS_FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveClass(value)}
              className={cn(
                "whitespace-nowrap rounded-full border px-5 py-2 font-display text-sm font-semibold transition-all",
                activeClass === value
                  ? "border-transparent bg-brand-red-600 text-white shadow-brand-md"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-red-300 hover:text-brand-red-600",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={cn(layout.container, "py-16 sm:py-20")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClass}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-20"
          >
            {filteredSchool.length > 0 && (
              <section>
                <SectionHeader align="left" eyebrow="School Wing" eyebrowIcon={GraduationCap} title={PROGRAMS.school.name} accentWord={PROGRAMS.school.name.split(" ").pop()} accent="blue" lead={PROGRAMS.school.description} className="mb-10" />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredSchool.map((b) => (
                    <ProgramCard
                      key={b.id}
                      title={b.name}
                      subtitle={b.classes.map(batchClassLabel).join(" · ")}
                      icon={GraduationCap}
                      accentColor="blue"
                      target={b.target}
                      startDate={b.startDate}
                      endDate={b.endDate}
                      href={whatsappLink(`I want details for ${b.name} (${b.target})`)}
                      ctaLabel="Enquire"
                    />
                  ))}
                </div>
              </section>
            )}

            {filteredCoaching.length > 0 && (
              <section>
                <SectionHeader align="left" eyebrow="Coaching Wing" eyebrowIcon={Target} title={PROGRAMS.coaching.name} accentWord={PROGRAMS.coaching.name.split(" ").pop()} accent="red" lead={PROGRAMS.coaching.description} className="mb-10" />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCoaching.map((b) => (
                    <ProgramCard
                      key={b.id}
                      title={b.name}
                      subtitle={b.classes.map(batchClassLabel).join(" · ")}
                      icon={pickIcon(b.classes)}
                      accentColor={pickAccent(b.classes)}
                      target={b.target}
                      startDate={b.startDate}
                      endDate={b.endDate}
                      href={whatsappLink(`I want details for ${b.name} (${b.target})`)}
                      ctaLabel="Enquire"
                    />
                  ))}
                </div>
              </section>
            )}

            {filteredSchool.length === 0 && filteredCoaching.length === 0 && (
              <div className="py-24 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-ink-100">
                  <Info size={32} strokeWidth={1.75} className="text-ink-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900">No batches for this filter</h3>
                <p className="mt-2 font-sans text-ink-500">Try another class or view all programs.</p>
                <Button onClick={() => setActiveClass("All")} variant="primary" size="md" className="mt-6">
                  View All Programs
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <CTASection
        title="Not Sure Which Path Fits?"
        accentWord="Fits?"
        lead="Our academic experts will map your goals and recommend the right batch in a free counselling session."
        actions={[
          { label: "Talk to an Expert", href: whatsappLink("Hi, I need help choosing the right program."), variant: "primary", withArrow: true, external: true },
          { label: "Apply Now", href: "/admission", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
