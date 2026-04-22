import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Admissions Open for 2026-27
          </div>
          <h1 className={styles.title}>
            A Revolution in Education is Taking Shape in <span className={styles.highlight}>Begusarai</span>
          </h1>
          <p className={styles.subtitle}>
            March Ahead Towards Your लक्ष्य with Begusarai's premier institute for JEE, NEET, and Integrated Schooling.
          </p>
          <div className={styles.actions}>
            <Link href="/admission" className={styles.primaryBtn}>
              Apply Now
            </Link>
            <Link href="/programs" className={styles.secondaryBtn}>
              Explore Programs
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Selections</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Expert Faculty</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>#1</span>
              <span className={styles.statLabel}>In Begusarai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
