import { MetadataRoute } from "next";
import { SUCCESS_STORIES } from "@/lib/stories";
import { districtData } from "@/lib/districtData";
import { erpApiPath } from "@/lib/erpApi";
import { NCERT_REGISTRY } from "@/lib/ncertbookData";

const BASE_URL = "https://lakshyamarch.com";

async function getBlogs() {
  try {
    const res = await fetch(erpApiPath("/api/public/blogs"), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BLOG_POSTS = await getBlogs();

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/programs",
    "/faculty",
    "/results",
    "/lakshyamarch-boards-results",
    "/lakshyamarch-jee-results",
    "/lakshyamarch-neet-results",
    "/notes",
    "/about",
    "/social",
    "/youtube",
    "/contact",
    "/success-stories",
    "/testimonials",
    "/privacy-policy",
    "/terms",
    "/hostel-facilities",
    "/study-material",
    "/study-material/ncert",
    "/study-material/syllabus",
    "/study-material/dpps",
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

  const blogPostRoutes = BLOG_POSTS.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // SEO Location Pages
  const locationSlugs: string[] = [];
  districtData.forEach(district => {
    locationSlugs.push(district.english.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    district.blocks.forEach(block => {
      locationSlugs.push(block.english.split('/')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    });
  });

  const locationRoutes = locationSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/seo/general/${slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/seo/iit-jee/${slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/seo/neet/${slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }
  ]);

  // NCERT Class-wise and Subject-wise pages
  const ncertRoutes = NCERT_REGISTRY.flatMap((c) => {
    const classNum = c.className.replace(/[^\d]/g, '');
    const classSlug = `class-${classNum}`;
    
    const classRoute = {
      url: `${BASE_URL}/study-material/ncert/${classSlug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };

    const subjects = Array.from(new Set(c.books.map(b => b.subjectName)));
    const subjectRoutes = subjects.map((subject) => {
      const subjectSlug = subject.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return {
        url: `${BASE_URL}/study-material/ncert/${classSlug}/${subjectSlug}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "weekly" as const,
        priority: 0.75,
      };
    });

    return [classRoute, ...subjectRoutes];
  });

  return [...staticRoutes, ...phase3Routes, ...storyRoutes, ...blogListingRoute, ...blogPostRoutes, ...locationRoutes, ...ncertRoutes];
}
