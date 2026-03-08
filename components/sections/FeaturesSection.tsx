"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Network, Quote, Library } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Multimodal Understanding",
    description: "Seamlessly processes text, tables, and figures from complex documents (PDFs, Papers, Reports).",
  },
  {
    icon: Network,
    title: "Tree-Structured Reasoning",
    description: "Organizes document content into a hierarchical tree to preserve context and structural relationships.",
  },
  {
    icon: Quote,
    title: "Grounded Citation",
    description: "Every answer is backed by precise citations pointing to the specific source node in the document tree.",
  },
  {
    icon: Library,
    title: "Knowledge Base Integration",
    description: "Build a comprehensive knowledge base from your document collection for cross-document reasoning.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
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
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for depth and accuracy. MoDora goes beyond simple text matching.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="border-none shadow-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
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
