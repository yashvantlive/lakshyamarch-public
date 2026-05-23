"use client";

import { motion } from "framer-motion";
import { BookText, ClipboardList, ArrowRight, Laptop, Clock, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";

export default function StudyHubClient() {
  const CATEGORIES = [
    {
      title: "Daily Practice Problems (DPP)",
      description: "Chapter-wise assignments and tiered practice sets for JEE, NEET, and Board exams. Includes Mole Concept, Kinematics, and more.",
      href: "/study-material/dpps",
      icon: <ClipboardList size={32} className="text-blue-600" />,
      tag: "Practice",
      color: "blue"
    },
    {
      title: "Concept Notes & Formula Sheets",
      description: "Quick revision notes, high-fidelity formula sheets, and mind maps curated by LakshyaMarch expert faculty.",
      href: "/study-material/notes",
      icon: <BookText size={32} className="text-amber-600" />,
      tag: "Revision",
      color: "amber"
    }
  ];

  return (
    <main className="flex-1 uppercase-none">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 mx-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Search size={14} /> Knowledge Repository
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none"
          >
            LakshyaMarch <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Study Hub</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Access premium academic resources curated by IIT & NIT alumni. From foundational concepts to advanced problem solving, everything you need is right here.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group relative"
            >
              <Link href={cat.href} className="block h-full transition-transform active:scale-[0.98]">
                <div className={`h-full p-10 bg-white border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-${cat.color}-500/10 transition-all duration-500 overflow-hidden rounded-none`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-5 bg-${cat.color}-50 text-${cat.color}-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 rounded-none`}>
                      {cat.icon}
                    </div>
                    <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border border-${cat.color}-100 bg-${cat.color}-50 text-${cat.color}-600 rounded-none`}>
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                    Enter Portal <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <Clock size={16} className="text-blue-500" /> Hourly Updates
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <Laptop size={16} className="text-sky-500" /> Native Viewing
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <ShieldCheck size={16} className="text-emerald-500" /> Secure Access
          </div>
        </motion.div>
      </section>
    </main>
  );
}
