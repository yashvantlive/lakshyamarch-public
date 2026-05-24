import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { BLOG_POSTS } from "@/lib/blogData";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  ArrowLeft, ArrowRight, Clock, User, CalendarDays,
  BookOpen, MessageCircle, Share2, ChevronRight
} from "lucide-react";

// Generate static pages for all blog posts
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | LakshyaMarch" };

  return {
    title: `${post.title} | LakshyaMarch Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lakshyamarch.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

/** Convert basic markdown (bold, italic) to HTML */
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">$1</code>');
}

const categoryColors: Record<string, string> = {
  JEE: "bg-blue-100 text-blue-700 border-blue-200",
  NEET: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Foundation: "bg-purple-100 text-purple-700 border-purple-200",
  Board: "bg-cyan-100 text-cyan-700 border-cyan-200",
  General: "bg-slate-100 text-slate-700 border-slate-200",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find related posts (same category, not self)
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  // Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: INSTITUTE.name,
      url: "https://lakshyamarch.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lakshyamarch.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PublicNavbar />
      <div className="h-16" />

      {/* ═══ HERO ═══ */}
      <section
        className={`bg-gradient-to-br ${post.heroColor} py-16 sm:py-24 px-5 relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <ChevronRight size={10} />
            <span className="text-white/70">{post.category}</span>
          </nav>

          <span className={`inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full border mb-6 ${categoryColors[post.category]}`}>
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-blue-100/70 text-lg max-w-3xl leading-relaxed mb-8">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="text-white font-bold block text-sm leading-none">{post.author}</span>
                <span className="text-[10px] text-white/40">{post.authorRole}</span>
              </div>
            </span>
            <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <article className="py-12 sm:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-10">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 leading-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="text-slate-600 leading-[1.85] text-[15px] space-y-4">
                    {section.body.split("\n\n").map((para, pi) => (
                      <p key={pi} className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(para) }}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Share CTA */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Share this article</p>
                <div className="flex gap-3">
                  <a href={whatsappLink(`Check out this article: ${post.title} — https://lakshyamarch.com/blog/${post.slug}`)}
                    target="_blank" rel="noopener noreferrer"
                    className="h-10 px-5 inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-500 transition-all">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6 sticky top-24">
              {/* Author Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Written by</p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm">{post.author}</p>
                    <p className="text-[10px] text-slate-500">{post.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <p className="font-extrabold text-lg mb-2">Join LakshyaMarch</p>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Get coached by the same faculty who write these articles. Admission open for 2026-27.
                </p>
                <Link href="/admission"
                  className="h-10 px-5 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg text-sm transition-all w-full justify-center">
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tags */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((kw) => (
                    <span key={kw} className="px-2.5 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-500 rounded-lg">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* ═══ RELATED POSTS ═══ */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <BookOpen size={20} className="text-blue-600" /> Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all group">
                  <span className={`inline-block px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full border mb-3 ${categoryColors[rp.category]}`}>
                    {rp.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{rp.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={11} /> {rp.readTime} • {rp.author}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ BACK ═══ */}
      <div className="py-8 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowLeft size={15} /> Back to All Articles
        </Link>
      </div>

      <PublicFooter />
    </div>
  );
}
