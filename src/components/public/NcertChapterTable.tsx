"use client";

import React, { useState } from 'react';
import { Download, Search, FileText } from 'lucide-react';

interface Chapter {
  chapterNo: number;
  chapterName: string;
  pdfLink: string;
}

interface NcertChapterTableProps {
  bookName: string;
  chapters: Chapter[];
}

export default function NcertChapterTable({ bookName, chapters }: NcertChapterTableProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = chapters.filter((ch) => {
    const term = searchQuery.toLowerCase();
    return (
      ch.chapterName.toLowerCase().includes(term) ||
      ch.chapterNo.toString().includes(term) ||
      `chapter ${ch.chapterNo}`.includes(term) ||
      `ch ${ch.chapterNo}`.includes(term)
    );
  });

  return (
    <div className="bg-white border border-ink-200 rounded-3xl overflow-hidden shadow-brand-sm mb-12">
      {/* Table Header Controls */}
      <div className="p-6 bg-ink-50 border-b border-ink-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-display font-extrabold text-ink-900">
            {bookName}
          </h3>
          <p className="text-xs text-ink-500 font-sans mt-1">
            Official NCERT rationalize textbook chapters
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full sm:w-72">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search chapter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm font-sans rounded-xl border border-ink-200 bg-white placeholder-ink-400 text-ink-800 focus:outline-none focus:border-brand-red-500 focus:ring-1 focus:ring-brand-red-500 transition-all"
          />
        </div>
      </div>

      {/* Chapters Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50/50">
              <th className="py-4 px-6 text-xs font-bold font-sans uppercase tracking-wider text-ink-400 w-24">
                Ch No.
              </th>
              <th className="py-4 px-6 text-xs font-bold font-sans uppercase tracking-wider text-ink-400">
                Chapter Name
              </th>
              <th className="py-4 px-6 text-xs font-bold font-sans uppercase tracking-wider text-ink-400 text-right w-40">
                Download PDF
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 font-sans">
            {filteredChapters.length > 0 ? (
              filteredChapters.map((chapter) => (
                <tr 
                  key={chapter.chapterNo}
                  className="hover:bg-brand-red-50/20 transition-colors group"
                >
                  <td className="py-4 px-6 text-sm font-bold text-ink-800">
                    {chapter.chapterNo}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-ink-900 group-hover:text-brand-red-600 transition-colors">
                    {chapter.chapterName}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={chapter.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold bg-ink-50 hover:bg-brand-red-600 text-ink-700 hover:text-white border border-ink-200 hover:border-brand-red-600 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm"
                    >
                      <Download size={14} className="shrink-0" />
                      <span>Download</span>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-12 text-center text-sm text-ink-400 font-sans">
                  No chapters found matching "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer Stats */}
      <div className="px-6 py-4 bg-ink-50/30 border-t border-ink-100 flex items-center justify-between text-xs text-ink-500 font-sans">
        <span>Showing {filteredChapters.length} of {chapters.length} chapters</span>
        <span>Source: NCERT Official Server</span>
      </div>
    </div>
  );
}
