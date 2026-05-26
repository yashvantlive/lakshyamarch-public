export type Platform = "instagram" | "twitter";

export interface NormalizedSocialPost {
  id: string;
  platform: Platform;
  author: {
    name: string;
    handle: string;
    avatarUrl?: string;
  };
  content: string;
  mediaUrl?: string;
  stats: {
    likes: number;
    comments: number;
    shares?: number;
  };
  publishedAt: string;
  permalink: string;
}

// Simulated Database / Redis Cache
// In production, a CRON job updates this array every 30 minutes.
export const MOCK_DB: NormalizedSocialPost[] = [
  {
    id: "ig-001",
    platform: "instagram",
    author: {
      name: "LakshyaMarch Education",
      handle: "lakshyamarch",
    },
    content: "Building concepts that crack IIT! ✨ Our interactive sessions make learning physics a breeze. #JEE #NEET #LakshyaMarch #Begusarai",
    mediaUrl: "/social/post (6).webp",
    stats: { likes: 452, comments: 24, shares: 12 },
    publishedAt: "2026-05-20T10:00:00Z",
    permalink: "https://www.instagram.com/lakshyamarch/p/DX_pe9dAWMW/",
  },
  {
    id: "ig-002",
    platform: "instagram",
    author: {
      name: "LM Integrated School",
      handle: "lmintegratedschool",
    },
    content: "Schooling with a difference. Integrating CBSE board curriculum with top-tier foundation for competitive exams. 📚🎓 #Education #Bihar",
    mediaUrl: "/social/post (2).webp",
    stats: { likes: 310, comments: 15, shares: 5 },
    publishedAt: "2026-05-22T09:15:00Z",
    permalink: "https://www.instagram.com/lmintegratedschool/reel/DXMAxW7kbaF/",
  },
  {
    id: "ig-003",
    platform: "instagram",
    author: {
      name: "LakshyaMarch Education",
      handle: "lakshyamarch",
    },
    content: "Hard work meets right guidance! Preparing the next generation of doctors and engineers in Begusarai. 🩺🔧",
    mediaUrl: "/social/post (3).webp",
    stats: { likes: 512, comments: 40, shares: 25 },
    publishedAt: "2026-05-23T14:30:00Z",
    permalink: "https://www.instagram.com/lakshyamarch/p/DYZNevehKxn/",
  },
  {
    id: "ig-004",
    platform: "instagram",
    author: {
      name: "LakshyaMarch Education",
      handle: "lakshyamarch",
    },
    content: "Doubt clearing sessions that matter. We ensure no student is left behind. 💡 #Mentorship #LakshyaMarch",
    mediaUrl: "/social/post (4).webp",
    stats: { likes: 290, comments: 12, shares: 8 },
    publishedAt: "2026-05-24T11:00:00Z",
    permalink: "https://www.instagram.com/lakshyamarch/p/DX3JSAaGEoE/",
  },
  {
    id: "ig-005",
    platform: "instagram",
    author: {
      name: "LakshyaMarch Education",
      handle: "lakshyamarch",
    },
    content: "A glimpse of our classroom energy! Dedicated faculty, focused students, unparalleled results. 📈🔥",
    mediaUrl: "/social/post (5).webp",
    stats: { likes: 620, comments: 55, shares: 32 },
    publishedAt: "2026-05-25T16:45:00Z",
    permalink: "https://www.instagram.com/lakshyamarch/reel/DXthKZmEdvS/",
  },
  {
    id: "tw-001",
    platform: "twitter",
    author: {
      name: "LakshyaMarch",
      handle: "LakshyaMarch",
    },
    content: "Congratulations to Aradhya Bharti for securing AIR 499 in NEET 2025! A proud moment for Begusarai. 🏆🎉",
    mediaUrl: "/social/post (7).webp",
    stats: { likes: 128, comments: 8, shares: 45 },
    publishedAt: "2026-05-22T14:30:00Z",
    permalink: "https://x.com/LakshyaMarch",
  },
  {
    id: "tw-002",
    platform: "twitter",
    author: {
      name: "LakshyaMarch",
      handle: "LakshyaMarch",
    },
    content: "Schooling with a difference. Integrating CBSE board curriculum with top-tier foundation for competitive exams. 📚🎓 #Education #Bihar",
    mediaUrl: "/social/post (3).webp",
    stats: { likes: 310, comments: 15, shares: 5 },
    publishedAt: "2026-05-23T09:15:00Z",
    permalink: "https://x.com/LakshyaMarch",
  },
  {
    id: "tw-003",
    platform: "twitter",
    author: {
      name: "LakshyaMarch",
      handle: "LakshyaMarch",
    },
    content: "A glimpse of our classroom energy! Dedicated faculty, focused students, unparalleled results. 📈🔥",
    mediaUrl: "/social/post (4).webp",
    stats: { likes: 89, comments: 4, shares: 12 },
    publishedAt: "2026-05-24T16:45:00Z",
    permalink: "https://x.com/LakshyaMarch",
  },
];

export async function getNormalizedFeed(platform?: Platform): Promise<NormalizedSocialPost[]> {
  // Simulate DB/Redis latency
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let data = MOCK_DB;
  if (platform) {
    data = data.filter((post) => post.platform === platform);
  }

  // Sort by newest first
  return data.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
