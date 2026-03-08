"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollGlowTitle } from "@/components/ui/scroll-glow-title";
import { BarChart3, FileText, Image as ImageIcon, Table } from "lucide-react";

/**
 * TreeConnector: 用于在两个坐标点之间绘制直角折线
 */
function TreeConnector({ from, to, forkY, sweepY }: { from: Point; to: Point; forkY?: number; sweepY?: any }) {
  const midY = forkY ?? (from.y + to.y) / 2;
  const path = `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`;

  return (
    <g className="tree-connector">
      <path
        d={path}
        stroke="rgba(139, 92, 246, 0.38)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        d={path}
        stroke="rgba(244, 239, 255, 0.96)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          clipPath: `inset(${sweepY}px 0 0 0)`
        }}
      />
    </g>
  );
}

/**
 * TreeNode: 将 HTML 节点包装在 SVG foreignObject 中，消除坐标系差异
 */
function TreeNode({ x, y, width = 144, height = 40, children }: { x: number; y: number; width?: number; height?: number; children: React.ReactNode }) {
  return (
    <foreignObject 
      x={x - width / 2} 
      y={y} 
      width={width} 
      height={height}
      className="overflow-visible"
    >
      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </foreignObject>
  );
}

type Point = { x: number; y: number };

export function ArchitectureSection() {
  const treeRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: treeRef,
    offset: ["start end", "end start"],
  });
  const sweepY = useTransform(scrollYProgress, [0, 1], [-120, 420]);

  const view = { w: 620, h: 360 };
  const root = { x: 310.0, y: 34 };
  const sectionY = 146;
  
  const sectionSpread = 155; 
  const childOffset = 65;    

  const section1 = { x: root.x - sectionSpread, y: sectionY };
  const section2 = { x: root.x + sectionSpread, y: sectionY };

  const textNode = { x: section1.x + childOffset, y: 258, label: "Text" };
  const chartNode = { x: section1.x - childOffset, y: 306, label: "Chart" };
  const tableNode = { x: section2.x + childOffset, y: 306, label: "Table" };
  const imageNode = { x: section2.x - childOffset, y: 258, label: "Image" };

  const rootBottomY = 56;
  const topForkY = 94;
  const sectionTopY = 124;
  const sectionBottomY = 168;
  const childForkY = 208;
  const leafTopY_High = 241;
  const leafTopY_Low = 289;

  // 统一坐标连接关系，终点精准指向节点顶部 (y 坐标相同)
  const connections = [
    { from: { x: root.x, y: rootBottomY }, to: { x: section1.x, y: sectionTopY }, forkY: topForkY },
    { from: { x: root.x, y: rootBottomY }, to: { x: section2.x, y: sectionTopY }, forkY: topForkY },
    { from: { x: section1.x, y: sectionBottomY }, to: { x: textNode.x, y: leafTopY_High }, forkY: childForkY },
    { from: { x: section1.x, y: sectionBottomY }, to: { x: chartNode.x, y: leafTopY_Low }, forkY: childForkY },
    { from: { x: section2.x, y: sectionBottomY }, to: { x: imageNode.x, y: leafTopY_High }, forkY: childForkY },
    { from: { x: section2.x, y: sectionBottomY }, to: { x: tableNode.x, y: leafTopY_Low }, forkY: childForkY },
  ];

  return (
    <section id="architecture" className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <ScrollGlowTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Component-Correlation Tree
            </ScrollGlowTitle>
            <p className="text-lg text-muted-foreground">
              Unlike traditional RAG that chunks text blindly, MoDora parses documents into a structured tree.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">1</div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Hierarchical Organization:</strong> Sections, subsections, and paragraphs are nodes in a tree.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">2</div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Multimodal Nodes:</strong> Images and tables are treated as first-class citizens, linked to their context.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">3</div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Contextual Retrieval:</strong> Retrieving a node can automatically pull in parent context or child details.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-violet-200/50 bg-white/75 p-8 shadow-[0_20px_70px_-38px_rgba(124,58,237,0.65)] backdrop-blur-md dark:border-violet-500/25 dark:bg-slate-900/55"
          >
            <div className="pointer-events-none absolute inset-0 z-0 bg-grid-small-black opacity-15 [mask-image:linear-gradient(to_bottom,transparent,white)] dark:bg-grid-small-white" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-violet-200/50 to-transparent dark:from-violet-500/20" />

            <div ref={treeRef} className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-violet-700 dark:border-violet-400/30 dark:bg-slate-900/60 dark:text-violet-200">
                TREE VIEW
              </div>

              <div className="relative mt-4 h-[360px] w-full max-w-[620px]">
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 620 360" fill="none">
                  {/* 1. 绘制所有连线 */}
                  {connections.map((conn, i) => (
                    <TreeConnector
                      key={i}
                      from={conn.from}
                      to={conn.to}
                      forkY={conn.forkY}
                      sweepY={sweepY}
                    />
                  ))}

                  {/* 2. 在同一个 SVG 坐标系内绘制所有节点，确保 y 轴对齐无间隙 */}
                  {/* Document Root */}
                  <TreeNode x={root.x} y={16} width={176}>
                    <div className="rounded-xl border border-violet-200/70 bg-background/95 px-4 py-2 shadow-sm dark:border-violet-700/50">
                      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                        <FileText className="h-4 w-4 text-primary" />
                        Document Root
                      </div>
                    </div>
                  </TreeNode>

                  {/* Section 1 & 2 */}
                  <TreeNode x={section1.x} y={sectionTopY}>
                    <div className="rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 text-center shadow-sm dark:border-slate-700/70 dark:bg-slate-900/85">
                      <div className="text-sm font-medium">Section 1</div>
                    </div>
                  </TreeNode>
                  <TreeNode x={section2.x} y={sectionTopY}>
                    <div className="rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 text-center shadow-sm dark:border-slate-700/70 dark:bg-slate-900/85">
                      <div className="text-sm font-medium">Section 2</div>
                    </div>
                  </TreeNode>

                  {/* Leaf Nodes */}
                  <TreeNode x={textNode.x} y={leafTopY_High}>
                    <div className="rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 text-center shadow-sm dark:border-slate-700/70 dark:bg-slate-900/85">
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <FileText className="h-3.5 w-3.5" />
                        {textNode.label}
                      </div>
                    </div>
                  </TreeNode>
                  <TreeNode x={chartNode.x} y={leafTopY_Low}>
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/90 px-3 py-2 text-center shadow-sm dark:border-emerald-900/60 dark:bg-emerald-900/20">
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                        <BarChart3 className="h-3.5 w-3.5" />
                        {chartNode.label}
                      </div>
                    </div>
                  </TreeNode>
                  <TreeNode x={tableNode.x} y={leafTopY_Low}>
                    <div className="rounded-xl border border-blue-100 bg-blue-50/90 px-3 py-2 text-center shadow-sm dark:border-blue-900/70 dark:bg-blue-900/20">
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
                        <Table className="h-3.5 w-3.5" />
                        {tableNode.label}
                      </div>
                    </div>
                  </TreeNode>
                  <TreeNode x={imageNode.x} y={leafTopY_High}>
                    <div className="rounded-xl border border-violet-100 bg-violet-50/90 px-3 py-2 text-center shadow-sm dark:border-violet-900/70 dark:bg-violet-900/20">
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 dark:text-violet-300">
                        <ImageIcon className="h-3.5 w-3.5" />
                        {imageNode.label}
                      </div>
                    </div>
                  </TreeNode>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
