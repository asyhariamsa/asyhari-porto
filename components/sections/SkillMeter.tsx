"use client";

import { motion } from "framer-motion";

type SkillMeterProps = {
  name: string;
  level: number;
  delay?: number;
};

/** Skill row whose bar fills in when scrolled into view. */
export function SkillMeter({ name, level, delay = 0 }: SkillMeterProps) {
  return (
    <div className="group/meter">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[13px] font-medium tracking-[-0.01em] text-ink-dim transition-colors duration-300 group-hover/meter:text-ink">
          {name}
        </span>
        <span className="font-mono text-[10px] tabular-nums text-ink-mute">{level}%</span>
      </div>
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent/40 to-accent"
        />
      </div>
    </div>
  );
}
