import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

type HeroMarkProps = {
  className?: string;
};

const CIRCULAR_TEXT = `${profile.eyebrow} · ${profile.location} · `.toUpperCase();

/**
 * Decorative hero medallion: circular rotating type around a monogram.
 * Purely ornamental — hidden from assistive tech and on small screens.
 */
export function HeroMark({ className }: HeroMarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative grid h-[340px] w-[340px] place-items-center", className)}
    >
      <div className="absolute inset-0 rounded-full border border-white/8" />
      <div className="absolute inset-6 rounded-full border border-dashed border-white/10" />

      <div
        className="absolute inset-10 rounded-full opacity-60 blur-[46px]"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(232,198,138,0.32), transparent 68%)",
        }}
      />

      <svg
        viewBox="0 0 340 340"
        className="absolute inset-0 h-full w-full animate-slow-spin"
      >
        <defs>
          <path
            id="hero-circle-path"
            d="M170,170 m-132,0 a132,132 0 1,1 264,0 a132,132 0 1,1 -264,0"
          />
        </defs>
        <text className="fill-ink-mute font-mono text-[10.5px] uppercase tracking-[0.42em]">
          <textPath href="#hero-circle-path" startOffset="0">
            {CIRCULAR_TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>

      <div className="relative grid h-[186px] w-[186px] place-items-center rounded-full border border-white/12 bg-[#0b0b0f]/80 backdrop-blur-sm">
        <div className="text-center">
          <p className="font-serif text-6xl italic leading-none text-accent-soft">
            {profile.initials}
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-ink-mute">
            Portfolio
          </p>
        </div>
      </div>

      <span className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0b0b0f] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-ink-dim">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Available
      </span>
    </div>
  );
}
