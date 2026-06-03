import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { NCERT_REGISTRY, NCERT_FAQS } from '@/lib/ncertbookData';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Badge, HeroSection, Reveal, FAQSection, CTASection } from "@/components/brand";
import { BookOpen, Download } from "lucide-react";

export const metadata = {
  title: `NCERT Books PDF Download | ${INSTITUTE.name}`,
  description: `Download official NCERT textbooks in PDF format for Class 6 to 12.`,
};

export default function NcertPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1 bg-ink-50">
        <HeroSection accent="red" minHeight="min-h-[45vh]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={BookOpen}>NCERT Hub</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                NCERT <span className="text-brand-red-400">Books</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Direct download links to official NCERT textbooks in PDF format for Class 6 to 12.
              </p>
            </Reveal>
          </div>
        </HeroSection>

        {/* NCERT Cards Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {NCERT_REGISTRY.map((classSec, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                <Reveal>
                  <h2 className="text-3xl font-display font-extrabold text-ink-900 mb-10 pb-4 border-b-2 border-ink-100">
                    {classSec.className}
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {classSec.subjects.map((subject, subIdx) => (
                    <Reveal key={subIdx} delay={subIdx * 0.1}>
                      <div className="bg-white border border-ink-200 rounded-2xl p-6 shadow-brand-sm hover:shadow-brand-md transition-shadow h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
                            <BookOpen size={20} strokeWidth={1.5} />
                          </span>
                          <h3 className="text-xl font-display font-bold text-ink-900">
                            {subject.name}
                          </h3>
                        </div>
                        
                        <div className="flex-1 flex flex-col gap-3">
                          {subject.books.map((book, bookIdx) => (
                            <div key={bookIdx}>
                              {book.url ? (
                                <a 
                                  href={book.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="group flex items-center justify-between text-ink-600 hover:text-brand-red-600 bg-ink-50 hover:bg-brand-red-50 p-4 rounded-xl transition-all"
                                >
                                  <span className="font-sans font-semibold text-sm leading-tight pr-2">{book.name}</span>
                                  <Download size={18} className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                              ) : (
                                <div className="flex items-center justify-between text-ink-400 bg-ink-50 p-4 rounded-xl border border-dashed border-ink-200 cursor-not-allowed">
                                  <span className="font-sans font-semibold text-sm leading-tight pr-2">{book.name}</span>
                                  <span className="text-[0.625rem] uppercase tracking-wider font-bold shrink-0">Soon</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={NCERT_FAQS} accent="red" />

        <CTASection
          title="Start Your Preparation"
          accentWord="Preparation"
          lead="Enroll in our foundation or targeted programs to cover the NCERT curriculum thoroughly."
          actions={[
            { label: "Enroll Now", href: "/admission", variant: "primary", withArrow: true },
            { label: "Call Us", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
          ]}
        />
      </main>
      
      <PublicFooter />
    </div>
  );
}
