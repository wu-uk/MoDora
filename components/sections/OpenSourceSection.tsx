"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ScrollGlowTitle } from "@/components/ui/scroll-glow-title";
import { Github } from "lucide-react";
import Link from "next/link";

export function OpenSourceSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <ScrollGlowTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proudly Open Source
          </ScrollGlowTitle>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            MoDora is built by the community, for the community. Join us in advancing the state of multimodal document analysis.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
            <Link href="https://github.com/weAIDB/MoDora" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
