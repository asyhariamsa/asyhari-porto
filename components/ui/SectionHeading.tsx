import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  icon: LucideIcon;
  index: string;
  title: string;
  accentWord?: string;
  description?: string;
  className?: string;
};

/**
 * Icon chip + oversized title, with an italic serif accent word.
 * Mirrors the reference layout: small marker on the left, display type on the right.
 */
export function SectionHeading({
  icon: Icon,
  index,
  title,
  accentWord,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="relative mt-1 hidden sm:block">
          <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-soft shadow-[0_0_28px_-12px_rgba(232,198,138,0.55)]">
            <Icon size={18} strokeWidth={1.6} />
          </div>
          <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-accent text-[8px] font-bold text-canvas">
            {index.slice(1)}
          </span>
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex items-baseline gap-3 sm:hidden">
            <span className="font-mono text-[11px] tracking-[0.3em] text-accent">
              {index}
            </span>
            <span className="h-px w-8 bg-white/15" />
          </div>

          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            {title}
            {accentWord ? (
              <>
                {" "}
                <span className="font-serif font-normal italic text-accent-soft">
                  {accentWord}
                </span>
              </>
            ) : null}
          </h2>

          {description ? (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-[15px]">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
