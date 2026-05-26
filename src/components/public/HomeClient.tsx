"use client";

import React from "react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import {
  INSTITUTE, PROGRAMS, FACULTY, RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD, HIGHLIGHTS, FOUNDER, whatsappLink,
} from "@/lib/siteData";
import {
  GraduationCap, Users, Award, BookOpen, Star,
  Phone, MessageCircle, ArrowRight,
  Shield, Target, Lightbulb, TrendingUp,
  ChevronRight, CheckCircle2, Trophy, Quote
} from "lucide-react";
import { motion } from "framer-motion";
import ResultCarousel from "@/components/public/ResultCarousel";
import { SUCCESS_STORIES } from "@/lib/stories";
import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PublicNavbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[hsl(224,71%,20%)] to-slate-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-28 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-400/30 rounded-full mb-6 max-w-full overflow-hidden">
                <Star size={13} className="text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-amber-200 tracking-wide truncate">
                  IIT/NEET Selections Every Year Since {INSTITUTE.established}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                {INSTITUTE.name}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-blue-100/80 max-w-xl leading-relaxed">
                {INSTITUTE.tagline}.
                <span className="block mt-1">Quality education, strict discipline, consistent results and unmatched success, all under one roof in {INSTITUTE.address.city}.</span>
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/programs" className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all">
                  Explore Programs <ArrowRight size={15} />
                </a>
                <a href="#results" className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-all backdrop-blur-sm">
                  <Trophy size={15} className="text-amber-400" /> View Results
                </a>
              </div>

              {/* Trust Badge / Aggregate Rating */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 drop-shadow-md" fill="currentColor" />
                  ))}
                </div>
                <div className="text-xs font-bold w-fit bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent transform">
                  4.9/5 Rating based on Google & Student Reviews
                </div>
              </div>

              {/* FAANG-Level Social Proof & Trust Badges */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-2xl font-black text-white">100+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1">Total Selections</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-amber-400">99.35</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1">JEE Percentile</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-emerald-400">AIR 499</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1">NEET Target</p>
                </div>
                <div>
                  <div className="flex -space-x-2">
                    {["R", "A", "K", "S"].map((initial, i) => (
                      <div key={i} className={`h-8 w-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-black text-white ${['bg-blue-600', 'bg-emerald-600', 'bg-amber-600', 'bg-rose-600'][i]}`}>
                        {initial}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">IIT/NIT Faculty</p>
                </div>
              </div>
            </div>

            <div id="enquiry" className="lg:pl-8">
              <EnquiryForm />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 96L60 85C120 75 240 53 360 48C480 43 600 53 720 64C840 75 960 85 1080 80C1200 75 1320 53 1380 43L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V96Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ═══════════ HIGHLIGHTS MARQUEE ═══════════ */}
      <div className="bg-slate-900 border-b-4 border-amber-500 py-4 overflow-hidden relative shadow-inner">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((h, i) => (
            <span key={i} className="mx-6 text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Star size={12} className="text-white/30" /> {h}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════ THINKNEET PROMO ═══════════ */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
            {/* Image at Top */}
            <div className="relative w-full aspect-[16/7] overflow-hidden bg-slate-100">
              <img 
                src="/images/campaigns/think-neet/think-neet-poster.webp" 
                alt="ThinkNEET Test Series Begusarai" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content at Bottom */}
            <div className="p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                <Star size={12} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-widest">Specialized NEET Prep</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                ThinkNEET Test Series — <span className="text-emerald-600">Begusarai's Best</span>
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium text-lg">
                Boost your NEET 2027 rank with our NCERT-aligned, OMR-based specialized test series. 
                Designed by ex-IITians and NEET experts to ensure your selection. Join the most structured testing ecosystem in Begusarai.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/think-neet-test-series-begusarai" 
                  className="h-16 px-12 inline-flex items-center gap-3 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300 shadow-xl group/btn"
                >
                  Explore ThinkNEET Series 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ RECENT RESULTS ═══════════ */}
      <ResultCarousel />

      {/* ═══════════ FOUNDER DESK ═══════════ */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Two Card Layout: flex-col on mobile, flex-row on desktop */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── CARD 1: IMAGE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[380px] shrink-0"
            >
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col p-8">
                {/* ESTD Badge */}
                <div className="absolute top-5 right-5 h-16 w-16 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-lg text-white z-10">
                  <p className="text-[8px] font-black uppercase tracking-widest leading-none opacity-80">ESTD</p>
                  <p className="text-base font-black leading-tight">{INSTITUTE.established}</p>
                </div>

                {/* Photo: Changed from rounded-full to rounded-2xl for a square look with rounded corners */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 border border-slate-100">
                  {FOUNDER.image ? (
                    <img
                      src={FOUNDER.image}
                      alt={FOUNDER.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-5xl">
                      {FOUNDER.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Name & Details */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{FOUNDER.name}</h3>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest mt-1">{FOUNDER.designation}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full border border-slate-100">
                    {FOUNDER.qualification}
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">
                    {FOUNDER.certification}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ── CARD 2: MESSAGE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Heading */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-6">
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em]">From the Founder's Desk</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Founder's <span className="text-blue-600">Message</span>
                  </h2>

                  {/* Quote */}
                  <div className="relative pl-6 border-l-4 border-amber-400 mb-8 group">
                    <Quote className="absolute -top-3 -left-2 h-8 w-8 text-amber-200 pointer-events-none" />
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-serif italic">
                      "{FOUNDER.message}"
                    </p>
                  </div>

                  <p className="text-slate-500 leading-relaxed text-base font-medium">
                    We started LakshyaMarch in {INSTITUTE.established} with a simple goal:{" "}
                    <span className="text-slate-900 font-bold">Quality Education with No Compromises.</span>{" "}
                    Today, we are bringing premier JEE & NEET-level standards to {INSTITUTE.address.city} through{" "}
                    <strong className="text-blue-600 font-black">{PROGRAMS.school.name}</strong>.{" "}
                    Students no longer need to travel to other cities — we provide all elite facilities and expert mentorship right here.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <a
                    href={whatsappLink()}
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-slate-900/10 group/btn"
                  >
                    Connect with Ram Sir
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ═══════════ THE INTEGRATED ECOSYSTEM (PROGRAMS) ═══════════ */}
      <section id="programs" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One Institute. <span className="text-blue-600">Total Complete Package.</span>
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Choose the program that fits your child's goal. From foundational schooling to hardcore competitive exam preparation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* School Wing (Static) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex gap-4 items-center mb-6">
                <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">LM Integrated School</h3>
                  <p className="text-blue-600 font-black text-xs uppercase tracking-widest mt-0.5">CLASS 6 TO CLASS 10</p>
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                A revolutionary schooling concept where rigorous board preparation meets foundation coaching, saving students time and money.
              </p>
              <ul className="space-y-4">
                {[
                  "School cum Coaching — one fee, two benefits",
                  "Self-study time built into schedule",
                  "Better syllabus management",
                  "Moral & Personal Finance Education",
                  "No need to travel separately for coaching",
                  "Timing: 8 AM to 2 PM"
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coaching Wing (Static) */}
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 border-2 border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex gap-4 items-center mb-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight">LakshyaMarch Coaching</h3>
                  <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mt-0.5">IIT-JEE | NEET | FOUNDATION</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Courses Offered</p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "IIT-JEE (Main + Advanced)",
                      "NEET (Medical)",
                      "Foundation",
                      "Olympiad Special"
                    ].map((c) => (
                      <span key={c} className="px-4 py-2 rounded-xl bg-slate-800/50 text-blue-200 text-[11px] font-black border border-slate-700/50 uppercase tracking-widest">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Popular Batches</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "2-Year Program", sub: "Class 11 & 12 (JEE/NEET)", color: "text-amber-500" },
                      { title: "1-Year Dropper Batch", sub: "JEE/NEET Droppers", color: "text-amber-500" },
                      { title: "Foundation Batch", sub: "Class 7/8/9/10", color: "text-blue-400" },
                      { title: "ThinkNEET Test Series", sub: "NEET aspirants", color: "text-emerald-400" }
                    ].map((b) => (
                      <li key={b.title} className="bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                        <p className="text-sm font-black text-white mb-1 tracking-tight">{b.title}</p>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${b.color}`}>{b.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ELITE FACULTY ═══════════ */}
      <section id="faculty" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              India's Top Tier <span className="text-blue-600">Educators</span>
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed font-medium">
              We don't hire part-time local tutors. Our entire faculty panel consists of highly experienced IITians, NITians, and subject experts holding national ranks (GATE / Olympiad).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY.slice(0, 4).map((f) => (
              <div key={f.name} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                {/* Name & Subject */}
                <div>
                  <h4 className="text-lg font-black text-slate-900 leading-tight">{f.name}</h4>
                  <p className="mt-1 text-[10px] font-black text-blue-600 uppercase tracking-widest">{f.subject}</p>
                </div>
                {/* Qualification */}
                <div className="flex-1 space-y-2">
                  <p className="text-xs font-bold text-slate-700 leading-snug">{f.qual}</p>
                  {f.prev && (
                    <span className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-lg border border-amber-100">
                      {f.prev}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Meet All Faculty CTA */}
          <div className="text-center mt-14">
            <a
              href="/faculty"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-slate-900/10 group"
            >
              <Users size={20} />
              Meet All Faculty
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ HALL OF FAME (RESULTS) ═══════════ */}
      <section id="results" className="py-20 sm:py-28 bg-slate-900 border-t-8 border-amber-500 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-500/20 mb-6">
              <Trophy size={32} className="text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The <span className="text-amber-400">Hall of Fame</span>
            </h2>
            <p className="mt-5 text-blue-200/70 leading-relaxed font-medium">
              Numbers don't lie. Year after year, LM produces city toppers in NEET, JEE, and Board exams. This is the ecosystem your child will enter.
            </p>
          </div>

          <div className="space-y-12">
            {/* NEET SECTION */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-amber-500"></span> NEET UG 2025 Stars <span className="h-0.5 w-full flex-1 bg-slate-800"></span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {RESULTS_NEET.slice(0, 5).map((r: any) => (
                  <div key={r.id} className={`p-5 rounded-2xl border ${r.isTopper ? 'bg-amber-500/10 border-amber-500/30 ring-1 ring-amber-500/50' : 'bg-slate-800 border-slate-700'}`}>
                    <p className="text-[10px] font-bold text-amber-500 mb-1 uppercase tracking-wider">{r.badge || r.college || "Selected"}</p>
                    <h4 className="text-sm font-bold text-white mb-2 truncate">{r.name}</h4>
                    <p className={`text-2xl font-black ${r.isTopper ? 'text-amber-400' : 'text-blue-300'}`}>{r.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE SECTION */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-blue-500"></span> IIT-JEE Achievers <span className="h-0.5 w-full flex-1 bg-slate-800"></span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {RESULTS_JEE.slice(0, 7).map((r: any) => (
                  <div key={r.id} className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center hover:bg-slate-700 transition-colors">
                    <h4 className="text-xs font-bold text-white mb-1 truncate">{r.name}</h4>
                    <p className="text-lg font-black text-emerald-400 mb-1">{r.stat}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.badge || r.college || r.examType}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BOARD SECTION */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">CBSE 12th Toppers</h4>
                <ul className="space-y-3">
                  {RESULTS_BOARD.cbse12.map((r: any) => (
                    <li key={r.id} className="flex justify-between items-center"><span className="text-sm text-slate-300">{r.name}</span><span className="text-sm font-bold text-white bg-slate-900 px-2 py-1 rounded">{r.percentage}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">ICSE 10th Toppers</h4>
                <ul className="space-y-3">
                  {RESULTS_BOARD.icse10.map((r: any) => (
                    <li key={r.id} className="flex justify-between items-center"><span className="text-sm text-slate-300">{r.name}</span><span className="text-sm font-bold text-white bg-slate-900 px-2 py-1 rounded">{r.percentage}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">CBSE 10th Toppers</h4>
                <ul className="space-y-3">
                  {RESULTS_BOARD.cbse10.map((r: any) => (
                    <li key={r.id} className="flex justify-between items-center"><span className="text-sm text-slate-300">{r.name}</span><span className="text-sm font-bold text-white bg-slate-900 px-2 py-1 rounded">{r.percentage}</span></li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ SUCCESS STORIES (TESTIMONIALS) ═══════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Success <span className="text-amber-500">Stories</span>
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Hear from our top achievers who turned their dreams into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.slice(0, 3).map((story) => (
              <div key={story.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-2xl shadow-inner shrink-0">
                    {story.title.split(' ')[1]?.charAt(0) || 'S'}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      {story.title.split(' ')[1]} {story.title.split(' ')[2]}
                    </h3>
                    <span className="inline-block mt-1 px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg uppercase tracking-widest">
                      {story.category} {story.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-slate-200 pointer-events-none" />
                  <p className="text-slate-600 font-medium italic leading-relaxed relative z-10 pl-6">
                    "{story.excerpt}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link href={`/blog/${story.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read Full Story <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/results" className="inline-flex items-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm">
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900 text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to secure your child's success?
          </h2>
          <p className="mt-4 text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether it's School Admission for {PROGRAMS.school.classes[0]} or Target NEET/JEE, our experts will guide you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#enquiry" className="h-14 px-10 inline-flex items-center gap-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-sm shadow-xl shadow-amber-500/30 transition-all uppercase tracking-widest">
              Talk to Counsellor <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
