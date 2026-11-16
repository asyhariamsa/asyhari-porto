"use client";

import { MotionConfig } from "framer-motion";

/**
 * Respects the visitor's reduced-motion preference for every
 * Framer Motion animation on the page.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
