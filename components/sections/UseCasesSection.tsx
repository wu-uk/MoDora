"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrollGlowTitle } from "@/components/ui/scroll-glow-title";
import { Microscope, TrendingUp, Code, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: Microscope,
    title: "Scientific Papers",
    description: "Analyze complex research papers with heavy chart and formula usage.",
  },
  {
    icon: TrendingUp,
    title: "Financial Reports",
    description: "Extract insights from annual reports containing dense tables and financial statements.",
  },
  {
    icon: Code,
    title: "Technical Docs",
    description: "Navigate through API documentation, architecture diagrams, and code snippets.",
  },
  {
    icon: BookOpen,
    title: "Research Literature",
    description: "Synthesize information across multiple academic sources for literature reviews.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <ScrollGlowTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Use Cases
            </ScrollGlowTitle>
            <p className="text-lg text-muted-foreground">
              MoDora is designed for information-dense environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <SpotlightCard 
                  className="aurora-card h-full p-6 bg-white/90 dark:bg-slate-900/90 border-violet-200/50 dark:border-violet-400/20"
                  spotlightColor="rgba(192, 132, 252, 0.22)"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {useCase.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
