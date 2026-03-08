"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Upload, ScanLine, GitFork, Search, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Document",
    description: "User uploads a PDF or document file.",
  },
  {
    icon: ScanLine,
    title: "Parse Components",
    description: "System identifies text blocks, tables, and images.",
  },
  {
    icon: GitFork,
    title: "Build Document Tree",
    description: "Components are organized into a hierarchical structure.",
  },
  {
    icon: Search,
    title: "Tree-Based Retrieval",
    description: "Relevant nodes are retrieved based on query and structure.",
  },
  {
    icon: MessageSquare,
    title: "Grounded Generation",
    description: "LLM generates an answer with citations from retrieved nodes.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              The MoDora Pipeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col items-center text-center bg-background p-6 rounded-lg border shadow-sm"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
