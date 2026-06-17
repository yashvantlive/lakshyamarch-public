import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INSTITUTE } from '@/lib/siteData';
import { NCERT_REGISTRY } from '@/lib/ncertbookData';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Badge, HeroSection, Reveal, FAQSection, CTASection } from "@/components/brand";
import { BookOpen, ChevronRight, BookMarked, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ classSlug: string }>;
}

// Helper to get class number from slug
function getClassNumber(slug: string): string {
  const match = slug.match(/class-(\d+)/i);
  return match ? match[1] : '';
}

// Find registry entry based on slug
function getClassData(slug: string) {
  const num = getClassNumber(slug);
  if (!num) return null;
  return NCERT_REGISTRY.find(c => c.className === `Class ${num}`) || null;
}

// Generate static params for SSG
export async function generateStaticParams() {
  return NCERT_REGISTRY.map((c) => {
    const num = c.className.replace(/[^\d]/g, '');
    return { classSlug: `class-${num}` };
  });
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug } = await params;
  const classData = getClassData(classSlug);
  if (!classData) return { title: `Class Books | ${INSTITUTE.name}` };

  return {
    title: `NCERT Books for ${classData.className} PDF Download (Rationalized Syllabus) | ${INSTITUTE.name}`,
    description: `Free download of official ${classData.className} NCERT textbooks. Get latest rationalized chapter-wise PDFs for Mathematics, Science, English, Social Science and more.`,
    keywords: [`NCERT ${classData.className} Books`, `Class ${getClassNumber(classSlug)} NCERT PDF`, `NCERT Book Class ${getClassNumber(classSlug)} Download`, `LakshyaMarch Study Material`],
    alternates: { canonical: `/study-material/ncert/${classSlug}` },
  };
}

export default async function NcertClassPage({ params }: Props) {
  const { classSlug } = await params;
  const classData = getClassData(classSlug);
  if (!classData) notFound();

  const classNum = parseInt(getClassNumber(classSlug), 10);
  const isSeniorClass = classNum >= 11;

  // Group books by subject Name
  const subjectGroups: Record<string, typeof classData.books> = {};
  classData.books.forEach((book) => {
    if (!subjectGroups[book.subjectName]) {
      subjectGroups[book.subjectName] = [];
    }
    subjectGroups[book.subjectName].push(book);
  });

  // Dynamically create class-specific FAQs
  const classFaqs = [
    {
      q: `How many subjects are covered in ${classData.className} NCERT?`,
      a: `For ${classData.className}, we provide official textbooks for ${Object.keys(subjectGroups).length} subjects: ${Object.keys(subjectGroups).join(', ')}.`
    },
    {
      q: `Are these textbooks compliant with the latest CBSE guidelines?`,
      a: `Yes, all chapters uploaded here are directly sourced from the latest official NCERT publications conforming to the rationalized syllabus guidelines.`
    },
    {
      q: `How should a student study ${classData.className} NCERT for exams?`,
      a: `Students should read the core text line-by-line, solve all in-text box questions, and perform the end-of-chapter exercises twice. For competitive readiness, they should attempt LakshyaMarch topic-wise mock tests.`
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1 bg-ink-50">
        {/* Hero Section */}
        <HeroSection accent="red" minHeight="min-h-[40vh]">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={BookOpen}>NCERT {classData.className}</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight text-white">
                {classData.className} NCERT Books PDF
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-white/70">
                Official, chapter-wise PDF downloads for all subjects of {classData.className}. Start reading the rationalized edition textbooks now.
              </p>
            </Reveal>
          </div>
        </HeroSection>

        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-ink-200 py-4">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center gap-2 font-sans text-xs text-ink-500">
            <Link href="/" className="hover:text-brand-red-600 transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/study-material" className="hover:text-brand-red-600 transition-colors">Study Material</Link>
            <ChevronRight size={10} />
            <Link href="/study-material/ncert" className="hover:text-brand-red-600 transition-colors">NCERT</Link>
            <ChevronRight size={10} />
            <span className="text-ink-800 font-medium">{classData.className}</span>
          </div>
        </div>

        {/* Subjects Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-display font-extrabold text-ink-900 mb-10 pb-4 border-b border-ink-200">
                Subject-wise NCERT Solutions & Textbooks
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(subjectGroups).map(([subjectName, books], subjectIdx) => {
                const subjectSlug = subjectName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                
                return (
                  <Reveal key={subjectIdx} delay={subjectIdx * 0.05}>
                    <div className="bg-white border border-ink-200 rounded-3xl p-6 shadow-brand-sm hover:shadow-brand-md transition-shadow flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
                            <BookMarked size={20} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-display font-bold text-ink-900">
                            {subjectName}
                          </h3>
                        </div>

                        <div className="space-y-4 mb-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Available Books</p>
                          <div className="flex flex-col gap-2">
                            {books.map((book, bIdx) => (
                              <div key={bIdx} className="flex items-center justify-between text-sm text-ink-600 bg-ink-50 p-3 rounded-lg border border-ink-100">
                                <span className="font-semibold">{book.bookName}</span>
                                <span className="text-xs text-ink-400 font-medium">{book.chapterCount} chapters</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link 
                        href={`/study-material/ncert/${classSlug}/${subjectSlug}`}
                        className="mt-4 inline-flex items-center justify-center gap-2 font-sans font-bold text-xs bg-ink-900 hover:bg-brand-red-600 text-white hover:text-white py-3 rounded-xl transition-colors w-full"
                      >
                        <span>Chapter-wise Downloads</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Copy Section */}
        <section className="py-20 bg-white border-t border-b border-ink-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 font-sans text-ink-600 leading-relaxed space-y-6">
            <Reveal>
              <h2 className="text-3xl font-display font-extrabold text-ink-900 mb-6">
                Why studying {classData.className} NCERT books is crucial
              </h2>
            </Reveal>

            {isSeniorClass ? (
              <>
                <p>
                  For students in Class 11 and 12, NCERT textbooks serve as the absolute backbone for national competitive exams such as <strong>IIT-JEE (Main & Advanced)</strong> and <strong>NEET-UG</strong>. The NCERT syllabus is designed to match the NTA (National Testing Agency) curricula.
                </p>
                <p>
                  Particularly in <strong>Chemistry</strong>, question papers of JEE and NEET consistently feature questions directly adapted from NCERT textual paragraphs, exceptions, and exercises. In <strong>Biology</strong>, NCERT line-by-line reading is considered the bible for securing a 340+ score out of 360.
                </p>
                <p>
                  At LakshyaMarch Begusarai, our elite lecturers supplement NCERT textbooks with advanced concept modules, helping students bridge the gap between textbook formulas and JEE Advanced complex problem solving.
                </p>
              </>
            ) : (
              <>
                <p>
                  For junior secondary and foundation students in Class 6 to 10, NCERT books lay the groundwork for high academic achievement. These textbooks build critical thinking and logic that are essential when students transition to higher secondary board and competitive curriculums.
                </p>
                <p>
                  Syllabi for competitive talent exams like <strong>NTSE</strong>, <strong>Olympiads (IMO, NSO)</strong>, and scholarship examinations are strictly based on NCERT books. By mastering these books chapter-by-chapter, students cultivate strong fundamentals that make future JEE/NEET study seamless.
                </p>
                <p>
                  LakshyaMarch run specialized **Foundation Batches** starting from Class 8, focusing on NCERT enrichment alongside advanced analytical skill training.
                </p>
              </>
            )}

            <div className="bg-brand-red-50/50 border border-brand-red-100 p-6 rounded-2xl mt-8">
              <h4 className="font-display font-bold text-ink-900 mb-2">Preparation Tip from LakshyaMarch Academic Director:</h4>
              <p className="text-sm italic text-ink-700">
                "Do not directly jump to reference books. Read the NCERT chapter twice, write down all formulas in a separate short notebook, and solve every single back exercise. Only after mastering these should you move to advanced question banks."
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={classFaqs} accent="red" />

        {/* Back Link */}
        <div className="py-8 text-center bg-white border-t border-ink-200">
          <Link href="/study-material/ncert" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-red-600 hover:text-brand-red-700 transition-colors">
            <ArrowLeft size={15} /> Back to Class List
          </Link>
        </div>

        {/* CTA */}
        <CTASection
          title={isSeniorClass ? "Targeting JEE or NEET 2027?" : `Build Elite Foundations in ${classData.className}`}
          accentWord={isSeniorClass ? "JEE or NEET" : "Foundations"}
          lead={isSeniorClass 
            ? "Learn under Begusarai's most reputed classroom instructors. Join our specialized courses focused on JEE/NEET alongside Board exams." 
            : "Enroll in our early-start foundation programs. Learn NCERT logic with interactive visual lessons."
          }
          actions={[
            { label: "Request Free Counselling", href: "/admission", variant: "primary", withArrow: true },
            { label: "Call Academic Coordinator", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
          ]}
        />
      </main>

      <PublicFooter />
    </div>
  );
}
