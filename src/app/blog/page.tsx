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
      <section className="bg-slate-900 py-12 sm:py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full mb-5">
              <BookOpen size={12} className="text-blue-400" />
              <span className="text-[10px] font-extrabold text-blue-300 uppercase tracking-[0.2em]">
                LakshyaMarch Blog
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              JEE & NEET <span className="text-amber-400">Study Resources</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Expert articles, Topper strategies, study plans and career guidance by IIT/NIT alumni faculty.
            </p>
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`}
            className="block bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all group">
            <div className="grid lg:grid-cols-2">
              <div className={`bg-gradient-to-br ${heroGradients[featured.category]} p-10 sm:p-14 flex flex-col justify-center min-h-[200px]`}>
                <span className="inline-block px-3 py-1 bg-white/15 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4 w-fit">
                  ⭐ Featured Article
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-amber-200 transition-colors">
                  {featured.title}
                </h2>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                  <span className="flex items-center gap-1.5"><User size={12} /> {featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {featured.date}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read Full Article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ ALL POSTS ═══ */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-blue-600" /> All Articles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col">
                {/* Color Header */}
                <div className={`h-3 bg-gradient-to-r ${heroGradients[post.category]}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full border ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                        {post.author.charAt(0)}
                      </div>
                      {post.author}
                    </div>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-slate-900 text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
            Want Personalized Guidance?
          </h2>
          <p className="text-slate-400 mb-8">
            Our IIT/NIT alumni faculty can mentor you 1-on-1. Join LakshyaMarch for the complete JEE/NEET experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admission" className="h-12 px-8 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-all">
              Apply Now <ArrowRight size={15} />
            </Link>
            <Link href="/programs" className="h-12 px-8 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
              View Programs <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
