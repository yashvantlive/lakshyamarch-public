"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResultCard, { type ResultStudent } from "./ResultCard";
import { Stagger, StaggerItem } from "./Motion";
import { staggerItem } from "@/design-system/motion";

export default function BoardResultsShowcase({
  board = [],
  className,
}: {
  board?: ResultStudent[];
  className?: string;
}) {
  const boards = ["CBSE", "BSEB", "ICSE"];
  const [activeBoard, setActiveBoard] = useState<string>("CBSE");

  const filteredByBoard = useMemo(() => {
    return board.filter((b) => b.board?.startsWith(activeBoard));
  }, [board, activeBoard]);

  const years = useMemo(() => {
    const set = Array.from(new Set(filteredByBoard.map((d) => d.year).filter(Boolean))) as number[];
    return set.sort((a, b) => b - a);
  }, [filteredByBoard]);

  const visibleByYear = useMemo(() => {
    const map = new Map<number, ResultStudent[]>();
    years.forEach((y) => {
      const filtered = filteredByBoard.filter((d) => d.year === y);
      const sorted = [...filtered].sort((a, b) => {
        if (a.isTopper && !b.isTopper) return -1;
        if (!a.isTopper && b.isTopper) return 1;
        return 0;
      });
      map.set(y, sorted);
    });
    return map;
  }, [filteredByBoard, years]);

  return (
    <div className={cn("w-full", className)}>
      {/* Board tabs */}
      <div className="mb-10 flex justify-center">
        <div className="inline-flex border border-ink-200 bg-white p-1">
          {boards.map((b) => (
            <button
              key={b}
              data-active={activeBoard === b}
              onClick={() => setActiveBoard(b)}
              className={cn(
                "px-6 py-2.5 font-display text-sm font-bold uppercase tracking-[0.08em] text-ink-500 transition-all data-[active=true]:text-white",
                "data-[active=true]:bg-brand-red-600"
              )}
            >
              {b === "BSEB" ? "Bihar Board" : `${b} Board`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid stacked by year */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBoard}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="space-y-16"
        >
          {years.length === 0 && (
            <div className="text-center py-20 text-ink-500 font-sans">
              No results found for {activeBoard === "BSEB" ? "Bihar Board" : `${activeBoard} Board`} yet.
            </div>
          )}
          {years.map((year) => (
            <div key={year}>
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                {activeBoard === "BSEB" ? "Bihar Board" : `${activeBoard} Board`} {year}
              </h2>
              <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {visibleByYear.get(year)?.map((student) => (
                  <StaggerItem key={student.id} variants={staggerItem}>
                    <ResultCard student={student} category="Board" />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
