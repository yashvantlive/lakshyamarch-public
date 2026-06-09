import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { erpApiPath } from "@/lib/erpApi";

async function getBlogs() {
  try {
    const res = await fetch(erpApiPath("/api/public/blogs"), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (e) { return []; }
}

async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(erpApiPath(`/api/public/blogs/${slug}`), { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (e) { return null; }
}
import { whatsappLink } from "@/lib/siteData";
import ArticleSchema from "@/components/seo/ArticleSchema";
import {
  ArrowLeft, ArrowRight, Clock, CalendarDays, BookOpen, MessageCircle, ChevronRight,
} from "lucide-react";
import { Badge, Button } from "@/components/brand";
import { ExamSheetTexture, StaircaseEmblem } from "@/design-system/patterns";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const BLOG_POSTS = await getBlogs();
  return BLOG_POSTS.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const BLOG_POSTS = await getBlogs();
  const { slug } = await params;
  const post = BLOG_POSTS.find((p: any) => p.slug === slug);
  if (!post) return { title: "Blog | LakshyaMarch" };
  return {
    title: `${post.title} | LakshyaMarch Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title, description: post.description,
      url: `https://lakshyamarch.com/blog/${post.slug}`, type: "article",
      publishedTime: post.date, authors: [post.author],
    },
  };
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-ink-900">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-sm text-brand-blue-700">$1</code>');
}

const catTone: Record<string, "blue" | "green" | "red" | "gold" | "neutral"> = {
  JEE: "blue", NEET: "green", Foundation: "gold", Board: "red", General: "neutral",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const BLOG_POSTS = await getBlogs();
  const { slug } = await params;
  const post = BLOG_POSTS.find((p: any) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p: any) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ArticleSchema title={post.title} description={post.description} url={`https://lakshyamarch.com/blog/${post.slug}`} datePublished={post.date} authorName={post.author} />
      <PublicNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-gold-400 to-brand-blue-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <ExamSheetTexture dark opacity={6} />
        <StaircaseEmblem className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 text-brand-blue-400/12" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          <nav className="mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={11} />
            <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            <ChevronRight size={11} />
            <span className="text-white/70">{post.category}</span>
          </nav>
          <Badge tone="onDark">{post.category}</Badge>
          <h1 className="mt-6 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-white/70">{post.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5 font-sans text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-display text-xs font-bold text-white">
                {post.author.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold leading-none text-white">{post.author}</span>
                <span className="text-[0.625rem] text-white/40">{post.authorRole}</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5"><CalendarDays size={14} strokeWidth={1.75} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} strokeWidth={1.75} /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-5 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">
              {post.content.map((section: any, i: number) => (
                <div key={i}>
                  {section.heading && <h2 className="mb-4 font-display text-2xl font-bold leading-tight text-ink-900">{section.heading}</h2>}
                  <div className="space-y-4 font-sans text-[15px] leading-[1.85] text-ink-600">
                    {section.body.split("\n\n").map((para: string, pi: number) => (
                      <p key={pi} className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: renderMarkdown(para) }} />
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-ink-200 pt-8">
                <p className="mb-4 font-sans text-[0.6875rem] font-bold uppercase tracking-widest text-ink-400">Share this article</p>
                <Button href={whatsappLink(`Check out this article: ${post.title} — https://lakshyamarch.com/blog/${post.slug}`)} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={15} strokeWidth={1.75} /> Share on WhatsApp
                </Button>
              </div>
            </div>

            <aside className="hidden space-y-6 lg:sticky lg:top-28 lg:block">
              <div className="rounded-lg border border-ink-200 bg-ink-50 p-5">
                <p className="mb-3 font-sans text-[0.6875rem] font-bold uppercase tracking-widest text-ink-400">Written by</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-800 font-display text-lg font-extrabold text-white">
                    {post.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">{post.author}</p>
                    <p className="font-sans text-[0.625rem] text-ink-500">{post.authorRole}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-ink-950 p-6 text-white">
                <p className="font-display text-lg font-bold">Join LakshyaMarch</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/65">
                  Get coached by the same faculty who write these articles. Admission open for 2026–27.
                </p>
                <Button href="/admission" variant="gold" size="sm" withArrow className="mt-5 w-full">Apply Now</Button>
              </div>

              <div className="rounded-lg border border-ink-200 bg-ink-50 p-5">
                <p className="mb-3 font-sans text-[0.6875rem] font-bold uppercase tracking-widest text-ink-400">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((kw: string) => (
                    <span key={kw} className="rounded-lg border border-ink-200 bg-white px-2.5 py-1 font-sans text-[0.625rem] font-semibold text-ink-500">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-ink-200 bg-ink-50 px-5 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 flex items-center gap-3 font-display text-2xl font-extrabold text-ink-900">
              <BookOpen size={22} strokeWidth={1.75} className="text-brand-blue-700" /> Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp: any) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group rounded-lg border border-ink-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                  <Badge tone={catTone[rp.category]} className="mb-3">{rp.category}</Badge>
                  <h3 className="font-display text-base font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-red-600 line-clamp-2">{rp.title}</h3>
                  <p className="mt-2 font-sans text-sm text-ink-500 line-clamp-2">{rp.description}</p>
                  <div className="mt-4 flex items-center gap-2 font-sans text-xs text-ink-400">
                    <Clock size={11} strokeWidth={2} /> {rp.readTime} · {rp.author}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-8 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-blue-700 transition-colors hover:text-brand-blue-800">
          <ArrowLeft size={15} strokeWidth={1.75} /> Back to All Articles
        </Link>
      </div>

      <PublicFooter />
    </div>
  );
}
