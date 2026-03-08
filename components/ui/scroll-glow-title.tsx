"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollGlowTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollGlowTitle({ children, className }: ScrollGlowTitleProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["130% 0", "-30% 0"]);

  return (
    <motion.h2
      ref={ref}
      className={cn("scroll-shine", className)}
      style={{ backgroundPosition }}
    >
      {children}
    </motion.h2>
  );
}
