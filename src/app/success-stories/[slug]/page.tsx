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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PublicNavbar />
      
      {/* 2. PREMIUM HEADER (Blog Style) */}
      <div className="h-32 bg-[#0A0F2C]" />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Main Content Area (Column 8/12) */}
          <article className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Breadcrumbs */}
            <div className="px-8 pt-8 pb-4">
              <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/results" className="hover:text-blue-600 transition-colors">Results</Link>
                <span>/</span>
                <span className="text-slate-900">{story.category} Success</span>
              </nav>
            </div>

            {/* Title & Meta */}
            <div className="px-8 pb-10">
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                {story.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <User size={14} />
                  </div>
                  <span>{story.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-slate-400" />
                  <span>{new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-wider border border-amber-100">
                    {story.category} Topper
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center">
              {story.image ? (
                <Image 
                  src={story.image} 
                  alt={story.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <Trophy size={80} className="text-slate-300 opacity-50" />
              )}
            </div>

            {/* Article Content (Premium Typography) */}
            <div className="px-8 py-12 sm:px-12 prose prose-slate prose-lg max-w-none">
              <div 
                className="text-slate-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: story.content }} 
              />
            </div>

            {/* Footer of Article */}
            <div className="px-8 py-8 border-t border-slate-50 flex items-center justify-between">
              <Link href="/results" className="flex items-center gap-2 text-sm font-black text-blue-600 hover:gap-4 transition-all">
                <ArrowLeft size={16} /> Back to Results
              </Link>
              <button className="flex items-center gap-2 text-sm font-black text-slate-400 hover:text-slate-900 transition-colors">
                <Share2 size={16} /> Share Story
              </button>
            </div>
          </article>

          {/* RIGHT: Sidebar (Column 4/12) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* 1. Admission CTA Box */}
            <div className="bg-[#FF6B00] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-orange-500/20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-black tracking-tight mb-4 relative z-10">Start Your Own Success Story</h3>
              <p className="text-orange-100 text-sm mb-8 leading-relaxed opacity-90 relative z-10">
                Join LakshyaMarch and get elite mentorship in your hometown Begusarai. Admissions open for 2026-28.
              </p>
              <Link 
                href="/contact" 
                className="block w-full text-center bg-white text-[#FF6B00] py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-50 transition-colors relative z-10"
              >
                Apply for Admission
              </Link>
            </div>

            {/* 2. Quick Links / Popular Stats */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full" /> Quick Highlights
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900">AIR-499 NEET</h5>
                    <p className="text-xs text-slate-500 font-medium">Best medical rank in city</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900">99.35% JEE</h5>
                    <p className="text-xs text-slate-500 font-medium">Physics & Math excellence</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 3. Social Follow */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Follow Daily Updates</h4>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed opacity-70 font-medium">
                Get preparation tips, exam news and updates on your phone.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white font-black text-lg">f</Link>
                <Link href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white font-black text-lg">y</Link>
                <Link href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white font-black text-lg">in</Link>
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
