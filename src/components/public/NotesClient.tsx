"use client";

import { useState } from "react";
import { BookOpen, FolderOpen, Laptop, ShieldCheck, Info } from "lucide-react";
import { STUDY_MATERIAL_REGISTRY, ClassSection } from "@/lib/studyMaterialRegistry";

export default function NotesClient() {
  const [selectedClassId, setSelectedClassId] = useState<string>("class-11-jee");

  const activeClass = STUDY_MATERIAL_REGISTRY.find((c) => c.id === selectedClassId) || STUDY_MATERIAL_REGISTRY[0];

  // We find the drive ID if available. For Notes, we might need to add a driveId field to ClassSection 
  // or use a mapping. Let's stick to the current logic but with updated styling.
  const driveIdMap: Record<string, string | null> = {
    "class-11-jee": "1-Q87erxdVZXvNnIDoeu-MWiiPPtIDgOu",
    "class-11-neet": null,
    "class-10": null,
    // Add other mappings here as needed
  };

  const activeDriveId = driveIdMap[selectedClassId] || null;

  return (
    <div className="flex flex-col min-h-screen uppercase-none">
      {/* ── CLASS TABS (EXACT PROGRAM STYLE STICKY) ───────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2">
            <button
              onClick={() => setSelectedClassId(STUDY_MATERIAL_REGISTRY[0].id)}
              className={`px-3 py-2 whitespace-nowrap text-[13px] transition-all ${
                selectedClassId === "all" 
                ? "text-blue-600 font-black scale-110" 
                : "text-slate-400 font-bold hover:text-slate-600"
              }`}
            >
              All Filters
            </button>
            {STUDY_MATERIAL_REGISTRY.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClassId(cls.id)}
                className={`px-3 py-2 whitespace-nowrap text-[13px] transition-all ${
                  selectedClassId === cls.id
                    ? "text-blue-600 font-black scale-110"
                    : "text-slate-400 font-bold hover:text-slate-600"
                }`}
              >
                 {cls.className}
                 {!driveIdMap[cls.id] && <span className="ml-1.5 opacity-40 text-[9px] uppercase tracking-tighter">soon</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DRIVE EMBED / COMING SOON ────────────────────────────────────── */}
      <section className="flex-1 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {activeDriveId ? (
            <>
              {/* hint bar */}
              <div className="flex items-start gap-4 mb-8 p-6 bg-slate-900 text-white border-l-4 border-blue-600 shadow-xl rounded-none">
                <Info size={24} className="shrink-0 text-blue-400" />
                <div>
                   <p className="text-sm font-black uppercase tracking-widest">Digital Archive Activated</p>
                   <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">Double-click folders to access nested PDFs. Native internal viewer enabled.</p>
                </div>
              </div>

              {/* iframe container */}
              <div className="w-full bg-white rounded-none border-2 border-slate-100 shadow-2xl overflow-hidden"
                   style={{ height: "calc(100vh - 320px)", minHeight: 520 }}>
                <iframe
                  key={selectedClassId}           // re-mount when tab switches
                  src={`https://drive.google.com/embeddedfolderview?id=${activeDriveId}#grid`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  title={`${activeClass.className} Notes – LakshyaMarch`}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center bg-white rounded-none border-2 border-dashed border-slate-200 py-32 text-center px-10">
              <div className="h-24 w-24 bg-slate-50 rounded-none flex items-center justify-center mb-10 border border-slate-200">
                <FolderOpen size={40} className="text-slate-200" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Synchronizing...</h3>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] max-w-sm mb-12 leading-loose">
                Official concept notes for <span className="text-blue-600">{activeClass.className}</span> are being organized. Access will be granted shortly.
              </p>
              <button
                onClick={() => setSelectedClassId("class-11-jee")}
                className="px-12 py-5 bg-slate-900 text-white rounded-none font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/10"
              >
                Go to Active Archive →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
