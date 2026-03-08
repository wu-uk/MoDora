"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen pt-20 pb-20 md:pt-24 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950 bg-grid-small-black dark:bg-grid-small-white" />
      <div className="pointer-events-none absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-violet-300/30 blur-[90px]" />
      <div className="pointer-events-none absolute top-16 right-[8%] h-80 w-80 rounded-full bg-fuchsia-300/25 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-violet-200/20 blur-[120px]" />
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      <Container>
        <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl space-y-6"
          >
            <h1 className="text-5xl font-black tracking-[-0.04em] text-foreground md:text-7xl lg:text-8xl">
              MoDora
            </h1>

            <p className="text-xl font-medium md:text-3xl text-gradient">
              Multimodal Document Analysis Assistant
            </p>

            <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              Parse text, tables, and figures into a structured knowledge tree, then retrieve grounded evidence for accurate answers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex w-full flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 text-base text-white shadow-lg shadow-violet-500/30 hover:from-violet-400 hover:to-fuchsia-400"
              asChild
            >
              <Link href="#demo">
                View Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-violet-300/50 bg-white/60 px-8 text-base text-violet-800 backdrop-blur-sm hover:bg-violet-50 dark:border-violet-500/40 dark:bg-slate-900/40 dark:text-violet-100"
              asChild
            >
              <Link href="https://github.com/weAIDB/MoDora" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-violet-700/90 dark:text-violet-200/90"
          >
            <span className="rounded-full border border-violet-300/40 bg-white/60 px-3 py-1 backdrop-blur-sm dark:bg-slate-900/40">Multimodal Parsing</span>
            <span className="rounded-full border border-violet-300/40 bg-white/60 px-3 py-1 backdrop-blur-sm dark:bg-slate-900/40">Tree Retrieval</span>
            <span className="rounded-full border border-violet-300/40 bg-white/60 px-3 py-1 backdrop-blur-sm dark:bg-slate-900/40">Grounded Citations</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
