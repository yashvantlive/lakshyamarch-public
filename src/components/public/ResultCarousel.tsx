"use client";

import React, { useRef } from 'react';
import { RESULTS_JEE, RESULTS_NEET } from '@/lib/siteData';
import { ChevronLeft, ChevronRight, Trophy, Stethoscope } from 'lucide-react';
import ClientOnly from '@/components/ClientOnly';

interface CarouselProps {
  title: string;
  highlight: string;
  data: any[];
  badgeColor: string;
  accentColor: string;
  icon: React.ReactNode;
  type: "JEE" | "NEET";
}

function CarouselSection({ title, highlight, data, badgeColor, accentColor, icon, type }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isJee = type === "JEE";
  const navHover = isJee
    ? "hover:bg-rose-600 hover:border-rose-600 hover:text-white"
    : "hover:bg-emerald-600 hover:border-emerald-600 hover:text-white";

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-24 last:mb-0">
      {/* Header — title only */}
      <div className="mb-10 text-left">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 ${badgeColor} rounded-full mb-4 border border-opacity-20 border-current`}>
          {icon}
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{type} Achievements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {title} <span className={accentColor}>{highlight}</span>
        </h2>
      </div>

      {/* Carousel + side arrows */}
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll('left')}
          className={`absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-slate-200 bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all duration-300 ${navHover}`}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className={`absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-slate-200 bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all duration-300 ${navHover}`}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        <div
          className="overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-14 sm:px-16"
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 min-w-full">
          {data.map((student) => (
            <div 
              key={student.id} 
              className="flex-none w-[280px] sm:w-[320px] snap-start group"
            >
              <div className={`bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50 group-hover:-translate-y-2 transition-all duration-500 border-b-4 ${accentColor.replace('text-', 'border-b-')}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img 
                    src={student.image || "/campaign/neet/placeholder.webp"} 
                    alt={student.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {student.badge && (
                    <div className="absolute inset-x-3 bottom-3 bg-slate-900/80 backdrop-blur-md text-white py-2.5 px-4 rounded-2xl text-center border border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest">{student.badge}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-slate-900 mb-2">{student.name}</h3>
                  <div className="flex flex-col gap-1">
                    <span className={`text-2xl font-black ${accentColor} tracking-tight`}>
                      {type === "JEE" ? student.percentile : student.score}
                      {type === "JEE" && <small className="text-xs ml-1">%ile</small>}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {type} {student.year}
                    </span>
                    {student.college && (
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">
                            {student.college}
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCarouselSkeleton() {
  return (
    <section className="py-24 bg-white overflow-hidden relative" aria-hidden>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-24 animate-pulse">
        {[0, 1].map((i) => (
          <div key={i}>
            <div className="h-10 w-64 rounded-xl bg-slate-100 mb-8" />
            <div className="flex gap-6 overflow-hidden">
              {[0, 1, 2].map((j) => (
                <div key={j} className="flex-none w-[280px] h-[420px] rounded-[32px] bg-slate-100" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultCarouselInner() {
  const jeeToppers = RESULTS_JEE.filter(s => s.year === 2026);
  const neetToppers = RESULTS_NEET.filter(s => s.year >= 2024);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* JEE Section */}
        <CarouselSection 
          title="JEE Mains"
          highlight="2026 Results"
          data={jeeToppers}
          badgeColor="bg-rose-50 text-rose-600"
          accentColor="text-rose-600"
          icon={<Trophy size={14} className="fill-rose-600" />}
          type="JEE"
        />

        <div className="h-24" />

        {/* NEET Section */}
        <CarouselSection 
          title="NEET UG"
          highlight="Recent Results"
          data={neetToppers}
          badgeColor="bg-emerald-50 text-emerald-600"
          accentColor="text-emerald-600"
          icon={<Stethoscope size={14} className="text-emerald-600" />}
          type="NEET"
        />

      </div>
      
      {/* CSS to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default function ResultCarousel() {
  return (
    <ClientOnly fallback={<ResultCarouselSkeleton />}>
      <ResultCarouselInner />
    </ClientOnly>
  );
}
