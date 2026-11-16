"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  offset?: number;
  className?: string;
  once?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades + lifts content into view the first time it is scrolled to. */
export function Reveal({
  children,
  delay = 0,
  offset = 26,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px 0px -70px 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
