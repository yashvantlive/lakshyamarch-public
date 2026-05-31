import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import Link from 'next/link';

export const metadata = {
  title: `NCERT Books PDF Download | ${INSTITUTE.name}`,
  description: `Download official NCERT textbooks in PDF format for Class 11 & 12 Physics, Chemistry, Biology, and Mathematics.`,
};

// Standard NCERT download configurations
const NCERT_REGISTRY = [
  {
    className: "Class 12th",
    subjects: [
      {
        name: "Physics",
        books: [
          { name: "Physics Part I", url: "https://ncert.nic.in/textbook.php?leph1=0-8" },
          { name: "Physics Part II", url: "https://ncert.nic.in/textbook.php?leph2=0-6" }
        ]
      },
      {
        name: "Chemistry",
        books: [
          { name: "Chemistry Part I", url: "https://ncert.nic.in/textbook.php?lech1=0-5" },
          { name: "Chemistry Part II", url: "https://ncert.nic.in/textbook.php?lech2=0-5" }
        ]
      },
      {
        name: "Biology",
        books: [
          { name: "Biology Textbook", url: "https://ncert.nic.in/textbook.php?leby1=0-16" }
        ]
      },
      {
        name: "Mathematics",
        books: [
          { name: "Mathematics Part I", url: "https://ncert.nic.in/textbook.php?lemh1=0-6" },
          { name: "Mathematics Part II", url: "https://ncert.nic.in/textbook.php?lemh2=0-7" }
        ]
      }
    ]
  },
  {
    className: "Class 11th",
    subjects: [
      {
        name: "Physics",
        books: [
          { name: "Physics Part I", url: "https://ncert.nic.in/textbook.php?keph1=0-8" },
          { name: "Physics Part II", url: "https://ncert.nic.in/textbook.php?keph2=0-6" }
        ]
      },
      {
        name: "Chemistry",
        books: [
          { name: "Chemistry Part I", url: "https://ncert.nic.in/textbook.php?kech1=0-6" },
          { name: "Chemistry Part II", url: "https://ncert.nic.in/textbook.php?kech2=0-5" }
        ]
      },
      {
        name: "Biology",
        books: [
          { name: "Biology Textbook", url: "https://ncert.nic.in/textbook.php?keby1=0-19" }
        ]
      },
      {
        name: "Mathematics",
        books: [
          { name: "Mathematics Textbook", url: "https://ncert.nic.in/textbook.php?kemh1=0-14" }
        ]
      }
    ]
  }
];

export default function NcertPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="bg-slate-50 py-24 px-6 text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <Link href="/study-material" className="inline-block mb-6 text-slate-500 font-semibold hover:text-blue-600 transition-colors">
            ← Back to Study Material
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            NCERT <span className="text-blue-600">Textbooks</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            Direct download links to official NCERT textbooks in PDF format.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {NCERT_REGISTRY.map((classSec, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100">
                {classSec.className}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classSec.subjects.map((subject, subIdx) => (
                  <div key={subIdx} className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">
                      {subject.name}
                    </h3>
                    <div className="mb-8 last:mb-0">
                      <ul className="space-y-4">
                        {subject.books.map((book, bookIdx) => (
                          <li key={bookIdx}>
                            <a 
                              href={book.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all hover:translate-x-1"
                            >
                              <span className="text-2xl">📚</span> 
                              <span className="font-medium">{book.name} (Official PDF)</span>
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
