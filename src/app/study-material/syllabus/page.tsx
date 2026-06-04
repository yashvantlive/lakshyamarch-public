import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { SYLLABUS_DATA, OFFICIAL_BOARDS, SYLLABUS_FAQS } from '@/lib/syllabusData';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Badge, HeroSection, Reveal, FAQSection, CTASection } from "@/components/brand";
import { GraduationCap, Download, ExternalLink, BookOpen } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: `JEE, NEET & Board Syllabus Trackers | ${INSTITUTE.name}`,
  description: `Download official syllabus PDFs for IIT-JEE (Main & Adv), NEET-UG, CBSE and ICSE Board Exams.`,
};

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1 bg-ink-50">
        <HeroSection accent="blue" minHeight="min-h-[50vh]">
          <div className="mx-auto max-w-3xl text-center">

            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={GraduationCap}>Syllabus Hub</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Exam <span className="text-brand-blue-400">Syllabus</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Download the latest official syllabus for your target examination. Stay aligned with NTA and Board patterns.
              </p>
            </Reveal>
          </div>
        </HeroSection>

        {/* Syllabus Cards Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {SYLLABUS_DATA.map((cat, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                <Reveal>
                  <h2 className="text-3xl font-display font-extrabold text-ink-900 mb-10 pb-4 border-b-2 border-ink-100">
                    {cat.categoryName}
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.subjects.map((sub, subIdx) => (
                    <Reveal key={subIdx} delay={subIdx * 0.1}>
                      <div className="bg-white border border-ink-200 rounded-2xl p-6 shadow-brand-sm hover:shadow-brand-md transition-shadow h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600">
                            <BookOpen size={24} strokeWidth={1.5} />
                          </span>
                          <h3 className="text-xl font-display font-bold text-ink-900">
                            {sub.name}
                          </h3>
                        </div>
                        
                        <div className="flex-1 flex flex-col gap-3">
                          {sub.trackers.map((track, trackIdx) => (
                            <div key={trackIdx}>
                              {track.url ? (
                                <a 
                                  href={track.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="group flex items-center justify-between text-ink-600 hover:text-brand-blue-600 bg-ink-50 hover:bg-brand-blue-50 p-4 rounded-xl transition-all"
                                >
                                  <span className="font-sans font-semibold text-sm">{track.name}</span>
                                  <Download size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                              ) : (
                                <div className="flex items-center justify-between text-ink-400 bg-ink-50 p-4 rounded-xl border border-dashed border-ink-200 cursor-not-allowed">
                                  <span className="font-sans font-semibold text-sm">{track.name}</span>
                                  <span className="text-[0.625rem] uppercase tracking-wider font-bold">Coming Soon</span>
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

        {/* Official Boards Section */}
        <section className="py-20 bg-white border-t border-ink-100">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-extrabold text-ink-900">Official Examination Boards</h2>
              <p className="mt-4 font-sans text-lg text-ink-600">Visit the official websites for the most authentic notifications and syllabus updates.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OFFICIAL_BOARDS.map((board, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <a 
                    href={board.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-ink-50 rounded-2xl p-6 border border-ink-200 hover:border-brand-blue-300 hover:shadow-brand-md transition-all text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 relative bg-white rounded-xl shadow-sm border border-ink-100 flex items-center justify-center p-2 overflow-hidden">
                      {board.logo ? (
                        <Image src={board.logo} alt={`${board.name} logo`} fill sizes="(max-width: 768px) 100px, 150px" className="object-contain p-2" />
                      ) : (
                        <ExternalLink size={32} className="text-ink-300" />
                      )}
                    </div>
                    <h3 className="font-display font-bold text-ink-900 group-hover:text-brand-blue-600 transition-colors">
                      {board.name}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Official Site <ExternalLink size={14} />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={SYLLABUS_FAQS} accent="blue" />

        <CTASection
          title="Master the Syllabus with Us"
          accentWord="Master"
          lead="Enroll in our foundation or targeted programs to cover every topic thoroughly."
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
