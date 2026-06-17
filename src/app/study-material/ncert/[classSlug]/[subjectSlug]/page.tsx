import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INSTITUTE } from '@/lib/siteData';
import { NCERT_REGISTRY } from '@/lib/ncertbookData';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Badge, HeroSection, Reveal, FAQSection, CTASection } from "@/components/brand";
import NcertChapterTable from "@/components/public/NcertChapterTable";
import { BookOpen, ChevronRight, HelpCircle, ArrowLeft, Lightbulb } from "lucide-react";
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string }>;
}

// Helpers
function getClassNumber(slug: string): string {
  const match = slug.match(/class-(\d+)/i);
  return match ? match[1] : '';
}

function getSubjectSlug(name: string): string {
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function getSubjectData(classSlug: string, subjectSlug: string) {
  const num = getClassNumber(classSlug);
  if (!num) return null;
  const classData = NCERT_REGISTRY.find(c => c.className === `Class ${num}`);
  if (!classData) return null;

  const matchingBooks = classData.books.filter(b => getSubjectSlug(b.subjectName) === subjectSlug);
  if (matchingBooks.length === 0) return null;

  return {
    className: classData.className,
    classNum: num,
    subjectName: matchingBooks[0].subjectName,
    books: matchingBooks
  };
}

// Static params generation
export async function generateStaticParams() {
  const params: { classSlug: string; subjectSlug: string }[] = [];
  NCERT_REGISTRY.forEach((c) => {
    const classNum = c.className.replace(/[^\d]/g, '');
    const classSlug = `class-${classNum}`;
    
    // Get unique subjects
    const subjects = Array.from(new Set(c.books.map(b => b.subjectName)));
    subjects.forEach((subject) => {
      const subjectSlug = getSubjectSlug(subject);
      params.push({ classSlug, subjectSlug });
    });
  });
  return params;
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug } = await params;
  const data = getSubjectData(classSlug, subjectSlug);
  if (!data) return { title: `NCERT Books | ${INSTITUTE.name}` };

  return {
    title: `NCERT Book Class ${data.classNum} ${data.subjectName} PDF Download (Chapter-wise) | ${INSTITUTE.name}`,
    description: `Download chapter-wise official NCERT textbooks in PDF format for Class ${data.classNum} ${data.subjectName}. Direct, high-speed official downloads for rationalized syllabus.`,
    keywords: [`Class ${data.classNum} ${data.subjectName} NCERT`, `Class ${data.classNum} ${data.subjectName} Book PDF`, `Download NCERT Class ${data.classNum} ${data.subjectName}`, `LakshyaMarch NCERT`],
    alternates: { canonical: `/study-material/ncert/${classSlug}/${subjectSlug}` },
  };
}

export default async function NcertSubjectPage({ params }: Props) {
  const { classSlug, subjectSlug } = await params;
  const data = getSubjectData(classSlug, subjectSlug);
  if (!data) notFound();

  const classNumInt = parseInt(data.classNum, 10);
  const isSeniorClass = classNumInt >= 11;
  const totalChapters = data.books.reduce((acc, b) => acc + b.chapterCount, 0);

  // Subject and class specific copy helper
  const getSubjectTips = () => {
    const sub = data.subjectName.toLowerCase();
    if (sub.includes('math')) {
      return "Focus on solving the solved examples before attempting exercises. Practice daily and make a separate formula sheet for quick revision.";
    } else if (sub.includes('physics')) {
      return "Understand the physical derivation first. Practice concept application using NCERT exercises, and then solve past JEE/NEET questions.";
    } else if (sub.includes('chemistry')) {
      return "For Inorganic Chemistry, memorize every reaction and exception written in NCERT. For Organic, practice mechanism charts. For Physical, solve numerical exercise questions.";
    } else if (sub.includes('biology')) {
      return "Read every single line, diagram caption, and table in NCERT Biology. Almost the entire NEET paper is based directly on these details.";
    } else if (sub.includes('science')) {
      return "Solve the in-text questions and draw neat diagrams. Make bullet points of definitions and laws to write perfect Board answers.";
    }
    return "Read the chapters thoroughly and practice writing comprehensive summary answers to improve Board scores.";
  };

  // Dynamic FAQs
  const subjectFaqs = [
    {
      q: `How many chapters are there in Class ${data.classNum} ${data.subjectName} NCERT Book?`,
      a: `There are a total of ${totalChapters} chapters across ${data.books.length} book(s) representing Class ${data.classNum} ${data.subjectName}: ${data.books.map(b => b.bookName).join(', ')}.`
    },
    {
      q: `Are these PDF files updated with deleted topics removed?`,
      a: "Yes. All chapters linked here belong to the latest rationalized syllabus issued by NCERT. Content that has been officially deleted or simplified is not present."
    },
    {
      q: `How can I download the complete book instead of single chapters?`,
      a: "You can download the chapters individually which is highly recommended for faster load times. If you need the full consolidated book, you can open any chapter PDF and save the complete official textbook via the navigation options on the NCERT website."
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
              <Badge tone="onDark" icon={BookOpen}>Class {data.classNum} · {data.subjectName}</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
                Class {data.classNum} {data.subjectName} NCERT Book
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-white/70">
                Download latest rationalized chapter-wise PDFs for Class {data.classNum} {data.subjectName}. Directly linked to official servers.
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
            <Link href={`/study-material/ncert/${classSlug}`} className="hover:text-brand-red-600 transition-colors">Class {data.classNum}</Link>
            <ChevronRight size={10} />
            <span className="text-ink-800 font-medium">{data.subjectName}</span>
          </div>
        </div>

        {/* Tables Section */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900">
                  Chapter-wise PDF Download
                </h2>
                <span className="text-xs font-bold font-sans uppercase tracking-widest text-ink-400">
                  {totalChapters} Chapters Total
                </span>
              </div>
            </Reveal>

            {data.books.map((book, bookIdx) => (
              <Reveal key={bookIdx} delay={bookIdx * 0.1}>
                <NcertChapterTable 
                  bookName={book.bookName} 
                  chapters={book.chapters} 
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Study tips & Guidelines */}
        <section className="py-20 bg-white border-t border-b border-ink-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 font-sans text-ink-600 space-y-8">
            <Reveal>
              <h2 className="text-3xl font-display font-extrabold text-ink-900 flex items-center gap-3">
                <Lightbulb className="text-brand-red-600 shrink-0" size={28} />
                How to Study Class {data.classNum} {data.subjectName} effectively
              </h2>
            </Reveal>

            <div className="prose prose-ink max-w-none text-[15px] leading-relaxed space-y-6">
              <p>
                Class {data.classNum} {data.subjectName} concepts form the basis for several board examinations and entrance tests. To ensure you score high, it is critical to master the official NCERT syllabus.
              </p>
              
              <div className="border-l-4 border-brand-red-500 pl-6 py-2 bg-ink-50 rounded-r-2xl my-6">
                <h4 className="font-display font-bold text-ink-900 mb-1">Key Preparation Strategy:</h4>
                <p className="text-sm text-ink-700 font-medium">
                  {getSubjectTips()}
                </p>
              </div>

              <p>
                At LakshyaMarch Education, our structured curriculum aligns classroom assignments directly with these NCERT chapters. We provide detailed explanations, step-by-step NCERT exercise solutions, and doubt-solving sessions to make sure that no student is left behind in their preparation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={subjectFaqs} accent="red" />

        {/* Navigation back buttons */}
        <div className="py-8 text-center bg-white border-t border-ink-200">
          <Link href={`/study-material/ncert/${classSlug}`} className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-red-600 hover:text-brand-red-700 transition-colors">
            <ArrowLeft size={15} /> Back to Class {data.classNum}
          </Link>
        </div>

        {/* CTA Section */}
        <CTASection
          title={`Want to Master Class ${data.classNum} ${data.subjectName}?`}
          accentWord={`Master Class ${data.classNum}`}
          lead={`Join LakshyaMarch classroom coaching and learn under expert mentors in Begusarai. We offer structured batches, detailed mock test series, and dedicated study libraries.`}
          actions={[
            { label: "Book a Demo Class", href: "/admission", variant: "primary", withArrow: true },
            { label: "Talk to Academic Counsellor", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
          ]}
        />
      </main>

      <PublicFooter />
    </div>
  );
}
