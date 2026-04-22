import React from 'react';
import Link from 'next/link';
import { SUCCESS_STORIES } from '@/lib/stories';
import { INSTITUTE } from '@/lib/siteData';
import styles from './SuccessStories.module.css';

export const metadata = {
  title: `Success Stories | ${INSTITUTE.name}`,
  description: `Inspiring journeys of our top rankers in JEE and NEET from Begusarai.`,
};

export default function SuccessStoriesIndex() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Success <span className={styles.highlight}>Stories</span></h1>
          <p className={styles.subtitle}>Read the detailed journeys and preparation strategies of our top achievers.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {SUCCESS_STORIES.map(story => (
              <Link href={`/success-stories/${story.slug}`} key={story.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    {story.title.split(' ')[1]?.charAt(0) || 'S'}
                  </div>
                  <div>
                    <span className={styles.categoryBadge}>{story.category} {story.year}</span>
                    <h2 className={styles.studentName}>{story.title.split(' ')[1]} {story.title.split(' ')[2]}</h2>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <p className={styles.excerpt}>{story.excerpt}</p>
                  <span className={styles.readMore}>Read Full Strategy →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
