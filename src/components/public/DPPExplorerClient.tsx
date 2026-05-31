"use client";

import { useState } from "react";
import { ChevronRight, FileText, Search, ArrowLeft, ExternalLink, FolderOpen } from "lucide-react";
import Link from "next/link";
import { STUDY_MATERIAL_REGISTRY, ClassSection, Subject, Chapter, StudyFile } from "@/lib/studyMaterialRegistry";
import { Badge, HeroSection, Reveal } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export default function DPPExplorerClient() {
  const [selectedClass, setSelectedClass] = useState<ClassSection | null>(
    STUDY_MATERIAL_REGISTRY.find((c) => c.id === "class-11-jee") || STUDY_MATERIAL_REGISTRY[0] || null,
  );
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(selectedClass?.subjects[0] || null);
  const [activeFile, setActiveFile] = useState<StudyFile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClassChange = (cls: ClassSection) => {
    setSelectedClass(cls);
    setSelectedSubject(cls.subjects[0] || null);
    setActiveFile(null);
  };

  const handleSubjectChange = (sub: Subject) => {
    setSelectedSubject(sub);
    setActiveFile(null);
  };

  const chapters = (selectedSubject?.chapters ?? []).filter((ch) =>
    searchQuery.trim() ? ch.name.toLowerCase().includes(searchQuery.toLowerCase()) : true,
  );

  return (
    <main className="flex-1">
      <HeroSection accent="blue" minHeight="min-h-[44vh]">
        <div>
          <Reveal>
            <nav className="flex items-center gap-2 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/50">
              <Link href="/study-material" className="transition-colors hover:text-white">Study Material</Link>
              <ChevronRight size={12} />
              <span className="text-white">Daily Practice Problems</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
              DPP <span className="text-brand-gold-400">Library 2026</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl font-sans text-white/70">Select your class and subject to browse chapter-wise assignments.</p>
          </Reveal>
        </div>
      </HeroSection>

      {/* Sticky filters */}
      <div className="sticky top-16 z-40 border-b border-ink-200 bg-white sm:top-[72px]">
        <div className={layout.container}>
          <div className="flex items-center gap-2 overflow-x-auto border-b border-ink-100 py-3 no-scrollbar">
            {STUDY_MATERIAL_REGISTRY.map((cls) => (
              <button
                key={cls.id}
                onClick={() => handleClassChange(cls)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-all",
                  selectedClass?.id === cls.id ? "bg-brand-blue-800 text-white shadow-brand-sm" : "text-ink-500 hover:bg-ink-100",
                )}
              >
                {cls.className}
              </button>
            ))}
          </div>
          {(selectedClass?.subjects?.length ?? 0) > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
              <span className="shrink-0 pr-2 font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">Subjects</span>
              {selectedClass?.subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubjectChange(sub)}
                  className={cn(
                    "whitespace-nowrap rounded-full px-4 py-1.5 font-sans text-sm font-semibold transition-all",
                    selectedSubject?.id === sub.id ? "bg-brand-red-50 text-brand-red-600" : "text-ink-500 hover:bg-ink-100",
                  )}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={cn(layout.container, "py-12")}>
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900">
              {selectedSubject?.name || selectedClass?.className || "Repository"}
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <Badge tone="blue">Integrated DPPs</Badge>
              <span className="font-sans text-[0.6875rem] font-bold uppercase tracking-widest text-ink-400">
                {selectedClass?.className} · {selectedSubject?.chapters.length || 0} Chapters
              </span>
            </div>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} strokeWidth={1.75} />
            <input
              type="text"
              placeholder="Search chapters…"
              className="h-12 w-full rounded-xl border border-ink-200 bg-white pl-11 pr-5 font-sans text-sm font-medium transition-colors focus:border-brand-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink-200 bg-white shadow-brand-sm">
          {activeFile ? (
            <div className="flex h-[640px] flex-col bg-ink-950">
              <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-ink-900 p-4">
                <button onClick={() => setActiveFile(null)} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-sans text-xs font-bold text-white transition-colors hover:bg-white/10">
                  <ArrowLeft size={14} strokeWidth={1.75} /> Back
                </button>
                <span className="truncate font-sans text-xs font-bold uppercase tracking-widest text-brand-gold-400">{activeFile.name}</span>
                <a href={`https://drive.google.com/file/d/${activeFile.driveId}/view`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-brand-blue-700 p-2 text-white transition-colors hover:bg-brand-blue-800">
                  <ExternalLink size={14} strokeWidth={1.75} />
                </a>
              </div>
              <iframe src={`https://drive.google.com/file/d/${activeFile.driveId}/preview`} className="w-full flex-1 border-0" allow="autoplay" loading="lazy" />
            </div>
          ) : chapters.length ? (
            <div className="divide-y divide-ink-100">
              {chapters.map((chapter) => (
                <ChapterBlock key={chapter.id} chapter={chapter} onOpen={setActiveFile} />
              ))}
            </div>
          ) : (
            <div className="surface-exam-sheet relative flex min-h-[420px] flex-col items-center justify-center p-16 text-center">
              <div className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-md bg-ink-100 text-ink-400">
                  <FolderOpen size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-ink-900">Materials coming soon</h3>
                <p className="mx-auto mt-2 max-w-xs font-sans text-sm text-ink-500">
                  DPPs for <span className="font-semibold text-brand-blue-700">{selectedClass?.className}</span> are being added. Check back shortly.
                </p>
                <button
                  onClick={() => handleClassChange(STUDY_MATERIAL_REGISTRY.find((c) => c.id === "class-11-jee") || STUDY_MATERIAL_REGISTRY[0])}
                  className="mt-7 rounded-xl bg-brand-blue-800 px-7 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand-blue-900"
                >
                  View Class 11 Archive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ChapterBlock({ chapter, onOpen }: { chapter: Chapter; onOpen: (f: StudyFile) => void }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-brand-blue-700" />
        <h4 className="font-display text-xl font-bold tracking-tight text-ink-900">{chapter.name}</h4>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {chapter.files.map((file) => (
          <button
            key={file.id}
            onClick={() => onOpen(file)}
            className="group flex items-center gap-4 rounded-xl border border-ink-200 bg-ink-50 p-4 text-left transition-all hover:border-brand-blue-300 hover:bg-white hover:shadow-brand-sm"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue-700 transition-colors group-hover:bg-brand-blue-700 group-hover:text-white">
              <FileText size={22} strokeWidth={1.75} />
            </span>
            <span>
              <span className="block font-sans text-[0.625rem] font-bold uppercase tracking-widest text-ink-400">Assignment / DPP</span>
              <span className="block font-display text-sm font-semibold text-ink-900">{file.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
