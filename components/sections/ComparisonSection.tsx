"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FilePenLine, FolderTree, ScanSearch, X } from "lucide-react";
import { Container } from "@/components/layout/Container";

const comparisons = [
  {
    name: "NotebookLM",
    accent: "text-slate-600",
    cardClassName:
      "border-slate-200/80 bg-white/75 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm",
    panelClassName: "border-slate-200/80 bg-slate-50/88",
    iconClassName: "bg-slate-900 text-white",
    accentGlowClassName: "from-slate-200 via-slate-100 to-white",
    features: [
      { icon: X, label: "Imprecise document grounding" },
      { icon: X, label: "Limited layout awareness" },
      { icon: X, label: "No document editing" },
    ],
  },
  {
    name: "MoDora",
    accent: "text-violet-700",
    cardClassName:
      "border-violet-300/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,243,255,0.96))] shadow-[0_38px_110px_rgba(109,40,217,0.22)] ring-1 ring-violet-200/70",
    panelClassName: "border-violet-200/80 bg-white/92",
    iconClassName: "bg-violet-600 text-white",
    accentGlowClassName: "from-violet-300 via-fuchsia-200 to-cyan-100",
    features: [
      { icon: FolderTree, label: "Structured document tree" },
      { icon: BrainCircuit, label: "Multimodal reasoning" },
      { icon: ScanSearch, label: "Precise PDF grounding" },
      { icon: FilePenLine, label: "Editable document structure" },
    ],
  },
  {
    name: "OpenClaw",
    accent: "text-slate-600",
    cardClassName:
      "border-slate-200/80 bg-white/75 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm",
    panelClassName: "border-slate-200/80 bg-slate-50/88",
    iconClassName: "bg-slate-900 text-white",
    accentGlowClassName: "from-slate-200 via-slate-100 to-white",
    features: [
      { icon: X, label: "Manual document referencing" },
      { icon: X, label: "Tool call errors" },
      { icon: X, label: "Not specialized for document QA" },
    ],
  },
];

export function ComparisonSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_28%,#f4f1ff_100%)] py-20 md:py-28 lg:py-36">
      <Container className="max-w-[96rem]">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl">
            Why MoDora for Document QA?
          </h2>
        </div>
        <div className="relative isolate mx-auto max-w-[94rem] overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top,rgba(196,181,253,0.25),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))] px-4 py-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm md:px-8 md:py-10 lg:px-10">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
          <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="grid w-full items-stretch gap-6 lg:grid-cols-[0.95fr_1.18fr_0.95fr] lg:gap-8">
            {comparisons.map((item, index) => {
              const isCenter = item.name === "MoDora";

              return (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.35 }}
                  className={[
                    "relative overflow-hidden rounded-[1.75rem] border p-6 md:p-8",
                    item.cardClassName,
                    isCenter
                      ? "lg:z-10 lg:-translate-y-3 lg:scale-[1.03]"
                      : "lg:translate-y-6",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "absolute inset-x-0 top-0 h-28 bg-gradient-to-br opacity-80",
                      item.accentGlowClassName,
                    ].join(" ")}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_24%,transparent_76%,rgba(255,255,255,0.18))]" />

                  <div className="relative mb-8">
                    <div className="flex items-center justify-between gap-4">
                      <h2
                        className={[
                          "text-[2.2rem] font-semibold tracking-[-0.06em] md:text-[2.75rem]",
                          item.accent,
                        ].join(" ")}
                      >
                        {item.name}
                      </h2>
                      <div
                        className={[
                          "h-3 w-3 rounded-full",
                          isCenter
                            ? "bg-violet-500 shadow-[0_0_0_10px_rgba(139,92,246,0.14)]"
                            : "bg-slate-300 shadow-[0_0_0_10px_rgba(148,163,184,0.12)]",
                        ].join(" ")}
                      />
                    </div>
                  </div>

                  <div
                    className={[
                      "relative rounded-[1.5rem] border p-4 md:p-5",
                      item.panelClassName,
                    ].join(" ")}
                  >
                    <div className="space-y-3">
                    {item.features.map((feature) => (
                      <div
                        key={feature.label}
                        className={[
                          "flex items-center gap-4 rounded-[1.15rem] border px-4 py-4 text-left",
                          isCenter
                            ? "border-violet-100/80 bg-white shadow-[0_16px_34px_rgba(109,40,217,0.08)]"
                            : "border-white/80 bg-white/86 shadow-[0_12px_26px_rgba(15,23,42,0.05)]",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                            item.iconClassName,
                          ].join(" ")}
                        >
                          <feature.icon className="h-4 w-4" />
                        </div>
                        <p className="text-base font-medium leading-6 text-slate-900 md:text-[17px]">
                          {feature.label}
                        </p>
                      </div>
                    ))}
                    </div>
                  </div>

                  {isCenter ? (
                    <div className="pointer-events-none absolute inset-x-8 bottom-0 h-16 bg-violet-300/35 blur-3xl" />
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
