"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft accent light that trails the pointer. Skipped entirely on
 * touch devices and when the visitor prefers reduced motion.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    setEnabled(true);

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle at center, rgba(232,198,138,0.10), rgba(232,198,138,0.03) 42%, transparent 68%)",
      }}
    />
  );
}
