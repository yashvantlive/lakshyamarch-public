"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Download, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";
import { Badge, HeroSection, SectionHeader, Reveal, Stagger, StaggerItem } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";
import LottiePlayer from "./LottiePlayer";
import Button from "@/components/brand/Button";

type Tab = "neet" | "jee";

const NEET_MODULES = [
  {
    subject: "Chemistry",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: true,
    coverImage: "/images/booklet-covers/neet-chemistry-c11-b1.png",
    chapters: [
      "Some Basic Concepts of Chemistry",
      "Redox Reactions",
      "Structure of Atom",
      "Classification of Elements and Periodicity in Properties",
      "Chemical Bonding and Molecular Structure"
    ],
    accent: "red" as const
  },
  {
    subject: "Physics",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: false,
    coverImage: "/images/booklet-covers/neet-physics-c11-b1.png",
    chapters: [
      "Physical World & Measurement",
      "Kinematics (Motion in 1D & 2D)",
      "Laws of Motion & Friction",
      "Work, Energy and Power",
      "System of Particles and Rotational Motion"
    ],
    accent: "blue" as const
  },
  {
    subject: "Biology",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: false,
    coverImage: "/images/booklet-covers/neet-biology-c11-b1.png",
    chapters: [
      "Diversity in the Living World",
      "Structural Organisation in Plants & Animals",
      "Cell: Structure and Functions",
      "Plant Physiology"
    ],
    accent: "green" as const
  }
];

const JEE_MODULES = [
  {
    subject: "Chemistry",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: false,
    coverImage: "/images/booklet-covers/jee-chemistry-c11-b1.png",
    chapters: [
      "Some Basic Concepts & Mole Concept",
      "Atomic Structure",
      "Periodic Table & Periodic Properties",
      "Chemical Bonding and Molecular Structure",
      "States of Matter & Gaseous State"
    ],
    accent: "red" as const
  },
  {
    subject: "Physics",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: false,
    coverImage: "/images/booklet-covers/jee-physics-c11-b1.png",
    chapters: [
      "Units, Dimensions & Errors",
      "Vector Algebra & Basic Mathematics",
      "Kinematics 1D & 2D (Projectiles)",
      "Newton's Laws of Motion & Friction",
      "Work, Energy, Power & Circular Motion"
    ],
    accent: "blue" as const
  },
  {
    subject: "Mathematics",
    booklet: "Booklet-1",
    classLevel: "Class-XI",
    isFeatured: false,
    coverImage: "/images/booklet-covers/jee-maths-c11-b1.png",
    chapters: [
      "Sets, Relations & Functions",
      "Quadratic Equations & Expressions",
      "Complex Numbers",
      "Sequences & Series (AP, GP, HP)",
      "Trigonometric Ratios & Identities"
    ],
    accent: "gold" as const
  }
];

const HERO_SLIDES = [
  {
    subject: "Chemistry",
    exam: "NEET",
    coverImage: "/images/booklet-covers/neet-chemistry-c11-b1.png",
    lottiePath: "/animations/neet-chemistry-booklet.json",
    accent: "red"
  },
  {
    subject: "Physics",
    exam: "NEET",
    coverImage: "/images/booklet-covers/neet-physics-c11-b1.png",
    lottiePath: "/animations/neet-physics-booklet.json",
    accent: "blue"
  },
  {
    subject: "Biology",
    exam: "NEET",
    coverImage: "/images/booklet-covers/neet-biology-c11-b1.png",
    lottiePath: "/animations/neet-biology-booklet.json",
    accent: "green"
  },
  {
    subject: "Chemistry",
    exam: "IIT-JEE",
    coverImage: "/images/booklet-covers/jee-chemistry-c11-b1.png",
    lottiePath: "/animations/jee-chemistry-booklet.json",
    accent: "red"
  },
  {
    subject: "Physics",
    exam: "IIT-JEE",
    coverImage: "/images/booklet-covers/jee-physics-c11-b1.png",
    lottiePath: "/animations/jee-physics-booklet.json",
    accent: "blue"
  },
  {
    subject: "Mathematics",
    exam: "IIT-JEE",
    coverImage: "/images/booklet-covers/jee-maths-c11-b1.png",
    lottiePath: "/animations/jee-maths-booklet.json",
    accent: "gold"
  }
];

const chipColors = {
  red: "bg-brand-red-50 text-brand-red-700 border-brand-red-100",
  blue: "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100",
  green: "bg-brand-green-50 text-brand-green-700 border-brand-green-100",
  gold: "bg-brand-gold-50 text-brand-gold-700 border-brand-gold-100"
};

const borderHover = {
  red: "hover:border-brand-red-500",
  blue: "hover:border-brand-blue-500",
  green: "hover:border-brand-green-500",
  gold: "hover:border-brand-gold-500"
};

const textAccent = {
  red: "text-brand-red-600",
  blue: "text-brand-blue-600",
  green: "text-brand-green-600",
  gold: "text-brand-gold-600"
};

export default function ModulesClient() {
  const [activeTab, setActiveTab] = useState<Tab>("neet");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeModules = activeTab === "neet" ? NEET_MODULES : JEE_MODULES;

  return (
    <main className="flex-1">
      {/* Premium prospect Hero */}
      <HeroSection accent="red" minHeight="min-h-[72vh]" contentClassName="relative">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Text Column */}
          <div className="flex flex-col items-start space-y-6 lg:w-7/12">
            <Reveal>
              <Badge tone="onDark" icon={Sparkles}>Curriculum & Study Modules</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
                LakshyaMarch <span className="text-brand-gold-400">Course Booklets</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-lg leading-relaxed text-white/70">
                Meticulously designed by IIT, NIT, and medical alumni. Our booklets feature key concept digests, tiered practice problems (from foundation to advanced), and past NEET/JEE questions. Every course includes complete print booklets delivered to students.
              </p>
            </Reveal>
            
            <Reveal delay={0.15} className="flex flex-wrap gap-4 pt-2">
              <Button href="/admission" variant="primary" withArrow>
                Enquire for Admission
              </Button>
              <Button href="#browse" variant="ghost">
                Browse Series
              </Button>
            </Reveal>
          </div>

          {/* Right Column: Lottie & Booklet Cover Slide Container */}
          <div className="flex flex-col items-center justify-center lg:w-5/12">
            <Reveal delay={0.2} className="relative w-full max-w-[420px] aspect-square">
              {/* Decorative behind-glow */}
              <div className="absolute inset-0 -m-10 bg-brand-red-600/10 rounded-full blur-[80px]" />
              
              {/* Lottie Player (Subject Specific Vector Atoms, Bubbles, Background) */}
              <LottiePlayer 
                key={HERO_SLIDES[currentHeroIndex].lottiePath}
                animationPath={HERO_SLIDES[currentHeroIndex].lottiePath}
                className="absolute inset-0 w-full h-full select-none z-10"
              />

              {/* Floating Booklet Image with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentHeroIndex}
                  initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: 8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                >
                  <motion.div
                    className="relative w-[55%] aspect-[5/6]"
                    animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  >
                    <Image
                      src={HERO_SLIDES[currentHeroIndex].coverImage}
                      alt={`${HERO_SLIDES[currentHeroIndex].exam} ${HERO_SLIDES[currentHeroIndex].subject} Booklet`}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              {/* Premium annotation tag showing current booklet info */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-ink-900/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-white/80 uppercase whitespace-nowrap z-30">
                <span className="h-2 w-2 rounded-full bg-brand-green-500 animate-pulse" />
                Featured: {HERO_SLIDES[currentHeroIndex].exam} {HERO_SLIDES[currentHeroIndex].subject} Booklet-1
              </div>
            </Reveal>
          </div>
        </div>
      </HeroSection>

      {/* Tabs Selector & List */}
      <section id="browse" className={layout.section}>
        <div className={layout.containerMedium}>
          <SectionHeader
            eyebrow="Series Selection"
            title="Explore our module sets"
            lead="Our booklets are designed specifically for the latest syllabus and test patterns. Switch below to view NEET and JEE modules."
            align="center"
            accent="red"
          />

          {/* Series Tabs */}
          <Reveal className="mt-10 flex justify-center">
            <div className="inline-flex rounded-lg bg-ink-100 p-1">
              <button
                onClick={() => setActiveTab("neet")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-6 py-2.5 font-display text-sm font-bold tracking-wide transition-all",
                  activeTab === "neet"
                    ? "bg-white text-brand-red-600 shadow-brand-sm"
                    : "text-ink-600 hover:text-ink-900"
                )}
              >
                <GraduationCap size={16} />
                NEET Medical Series
              </button>
              <button
                onClick={() => setActiveTab("jee")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-6 py-2.5 font-display text-sm font-bold tracking-wide transition-all",
                  activeTab === "jee"
                    ? "bg-white text-brand-blue-800 shadow-brand-sm"
                    : "text-ink-600 hover:text-ink-900"
                )}
              >
                <BookOpen size={16} />
                IIT-JEE Engineering Series
              </button>
            </div>
          </Reveal>

          {/* Module Grids */}
          <div className="mt-16">
            <Stagger key={activeTab} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activeModules.map((mod, i) => (
                <StaggerItem key={`${mod.subject}-${mod.booklet}`}>
                  <div
                    className={cn(
                      "group relative flex h-full flex-col rounded-xl border border-ink-200 bg-white p-7 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-md",
                      borderHover[mod.accent],
                      mod.isFeatured && "ring-2 ring-brand-red-500/20 border-brand-red-400"
                    )}
                  >
                    {/* Booklet Cover Preview Container */}
                    <div className={cn(
                      "relative -mx-7 -mt-7 mb-6 overflow-hidden rounded-t-xl py-8 flex items-center justify-center border-b border-ink-100",
                      mod.accent === "red" && "bg-gradient-to-br from-brand-red-50/40 to-brand-red-100/30",
                      mod.accent === "blue" && "bg-gradient-to-br from-brand-blue-50/40 to-brand-blue-100/30",
                      mod.accent === "green" && "bg-gradient-to-br from-brand-green-50/40 to-brand-green-100/30",
                      mod.accent === "gold" && "bg-gradient-to-br from-brand-gold-50/40 to-brand-gold-100/30"
                    )}>
                      {/* Featured Ribbon */}
                      {mod.isFeatured && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-brand-red-600 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-brand-sm z-10">
                          <Sparkles size={11} /> Featured Preview
                        </span>
                      )}

                      <div className="relative w-[130px] aspect-[5/6] transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none">
                        <Image
                          src={mod.coverImage}
                          alt={`${mod.subject} Booklet Cover`}
                          fill
                          sizes="130px"
                          className="object-contain drop-shadow-lg rounded"
                        />
                      </div>
                    </div>

                    {/* Badge and Title */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className={cn("rounded border px-2.5 py-1 text-xs font-bold uppercase tracking-wider", chipColors[mod.accent])}>
                        {mod.subject}
                      </span>
                      <span className="font-sans text-xs font-semibold text-ink-400">
                        {mod.classLevel} · {mod.booklet}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-extrabold text-ink-900">
                      {mod.subject} Course Book
                    </h3>
                    <p className="mt-2 font-sans text-sm text-ink-500 leading-relaxed">
                      Complete theory, illustrative examples, and assignments mapped for the {activeTab.toUpperCase()} examination.
                    </p>

                    {/* Chapters List */}
                    <div className="mt-6 flex-1 space-y-3.5">
                      <div className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                        Syllabus Coverage:
                      </div>
                      <ul className="space-y-2.5">
                        {mod.chapters.map((chapter) => (
                          <li key={chapter} className="flex items-start gap-2.5 text-sm text-ink-700">
                            <CheckCircle2 size={16} className={cn("mt-0.5 shrink-0", textAccent[mod.accent])} />
                            <span className="leading-normal">{chapter}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons & Info */}
                    <div className="mt-8 border-t border-ink-100 pt-5 flex flex-col gap-3">
                      <p className="text-[11px] font-sans text-ink-500 leading-normal text-center">
                        Our modules are crafted to maximize student preparation. For purchase inquiries, please visit our office or contact us directly.
                      </p>
                      <Button
                        href="/contact"
                        variant="outline"
                        size="sm"
                        className="w-full text-center"
                      >
                        Contact / Visit Office
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="bg-ink-50 border-y border-ink-200 py-20">
        <div className={layout.containerMedium}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <Badge tone="red">Pedagogical Philosophy</Badge>
              </Reveal>
              <Reveal delay={0.05} className="mt-4">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                  Engineered for Conceptual Clarity & Retentive Learning
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-6">
                <p className="font-sans text-base leading-relaxed text-ink-600">
                  Our curriculum modules aren&apos;t just textbooks—they are active learning tools designed to guide students from raw beginners to exam-ready aspirants. Developed by expert teachers with years of coaching pedigree:
                </p>
              </Reveal>

              <Stagger className="mt-8 space-y-4">
                <StaggerItem className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red-100 text-brand-red-600">
                    <ChevronRight size={14} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-900">Graded Practice Sheets (GPS)</h4>
                    <p className="mt-1 font-sans text-sm text-ink-500">Every booklet contains level-wise exercises (Basic, Advanced, and Past Years) for structured learning.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-100 text-brand-blue-700">
                    <ChevronRight size={14} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-900">Error Minimization Systems</h4>
                    <p className="mt-1 font-sans text-sm text-ink-500">Dedicated checkpoints to alert students of common misconceptions and mistakes made in actual NEET & JEE exams.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold-100 text-brand-gold-700">
                    <ChevronRight size={14} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-900">Integrated Formula Maps</h4>
                    <p className="mt-1 font-sans text-sm text-ink-500">Fast-revision cheat sheets at the end of every chapter for dynamic review before weekly exams.</p>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>

            <Reveal delay={0.15} className="relative flex justify-center">
              <div className="overflow-hidden rounded-xl border border-ink-200 bg-white p-6 shadow-brand-lg">
                <div className="flex items-center gap-3 border-b border-ink-100 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-brand-red-50 text-brand-red-600">
                    <BookOpen size={20} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-ink-900">Full Course Package Details</h4>
                    <p className="font-sans text-xs text-ink-400">Printed books included for offline classes</p>
                  </div>
                </div>
                
                <ul className="mt-6 space-y-4">
                  {[
                    "Complete NEET/JEE Physics booklets (Vol 1 & 2)",
                    "Complete NEET/JEE Chemistry booklets (Vol 1 & 2)",
                    "Complete Biology (NEET) / Mathematics (JEE) booklets",
                    "Daily Practice Problem (DPP) sets with detailed solutions",
                    "NCERT Review Maps and revision worksheets",
                  ].map((text) => (
                    <li key={text} className="flex gap-2.5 text-sm text-ink-700">
                      <span className="mt-0.5 text-brand-green-600">✔</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/admission" variant="primary" className="w-full text-center">
                    Register for Admission Package
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
