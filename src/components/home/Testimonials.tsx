import React from 'react';
import Link from 'next/link';
import styles from './Testimonials.module.css';
import { SUCCESS_STORIES } from '@/lib/stories';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Success <span className={styles.highlight}>Stories</span></h2>
          <p className={styles.subtitle}>Hear from our top achievers who turned their dreams into reality.</p>
        </div>

        <div className={styles.grid}>
          {SUCCESS_STORIES.slice(0, 3).map((story) => (
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
        
        <div className={styles.actionContainer}>
          <Link href="/results" className={styles.viewAllBtn}>
            View All Results
          </Link>
        </div>
      </div>
    </section>
  );
}
