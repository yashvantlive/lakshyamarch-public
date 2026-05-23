import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import NotesClient from "@/components/public/NotesClient";

export const metadata = {
  title: "Concept Notes & Formula Sheets | LakshyaMarch Education",
  description: "Download high-quality science concept boosters, formula sheets, and study material curated by IIT & NIT alumni.",
  keywords: ["Study Material", "Notes", "Formula Sheets", "IIT-JEE Notes", "NEET Revision Notes"],
};

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col uppercase-none">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-6xl mx-auto relative z-10">
             <nav className="flex items-center gap-2 text-[10px] font-black text-blue-400/60 uppercase tracking-[0.2em] mb-4">
              <Link href="/study-material" className="hover:text-blue-400 transition-colors">Study Material</Link>
              <span>/</span>
              <span className="text-white">Concept Notes</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Concept <span className="text-blue-400">Notes</span>
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <NotesClient />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
