import React from "react";
import Image from "next/image";
import { Trophy, GraduationCap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScholarshipRibbon } from "@/design-system/patterns";

export type ResultStudent = {
  id: string;
  name: string;
  year?: number;
  image?: string;
  isTopper?: boolean;
  badge?: string | null;
  college?: string | null;
  // NEET
  score?: string;
  air?: number | null;
  // JEE
  stat?: string;
  percentile?: number | null;
  examType?: string;
  // Board
  percentage?: string;
  board?: string;
};

type Category = "NEET" | "JEE" | "Board";

const accentByCategory: Record<Category, { text: string; ring: string; chip: string }> = {
  NEET: {
    text: "text-brand-green-600",
    ring: "ring-brand-green-200",
    chip: "bg-brand-green-50 text-brand-green-700 border-brand-green-100",
  },
  JEE: {
    text: "text-brand-blue-700",
    ring: "ring-brand-blue-200",
    chip: "bg-brand-blue-50 text-brand-blue-800 border-brand-blue-100",
  },
  Board: {
    text: "text-brand-red-600",
    ring: "ring-brand-red-200",
    chip: "bg-brand-red-50 text-brand-red-700 border-brand-red-100",
  },
};

/** Primary metric per category. */
function metric(student: ResultStudent, category: Category): string {
  if (category === "NEET") return student.score ?? "—";
  if (category === "JEE") return student.percentile != null ? `${student.percentile}` : student.stat ?? "—";
  return student.percentage ?? "—";
}

function metricSuffix(category: Category, student: ResultStudent): string {
  if (category === "JEE" && student.percentile != null) return "%ile";
  return "";
}

/**
 * Unified result card with photo, animated-feel metric, topper ribbon, and
 * college/exam tag. Covers AIR/NEET/JEE/Board through the `category` prop.
 */
export default function ResultCard({
  student,
  category,
  className,
}: {
  student: ResultStudent;
  category: Category;
  className?: string;
}) {
  const a = accentByCategory[category];
  const topper = !!student.isTopper;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg",
        topper ? cn("border-transparent ring-2", a.ring) : "border-ink-200",
        className,
      )}
    >
      {topper && (
        <div className="absolute right-0 top-3 z-10 flex items-center gap-1 bg-brand-gold-400 py-1 pl-2.5 pr-3 font-sans text-[0.625rem] font-bold uppercase tracking-[0.12em] text-ink-900 shadow-brand-sm">
          <Trophy size={12} strokeWidth={2.25} /> Topper
        </div>
      )}

      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-100">
        {student.image ? (
          <Image
            src={student.image}
            alt={student.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950">
            <ScholarshipRibbon className="h-16 w-16 text-white/25" />
            <span className="absolute font-display text-4xl font-extrabold uppercase text-white/80">
              {student.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-950/70 to-transparent" />
        {student.air != null && (
          <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 font-display text-sm font-extrabold text-brand-red-600 shadow-brand-sm">
            AIR {student.air}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 text-center">
        <h3 className="font-display text-base font-bold leading-tight text-ink-900">{student.name}</h3>
        <p className={cn("mt-1 font-display text-2xl font-extrabold tracking-tight", a.text)}>
          {metric(student, category)}
          {metricSuffix(category, student) && (
            <span className="ml-0.5 align-top text-xs font-bold">{metricSuffix(category, student)}</span>
          )}
        </p>
        <div className="mt-auto pt-3">
          {student.college ? (
            <span className={cn("inline-flex items-center gap-1 rounded-sm border px-2.5 py-1 font-sans text-[0.625rem] font-bold uppercase tracking-[0.1em]", a.chip)}>
              <GraduationCap size={11} strokeWidth={2} /> {student.college}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 font-sans text-[0.625rem] font-bold uppercase tracking-[0.12em] text-ink-400">
              {category === "Board" ? student.board : student.examType}
              {student.year ? ` · ${student.year}` : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Compact horizontal rank row (for dense topper lists / board sections). */
export function ResultRow({ student, category }: { student: ResultStudent; category: Category }) {
  const a = accentByCategory[category];
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 transition-colors hover:bg-ink-50">
      <div className="flex items-center gap-3">
        <TrendingUp size={16} strokeWidth={1.75} className={a.text} />
        <span className="font-sans text-sm font-semibold text-ink-800">{student.name}</span>
      </div>
      <span className={cn("font-display text-sm font-extrabold", a.text)}>{metric(student, category)}</span>
    </div>
  );
}
