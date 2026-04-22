import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blogData';
import { SUCCESS_STORIES } from '@/lib/stories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lakshyamarch.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/programs',
    '/faculty',
    '/results',
    '/testimonials',
    '/blog',
    '/success-stories',
    '/study-material',
    '/study-material/dpps',
    '/study-material/notes',
    '/admission',
    '/scholarship',
    '/free-test',
    '/begusarai-coaching',
    '/iit-jee-coaching-begusarai',
    '/neet-coaching-begusarai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const storyRoutes = SUCCESS_STORIES.map((story) => ({
    url: `${baseUrl}/success-stories/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...storyRoutes];
}
