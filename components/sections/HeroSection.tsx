"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { HeroAnimation } from "@/components/sections/hero-animation";
import { ArrowRight, Github, FileText, Database, Brain } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-background">
      {/* Grid Background & Glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-grid-small-black dark:bg-grid-small-white">
        {/* Radial gradient mask */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-sm font-medium text-primary bg-primary/5 backdrop-blur-sm mb-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Now Open Source
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
              Multimodal Document <br className="hidden md:block" />
              <span className="text-gradient">Analysis Assistant</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Understand complex documents by organizing text, tables, and figures into a structured tree. 
              Perform grounded retrieval and reasoning with MoDora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button size="lg" className="text-base px-8 h-12" asChild>
              <Link href="#demo">
                View Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <Link href="https://github.com/weAIDB/MoDora" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </motion.div>

          {/* Abstract Tree Concept Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative w-full max-w-5xl aspect-[16/9] md:aspect-[2/1] rounded-2xl border bg-background/40 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05]" />
             <HeroAnimation />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
