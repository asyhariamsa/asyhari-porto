"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  featured?: boolean;
};

/**
 * Card with a soft spotlight that follows the pointer inside its bounds.
 */
export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;
    const box = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - box.left}px`);
    element.style.setProperty("--my", `${event.clientY - box.top}px`);
  };

  const content = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 0%), rgba(232,198,138,0.10), transparent 68%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.22em] text-ink-mute">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "grid h-7 w-7 place-items-center rounded-full border border-white/10 text-ink-mute transition-all duration-400",
            "group-hover:border-accent/40 group-hover:text-accent",
            project.href ? "opacity-100" : "opacity-0",
          )}
        >
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </span>
      </div>

      <div className="relative mt-auto pt-14">
        <h3
          className={cn(
            "font-medium tracking-[-0.02em] text-ink transition-colors duration-300",
            featured ? "text-2xl sm:text-[28px]" : "text-xl",
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-ink-dim",
            featured ? "max-w-[34rem] text-[15px]" : "text-[13.5px]",
          )}
        >
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} tone={project.accent ? "accent" : "default"}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </>
  );

  const shellClass = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500",
    "hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.04] hover:shadow-[0_24px_60px_-32px_rgba(232,198,138,0.4)]",
    featured && "sm:p-8",
  );

  if (!project.href) {
    return (
      <div ref={ref} onPointerMove={handleMove} className={shellClass}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      className={shellClass}
      onPointerMove={(event) => {
        const element = event.currentTarget;
        const box = element.getBoundingClientRect();
        element.style.setProperty("--mx", `${event.clientX - box.left}px`);
        element.style.setProperty("--my", `${event.clientY - box.top}px`);
      }}
    >
      {content}
    </a>
  );
}
