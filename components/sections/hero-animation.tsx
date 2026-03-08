"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FileText, PieChart, Table } from "lucide-react";

export function HeroAnimation() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end overflow-hidden pb-12">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 bg-purple-500/5 blur-[100px] rounded-full opacity-50 pointer-events-none" />

      {/* Connection Lines (Tree Branches) */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Left Branch */}
        <motion.path
          d="M 250 320 C 250 200, 400 250, 400 150 L 400 150 C 400 100, 320 120, 300 80"
          stroke="url(#gradient-left)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M 250 320 C 250 200, 400 250, 400 150 L 400 150 C 400 100, 200 120, 180 100"
          stroke="url(#gradient-left)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
        />

        {/* Center Branch */}
        <motion.path
          d="M 400 320 C 400 200, 400 150, 400 80"
          stroke="url(#gradient-center)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.9 }}
        />

        {/* Right Branch */}
        <motion.path
          d="M 550 320 C 550 200, 400 250, 400 150 L 400 150 C 400 100, 480 120, 500 80"
          stroke="url(#gradient-right)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.1 }}
        />
        <motion.path
          d="M 550 320 C 550 200, 400 250, 400 150 L 400 150 C 400 100, 600 120, 620 100"
          stroke="url(#gradient-right)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.3 }}
        />

        <defs>
          <linearGradient id="gradient-left" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d8b4fe" /> {/* Purple-300 */}
            <stop offset="100%" stopColor="#a855f7" /> {/* Purple-500 */}
          </linearGradient>
          <linearGradient id="gradient-center" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" /> {/* Purple-400 */}
            <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
          </linearGradient>
          <linearGradient id="gradient-right" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#e9d5ff" /> {/* Purple-200 */}
            <stop offset="100%" stopColor="#7e22ce" /> {/* Purple-700 */}
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes (Circles at top) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[
          { cx: "22%", cy: "25%", delay: 1.8, color: "bg-purple-300" },
          { cx: "37%", cy: "20%", delay: 1.6, color: "bg-purple-400" },
          { cx: "50%", cy: "15%", delay: 2.0, color: "bg-purple-500" }, // Top Center
          { cx: "63%", cy: "20%", delay: 2.2, color: "bg-purple-600" },
          { cx: "78%", cy: "25%", delay: 2.4, color: "bg-purple-700" },
        ].map((node, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-12 h-12 rounded-full shadow-lg border-2 border-white/50 backdrop-blur-sm",
              node.color
            )}
            style={{ left: node.cx, top: node.cy }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: node.delay,
            }}
          >
            {/* Inner pulse */}
            <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
          </motion.div>
        ))}
      </div>

      {/* Document Cards (Bottom) */}
      <div className="relative z-30 flex gap-12 mt-auto">
        {/* Left Card: Chart */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-24 h-32 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-purple-100 dark:border-purple-900/50 flex flex-col p-2 items-center justify-center gap-2"
        >
          <div className="w-full h-16 bg-purple-50 dark:bg-purple-900/20 rounded flex items-end justify-center gap-1 p-1">
             <div className="w-2 bg-purple-300 h-[40%]" />
             <div className="w-2 bg-purple-400 h-[70%]" />
             <div className="w-2 bg-purple-500 h-[50%]" />
             <div className="w-2 bg-purple-600 h-[80%]" />
          </div>
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded" />
          <div className="w-2/3 h-1 bg-slate-100 dark:bg-slate-800 rounded" />
        </motion.div>

        {/* Center Card: Table */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-28 h-36 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-purple-200 dark:border-purple-800 flex flex-col p-3 items-center relative -top-4"
        >
          <Table className="text-purple-600 mb-2 h-6 w-6" />
          <div className="grid grid-cols-3 gap-1 w-full">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4 rounded-sm",
                  i < 3 ? "bg-purple-100 dark:bg-purple-900/40" : "bg-slate-50 dark:bg-slate-800"
                )}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Card: Pie */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-32 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-purple-100 dark:border-purple-900/50 flex flex-col p-2 items-center justify-center gap-2"
        >
          <PieChart className="text-purple-500 h-10 w-10" />
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded" />
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded" />
        </motion.div>
      </div>
    </div>
  );
}
