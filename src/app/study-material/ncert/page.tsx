import React from 'react';
import Link from 'next/link';
import { INSTITUTE } from '@/lib/siteData';
import { NCERT_REGISTRY, NCERT_FAQS } from '@/lib/ncertbookData';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Badge, HeroSection, Reveal, FAQSection, CTASection } from "@/components/brand";
import { BookOpen, ChevronRight, GraduationCap, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: `NCERT Books PDF Download (Latest 2026-27 Edition) | ${INSTITUTE.name}`,
  description: `Free PDF download of official NCERT textbooks from Class 6 to Class 12. Rationalized latest syllabus books for CBSE boards, JEE, and NEET preparation.`,
  keywords: ["NCERT Books", "NCERT PDF Download", "Class 10 NCERT Books", "Class 12 NCERT Physics", "JEE NEET NCERT Study Material", "LakshyaMarch Education"],
};

export default function NcertPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1 bg-ink-50">
        {/* Hero Section */}
        <HeroSection accent="red" minHeight="min-h-[50vh]">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={BookOpen}>NCERT E-LIBRARY</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                NCERT Books <span className="text-brand-red-400">PDF Download</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Access and download chapter-wise PDFs of the official NCERT textbooks for Class 6 to Class 12. Aligned with the latest rationalized curriculum for CBSE Boards, JEE, and NEET preparation.
              </p>
            </Reveal>
          </div>
        </HeroSection>

        {/* Directory Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink-900 mb-4">
                  Select Your Class to Explore Books
                </h2>
                <p className="font-sans text-ink-600 text-base sm:text-lg">
                  Browse through subject-wise catalogs and chapter-wise download links tailored for school boards, foundation preparation, and competitive exams.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {NCERT_REGISTRY.map((classData, idx) => {
                const classNumStr = classData.className.replace(/[^\d]/g, '');
                const classSlug = `class-${classNumStr}`;
                const uniqueSubjects = Array.from(new Set(classData.books.map(b => b.subjectName)));

                return (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="bg-white border border-ink-200 rounded-3xl p-8 shadow-brand-sm hover:shadow-brand-xl hover:border-brand-red-200 transition-all duration-300 flex flex-col h-full group">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red-50 text-brand-red-600 group-hover:bg-brand-red-600 group-hover:text-white transition-colors duration-300">
                          <GraduationCap size={24} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-bold font-sans uppercase tracking-widest text-ink-400 group-hover:text-brand-red-500 transition-colors">
                          {classData.books.length} Textbooks
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-extrabold text-ink-900 mb-3 group-hover:text-brand-red-600 transition-colors">
                        {classData.className}
                      </h3>

                      <p className="font-sans text-sm text-ink-500 mb-6 flex-grow leading-relaxed">
                        Complete textbooks and chapters for CBSE and competitive exams. Available subjects:
                      </p>

                      {/* Subject Quick Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {uniqueSubjects.slice(0, 5).map((subject, subIdx) => (
                          <span 
                            key={subIdx}
                            className="text-[11px] font-sans font-semibold px-3 py-1 rounded-full bg-ink-100 text-ink-700 border border-ink-200"
                          >
                            {subject}
                          </span>
                        ))}
                        {uniqueSubjects.length > 5 && (
                          <span className="text-[11px] font-sans font-semibold px-2 py-1 text-ink-400">
                            +{uniqueSubjects.length - 5} more
                          </span>
                        )}
                      </div>

                      <Link 
                        href={`/study-material/ncert/${classSlug}`}
                        className="w-full inline-flex items-center justify-between font-sans font-bold text-sm bg-ink-50 hover:bg-brand-red-600 hover:text-white text-ink-900 px-6 py-4 rounded-xl border border-ink-200 hover:border-brand-red-600 transition-all duration-300 group-hover:shadow-brand-sm"
                      >
                        <span>Explore All Books</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Information & Article Section */}
        <section className="py-24 bg-white border-t border-b border-ink-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-display font-extrabold text-ink-900 mb-8 leading-tight">
                Why NCERT Textbooks are Crucial for Academic & Competitive Success
              </h2>
            </Reveal>

            <div className="prose prose-ink max-w-none font-sans text-ink-600 space-y-6 leading-relaxed text-[15px]">
              <p>
                Whether you are aiming for top marks in your school board examinations or preparing for India's toughest engineering and medical entrance tests—<strong>IIT-JEE</strong> and <strong>NEET-UG</strong>—NCERT textbooks are your ultimate guide. Written by subject matter experts and approved by educational boards, these textbooks clarify fundamental concepts in the simplest way possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="border border-ink-200 p-6 rounded-2xl bg-ink-50">
                  <h3 className="font-display font-bold text-lg text-ink-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="text-brand-red-600 shrink-0" size={20} />
                    Concept Clarity First
                  </h3>
                  <p className="text-sm text-ink-600">
                    NCERT textbooks present complex mathematical formulas, physical derivations, and biological structures in highly accessible summaries. They build step-by-step logic that ensures strong conceptual foundations.
                  </p>
                </div>

                <div className="border border-ink-200 p-6 rounded-2xl bg-ink-50">
                  <h3 className="font-display font-bold text-lg text-ink-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="text-brand-red-600 shrink-0" size={20} />
                    Competitive Weightage
                  </h3>
                  <p className="text-sm text-ink-600">
                    A major portion of JEE Main Chemistry and NEET Biology questions are framed word-for-word from NCERT textbooks. Ignoring NCERT is often the primary reason students fail to score in these sections.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-ink-900 mt-12 mb-4">
                What is the "Rationalized" NCERT Syllabus?
              </h3>
              <p>
                To align with the National Education Policy (NEP) and alleviate students' cognitive load, NCERT has updated its textbooks, eliminating redundant, overlapping, and complex content. This new edition is called the <strong>Rationalized Syllabus</strong>. 
              </p>
              <p>
                All textbooks hosted on LakshyaMarch's NCERT E-Library are of the newest rationalized editions, meaning you won't waste time studying outdated topics that are no longer part of current board and competitive exam blueprints.
              </p>

              <h3 className="text-2xl font-display font-extrabold text-ink-900 mt-12 mb-4">
                How to Get the Most Out of NCERT Books
              </h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Read Line-by-Line:</strong> Pay deep attention to every sentence, graph, diagram label, and summary box, especially in Chemistry and Biology.</li>
                <li><strong>Solve In-text Questions:</strong> Make sure you solve the "Inttext" questions and "Exercises" at the end of each chapter. These are often repeated in board exams.</li>
                <li><strong>Pair with Mock Tests:</strong> Once you complete a chapter, immediately practice topic-wise DPPs and mock tests to check your recall.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Global NCERT FAQs */}
        <FAQSection faqs={NCERT_FAQS} accent="red" />

        {/* CTA Banner */}
        <CTASection
          title="Supercharge Your Preparation with LakshyaMarch"
          accentWord="LakshyaMarch"
          lead="Align your school boards, foundation, or JEE/NEET preparation with our elite faculty in Begusarai. Get access to comprehensive study materials, custom DPPs, and structured testing."
          actions={[
            { label: "Enroll in Classrooms", href: "/admission", variant: "primary", withArrow: true },
            { label: "Talk to our Mentors", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
          ]}
        />
      </main>
      
      <PublicFooter />
    </div>
  );
}
