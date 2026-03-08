"use client";

import { cn } from "@/lib/utils";
import { PieChart, Table } from "lucide-react";

export function HeroAnimation() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end overflow-hidden pb-10">
      <div className="absolute inset-0 z-0 rounded-full bg-violet-500/5 opacity-50 blur-[100px] pointer-events-none" />
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-0 h-10 w-[70%] -translate-x-1/2 rounded-full bg-violet-900/10 blur-2xl" />

      <svg
        className="absolute inset-0 z-40 h-full w-full pointer-events-none"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="gradient-main" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        <path d="M 250 324 C 250 286, 374 286, 400 242" stroke="url(#gradient-main)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 400 324 C 422 292, 420 260, 400 242" stroke="url(#gradient-main)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 550 324 C 550 286, 426 286, 400 242" stroke="url(#gradient-main)" strokeWidth="8" strokeLinecap="round" fill="none" />

        <path d="M 400 242 C 386 218, 386 192, 400 172" stroke="url(#gradient-main)" strokeWidth="8" strokeLinecap="round" fill="none" />

        <path d="M 400 172 C 350 136, 220 144, 180 100" stroke="url(#gradient-main)" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 400 172 C 360 126, 300 114, 280 70" stroke="url(#gradient-main)" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M 400 172 C 408 136, 408 88, 400 50" stroke="url(#gradient-main)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 400 172 C 440 126, 500 114, 520 70" stroke="url(#gradient-main)" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M 400 172 C 450 136, 580 144, 620 100" stroke="url(#gradient-main)" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>

      <div className="pointer-events-none absolute inset-0 z-[60]">
        {[
          { cx: "22.5%", cy: "25%", color: "bg-violet-300" },
          { cx: "35%", cy: "17.5%", color: "bg-violet-400" },
          { cx: "50%", cy: "12.5%", color: "bg-violet-500" },
          { cx: "65%", cy: "17.5%", color: "bg-purple-500" },
          { cx: "77.5%", cy: "25%", color: "bg-fuchsia-500" },
        ].map((node, i) => (
          <div
            key={i}
            className={cn(
              "absolute h-10 w-10 rounded-full border-2 border-white/55 shadow-lg backdrop-blur-sm",
              node.color
            )}
            style={{
              left: node.cx,
              top: node.cy,
              marginLeft: "-20px",
              marginTop: "-20px",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-white/30" />
          </div>
        ))}
      </div>

      <div className="relative z-50 mt-auto flex translate-y-3 gap-10">
        <div className="aurora-card flex h-32 w-24 flex-col items-center justify-center gap-2 rounded-lg border border-violet-100 bg-white/95 p-2 shadow-xl dark:border-violet-900/50 dark:bg-slate-900">
          <div className="flex h-16 w-full items-end justify-center gap-1 rounded bg-violet-50 p-1 dark:bg-violet-900/20">
            <div className="h-[40%] w-2 bg-violet-300" />
            <div className="h-[70%] w-2 bg-violet-400" />
            <div className="h-[50%] w-2 bg-violet-500" />
            <div className="h-[80%] w-2 bg-purple-500" />
          </div>
          <div className="h-1 w-full rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-1 w-2/3 rounded bg-slate-100 dark:bg-slate-800" />
        </div>

        <div className="aurora-card relative -top-2 flex h-36 w-28 flex-col items-center rounded-lg border border-violet-200 bg-white/95 p-3 shadow-2xl dark:border-violet-800 dark:bg-slate-900">
          <Table className="mb-2 h-6 w-6 text-violet-600" />
          <div className="grid w-full grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4 rounded-sm",
                  i < 3 ? "bg-violet-100 dark:bg-violet-900/40" : "bg-slate-50 dark:bg-slate-800"
                )}
              />
            ))}
          </div>
        </div>

        <div className="aurora-card flex h-32 w-24 flex-col items-center justify-center gap-2 rounded-lg border border-violet-100 bg-white/95 p-2 shadow-xl dark:border-violet-900/50 dark:bg-slate-900">
          <PieChart className="h-10 w-10 text-violet-500" />
          <div className="h-1 w-full rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-1 w-full rounded bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
