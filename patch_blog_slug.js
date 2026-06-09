const fs = require('fs');

const p = 'src/app/blog/[slug]/page.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  'import { BLOG_POSTS } from "@/lib/blogData";',
  `import { erpApiPath } from "@/lib/erpApi";

async function getBlogs() {
  try {
    const res = await fetch(erpApiPath("/api/public/blogs"), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (e) { return []; }
}

async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(erpApiPath(\`/api/public/blogs/\${slug}\`), { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (e) { return null; }
}`
);

c = c.replace(
  'export function generateStaticParams() {',
  'export async function generateStaticParams() {\n  const BLOG_POSTS = await getBlogs();'
);

c = c.replace(
  'export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {',
  'export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {\n  const BLOG_POSTS = await getBlogs();'
);

c = c.replace(
  'export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {',
  'export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {\n  const BLOG_POSTS = await getBlogs();'
);

// Fix the map and other any issues
c = c.replace('return BLOG_POSTS.map((post) =>', 'return BLOG_POSTS.map((post: any) =>');
c = c.replace('const post = BLOG_POSTS.find((p) =>', 'const post = BLOG_POSTS.find((p: any) =>');
c = c.replace('const post = BLOG_POSTS.find((p) =>', 'const post = BLOG_POSTS.find((p: any) =>');
c = c.replace('const related = BLOG_POSTS.filter((p) =>', 'const related = BLOG_POSTS.filter((p: any) =>');

// Fix content map inside jsx
c = c.replace('post.content.map((section, i) =>', 'post.content.map((section: any, i: number) =>');
c = c.replace('section.body.split("\\n\\n").map((para, pi) =>', 'section.body.split("\\n\\n").map((para: string, pi: number) =>');

// Fix keywords and related maps
c = c.replace('post.keywords.map((kw)', 'post.keywords.map((kw: string)');
c = c.replace('related.map((rp)', 'related.map((rp: any)');

fs.writeFileSync(p, c);
console.log("Patched completely!");
