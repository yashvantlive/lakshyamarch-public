"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResultCard, { type ResultStudent } from "./ResultCard";
import { Stagger, StaggerItem } from "./Motion";
import { staggerItem } from "@/design-system/motion";

type Category = "NEET" | "JEE" | "Board";

/**
 * Flagship results feature: category tabs + year filter pills + animated grid.
 * Pure presentation — feed it pre-shaped student arrays.
 */
export default function ResultsShowcase({
  neet = [],
  jee = [],
  board = [],
  className,
}: {
  neet?: ResultStudent[];
  jee?: ResultStudent[];
  board?: ResultStudent[];
  className?: string;
}) {
  const categories = useMemo(() => {
    const list: Category[] = [];
    if (neet.length) list.push("NEET");
    if (jee.length) list.push("JEE");
    if (board.length) list.push("Board");
    return list;
  }, [neet, jee, board]);

  const [category, setCategory] = useState<Category>(categories[0] ?? "NEET");

  const data = category === "NEET" ? neet : category === "JEE" ? jee : board;

  const years = useMemo(() => {
    const set = Array.from(new Set(data.map((d) => d.year).filter(Boolean))) as number[];
    return set.sort((a, b) => b - a);
  }, [data]);

  const [year, setYear] = useState<number | "all">("all");

  // reset year when category changes
  React.useEffect(() => setYear("all"), [category]);

  const visible = useMemo(() => {
    const filtered = year === "all" ? data : data.filter((d) => d.year === year);
    return [...filtered].sort((a, b) => {
      if (a.isTopper && !b.isTopper) return -1;
      if (!a.isTopper && b.isTopper) return 1;
      return 0;
    });
  }, [data, year]);

  const tabAccent: Record<Category, string> = {
    NEET: "data-[active=true]:bg-brand-green-600",
    JEE: "data-[active=true]:bg-brand-blue-700",
    Board: "data-[active=true]:bg-brand-red-600",
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Category tabs */}
      {categories.length > 1 && (
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              data-active={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border border-ink-200 bg-white px-5 py-2 font-display text-sm font-semibold text-ink-600 transition-all data-[active=true]:border-transparent data-[active=true]:text-white data-[active=true]:shadow-brand-md",
                tabAccent[c],
              )}
            >
              {c === "Board" ? "Board Exams" : c}
            </button>
          ))}
        </div>
      )}

      {/* Year filter */}
      {years.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <YearPill active={year === "all"} onClick={() => setYear("all")}>
            All Years
          </YearPill>
          {years.map((y) => (
            <YearPill key={y} active={year === y} onClick={() => setYear(y)}>
              {y}
            </YearPill>
          ))}
        </div>
      )}

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category}-${year}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visible.map((student) => (
              <StaggerItem key={student.id} variants={staggerItem}>
                <ResultCard student={student} category={category} />
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function YearPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all",
        active
          ? "bg-ink-900 text-white shadow-brand-sm"
          : "bg-ink-100 text-ink-500 hover:bg-ink-200",
      )}
    >
      {children}
    </button>
  );
}
