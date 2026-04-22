import React from 'react';
import { INSTITUTE, FACULTY } from '@/lib/siteData';
import styles from './Faculty.module.css';

export const metadata = {
  title: `Our Faculty | ${INSTITUTE.name}`,
  description: `Meet the expert teachers and mentors behind the success of our students at ${INSTITUTE.name}.`,
};

export default function FacultyPage() {
  return (
    <div className={styles.facultyPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our <span className={styles.highlight}>Faculty</span></h1>
          <p className={styles.subtitle}>Learn from Begusarai's most experienced and passionate educators.</p>
        </div>
      </div>

      <section className={styles.facultySection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {FACULTY.map((teacher, index) => (
              <div key={index} className={styles.facultyCard}>
                <div className={styles.imageWrapper}>
                  <img src={teacher.image || `https://ui-avatars.com/api/?name=${teacher.name}&background=random`} alt={teacher.name} className={styles.image} />
                  <div className={styles.subjectBadge}>{teacher.subject}</div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{teacher.name}</h3>
                  <p className={styles.role}>{teacher.role}</p>
                  <div className={styles.divider}></div>
                  <p className={styles.qual}>{teacher.qual}</p>
                  {teacher.prev && <p className={styles.prev}>{teacher.prev}</p>}
                  <p className={styles.usp}>"{teacher.usp}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
