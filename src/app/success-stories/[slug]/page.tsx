import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUCCESS_STORIES } from "@/lib/stories";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Calendar, User, ArrowLeft, Share2, BookOpen, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Dynamic SEO (Rank Math Style)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = SUCCESS_STORIES.find((s) => s.slug === slug);

  if (!story) return { title: "Story Not Found" };

  return {
    title: story.seo.title,
    description: story.seo.description,
    keywords: [story.seo.focusKeyword, story.category, "Success Story", "LakshyaMarch"],
    openGraph: {
      title: story.seo.title,
      description: story.seo.description,
      type: "article",
      images: [story.image || "/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: story.seo.title,
      description: story.seo.description,
    },
  };
}

export default async function SuccessStoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = SUCCESS_STORIES.find((s) => s.slug === slug);

  if (!story) notFound();

  // JSON-LD Schema for Rank Math SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": story.title,
    "description": story.seo.description,
    "image": story.image || "/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": story.author,
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "LakshyaMarch",
      "url": "https://lakshyamarch.com",
    },
  };

  return (
    <div className="min-h-screen bg-ink-50 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PublicNavbar />

      {/* Institutional masthead band */}
      <div className="relative h-32 overflow-hidden bg-ink-950">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-red-600 via-brand-gold-400 to-brand-red-600" />
        <div className="surface-exam-sheet-dark absolute inset-0 opacity-[0.06]" />
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Main Content Area (Column 8/12) */}
          <article className="lg:col-span-8 bg-white rounded-lg shadow-brand-sm border border-ink-200 overflow-hidden">
            
            {/* Breadcrumbs */}
            <div className="px-8 pt-8 pb-4">
              <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-ink-400">
                <Link href="/" className="hover:text-brand-blue-700 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/results" className="hover:text-brand-blue-700 transition-colors">Results</Link>
                <span>/</span>
                <span className="text-ink-900">{story.category} Success</span>
              </nav>
            </div>

            {/* Title & Meta */}
            <div className="px-8 pb-10">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-tight leading-[1.1] mb-6">
                {story.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-brand-blue-50 flex items-center justify-center text-brand-blue-700">
                    <User size={14} />
                  </div>
                  <span>{story.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-ink-400" />
                  <span>{new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border-l-2 border-brand-gold-500 bg-brand-gold-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-700">
                    {story.category} Topper
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full bg-ink-100 flex items-center justify-center">
              {story.image ? (
                <Image 
                  src={story.image} 
                  alt={story.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <Trophy size={80} className="text-ink-300 opacity-50" />
              )}
            </div>

            {/* Article Content (Premium Typography) */}
            <div className="px-8 py-12 sm:px-12 prose prose-slate prose-lg max-w-none">
              <div 
                className="text-ink-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: story.content }} 
              />
            </div>

            {/* Footer of Article */}
            <div className="px-8 py-8 border-t border-ink-100 flex items-center justify-between">
              <Link href="/results" className="flex items-center gap-2 text-sm font-bold text-brand-blue-700 hover:gap-4 transition-all">
                <ArrowLeft size={16} /> Back to Results
              </Link>
              <button className="flex items-center gap-2 text-sm font-bold text-ink-400 hover:text-ink-900 transition-colors">
                <Share2 size={16} /> Share Story
              </button>
            </div>
          </article>

          {/* RIGHT: Sidebar (Column 4/12) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* 1. Admission CTA Box */}
            <div className="relative overflow-hidden rounded-lg bg-brand-red-600 p-8 text-white shadow-brand-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold-400" />
              <h3 className="text-2xl font-extrabold tracking-tight mb-4">Start Your Own Success Story</h3>
              <p className="text-white/85 text-sm mb-8 leading-relaxed">
                Join LakshyaMarch and get elite mentorship in your hometown Begusarai. Admissions open for 2026-28.
              </p>
              <Link 
                href="/contact" 
                className="block w-full text-center bg-white text-brand-red-700 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-brand-gold-50 transition-colors"
              >
                Apply for Admission
              </Link>
            </div>

            {/* 2. Quick Links / Popular Stats */}
            <div className="bg-white rounded-lg p-8 border border-ink-200 shadow-brand-sm">
              <h4 className="text-sm font-bold text-ink-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-brand-blue-700" /> Quick Highlights
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-md bg-brand-green-50 text-brand-green-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-ink-900">AIR-499 NEET</h5>
                    <p className="text-xs text-ink-500 font-medium">Best medical rank in city</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-md bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-ink-900">99.35% JEE</h5>
                    <p className="text-xs text-ink-500 font-medium">Physics & Math excellence</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 3. Social Follow */}
            <div className="bg-ink-900 rounded-lg p-8 text-white">
              <h4 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Follow Daily Updates</h4>
              <p className="text-xs text-white/70 mb-6 leading-relaxed font-medium">
                Get preparation tips, exam news and updates on your phone.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="h-10 w-10 rounded-md bg-ink-800 flex items-center justify-center hover:bg-ink-700 transition-all text-white font-bold text-lg">f</Link>
                <Link href="#" className="h-10 w-10 rounded-md bg-ink-800 flex items-center justify-center hover:bg-ink-700 transition-all text-white font-bold text-lg">y</Link>
                <Link href="#" className="h-10 w-10 rounded-md bg-ink-800 flex items-center justify-center hover:bg-ink-700 transition-all text-white font-bold text-lg">in</Link>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

// 3. SEO Pre-rendering
export async function generateStaticParams() {
  return SUCCESS_STORIES.map((story) => ({
    slug: story.slug,
  }));
}
