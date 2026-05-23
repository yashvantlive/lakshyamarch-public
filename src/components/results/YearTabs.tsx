"use client";

import { motion } from "framer-motion";

interface YearTabsProps {
  years: number[];
  activeYear: number;
  onYearChange: (year: number) => void;
}

export default function YearTabs({ years, activeYear, onYearChange }: YearTabsProps) {
  if (years.length <= 1) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
      <div className="flex gap-8 border-b border-slate-100">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`relative pb-3 text-sm font-black tracking-tight transition-colors ${
              activeYear === year ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {year}
            {activeYear === year && (
              <motion.div
                layoutId="year-underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B00]"
                transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
