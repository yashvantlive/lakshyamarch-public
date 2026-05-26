import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { ExternalLink, Activity } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import Script from "next/script";
import { Suspense } from "react";
import SocialCard, { SocialCardSkeleton } from "@/components/public/SocialCard";
import { getNormalizedFeed } from "@/lib/socialService";
import { getLatestYouTubeVideos, timeAgo } from "@/lib/youtubeService";

export const revalidate = 3600; // Cache the whole page optionally, but Suspense handles the rest

export const metadata: Metadata = {
  title: "Social Media Wall | LakshyaMarch Education | Begusarai",
  description: "Stay connected with LakshyaMarch Education on Facebook, YouTube, Instagram, and X. Access free study material, daily IIT-JEE & NEET updates, and topper strategies in Begusarai.",
  keywords: ["LakshyaMarch social media", "NEET coaching Begusarai updates", "IIT JEE study material YouTube", "Begusarai coaching Instagram", "LakshyaMarch Facebook", "educational updates Bihar"],
  alternates: { canonical: "/social" },
};

export default function SocialWallPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      
      {/* Spacer */}
      <div className="h-20 sm:h-24 bg-slate-900 border-b border-white/10" />
      
      {/* JSON-LD Schema for SEO */}
      <Script id="social-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LakshyaMarch Education",
          "url": "https://lakshyamarch.com",
          "logo": "https://lakshyamarch.com/images/logo.png",
          "sameAs": [
            "https://www.facebook.com/lakshyamarch",
            "https://www.instagram.com/lakshyamarch",
            "https://www.youtube.com/@lakshyamarch",
            "https://x.com/LakshyaMarch"
          ]
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[hsl(224,71%,18%)] to-slate-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-400/30 rounded-full mb-6">
            <Activity size={14} className="text-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-amber-200 tracking-widest uppercase">
              Live Campus Updates
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            LakshyaMarch <span className="text-amber-400">Social Wall</span>
          </h1>
          <p className="text-blue-100/75 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to the digital community of Begusarai's leading coaching institute for IIT-JEE and NEET. Follow our social feeds for real-time announcements, free educational videos, daily quizzes, and motivation from our expert faculty.
          </p>
        </div>
      </section>
      
      {/* SEO Introductory Content */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">Connect With Our Ecosystem</h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-sm leading-relaxed">
            Preparing for highly competitive exams like <strong className="text-slate-800">JEE Advanced</strong> and <strong className="text-slate-800">NEET (UG)</strong> requires constant motivation and the right resources. Through the LakshyaMarch social media ecosystem, we bring the classroom experience directly to your screens. From rapid problem-solving tricks on Instagram, detailed topic breakdowns on YouTube, to campus life updates on Facebook and X (Twitter), we ensure our students in Begusarai and across Bihar stay informed and inspired every single day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* ═══ COLUMN 1: YOUTUBE & FACEBOOK ═══ */}
            <div className="flex flex-col gap-6">
              
              {/* YOUTUBE */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0000]" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                      <FaYoutube size={20} />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900">Latest Videos</h2>
                      <p className="text-xs text-slate-500">@lakshyamarch</p>
                    </div>
                  </div>
                  <a href="https://youtube.com/@lakshyamarch" target="_blank" rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-[#FF0000] transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                {/* Official YouTube Embed Player for the very latest video */}
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm border border-slate-200 relative">
                  <Suspense fallback={<div className="absolute inset-0 bg-slate-200 animate-pulse" />}>
                    <YouTubeMainPlayer />
                  </Suspense>
                </div>
                
                {/* FAANG-Level YouTube Scrollable Feed via API */}
                <div className="flex-1 w-full relative">
                  <Suspense fallback={
                    <div className="p-1 space-y-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="h-24 bg-slate-200 animate-pulse rounded-xl w-full" />
                      ))}
                    </div>
                  }>
                    <YouTubeFeedFetcher />
                  </Suspense>
                </div>
                
                <a href="https://youtube.com/@lakshyamarch" target="_blank" rel="noopener noreferrer"
                  className="w-full mt-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm text-center transition-colors border border-slate-200">
                  Open in YouTube
                </a>
              </div>

              {/* FACEBOOK */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm h-[600px] flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1877F2]" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                      <FaFacebook size={20} />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900">Facebook Timeline</h2>
                      <p className="text-xs text-slate-500">@lakshyamarch</p>
                    </div>
                  </div>
                  <a href="https://facebook.com/lakshyamarch" target="_blank" rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#1877F2] transition-colors">
                  <ExternalLink size={18} />
                </a>
                </div>
                
                {/* Official Facebook Page Plugin */}
                <div className="flex-1 rounded-xl overflow-hidden bg-slate-50 relative w-full h-full">
                  <iframe 
                    src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flakshyamarch&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none', overflow: 'hidden', minHeight: '500px' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="LakshyaMarch Facebook Feed"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* ═══ COLUMN 2: INSTAGRAM ═══ */}
            <div className="flex flex-col gap-6">
              
              {/* INSTAGRAM (Fallback card as IG blocks iframe) */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex-1 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-[#dc2743]">
                      <FaInstagram size={20} />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900">Instagram</h2>
                      <p className="text-xs text-slate-500">@lakshyamarch</p>
                    </div>
                  </div>
                  <a href="https://instagram.com/lakshyamarch" target="_blank" rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-[#dc2743] transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                {/* Official Instagram Embed (Scrollable Alternative) */}
                <div className="flex-1 w-full h-full">
                  <Suspense fallback={
                    <div className="space-y-6 p-1">
                      <SocialCardSkeleton />
                      <SocialCardSkeleton />
                      <SocialCardSkeleton />
                    </div>
                  }>
                    <InstagramFeedFetcher />
                  </Suspense>
                </div>
              </div>

            </div>

            {/* ═══ COLUMN 3: X (TWITTER) ═══ */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex-1 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-black" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-black">
                      <FaXTwitter size={20} />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900">X Updates</h2>
                      <p className="text-xs text-slate-500">@LakshyaMarch</p>
                    </div>
                  </div>
                  <a href="https://x.com/LakshyaMarch" target="_blank" rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-black transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                {/* Hybrid approach: X via Normalized Feed API */}
                <div className="flex-1 w-full h-full relative">
                  <Suspense fallback={
                    <div className="space-y-6 p-1">
                      <SocialCardSkeleton />
                      <SocialCardSkeleton />
                      <SocialCardSkeleton />
                    </div>
                  }>
                    <TwitterFeedFetcher />
                  </Suspense>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* SEO Concluding Content & Community Benefits */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">Why Join Our Digital Community?</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                At LakshyaMarch, we believe that education extends beyond the four walls of a classroom. Our social media channels are curated specifically for serious medical and engineering aspirants.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">✓</div>
                  <p className="text-slate-300"><strong className="text-white">Daily Practice Problems (DPPs):</strong> Regular quizzes and conceptual questions posted on Instagram and X.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-0.5">✓</div>
                  <p className="text-slate-300"><strong className="text-white">Strategy & Motivation:</strong> Exclusive interviews with our NEET and JEE toppers from Begusarai on YouTube.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">✓</div>
                  <p className="text-slate-300"><strong className="text-white">Instant Updates:</strong> Never miss a scholarship test (Think NEET), admission deadline, or batch launch announcement.</p>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-3xl p-8 text-center border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Be Part of The Legacy</h3>
              <p className="text-slate-400 mb-8">
                Join thousands of students who are marching towards their Lakshya. Hit subscribe, follow, and engage with the best teaching faculty in Bihar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://youtube.com/@lakshyamarch" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#FF0000] hover:bg-red-600 text-white rounded-xl font-bold transition-colors">
                  Subscribe on YouTube
                </a>
                <a href="https://instagram.com/lakshyamarch" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:opacity-90 text-white rounded-xl font-bold transition-opacity">
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

// ─── Data Fetching Components ───

async function YouTubeMainPlayer() {
  const videos = await getLatestYouTubeVideos(1);
  if (!videos || videos.length === 0) {
    return <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500">Video Unavailable</div>;
  }
  const latestVideo = videos[0];
  
  return (
    <iframe 
      width="100%" 
      height="100%" 
      src={`https://www.youtube.com/embed/${latestVideo.id}`} 
      title={latestVideo.title}
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  );
}

async function YouTubeFeedFetcher() {
  // Fetch up to 5 recent videos, skipping the first one (which is in the main player)
  const allVideos = await getLatestYouTubeVideos(5);
  const feedVideos = allVideos.slice(1, 5);

  if (!feedVideos || feedVideos.length === 0) {
    return <div className="absolute inset-0 p-6 flex items-center justify-center text-center text-sm text-slate-500">No recent videos found.</div>;
  }

  return (
    <div className="p-1 space-y-4">
      {feedVideos.map((video) => (
        <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" 
           className="block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm group hover:border-[#FF0000]/30 transition-colors">
          <div className="aspect-video bg-slate-900 relative">
            {/* Real Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="h-10 w-10 bg-[#FF0000] rounded-full flex items-center justify-center pl-1 shadow-lg">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
              </div>
            </div>
          </div>
          <div className="p-3">
            {/* Decode HTML Entities simple trick via dangerouslySetInnerHTML or just text */}
            <h3 className="font-bold text-sm text-slate-900 line-clamp-2 leading-tight mb-1" dangerouslySetInnerHTML={{ __html: video.title }}></h3>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
              <span>LakshyaMarch</span>
              <span>•</span>
              <span>{timeAgo(video.publishedAt)}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

async function InstagramFeedFetcher() {
  const allPosts = await getNormalizedFeed("instagram");
  const posts = allPosts.slice(0, 3);
  
  if (!posts || posts.length === 0) {
    return <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-100">No recent Instagram posts.</div>;
  }

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <SocialCard key={post.id} post={post} />
      ))}
    </div>
  );
}

async function TwitterFeedFetcher() {
  const allPosts = await getNormalizedFeed("twitter");
  const posts = allPosts.slice(0, 3);
  
  if (!posts || posts.length === 0) {
    return <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-100">No recent X updates.</div>;
  }

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <SocialCard key={post.id} post={post} />
      ))}
    </div>
  );
}
