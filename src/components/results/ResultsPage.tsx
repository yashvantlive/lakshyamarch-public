"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD, INSTITUTE } from "@/lib/siteData";
import FilterBar, { FilterCategory, BoardType } from "./FilterBar";
import YearTabs from "./YearTabs";
import StudentCard from "./StudentCard";
import TopperCard from "./TopperCard";
import StatsCounter from "./StatsCounter";
import { ArrowRight, Phone, Search } from "lucide-react";
import Link from "next/link";

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
      <section className="bg-[#0A0F2C] pt-32 pb-20 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] -mr-48 -mt-48 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[150px] -ml-48 -mb-48 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            Hall of Fame
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Our <span className="relative inline-block">
              Results
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full origin-left"
              />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto font-medium"
          >
            Every batch since {INSTITUTE.established} — Consistent IIT & NEET Selections with stellar board performances.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
            <StatsCounter value={499} label="NEET Best AIR" prefix="AIR " />
            <StatsCounter value={99.35} label="JEE Percentile" suffix="%" decimals={2} />
            <StatsCounter value={categoryStats.value} label={categoryStats.label} suffix={categoryStats.sub} />
            <StatsCounter value={availableYears.length} label="Years of Success" suffix="Distinctions" />
          </div>
        </div>
      </section>

      {/* 2 & 3. DYNAMIC STICKY FILTER BAR */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">
        <FilterBar 
          categories={["NEET", "JEE", "Class 12 Board", "Class 10 Board"]}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          boards={["CBSE", "BSEB", "ICSE"]}
          activeBoard={activeBoard}
          onBoardChange={setActiveBoard}
        />
      </div>

      {/* 5. RESULTS STACK (No scroll tabs, all visible by year) */}
      <section className="pb-24 px-4 sm:px-8 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {availableYears.length > 0 ? (
            <div className="space-y-16 mt-12">
              {availableYears.map((year) => (
                <div key={year} className="relative">
                  {/* Sticky Year Header */}
                  <div className="sticky top-[72px] z-30 bg-slate-50/90 backdrop-blur-md py-4 mb-8 -mx-4 px-4 transition-all duration-300">
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
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
                  >
                    {groupedResults[year].map((student) => (
                      <div key={student.id} className="h-full">
                        {student.isTopper 
                          ? <TopperCard student={student} category={activeCategory} />
                          : <StudentCard student={student} category={activeCategory} />
                        }
                      </div>
                    ))}
                  </motion.div>
                </div>
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
      </section>

      {/* 5. CTA STRIP */}
      <section className="bg-gradient-to-r from-[#FF6B00] to-orange-400 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-6"
          >
            Join the batch that creates rank holders
          </motion.h2>
          <p className="text-orange-950/60 font-bold mb-10 text-lg sm:text-xl">
            Class 11th Admissions Open · IIT-JEE & NEET 2026-28
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-[#FF6B00] px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-2xl flex items-center justify-center gap-2"
            >
              Enroll Now <ArrowRight size={18} />
            </Link>
            <a 
              href={`tel:${INSTITUTE.phones[0]}`}
              className="bg-transparent border-4 border-white/30 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
