"use client";

import { useState } from "react";
import { 
  ChevronRight, 
  FileText, 
  Search, 
  BookOpen, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2,
  Lock,
  Zap,
  Tag
} from "lucide-react";
import Link from "next/link";
import { STUDY_MATERIAL_REGISTRY, ClassSection, Subject, Chapter, StudyFile } from "@/lib/studyMaterialRegistry";

export default function DPPExplorerClient() {
  const [selectedClass, setSelectedClass] = useState<ClassSection | null>(STUDY_MATERIAL_REGISTRY.find(c => c.id === "class-11-jee") || STUDY_MATERIAL_REGISTRY[0]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(selectedClass?.subjects[0] || null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(selectedClass?.subjects[0]?.chapters[0] || null);
  const [activeFile, setActiveFile] = useState<StudyFile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClassChange = (cls: ClassSection) => {
    setSelectedClass(cls);
    setSelectedSubject(cls.subjects[0] || null);
    setSelectedChapter(cls.subjects[0]?.chapters[0] || null);
    setActiveFile(null);
  };

  const handleSubjectChange = (sub: Subject) => {
    setSelectedSubject(sub);
    setSelectedChapter(sub.chapters[0] || null);
    setActiveFile(null);
  };

  return (
    <main className="flex-1 uppercase-none">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 px-2 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-black text-blue-400/60 mb-6 uppercase tracking-[0.2em]">
            <Link href="/study-material" className="hover:text-blue-400 transition-colors">Study Material</Link>
            <ChevronRight size={10} />
            <span className="text-white">Daily Practice Problems</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            DPP <span className="text-blue-400 tracking-tighter">Library 2026</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">
            Select your class below to browse chapter-wise assignments.
          </p>
        </div>
      </section>

      {/* ═══════════ EXACT PROGRAMS STYLE STICKY FILTER BAR ═══════════ */}
      <div className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Class Filters (Minimal Text Style) */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar border-b border-slate-50">
            <button
              onClick={() => handleClassChange(STUDY_MATERIAL_REGISTRY[0])}
              className={`px-3 py-2 whitespace-nowrap text-[13px] transition-all ${
                !selectedClass ? "text-blue-600 font-black scale-110" : "text-slate-400 font-bold hover:text-slate-600"
              }`}
            >
              All Filters
            </button>
            {STUDY_MATERIAL_REGISTRY.map((cls) => (
              <button
                key={cls.id}
                onClick={() => handleClassChange(cls)}
              className={`px-3 py-2 whitespace-nowrap text-[13px] transition-all ${
                  selectedClass?.id === cls.id
                    ? "text-blue-600 font-black scale-110"
                    : "text-slate-400 font-bold hover:text-slate-600"
                }`}
              >
                {cls.className}
              </button>
            ))}
          </div>

          {/* Subject Filters (Conditional Pills - only if class selected) */}
          {(selectedClass?.subjects?.length ?? 0) > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar transition-all animate-in slide-in-from-top-2">
               <span className="text-[10px] font-black text-slate-400 px-3 uppercase tracking-widest border-r border-slate-100 shrink-0">Subjects</span>
               {selectedClass?.subjects.map((sub) => (
                 <button
                   key={sub.id}
                   onClick={() => handleSubjectChange(sub)}
                   className={`px-3 py-1.5 whitespace-nowrap text-[11px] transition-all ${
                     selectedSubject?.id === sub.id
                       ? "text-slate-900 font-black border-b-2 border-slate-900"
                       : "text-slate-400 font-bold hover:text-slate-600"
                   }`}
                 >
                   {sub.name}
                 </button>
               ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        <div className="flex flex-col gap-10">
          
          {/* Header Info & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 leading-none tracking-tight">
                {selectedSubject?.name || selectedClass?.className || "Repository"}
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest bg-blue-50 px-2 py-1">Integrated DPPs</span>
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  {selectedClass?.className} • {selectedSubject?.chapters.length || 0} Chapters
                </span>
              </div>
            </div>

            <div className="relative group max-w-sm w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Search DPPs..."
                className="w-full h-14 pl-12 pr-6 rounded-none bg-white border-2 border-slate-100 focus:outline-none focus:border-blue-600 transition-all text-sm font-bold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Explorer Container */}
          <div className="bg-white rounded-none border-2 border-slate-100 overflow-hidden min-h-[600px] flex flex-col relative">
            
            {activeFile ? (
              <div className="flex-1 flex flex-col h-full bg-slate-900">
                <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-white/5">
                  <button 
                    onClick={() => setActiveFile(null)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-none text-xs font-black border border-white/10 uppercase"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest truncate max-w-xs">{activeFile.name}</div>
                  <a href={`https://drive.google.com/file/d/${activeFile.driveId}/view`} target="_blank" className="p-2 bg-blue-600 text-white">
                    <ExternalLink size={14} />
                  </a>
                </div>
                
                <iframe 
                  src={`https://drive.google.com/file/d/${activeFile.driveId}/preview`}
                  className="w-full flex-1 border-0"
                  allow="autoplay"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex-1 flex flex-col bg-slate-50/10">
                {selectedSubject?.chapters.length ? (
                  <div className="p-0 sm:p-2 divide-y divide-slate-100">
                    {selectedSubject.chapters.map((chapter) => (
                      <div key={chapter.id} className="p-8 space-y-8">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <div className="h-10 w-1 bg-blue-600" />
                              <h4 className="text-2xl font-black text-slate-900 tracking-tight">{chapter.name}</h4>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                          {chapter.files.map((file) => (
                            <button
                              key={file.id}
                              onClick={() => setActiveFile(file)}
                              className="group flex items-center gap-6 p-8 bg-white hover:bg-slate-950 transition-all duration-300 text-left"
                            >
                              <div className="h-16 w-16 shrink-0 bg-slate-50 text-slate-300 group-hover:bg-blue-600 group-hover:text-white rounded-none flex items-center justify-center transition-all">
                                <FileText size={28} />
                              </div>
                              <div className="flex-1">
                                <p className="text-[10px] font-black uppercase text-slate-400 group-hover:text-amber-400 transition-colors mb-1">Assignment / DPP</p>
                                <p className="text-base font-black text-slate-800 uppercase tracking-tight group-hover:text-white transition-colors">{file.name}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-20 text-center">
                    <div className="h-24 w-24 bg-slate-50 rounded-none flex items-center justify-center mb-6 border border-slate-200">
                      <Lock size={40} className="text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Access restricted</h3>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest max-w-xs mx-auto">
                      Materials for <span className="text-blue-600">{selectedClass?.className}</span> are being synced. Please check back shortly.
                    </p>
                    <button 
                      onClick={() => handleClassChange(STUDY_MATERIAL_REGISTRY.find(c => c.id === "class-11-jee")!)}
                      className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-none text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10"
                    >
                      View Class 11th Archive →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
