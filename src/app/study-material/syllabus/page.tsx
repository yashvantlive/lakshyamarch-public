import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import Link from 'next/link';

export const metadata = {
  title: `JEE & NEET Syllabus Trackers | ${INSTITUTE.name}`,
  description: `Track your preparation progress with official syllabus checklists for IIT-JEE (Main+Adv), NEET-UG, and Board Exams.`,
};

// Syllabus Configurations
const SYLLABUS_REGISTRY = [
  {
    categoryName: "Competitive Entrance Exams",
    subjects: [
      {
        name: "IIT-JEE (Main & Advanced)",
        trackers: [
          { name: "JEE Main Physics Syllabus Tracker", url: "https://jeemain.nta.ac.in/" },
          { name: "JEE Main Chemistry Syllabus Tracker", url: "https://jeemain.nta.ac.in/" },
          { name: "JEE Main Mathematics Syllabus Tracker", url: "https://jeemain.nta.ac.in/" }
        ]
      },
      {
        name: "NEET-UG (Medical)",
        trackers: [
          { name: "NEET Physics Syllabus Checklist", url: "https://exams.nta.ac.in/NEET/" },
          { name: "NEET Chemistry Syllabus Checklist", url: "https://exams.nta.ac.in/NEET/" },
          { name: "NEET Biology Syllabus Checklist", url: "https://exams.nta.ac.in/NEET/" }
        ]
      }
    ]
  },
  {
    categoryName: "School & Board Exams",
    subjects: [
      {
        name: "CBSE Boards (Class 10 & 12)",
        trackers: [
          { name: "Class 12 CBSE Science Syllabus", url: "https://cbseacademic.nic.in/" },
          { name: "Class 10 CBSE Core Syllabus", url: "https://cbseacademic.nic.in/" }
        ]
      },
      {
        name: "Bihar Board (BSEB)",
        trackers: [
          { name: "Class 12 BSEB Intermediate Syllabus", url: "http://biharboardonline.bihar.gov.in/" },
          { name: "Class 10 BSEB Matric Syllabus", url: "http://biharboardonline.bihar.gov.in/" }
        ]
      }
    ]
  }
];

export default function SyllabusPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="bg-slate-50 py-24 px-6 text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <Link href="/study-material" className="inline-block mb-6 text-slate-500 font-semibold hover:text-blue-600 transition-colors">
            ← Back to Study Material
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            Syllabus <span className="text-blue-600">Trackers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            Checklists to mark off chapters as you complete them during preparation.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {SYLLABUS_REGISTRY.map((cat, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100">
                {cat.categoryName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.subjects.map((sub, subIdx) => (
                  <div key={subIdx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">
                      {sub.name}
                    </h3>
                    <div className="mb-8 last:mb-0">
                      <ul className="space-y-4">
                        {sub.trackers.map((track, trackIdx) => (
                          <li key={trackIdx}>
                            <a 
                              href={track.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all hover:translate-x-1"
                            >
                              <span className="text-2xl">📋</span> 
                              <span className="font-medium">{track.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
