"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FileText, Image as ImageIcon, Table, ChevronDown } from "lucide-react";

export function ArchitectureSection() {
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Component-Correlation Tree
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlike traditional RAG that chunks text blindly, MoDora parses documents into a structured tree.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  1
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Hierarchical Organization:</strong> Sections, subsections, and paragraphs are nodes in a tree.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  2
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Multimodal Nodes:</strong> Images and tables are treated as first-class citizens, linked to their context.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  3
                </div>
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
            className="relative glass-card rounded-xl p-8 overflow-hidden"
          >
             {/* Inner Grid */}
             <div className="absolute inset-0 z-0 bg-grid-small-black dark:bg-grid-small-white opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>

             {/* Tree Visualization */}
             <div className="relative z-10 flex flex-col items-center space-y-4">
                {/* Root */}
                <div className="bg-background border shadow-sm px-4 py-2 rounded-md flex items-center gap-2 font-medium">
                  <FileText className="h-4 w-4 text-primary" /> Document Root
                </div>
                <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
                
                {/* Level 1 */}
                <div className="flex gap-8">
                   <div className="flex flex-col items-center">
                      <div className="bg-background border shadow-sm px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                        Section 1: Intro
                      </div>
                      <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
                      <div className="mt-2 bg-background border shadow-sm px-3 py-1.5 rounded-md flex items-center gap-2 text-xs text-muted-foreground">
                         Text Paragraphs
                      </div>
                   </div>
                   
                   <div className="flex flex-col items-center">
                      <div className="bg-background border shadow-sm px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                        Section 2: Results
                      </div>
                      <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
                      <div className="mt-2 flex gap-2">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 px-3 py-1.5 rounded-md flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300">
                           <Table className="h-3 w-3" /> Table 1
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900 px-3 py-1.5 rounded-md flex items-center gap-2 text-xs text-purple-700 dark:text-purple-300">
                           <ImageIcon className="h-3 w-3" /> Figure 2
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
