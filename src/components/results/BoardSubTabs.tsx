"use client";

import { motion } from "framer-motion";

export type BoardType = "CBSE" | "BSEB" | "ICSE";

interface BoardSubTabsProps {
  boards: BoardType[];
  activeBoard: BoardType;
  onBoardChange: (board: BoardType) => void;
}

export default function BoardSubTabs({ boards, activeBoard, onBoardChange }: BoardSubTabsProps) {
  if (boards.length <= 1) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
      <div className="inline-flex p-1 bg-slate-100 rounded-xl">
        {boards.map((board) => (
          <button
            key={board}
            onClick={() => onBoardChange(board)}
            className={`relative px-6 py-2 rounded-lg text-xs font-black tracking-widest transition-all ${
              activeBoard === board
                ? "text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {activeBoard === board && (
              <motion.div
                layoutId="board-pill"
                className="absolute inset-0 bg-white shadow-sm rounded-lg"
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{board}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
