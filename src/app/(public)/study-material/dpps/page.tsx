import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { STUDY_MATERIAL_REGISTRY } from '@/lib/studyMaterialRegistry';
import Link from 'next/link';
import styles from '../StudyMaterial.module.css';

export const metadata = {
  title: `Daily Practice Problems (DPPs) | ${INSTITUTE.name}`,
  description: `Download topic-wise Daily Practice Problems (DPPs) for JEE, NEET, and Foundation batches.`,
};

export default function DPPsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/study-material" className={styles.backLink}>← Back to Study Material</Link>
          <h1 className={styles.title}>Daily Practice <span className={styles.highlight}>Problems (DPPs)</span></h1>
          <p className={styles.subtitle}>Topic-wise practice questions with solutions to test your understanding.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {STUDY_MATERIAL_REGISTRY.map((classSec) => {
            if (classSec.subjects.length === 0) return null;
            return (
              <div key={classSec.id} className={styles.classSection}>
                <h2 className={styles.classTitle}>{classSec.className}</h2>
                <div className={styles.subjectGrid}>
                  {classSec.subjects.map((subject) => {
                    if (subject.chapters.length === 0) return null;
                    return (
                      <div key={subject.id} className={styles.subjectCard}>
                        <h3 className={styles.subjectName}>{subject.name}</h3>
                        {subject.chapters.map((chapter) => {
                          const dpps = chapter.files.filter(f => f.type === 'dpp');
                          if (dpps.length === 0) return null;
                          return (
                            <div key={chapter.id} className={styles.chapterBlock}>
                              <h4 className={styles.chapterName}>{chapter.name}</h4>
                              <ul className={styles.fileList}>
                                {dpps.map(file => (
                                  <li key={file.id}>
                                    <a href={`https://drive.google.com/file/d/${file.driveId}/view`} target="_blank" rel="noopener noreferrer">
                                      <span className={styles.fileIcon}>📄</span> {file.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
