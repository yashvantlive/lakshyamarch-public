"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { PROGRAMS, whatsappLink } from "@/lib/siteData";
import {
  GraduationCap,
  Target,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  Info,
  Zap,
  Tag,
  Phone,
} from "lucide-react";

const MotionDiv = motion.div;

/** Human-readable pill label for batch.classes codes (e.g. "6" → "Class 6", "11th JEE" → "Class 11 JEE"). */
function batchClassLabel(code: string): string {
  const labels: Record<string, string> = {
    "6": "Class 6",
    "7": "Class 7",
    "8": "Class 8",
    "9": "Class 9",
    "10": "Class 10",
    "10th NLQ": "Class 10 NLQ",
    "11th JEE": "Class 11 JEE",
    "11th NEET": "Class 11 NEET",
    "12th JEE": "Class 12 JEE",
    "12th NEET": "Class 12 NEET",
    "Dropper JEE": "JEE Dropper",
    "Dropper NEET": "NEET Dropper",
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

/** Filters derived from real batch.class codes so pills match PROGRAMS data. */
const CLASS_FILTERS = (() => {
  const codes = new Set<string>();
  for (const batch of [...PROGRAMS.school.batches, ...PROGRAMS.coaching.batches]) {
    for (const c of batch.classes) codes.add(c);
  }
  const sorted = Array.from(codes).sort(sortClassCodes);
  return [
    { value: "All", label: "All Programs" },
    ...sorted.map((code) => ({ value: code, label: batchClassLabel(code) })),
  ];
})();

export default function ProgramsClient() {
  const [activeClass, setActiveClass] = useState("All");

  const filteredSchoolBatches = useMemo(() => {
    if (activeClass === "All") return PROGRAMS.school.batches;
    return PROGRAMS.school.batches.filter((b) => b.classes.includes(activeClass));
  }, [activeClass]);

  const filteredCoachingBatches = useMemo(() => {
    if (activeClass === "All") return PROGRAMS.coaching.batches;
    return PROGRAMS.coaching.batches.filter((b) => b.classes.includes(activeClass));
  }, [activeClass]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans selection:bg-blue-100 selection:text-blue-900">
      <PublicNavbar />

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[11px] font-bold text-blue-300 uppercase tracking-[0.2em]">Academic Programs 2026-2027</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Elite Education for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future Leaders.</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100/60 leading-relaxed max-w-2xl mx-auto">
              Built on elite academic standards and tailored for success in Begusarai.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ═══════════ STICKY FILTER BAR ═══════════ */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm uppercase">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
             {CLASS_FILTERS.map(({ value, label }) => (
               <button
                 key={value}
                 onClick={() => setActiveClass(value)}
                 className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border ${
                   activeClass === value
                   ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" 
                   : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                 }`}
               >
                 {label}
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeClass}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-20"
          >
            {/* ═══════════ SCHOOL PREPARATION SECTION ═══════════ */}
            {filteredSchoolBatches.length > 0 && (
              <section id="school">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                       <GraduationCap size={24} />
                       <span className="uppercase tracking-widest text-xs">Category</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {PROGRAMS.school.name}
                    </h2>
                    <p className="mt-2 text-slate-500 max-w-2xl">{PROGRAMS.school.description}</p>
                  </div>
                  <button className="text-blue-600 font-bold flex items-center gap-2 hover:underline group">
                    View All Batches <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSchoolBatches.map((batch, idx) => (
                    <CourseCard key={batch.id} batch={batch} index={idx} color="blue" />
                  ))}
                </div>
              </section>
            )}

            {/* ═══════════ COACHING / COMPETITIVE SECTION ═══════════ */}
            {filteredCoachingBatches.length > 0 && (
              <section id="coaching">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                       <Target size={24} />
                       <span className="uppercase tracking-widest text-xs">Category</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {PROGRAMS.coaching.name}
                    </h2>
                    <p className="mt-2 text-slate-500 max-w-2xl">{PROGRAMS.coaching.description}</p>
                  </div>
                  <button className="text-amber-600 font-bold flex items-center gap-2 hover:underline group">
                    Explore All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCoachingBatches.map((batch, idx) => (
                    <CourseCard key={batch.id} batch={batch} index={idx} color="amber" />
                  ))}
                </div>
              </section>
            )}
            
            {filteredSchoolBatches.length === 0 && filteredCoachingBatches.length === 0 && (
              <div className="py-24 text-center">
                 <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Info size={32} className="text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900">No batches found for this filter</h3>
                 <p className="text-slate-500 mt-2">Try selecting a different class or check back later.</p>
                 <button 
                  onClick={() => setActiveClass("All")}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold"
                 >
                   View All Programs
                 </button>
              </div>
            )}
          </MotionDiv>
        </AnimatePresence>
      </div>

      {/* ═══════════ FINAL CALL TO ACTION ═══════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
           <div className="p-10 sm:p-16 rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10 text-center">
                 <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
                   Need help choosing <span className="text-blue-400">the right path?</span>
                 </h2>
                 <p className="text-blue-100/60 text-lg mb-12 max-w-2xl mx-auto">
                   Our academic experts are here to guide you based on your goals. 
                   Get a personalized counseling session today.
                 </p>
                 <div className="flex flex-wrap items-center justify-center gap-4">
                    <a 
                      href={whatsappLink("Hi, I'm confused about which program to choose. Need help.")}
                      target="_blank"
                      className="h-16 px-10 rounded-2xl bg-white text-blue-950 font-black shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-3 uppercase tracking-widest text-sm"
                    >
                      Talk to Experts <Phone size={18} />
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

// ═══════════ SUB-COMPONENTS ═══════════

function CourseCard({ batch, index, color }: { batch: any, index: number, color: string }) {
  const accentColor = color === "blue" ? "blue-600" : "amber-500";
  const bgAccent = color === "blue" ? "bg-blue-600" : "bg-amber-500";
  const textAccent = color === "blue" ? "text-blue-600" : "text-amber-500";
  const borderAccent = color === "blue" ? "hover:border-blue-500/50" : "hover:border-amber-500/50";

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${borderAccent} flex flex-col`}
    >
      {/* Card Header Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 flex items-center justify-center">
        {batch.image ? (
          <img 
            src={batch.image} 
            alt={batch.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${color === "blue" ? "from-blue-500 to-indigo-600" : "from-amber-400 to-orange-500"} flex items-center justify-center relative`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            {color === "blue" ? (
              <GraduationCap size={48} className="text-white/40" />
            ) : (
              <Target size={48} className="text-white/40" />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        

      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tight">
            {batch.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{batch.target}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
             <Calendar size={18} className={textAccent} />
             <span>{batch.startDate}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
             <Clock size={18} className={textAccent} />
             <span>{batch.endDate}</span>
          </div>
          <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 text-[11px] font-bold text-slate-500 border border-slate-100`}>
             <Zap size={14} className={textAccent} /> Premium Features Included
          </div>
        </div>

        {/* Pricing */}
        <div className={`mt-auto pt-6 border-t border-slate-100 ${batch.price === null ? 'flex items-center justify-center' : ''}`}>
           {batch.price !== null && (
             <div className="flex items-center justify-between mb-6 w-full">
                <div>
                   <span className="text-slate-400 text-sm line-through font-medium">₹{batch.originalPrice?.toLocaleString()}</span>
                   <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-slate-900">₹{batch.price?.toLocaleString()}</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-1">
                        <Tag size={10} /> {batch.discount}
                      </span>
                   </div>
                </div>
             </div>
           )}

           <div className={`grid ${batch.price !== null ? 'grid-cols-2 gap-3' : 'grid-cols-1 w-full'} gap-3`}>
              <button 
                onClick={() => window.open(whatsappLink(`Details for ${batch.name}`), '_blank')}
                className={`h-12 rounded-xl border-2 border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 ${batch.price === null ? 'w-full' : ''}`}
              >
                Explore
              </button>
              {batch.price !== null && (
                <button 
                  onClick={() => window.open(whatsappLink(`I want to enroll in ${batch.name}`), '_blank')}
                  className={`h-12 rounded-xl ${bgAccent} text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all`}
                >
                  Buy Now
                </button>
              )}
           </div>
        </div>
      </div>
    </MotionDiv>
  );
}
