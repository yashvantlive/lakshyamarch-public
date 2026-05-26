import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { getAllYouTubeVideos, timeAgo } from "@/lib/youtubeService";
import { FaYoutube } from "react-icons/fa6";
import { Suspense } from "react";

export const revalidate = 604800; // Cache for 7 days (Weekly update)

export const metadata: Metadata = {
  title: "YouTube Video Gallery | LakshyaMarch Education",
  description: "Explore our complete collection of IIT-JEE, NEET strategy videos, physics concepts, and toppers' interviews on the LakshyaMarch official YouTube channel.",
  alternates: { canonical: "/youtube" },
};

export default function YouTubeGalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      
      <div className="h-20 sm:h-24 bg-slate-900 border-b border-white/10" />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF0000]/10 mb-6 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
            <FaYoutube size={32} className="text-[#FF0000]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            LakshyaMarch <span className="text-[#FF0000]">Video Library</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Master complex concepts, get exam strategies, and watch our toppers share their success secrets. Updated weekly with the latest classes.
          </p>
          <a href="https://youtube.com/@lakshyamarch?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
             className="inline-block px-8 py-4 bg-[#FF0000] hover:bg-red-600 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-500/30">
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Video Grid */}
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Suspense fallback={<VideoGallerySkeleton />}>
            <VideoGalleryFetcher />
          </Suspense>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

// ─── Data Fetching & Rendering ───

async function VideoGalleryFetcher() {
  // Fetch up to 150 videos, cached weekly
  const videos = await getAllYouTubeVideos(3);

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">No videos found</h2>
        <p className="text-slate-500">Please check back later or visit our YouTube channel directly.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer"
           className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
          
          <div className="aspect-video bg-slate-900 relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-14 h-14 bg-[#FF0000] rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(255,0,0,0.5)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-bold text-slate-900 text-sm mb-3 line-clamp-2 leading-snug group-hover:text-[#FF0000] transition-colors"
                dangerouslySetInnerHTML={{ __html: video.title }}>
            </h3>
            
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <FaYoutube className="text-[#FF0000]" size={14}/> 
                LakshyaMarch
              </span>
              <span>{timeAgo(video.publishedAt)}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function VideoGallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-pulse flex flex-col h-[280px]">
          <div className="aspect-video bg-slate-200 w-full" />
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
            </div>
            <div className="flex justify-between mt-4">
              <div className="h-3 bg-slate-200 rounded w-1/3" />
              <div className="h-3 bg-slate-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
