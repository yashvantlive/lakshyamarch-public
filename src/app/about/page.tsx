import React from 'react';
import { INSTITUTE, FOUNDER } from '@/lib/siteData';
import styles from './About.module.css';

export const metadata = {
  title: `About Us | ${INSTITUTE.name}`,
  description: `Learn about ${INSTITUTE.name}, our mission, vision, and the people behind Begusarai's premier education institute.`,
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About <span className={styles.highlight}>Us</span></h1>
          <p className={styles.subtitle}>{INSTITUTE.tagline}</p>
        </div>
      </div>

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
              <p className={styles.text}>
                At {INSTITUTE.name}, we believe that every student in Begusarai deserves access to world-class education. For too long, ambitious students had to leave their homes and families to prepare for competitive exams like JEE and NEET.
              </p>
              <p className={styles.text}>
                Our integrated schooling model ensures that students receive top-tier coaching alongside their regular school curriculum, saving crucial hours of travel and reducing immense mental pressure.
              </p>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{new Date().getFullYear() - INSTITUTE.established}+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1000+</span>
                <span className={styles.statLabel}>Students Mentored</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Meet Our <span className={styles.highlight}>Founder</span></h2>
          <div className={styles.founderCard}>
            <div className={styles.founderImageContainer}>
              <img src={FOUNDER.image} alt={FOUNDER.name} className={styles.founderImage} />
            </div>
            <div className={styles.founderInfo}>
              <h3 className={styles.founderName}>{FOUNDER.name} <span>({FOUNDER.nickname})</span></h3>
              <p className={styles.founderRole}>{FOUNDER.designation}</p>
              <p className={styles.founderQual}>{FOUNDER.qualification} | {FOUNDER.certification}</p>
              <blockquote className={styles.quote}>
                "{FOUNDER.message}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
