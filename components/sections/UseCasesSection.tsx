"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Use Cases
            </h2>
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
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <useCase.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
