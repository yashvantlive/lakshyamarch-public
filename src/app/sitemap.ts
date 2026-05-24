import { MetadataRoute } from "next";
import { SUCCESS_STORIES } from "@/lib/stories";
import { BLOG_POSTS } from "@/lib/blogData";

const BASE_URL = "https://lakshyamarch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Routes
  const staticRoutes = [
    "",
    "/programs",
    "/faculty",
    "/results",
    "/notes",
    "/about",
    "/contact",
    "/success-stories",
    "/testimonials",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: (route === "" || route === "/programs" || route === "/results" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1 : route === "/results" ? 0.9 : 0.7,
  }));

  // Phase 3 & Phase 7: New high-value SEO local landing pages
  const phase3Routes = [
    { route: "/iit-jee-coaching-begusarai", priority: 0.95, freq: "weekly" as const },
    { route: "/neet-coaching-begusarai", priority: 0.95, freq: "weekly" as const },
    { route: "/begusarai-coaching", priority: 0.95, freq: "weekly" as const },
    { route: "/admission", priority: 0.9, freq: "daily" as const },
    { route: "/scholarship", priority: 0.85, freq: "weekly" as const },
    { route: "/think-neet-test-series-begusarai", priority: 0.95, freq: "weekly" as const },
    { route: "/admission-counselling", priority: 0.85, freq: "weekly" as const },
    { route: "/free-test", priority: 0.8, freq: "weekly" as const },
  ].map(({ route, priority, freq }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: freq,
    priority,
  }));

  // 2. Dynamic Story Routes
  const storyRoutes = SUCCESS_STORIES.map((story) => ({
    url: `${BASE_URL}/success-stories/${story.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Phase 5: Blog routes
  const blogListingRoute = [{
    url: `${BASE_URL}/blog`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily" as const,
    priority: 0.85,
  }];

  const blogPostRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...phase3Routes, ...storyRoutes, ...blogListingRoute, ...blogPostRoutes];
}
