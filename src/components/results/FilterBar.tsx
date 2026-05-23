"use client";

import { motion, AnimatePresence } from "framer-motion";

export type FilterCategory = "NEET" | "JEE" | "Class 12 Board" | "Class 10 Board";
export type BoardType = "CBSE" | "BSEB" | "ICSE";

interface FilterBarProps {
  categories: FilterCategory[];
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  // New props for inline sub-tabs
  boards?: BoardType[];
  activeBoard?: BoardType;
  onBoardChange?: (board: BoardType) => void;
}

export default function FilterBar({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  boards = ["CBSE", "BSEB", "ICSE"],
  activeBoard,
  onBoardChange
}: FilterBarProps) {
  return (
    <div className="py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-0 items-center">
        {categories.map((category) => (
          <div key={category} className="flex gap-2 shrink-0 items-center">
            <button
              onClick={() => onCategoryChange(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors shrink-0 ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#FF6B00] rounded-full shadow-lg shadow-orange-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>

            {/* Inline Sub Tabs for Desktop & Mobile FAANG-level UX */}
            <AnimatePresence>
              {activeCategory === category && category.includes("Board") && boards.length > 0 && onBoardChange && (
                <motion.div
                  initial={{ width: 0, opacity: 0, scale: 0.95 }}
                  animate={{ width: "auto", opacity: 1, scale: 1 }}
                  exit={{ width: 0, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="flex gap-2 items-center pl-1 overflow-hidden"
                >
                  <div className="h-6 w-px bg-slate-200 mx-0.5 shrink-0" />
                  {boards.map((board) => (
                    <button
                      key={`${category}-${board}`}
                      onClick={() => onBoardChange(board)}
                      className={`relative px-4 py-2 rounded-full text-xs font-black tracking-widest transition-all shrink-0 border ${
                        activeBoard === board
                          ? "bg-slate-800 text-white border-slate-800 shadow-md"
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-800"
                      }`}
                    >
                      <span className="relative z-10">{board}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
