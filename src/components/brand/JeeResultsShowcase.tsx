"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import ResultCard, { type ResultStudent } from "./ResultCard";
import { Stagger, StaggerItem } from "./Motion";
import { staggerItem } from "@/design-system/motion";

export default function JeeResultsShowcase({
  jee = [],
  className,
}: {
  jee?: ResultStudent[];
  className?: string;
}) {
  const years = useMemo(() => {
    const set = Array.from(new Set(jee.map((d) => d.year).filter(Boolean))) as number[];
    return set.sort((a, b) => b - a);
  }, [jee]);

  const visibleByYear = useMemo(() => {
    const map = new Map<number, ResultStudent[]>();
    years.forEach((y) => {
      const filtered = jee.filter((d) => d.year === y);
      const sorted = [...filtered].sort((a, b) => {
        if (a.isTopper && !b.isTopper) return -1;
        if (!a.isTopper && b.isTopper) return 1;
        return 0;
      });
      map.set(y, sorted);
    });
    return map;
  }, [jee, years]);

  return (
    <div className={cn("w-full space-y-16", className)}>
      {years.map((year) => (
        <div key={year}>
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            JEE {year} Results
          </h2>
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visibleByYear.get(year)?.map((student) => (
              <StaggerItem key={student.id} variants={staggerItem}>
                <ResultCard student={student} category="JEE" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}
    </div>
  );
}
