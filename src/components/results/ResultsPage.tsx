"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD, INSTITUTE } from "@/lib/siteData";
import FilterBar, { FilterCategory, BoardType } from "./FilterBar";
import YearTabs from "./YearTabs";
import StudentCard from "./StudentCard";
import TopperCard from "./TopperCard";
import StatsCounter from "./StatsCounter";
import { ArrowRight, Phone, Search, Trophy } from "lucide-react";
import Link from "next/link";
import { BlackCard, UnifiedContainer, GlowButton, AnimatedSection } from "@/components/public/ui";

export default function ResultsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("NEET");
  const [activeBoard, setActiveBoard] = useState<BoardType>("CBSE");

  // Get filtered data based on category/board
  const allFilteredData = useMemo(() => {
    let raw: any[] = [];
    if (activeCategory === "NEET") raw = RESULTS_NEET;
    if (activeCategory === "JEE") raw = RESULTS_JEE;
    if (activeCategory === "Class 12 Board") {
      const boardKey = `${activeBoard.toLowerCase()}12` as keyof typeof RESULTS_BOARD;
      raw = RESULTS_BOARD[boardKey] || [];
    }
    if (activeCategory === "Class 10 Board") {
      const boardKey = `${activeBoard.toLowerCase()}10` as keyof typeof RESULTS_BOARD;
      raw = RESULTS_BOARD[boardKey] || [];
    }
    return raw;
  }, [activeCategory, activeBoard]);

  // Group by year and sort
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(allFilteredData.map((r) => r.year))).sort((a, b) => b - a);
    return years;
  }, [allFilteredData]);

  const groupedResults = useMemo(() => {
    const groups: Record<number, any[]> = {};
    availableYears.forEach(year => {
      groups[year] = allFilteredData
        .filter(s => s.year === year)
        .sort((a, b) => {
          if (a.isTopper && !b.isTopper) return -1;
          if (!a.isTopper && b.isTopper) return 1;
          const valA = a.marks || a.percentile || a.value || 0;
          const valB = b.marks || b.percentile || b.value || 0;
          return valB - valA;
        });
    });
    return groups;
  }, [allFilteredData, availableYears]);

  // Dynamic stats calculation
  const categoryStats = useMemo(() => {
    if (activeCategory === "NEET") {
      return { label: "NEET Overall", value: RESULTS_NEET.length, sub: "Selections" };
    }
    if (activeCategory === "JEE") {
      return { label: "JEE Overall", value: RESULTS_JEE.length, sub: "Selections" };
    }
    return { label: "Board Results", value: allFilteredData.length, sub: "Students" };
  }, [activeCategory, allFilteredData]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <div className="pt-24 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <BlackCard glowColor="amber" className="text-center py-20 px-4 sm:px-10 rounded-[2rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Trophy size={14} />
            Hall of Fame
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Our <span className="relative inline-block text-amber-500">
              Results
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-2xl mx-auto font-medium"
          >
            Every batch since {INSTITUTE.established} — Consistent IIT & NEET Selections with stellar board performances.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 border-t border-white/10 pt-10">
            <StatsCounter value={499} label="NEET Best AIR" prefix="AIR " />
            <StatsCounter value={99.35} label="JEE Percentile" suffix="%" decimals={2} />
            <StatsCounter value={categoryStats.value} label={categoryStats.label} suffix={categoryStats.sub} />
            <StatsCounter value={availableYears.length} label="Years of Success" suffix="Distinctions" />
          </div>
        </BlackCard>
      </div>

      {/* 2 & 3. DYNAMIC STICKY FILTER BAR AND RESULTS IN UNIFIED CONTAINER */}
      <section className="pb-24 px-4 sm:px-8 bg-slate-50 min-h-[60vh] -mt-4">
        <UnifiedContainer className="max-w-7xl mx-auto">
          {/* Filter Bar Inside Unified Container */}
          <div className="sticky top-16 sm:top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
            <FilterBar 
              categories={["NEET", "JEE", "Class 12 Board", "Class 10 Board"]}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              boards={["CBSE", "BSEB", "ICSE"]}
              activeBoard={activeBoard}
              onBoardChange={setActiveBoard}
            />
          </div>

          <div className="p-6 sm:p-10 bg-slate-50/50 animate-in fade-in duration-300">
            {availableYears.length > 0 ? (
              <div className="space-y-16">
                {availableYears.map((year) => (
                  <AnimatedSection key={year} className="relative">
                    {/* Sticky Year Header */}
                    <div className="sticky top-[130px] z-30 bg-slate-50/95 backdrop-blur-md py-4 mb-8 -mx-6 px-6 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
                        <div className="flex items-center gap-3">
                           <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Result Year:</span>
                           <span className="text-3xl font-black text-slate-900 tracking-tight">{year}</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
                      </div>
                    </div>

                    {/* Results Grid for the Year */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                      {groupedResults[year].map((student) => (
                        <div key={student.id} className="h-full hover:scale-[1.03] transition-transform duration-300">
                          {student.isTopper 
                            ? <TopperCard student={student} category={activeCategory} />
                            : <StudentCard student={student} category={activeCategory} />
                          }
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <div className="inline-flex h-20 w-20 rounded-full bg-slate-100 items-center justify-center mb-6">
                  <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">Results will be updated soon</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-medium">
                  We are currently collecting and verifying {activeCategory} results.
                </p>
              </div>
            )}
          </div>
        </UnifiedContainer>
      </section>

      {/* 5. CTA STRIP */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-6">
              Join the batch that creates rank holders
            </h2>
            <p className="text-blue-200 font-bold mb-10 text-lg sm:text-xl">
              Class 11th Admissions Open · IIT-JEE & NEET 2026-28
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton variant="amber" asChild>
                <Link href="/contact" className="uppercase tracking-widest px-10 py-4">
                  Enroll Now <ArrowRight size={18} />
                </Link>
              </GlowButton>
              <GlowButton variant="blue" asChild>
                <a href={`tel:${INSTITUTE.phones[0]}`} className="uppercase tracking-widest px-10 py-4 border-2 border-blue-500 bg-transparent hover:bg-blue-600/20">
                  <Phone size={18} /> Call Us
                </a>
              </GlowButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
