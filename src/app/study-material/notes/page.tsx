import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import NotesClient from "@/components/public/NotesClient";
import { Badge, HeroSection, Reveal } from "@/components/brand";
import { BookText } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Concept Notes & Formula Sheets | LakshyaMarch Education",
  description: "Download high-quality science concept boosters, formula sheets, and study material curated by IIT & NIT alumni.",
  keywords: ["Study Material", "Notes", "Formula Sheets", "IIT-JEE Notes", "NEET Revision Notes"],
};

export default function NotesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />
      <main className="flex-1">
        <HeroSection accent="red" minHeight="min-h-[44vh]">
          <div>
            <Reveal>
              <nav className="flex items-center gap-2 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/50">
                <Link href="/study-material" className="transition-colors hover:text-white">Study Material</Link>
                <ChevronRight size={12} />
                <span className="text-white">Concept Notes</span>
              </nav>
            </Reveal>
            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={BookText} className="mt-5">Revision Hub</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
                Concept <span className="text-brand-gold-400">Notes</span>
              </h1>
            </Reveal>
          </div>
        </HeroSection>
        <NotesClient />
      </main>
      <PublicFooter />
    </div>
  );
}
