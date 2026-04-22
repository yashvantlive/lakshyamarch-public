import React from 'react';
import { SUCCESS_STORIES } from '@/lib/stories';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from '../SuccessStories.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = SUCCESS_STORIES.find((p) => p.slug === slug);
  if (!story) return { title: 'Not Found' };
  
  return {
    title: story.seo.title,
    description: story.seo.description,
  };
}

export function generateStaticParams() {
  return SUCCESS_STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export default async function SuccessStoryDetail({ params }: Props) {
  const { slug } = await params;
  const story = SUCCESS_STORIES.find((p) => p.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.articleHero}>
        <div className={styles.container}>
          <Link href="/success-stories" className={styles.backLink}>← Back to Success Stories</Link>
          <div className={styles.meta}>
            <span className={styles.categoryBadge}>{story.category} {story.year}</span>
          </div>
          <h1 className={styles.articleTitle}>{story.title}</h1>
        </div>
      </div>
      
      <div className={styles.container}>
        <article className={styles.articleContent} dangerouslySetInnerHTML={{ __html: story.content }} />
      </div>
    </div>
  );
}
