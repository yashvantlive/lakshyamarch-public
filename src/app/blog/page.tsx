import type { Metadata } from "next";
import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { BLOG_POSTS } from "@/lib/blogData";
import { ArrowRight, Clock, User, BookOpen, CalendarDays } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — JEE, NEET Tips & Study Strategies | LakshyaMarch Begusarai",
  description:
    "Expert articles on IIT-JEE preparation, NEET strategies, study plans, board exam tips, and career guidance by LakshyaMarch faculty. Free study resources for Begusarai students.",
  keywords: [
    "JEE preparation blog", "NEET study tips", "coaching blog Begusarai",
    "IIT JEE strategy articles", "LakshyaMarch blog", "education blog Bihar",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | LakshyaMarch Education Begusarai",
    description: "Expert JEE, NEET tips and study strategies from IIT/NIT alumni faculty.",
    url: "https://lakshyamarch.com/blog",
    type: "website",
  },
};

const blogFaqs = [
  { q: "Does LakshyaMarch have a blog?", a: "Yes, LakshyaMarch publishes expert articles on JEE preparation, NEET strategies, study plans, board exam tips, and career guidance. All articles are written by our IIT/NIT alumni faculty." },
  { q: "Are LakshyaMarch blog articles free?", a: "Yes, all articles are free to read. We believe quality educational content should be accessible to every student, especially those in Begusarai and Bihar." },
];

const catTone: Record<string, "blue" | "green" | "red" | "gold" | "neutral"> = {
  JEE: "blue", NEET: "green", Foundation: "gold", Board: "red", General: "neutral",
};

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <FaqSchema faqs={blogFaqs} />
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[64vh]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={BookOpen}>LakshyaMarch Blog</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              JEE & NEET <span className="text-brand-gold-400">Study Resources</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Expert articles, topper strategies, study plans, and career guidance by IIT/NIT alumni faculty.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20 lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center gap-4 bg-gradient-to-br from-brand-blue-800 to-ink-900 p-10 sm:p-12">
              <Badge tone="onDark">Featured Article</Badge>
              <h2 className="font-display text-2xl font-extrabold leading-tight text-white transition-colors group-hover:text-brand-gold-300 sm:text-3xl">
                {featured.title}
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
              <p className="font-sans text-sm leading-relaxed text-white/70">{featured.description}</p>
              <div className="flex flex-wrap items-center gap-4 font-sans text-xs text-white/50">
                <span className="flex items-center gap-1.5"><User size={12} strokeWidth={1.75} /> {featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} strokeWidth={1.75} /> {featured.readTime}</span>
                <span className="flex items-center gap-1.5"><CalendarDays size={12} strokeWidth={1.75} /> {featured.date}</span>
              </div>
              <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-gold-400">
                Read Full Article <ArrowRight size={15} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </HeroSection>

      <main className="flex-1">
        <section className={layout.section}>
          <div className={layout.container}>
            <SectionHeader align="left" eyebrow="All Articles" title="Latest from the Desk" accentWord="Desk" accent="blue" className="mb-12" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-white shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg"
                  >
                    <div className="h-1.5 w-full bg-brand-red-600" />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <Badge tone={catTone[post.category]}>{post.category}</Badge>
                        <span className="flex items-center gap-1 font-sans text-[0.625rem] font-semibold text-ink-400">
                          <Clock size={10} strokeWidth={2} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-red-600 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-500 line-clamp-3">{post.description}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                        <span className="flex items-center gap-2 font-sans text-xs text-ink-500">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-800 font-display text-[9px] font-bold text-white">
                            {post.author.charAt(0)}
                          </span>
                          {post.author}
                        </span>
                        <span className="font-sans text-xs text-ink-400">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Want Personalized Guidance?"
        accentWord="Guidance?"
        lead="Our IIT/NIT alumni faculty can mentor you 1-on-1. Join LakshyaMarch for the complete JEE/NEET experience."
        actions={[
          { label: "Apply Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "View Programs", href: "/programs", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
