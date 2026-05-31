"use client";

import { useState } from "react";
import { FolderOpen, Info } from "lucide-react";
import { STUDY_MATERIAL_REGISTRY } from "@/lib/studyMaterialRegistry";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const driveIdMap: Record<string, string | null> = {
  "class-11-jee": "1-Q87erxdVZXvNnIDoeu-MWiiPPtIDgOu",
  "class-11-neet": null,
  "class-10": null,
};

export default function NotesClient() {
  const [selectedClassId, setSelectedClassId] = useState<string>("class-11-jee");
  const activeClass = STUDY_MATERIAL_REGISTRY.find((c) => c.id === selectedClassId) || STUDY_MATERIAL_REGISTRY[0];
  const activeDriveId = driveIdMap[selectedClassId] || null;

  return (
    <div className="flex flex-col">
      {/* Sticky class tabs */}
      <div className="sticky top-16 z-40 border-b border-ink-200 bg-white sm:top-[72px]">
        <div className={layout.container}>
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {STUDY_MATERIAL_REGISTRY.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClassId(cls.id)}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-all",
                  selectedClassId === cls.id ? "bg-brand-blue-800 text-white shadow-brand-sm" : "text-ink-500 hover:bg-ink-100",
                )}
              >
                {cls.className}
                {!driveIdMap[cls.id] && (
                  <span className="rounded-full bg-ink-100 px-1.5 py-0.5 font-sans text-[0.5rem] font-bold uppercase tracking-wider text-ink-400">soon</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={cn(layout.section, "bg-white")}>
        <div className={layout.containerMedium}>
          {activeDriveId ? (
            <>
              <div className="mb-8 flex items-start gap-4 rounded-2xl border-l-4 border-brand-blue-700 bg-ink-950 p-6 text-white shadow-brand-md">
                <Info size={22} strokeWidth={1.75} className="shrink-0 text-brand-blue-400" />
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest">Digital Archive Active</p>
                  <p className="mt-1 font-sans text-xs text-white/60">Open folders to access nested PDFs in the native viewer.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-brand-lg" style={{ height: "calc(100vh - 320px)", minHeight: 520 }}>
                <iframe
                  key={selectedClassId}
                  src={`https://drive.google.com/embeddedfolderview?id=${activeDriveId}#grid`}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  title={`${activeClass.className} Notes – LakshyaMarch`}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50 px-10 py-28 text-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-ink-300 shadow-brand-sm">
                <FolderOpen size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">Notes coming soon</h3>
              <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-ink-500">
                Concept notes for <span className="font-semibold text-brand-blue-700">{activeClass.className}</span> are being organized. Access will be available shortly.
              </p>
              <button
                onClick={() => setSelectedClassId("class-11-jee")}
                className="mt-8 rounded-xl bg-brand-blue-800 px-8 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand-blue-900"
              >
                Go to Active Archive
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
