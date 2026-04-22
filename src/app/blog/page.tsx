import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import styles from './Blog.module.css';

export const metadata = {
  title: 'Blog | LakshyaMarch Education',
  description: 'Read the latest updates, preparation strategies, and educational insights from LakshyaMarch.',
};

export default function BlogIndex() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our <span className={styles.highlight}>Blog</span></h1>
          <p className={styles.subtitle}>Insights, preparation strategies, and news from the heart of Begusarai's educational revolution.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {BLOG_POSTS.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                <div className={`${styles.imageContainer} ${post.heroColor}`}>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.description}</p>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
