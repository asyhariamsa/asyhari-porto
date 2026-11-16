"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

const SPRING = { stiffness: 260, damping: 18, mass: 0.4 };
const PULL = 0.28;

/**
 * Button that leans toward the cursor, with a light sweep on hover.
 */
export function MagneticLink({
  href,
  children,
  icon,
  variant = "outline",
  external = false,
  className,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const box = element.getBoundingClientRect();
    x.set((event.clientX - (box.left + box.width / 2)) * PULL);
    y.set((event.clientY - (box.top + box.height / 2)) * PULL);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300",
        variant === "solid"
          ? "bg-ink text-canvas hover:bg-accent-soft"
          : "border border-white/12 bg-white/[0.03] text-ink-dim hover:border-white/25 hover:text-ink",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2 whitespace-nowrap">
        {icon ? <span className="shrink-0">{icon}</span> : null}
        {children}
      </span>
    </motion.a>
  );
}
