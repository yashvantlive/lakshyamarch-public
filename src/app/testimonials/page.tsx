import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { SUCCESS_STORIES } from '@/lib/stories';
import Link from 'next/link';
import styles from './Testimonials.module.css';

export const metadata = {
  title: `Testimonials | ${INSTITUTE.name}`,
  description: `Hear from the students and parents of ${INSTITUTE.name} about their experience and journey.`,
};

export default function TestimonialsPage() {
  return (
    <div className={styles.testimonialsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Student <span className={styles.highlight}>Testimonials</span></h1>
          <p className={styles.subtitle}>Real stories from our students who turned their aspirations into achievements.</p>
        </div>
      </div>

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {SUCCESS_STORIES.map((story) => (
              <div key={story.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    {story.title.split(' ')[1]?.charAt(0) || 'S'}
                  </div>
                  <div>
                    <h3 className={styles.studentName}>{story.title.split(' ')[1]} {story.title.split(' ')[2]}</h3>
                    <span className={styles.categoryBadge}>{story.category} {story.year}</span>
                  </div>
                </div>
                <p className={styles.excerpt}>"{story.excerpt}"</p>
                <Link href={`/blog/${story.slug}`} className={styles.readMore}>
                  Read Full Story →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
