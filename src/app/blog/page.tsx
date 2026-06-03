import type { Metadata } from "next";
import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { BLOG_POSTS } from "@/lib/blogData";
import {
  ArrowRight, Clock, User, Star, BookOpen,
  ChevronRight, CalendarDays
} from "lucide-react";
import { BlackCard, GlassCard, AnimatedSection, GlowButton, SectionBadge, UnifiedContainer } from "@/components/public/ui";

export const metadata: Metadata = {
  title: "Blog — JEE, NEET Tips & Study Strategies | LakshyaMarch Begusarai",
  description:
    "Expert articles on IIT-JEE preparation, NEET strategies, study plans, board exam tips, and career guidance by LakshyaMarch faculty. Free study resources for Begusarai students.",
  keywords: [
    "JEE preparation blog",
    "NEET study tips",
    "coaching blog Begusarai",
    "IIT JEE strategy articles",
    "LakshyaMarch blog",
    "education blog Bihar",
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
  { q: "Are LakshyaMarch blog articles free?", a: "Yes, all articles are free to read. We believe quality educational content should be accessible to every student, especially those in Begusarai and Bihar who may not have access to national-level coaching resources." },
];

const categoryColors: Record<string, string> = {
  JEE: "bg-blue-100 text-blue-700 border-blue-200",
  NEET: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Foundation: "bg-purple-100 text-purple-700 border-purple-200",
  Board: "bg-cyan-100 text-cyan-700 border-cyan-200",
  General: "bg-slate-100 text-slate-700 border-slate-200",
};

const heroGradients: Record<string, string> = {
  JEE: "from-blue-600 to-indigo-700",
  NEET: "from-emerald-600 to-teal-700",
  Foundation: "from-violet-600 to-purple-700",
  Board: "from-cyan-600 to-blue-700",
  General: "from-slate-700 to-slate-800",
};

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <FaqSchema faqs={blogFaqs} />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <BlackCard glowColor="blue" className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="text-center mb-12 relative z-10">
            <SectionBadge color="blue" className="bg-blue-500/10 border-blue-400/20 text-blue-300 mb-5">
              <BookOpen size={12} className="text-blue-400 mr-2" />
              LakshyaMarch Blog
            </SectionBadge>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              JEE & NEET <span className="text-amber-400">Study Resources</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Expert articles, Topper strategies, study plans and career guidance by IIT/NIT alumni faculty.
            </p>
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`}
            className="block relative z-10 bg-slate-900/60 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
            <div className="grid lg:grid-cols-2">
              <div className={`bg-gradient-to-br ${heroGradients[featured.category]} p-10 sm:p-14 flex flex-col justify-center min-h-[200px]`}>
                <span className="inline-block px-3 py-1 bg-white/15 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4 w-fit">
                  ⭐ Featured Article
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-amber-200 transition-colors">
                  {featured.title}
                </h2>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center backdrop-blur-sm">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{featured.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={12} /> {featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {featured.date}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-widest">
                  Read Full Article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </BlackCard>
      </div>

      {/* ═══ ALL POSTS ═══ */}
      <AnimatedSection className="py-16 sm:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-blue-600" /> All Articles
          </h2>

          <UnifiedContainer className="p-2 sm:p-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group h-full">
                  <GlassCard className="overflow-hidden hover:border-blue-300 p-0 flex flex-col h-full cursor-pointer">
                    {/* Color Header */}
                    <div className={`h-3 bg-gradient-to-r ${heroGradients[post.category]} w-full`} />
                    <div className="p-6 flex flex-col flex-1 h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full border ${categoryColors[post.category]}`}>
                          {post.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 uppercase tracking-widest">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                          <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-[9px] font-black">
                            {post.author.charAt(0)}
                          </div>
                          {post.author}
                        </div>
                        <span className="text-xs font-bold text-slate-400">{post.date}</span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </UnifiedContainer>
        </div>
      </AnimatedSection>

      {/* ═══ CTA ═══ */}
      <AnimatedSection className="py-16 bg-slate-900 text-center px-5 border-t-4 border-blue-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Want Personalized Guidance?
          </h2>
          <p className="text-slate-400 mb-8">
            Our IIT/NIT alumni faculty can mentor you 1-on-1. Join LakshyaMarch for the complete JEE/NEET experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GlowButton variant="amber" asChild>
              <Link href="/admission" className="px-8 py-4 uppercase tracking-widest">
                Apply Now <ArrowRight size={15} className="ml-2" />
              </Link>
            </GlowButton>
            <GlowButton variant="blue" asChild>
              <Link href="/programs" className="px-8 py-4 bg-transparent border-2 border-slate-700 text-white hover:border-blue-400 uppercase tracking-widest">
                View Programs <ChevronRight size={15} className="ml-2" />
              </Link>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>

      <PublicFooter />
    </div>
  );
}
