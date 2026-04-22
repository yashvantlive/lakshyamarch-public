import React from 'react';
import { BLOG_POSTS } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from '../Blog.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} | LakshyaMarch`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.articleHero}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.author}>By {post.author}</span>
          </div>
          <h1 className={styles.articleTitle}>{post.title}</h1>
        </div>
      </div>
      
      <div className={styles.container}>
        <article className={styles.articleContent} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
