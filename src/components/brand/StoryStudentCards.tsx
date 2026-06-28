import React from "react";
import Image from "next/image";
import { resolveStudentProfiles, StudentProfile } from "@/lib/stories";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface StoryStudentCardsProps {
  studentId: string | string[];
}

export default function StoryStudentCards({ studentId }: StoryStudentCardsProps) {
  const profiles = resolveStudentProfiles(studentId);

  if (profiles.length === 0) return null;

  return (
    <div className="my-8">
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-400 mb-4 text-center sm:text-left">
        Featured Student Profile{profiles.length > 1 ? "s" : ""}
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
        {profiles.map((p: StudentProfile) => (
          <div
            key={p.id}
            className="flex gap-4 rounded-xl border border-ink-150 p-5 bg-ink-50/40 shadow-brand-sm hover:shadow-brand-md transition-all hover:bg-white"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-ink-200 bg-ink-100 shadow-inner">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 80px) 100vw, 80px"
              />
            </div>
            <div className="flex flex-col justify-between py-0.5">
              <div>
                <h4 className="font-display text-sm font-extrabold text-ink-900 leading-tight">
                  {p.name}
                </h4>
                <div className="mt-1 flex items-center gap-1.5 font-sans text-[10px] font-bold uppercase tracking-wider text-brand-red-700">
                  <GraduationCap size={12} />
                  <span>
                    {p.category} selected ({p.year})
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-ink-600 font-medium">
                  <Award size={12} className="text-brand-gold-600 shrink-0" />
                  <span>
                    Score: <strong>{p.score || "N/A"}</strong>
                  </span>
                </div>
                {p.college && (
                  <div className="flex items-center gap-1.5 text-[10px] text-ink-500 font-medium leading-tight">
                    <BookOpen size={12} className="text-brand-blue-600 shrink-0" />
                    <span className="line-clamp-1">College: {p.college}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
