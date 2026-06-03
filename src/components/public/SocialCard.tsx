import { FaInstagram, FaXTwitter, FaHeart, FaComment, FaShare } from "react-icons/fa6";
import Image from "next/image";
import type { NormalizedSocialPost } from "@/app/api/social/route";

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function SocialCard({ post }: { post: NormalizedSocialPost }) {
  const isInstagram = post.platform === "instagram";
  const PlatformIcon = isInstagram ? FaInstagram : FaXTwitter;

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          {/* Avatar Area */}
          <div className={`h-10 w-10 rounded-full flex items-center justify-center p-0.5 ${isInstagram ? 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]' : 'bg-slate-200'}`}>
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
              {post.author.avatarUrl ? (
                <Image src={post.author.avatarUrl} alt={post.author.name} fill className="object-cover" />
              ) : (
                <span className="text-[10px] font-bold text-slate-900">LM</span>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 leading-tight flex items-center gap-1">
              {post.author.name}
              {isInstagram && <span className="text-blue-500 text-[10px]">✔</span>}
            </h3>
            <p className="text-[11px] text-slate-500">@{post.author.handle} · {timeAgo(post.publishedAt)}</p>
          </div>
        </div>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className={`text-slate-400 hover:${isInstagram ? 'text-[#dc2743]' : 'text-black'} transition-colors`}>
          <PlatformIcon size={18} />
        </a>
      </div>

      {/* Content Text */}
      {(!isInstagram || (isInstagram && !post.mediaUrl)) && (
        <div className="p-4 text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
          {post.content}
        </div>
      )}

      {/* Media (Image) */}
      {post.mediaUrl && (
        <div className="relative aspect-square w-full bg-slate-100">
          <Image 
            src={post.mediaUrl} 
            alt="Social media post media" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Instagram Content Text (Below image) */}
      {(isInstagram && post.mediaUrl) && (
        <div className="px-4 pt-3 text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
          <span className="font-bold mr-2">{post.author.handle}</span>
          {post.content}
        </div>
      )}

      {/* Engagement Stats */}
      <div className="p-4 flex items-center gap-6 text-slate-500">
        <button className="flex items-center gap-2 hover:text-rose-500 transition-colors group">
          <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">{post.stats.likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group">
          <FaComment className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">{post.stats.comments}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-emerald-500 transition-colors group ml-auto">
          <FaShare className="text-lg group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export function SocialCardSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm animate-pulse">
      <div className="p-4 flex items-center gap-3 border-b border-slate-100">
        <div className="h-10 w-10 rounded-full bg-slate-200"></div>
        <div className="space-y-2">
          <div className="h-3 w-24 bg-slate-200 rounded"></div>
          <div className="h-2 w-16 bg-slate-200 rounded"></div>
        </div>
      </div>
      <div className="aspect-square w-full bg-slate-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-3 w-full bg-slate-200 rounded"></div>
        <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}
