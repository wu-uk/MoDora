"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollGlowTitle } from "@/components/ui/scroll-glow-title";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-secondary/30">
      <Container>
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-4 max-w-3xl"
          >
            <ScrollGlowTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              See MoDora in Action
            </ScrollGlowTitle>
            <p className="text-lg text-muted-foreground">
              From raw documents to grounded answers. MoDora parses, structures, and reasons over your data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="aurora-card relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-violet-300/30 dark:border-violet-300/20 bg-background"
          >
            <iframe
              src="https://player.vimeo.com/video/1168527529?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="absolute inset-0 w-full h-full"
              title="MoDora_Demo"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl pt-8"
          >
            {["Upload", "Parse", "Tree Build", "Retrieval", "Answer"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="aurora-card flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
