"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Trophy, ShieldCheck } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import {
  INSTITUTE, HIGHLIGHTS, whatsappLink, RESULTS_NEET, RESULTS_JEE,
} from "@/lib/siteData";
import { SUCCESS_STORIES } from "@/lib/stories";

import {
  Button, BannerLabel, AchievementStrip, HeroSection, CTASection, Reveal,
} from "@/components/brand";
import type { Achievement } from "@/components/brand";

// ── Dynamic Imports for Below-the-fold Sections ────────────────────────
const ThinkNeetSection = dynamic(() => import("./sections/ThinkNeetSection"), {
  ssr: true,
  loading: () => <div className="h-[400px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const ResultsSection = dynamic(() => import("./sections/ResultsSection"), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const FounderSection = dynamic(() => import("./sections/FounderSection"), {
  ssr: true,
  loading: () => <div className="h-[500px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const EcosystemSection = dynamic(() => import("./sections/EcosystemSection"), {
  ssr: true,
  loading: () => <div className="h-[450px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const FacultySection = dynamic(() => import("./sections/FacultySection"), {
  ssr: true,
  loading: () => <div className="h-[400px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const ScholarshipSection = dynamic(() => import("./sections/ScholarshipSection"), {
  ssr: true,
  loading: () => <div className="h-[350px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const StoriesSection = dynamic(() => import("./sections/StoriesSection"), {
  ssr: true,
  loading: () => <div className="h-[400px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const BlogSection = dynamic(() => import("./sections/BlogSection"), {
  ssr: true,
  loading: () => <div className="h-[400px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const AdmissionsSection = dynamic(() => import("./sections/AdmissionsSection"), {
  ssr: true,
  loading: () => <div className="h-[350px] animate-pulse bg-ink-100 rounded-lg my-12 mx-auto max-w-7xl" />,
});

const HERO_STATS: Achievement[] = [
  { value: 99.35, decimals: 2, label: "Top JEE Percentile" },
  { display: "AIR 499", label: "Best NEET Rank" },
  { value: 100, suffix: "+", label: "Total Selections" },
  { display: "Since 2019", label: "Proven Results" },
  { display: "IIT / NIT", label: "Faculty Alumni" },
];

export default function HomeClient({ recentBlogs = [] }: { recentBlogs?: any[] }) {
  const stories = SUCCESS_STORIES.slice(0, 3).map((s) => {
    let studentName = s.author;
    let image = undefined;
    let studentClass = `${s.category} ${s.year}`;
    let result = s.category === "NEET" ? "NEET Qualified" : "JEE Achiever";
    let content = s.excerpt;

    if (s.category === "NEET") {
      const student = RESULTS_NEET.find((r) => r.id === s.studentId);
      if (student) {
        studentName = student.name;
        image = student.image;
        const rankInfo = student.air ? ` · AIR ${student.air}` : "";
        studentClass = `NEET ${student.year}${rankInfo}`;
        result = student.college ? student.college : `Score: ${student.score}`;
        
        if (student.id === "neet-2025-001") {
          content = "Studying at LakshyaMarch Begusarai was the key to my success. The experienced faculty, high-quality test series, and constant doubt-clearing sessions helped me secure AIR 499 without leaving my family.";
        } else if (student.id === "neet-2024-001") {
          content = "I could achieve 685/720 in NEET only because of the strict discipline and personal guidance at LakshyaMarch. The teachers cleared all my concepts and motivated me throughout my preparation journey.";
        }
      }
    } else if (s.category === "JEE") {
      const student = RESULTS_JEE.find((r) => r.id === s.studentId);
      if (student) {
        studentName = student.name;
        image = student.image;
        studentClass = `JEE Main ${student.year} · ${student.percentile}%ile`;
        result = student.college ? student.college : "JEE Topper";
        
        if (student.id === "jee-2025-001") {
          content = "The classroom coaching at LakshyaMarch Begusarai was highly structured. The deep conceptual teaching by Ram Sir and experienced faculty cleared all my doubts, helping me score 99.35 percentile in JEE and get into NIT Trichy.";
        }
      }
    }

    return {
      name: studentName,
      content,
      studentClass,
      result,
      image,
    };
  });

  return (
    <div className="min-h-screen bg-ink-50">
      <PublicNavbar />
      <Hero />
      <TrustMarquee />
      
      {/* Below-the-fold Sections dynamically loaded */}
      <ThinkNeetSection />
      <ResultsSection />
      <FounderSection />
      <EcosystemSection />
      <FacultySection />
      <ScholarshipSection />
      <StoriesSection stories={stories} />
      <BlogSection blogs={recentBlogs} />
      <AdmissionsSection />

      <CTASection
        title="Your March Towards Success Starts Here"
        accentWord="Success"
        lead="Join Begusarai's most result-oriented institute. Free counselling, expert mentorship, and a proven path to IITs and medical colleges."
        actions={[
          { label: "Apply for 2026–27", href: "/admission", variant: "primary", withArrow: true },
          { label: "Talk to a Counsellor", href: whatsappLink(), variant: "ghost", external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <HeroSection accent="red" minHeight="min-h-screen">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center pt-10 pb-20">
        <Reveal>
          <BannerLabel tone="red" icon={Trophy}>Top Results Since {INSTITUTE.established}</BannerLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-7 font-sans text-sm font-bold uppercase tracking-[0.22em] text-brand-gold-400">
            Begusarai&apos;s Premier IIT-JEE &amp; NEET Institute
          </p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.02] tracking-tight text-white">
            Lakshya<span className="text-brand-red-500">March</span> Education
            <span className="mt-2 block text-[0.45em] font-bold uppercase tracking-[0.16em] text-white/70">
              Integrated School &amp; Coaching
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 font-sans text-lg leading-relaxed text-white/75 max-w-2xl mx-auto">
            Quality education, strict discipline, and consistent ranks — all under one roof in {INSTITUTE.address.city}.
            Mentored by IIT &amp; NIT alumni faculty.
          </p>
        </Reveal>

        {/* Achievement anchors — poster result strip */}
        <Reveal delay={0.15} className="mt-9 w-full flex justify-center">
          <AchievementStrip items={HERO_STATS} theme="dark" className="border-ink-700 max-w-3xl" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/admission" variant="gold" size="lg" withArrow magnetic>
               Apply for Admission 2026-27
            </Button>
            <Button href="/programs" variant="ghost" size="lg" withArrow>
              Explore Programs
            </Button>
          </div>
        </Reveal>
      </div>
    </HeroSection>
  );
}

/* ─────────────────────── Trust marquee ─────────────────── */
function TrustMarquee() {
  return (
    <div className="overflow-hidden border-y border-ink-200 bg-white py-4">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-10 pr-10">
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((h, i) => (
          <span key={i} className="flex items-center gap-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">
            <ShieldCheck size={15} strokeWidth={1.75} className="text-brand-red-600" />
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}
