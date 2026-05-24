"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function LiveRankings() {
  const [tests, setTests] = useState<any[]>([]);
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTests() {
      try {
        const res = await fetch("/api/tests?public=true");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setTests(data);
          setSelectedTest(data[0]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchTests();
  }, []);

  useEffect(() => {
    if (selectedTest) {
      async function fetchResults() {
        try {
          const res = await fetch(`/api/tests/results?public=true&testId=${selectedTest.id}`);
          const data = await res.json();
          if (Array.isArray(data)) {
            setResults(data);
          }
        } catch (e) {
          console.error(e);
        }
      }
      fetchResults();
    }
  }, [selectedTest]);

  if (loading) return null;
  if (tests.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            Live Leaderboard
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Latest Test Rankings</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">Real-time performance of our students in ongoing internal assessments and monthly mock tests.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tests.map((test) => (
            <button
              key={test.id}
              onClick={() => setSelectedTest(test)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedTest?.id === test.id
                  ? "bg-[#FF6B00] text-white shadow-xl shadow-orange-200 scale-105"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {test.title}
            </button>
          ))}
        </div>

        {results.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {results.slice(0, 3).map((res, i) => (
                <motion.div
                  key={res.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-[2rem] border-2 flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-2xl ${
                    i === 0 ? "border-amber-400 bg-amber-50/50 scale-105 z-10" : "border-slate-100 bg-white"
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute top-0 right-0 p-4">
                      <Trophy className="text-amber-400 opacity-20" size={64} />
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 rotate-3 ${
                    i === 0 ? "bg-amber-400 text-white shadow-lg shadow-amber-200" : "bg-slate-100 text-slate-400"
                  }`}>
                    {i === 0 ? <Trophy size={32} /> : <Award size={32} />}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                    i === 0 ? "text-amber-600" : "text-slate-400"
                  }`}>Rank {res.rank}</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{res.studentName}</h3>
                  <p className="text-slate-500 text-sm font-bold mb-6">Class {selectedTest.class}</p>
                  <div className="mt-auto">
                    <div className="text-4xl font-black text-[#FF6B00] leading-none mb-1">{res.score}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Out of {selectedTest.maxMarks}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {results.length > 3 && (
                <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="pl-8 py-5 font-black text-slate-400 text-[10px] uppercase tracking-widest">Rank</th>
                                <th className="py-5 font-black text-slate-400 text-[10px] uppercase tracking-widest">Student Name</th>
                                <th className="py-5 font-black text-slate-400 text-[10px] uppercase tracking-widest">Class</th>
                                <th className="pr-8 py-5 font-black text-slate-400 text-[10px] uppercase tracking-widest text-right">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.slice(3).map((res) => (
                                <tr key={res.id} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="pl-8 py-5">
                                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-600 font-black text-xs">
                                        {res.rank}
                                      </span>
                                    </td>
                                    <td className="py-5 font-black text-slate-800 text-sm">{res.studentName}</td>
                                    <td className="py-5 font-bold text-slate-500 text-xs">{selectedTest.class}</td>
                                    <td className="pr-8 py-5 text-right font-black text-[#FF6B00]">{res.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Results for this test are being processed...</p>
          </div>
        )}
      </div>
    </section>
  );
}
