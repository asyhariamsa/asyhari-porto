import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
};

const tones: Record<NonNullable<TagProps["tone"]>, string> = {
  default:
    "border-white/10 bg-white/[0.035] text-ink-dim group-hover:border-white/20 group-hover:text-ink",
  accent:
    "border-accent/30 bg-accent/10 text-accent-soft",
};

export function Tag({ children, className, tone = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-[3px] text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
