import React from 'react';
import Link from 'next/link';
import styles from './Programs.module.css';
import { PROGRAMS } from '@/lib/siteData';

export default function Programs() {
  return (
    <section className={styles.programs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className={styles.highlight}>Programs</span></h2>
          <p className={styles.subtitle}>Comprehensive education solutions designed for your success.</p>
        </div>

        <div className={styles.grid}>
          {/* School Wing */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>🏫</div>
              <h3 className={styles.cardTitle}>{PROGRAMS.school.name}</h3>
            </div>
            <p className={styles.cardDesc}>{PROGRAMS.school.description}</p>
            <div className={styles.features}>
              {PROGRAMS.school.features.slice(0, 4).map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <span className={styles.check}>✓</span> {feature}
                </div>
              ))}
            </div>
            <div className={styles.classesBox}>
              <strong>Classes:</strong> {PROGRAMS.school.classes.join(', ')}
            </div>
            <Link href="/programs#school" className={styles.cardBtn}>
              View School Programs →
            </Link>
          </div>

          {/* Coaching Wing */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>🎯</div>
              <h3 className={styles.cardTitle}>{PROGRAMS.coaching.name}</h3>
            </div>
            <p className={styles.cardDesc}>{PROGRAMS.coaching.description}</p>
            <div className={styles.features}>
              {PROGRAMS.coaching.courses.map((course, i) => (
                <div key={i} className={styles.featureItem}>
                  <span className={styles.check}>✓</span> {course.name}
                </div>
              ))}
            </div>
            <div className={styles.classesBox}>
              <strong>Targets:</strong> JEE, NEET, Olympiads
            </div>
            <Link href="/programs#coaching" className={styles.cardBtn}>
              View Coaching Programs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
