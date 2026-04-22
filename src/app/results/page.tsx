import React from 'react';
import { INSTITUTE, RESULTS_NEET, RESULTS_JEE } from '@/lib/siteData';
import styles from './Results.module.css';

export const metadata = {
  title: `Our Results | ${INSTITUTE.name}`,
  description: `Discover the phenomenal results of our students in JEE, NEET, and Board Exams at ${INSTITUTE.name}.`,
};

export default function ResultsPage() {
  return (
    <div className={styles.resultsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our <span className={styles.highlight}>Results</span></h1>
          <p className={styles.subtitle}>Consistent excellence across JEE, NEET, and Board examinations year after year.</p>
        </div>
      </div>

      <section className={styles.resultsSection}>
        <div className={styles.container}>
          
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>NEET-UG Achievements</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.grid}>
            {RESULTS_NEET.map((student) => (
              <div key={student.id} className={`${styles.resultCard} ${student.isTopper ? styles.topperCard : ''}`}>
                {student.badge && <div className={styles.badge}>{student.badge}</div>}
                <div className={styles.avatar}>
                  {student.image ? (
                    <img src={student.image} alt={student.name} />
                  ) : (
                    <span>{student.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className={styles.studentName}>{student.name}</h3>
                <p className={styles.score}>{student.score}</p>
                {student.college && <p className={styles.college}>{student.college}</p>}
                <p className={styles.year}>NEET {student.year}</p>
              </div>
            ))}
          </div>

          <div className={styles.categoryHeader} style={{ marginTop: '6rem' }}>
            <h2 className={styles.categoryTitle}>JEE Main & Advanced</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.grid}>
            {RESULTS_JEE.map((student) => (
              <div key={student.id} className={`${styles.resultCard} ${student.isTopper ? styles.topperCard : ''}`}>
                {student.badge && <div className={styles.badge}>{student.badge}</div>}
                <div className={styles.avatar}>
                  {student.image ? (
                    <img src={student.image} alt={student.name} />
                  ) : (
                    <span>{student.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className={styles.studentName}>{student.name}</h3>
                <p className={styles.score}>{student.stat}</p>
                {student.college && <p className={styles.college}>{student.college}</p>}
                <p className={styles.year}>{student.examType} {student.year}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
