import { Briefcase, CalendarDays, GraduationCap, MapPin, User } from "lucide-react";
import type { ProfileFact } from "@/lib/types";
import { profileFacts, profileParagraphs, profile } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const factIcons = {
  graduation: GraduationCap,
  location: MapPin,
  briefcase: Briefcase,
  calendar: CalendarDays,
} as const;

function FactCard({ fact, delay }: { fact: ProfileFact; delay: number }) {
  const Icon = factIcons[fact.icon];

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-500 hover:border-white/16 hover:bg-white/[0.035]">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-soft transition-colors duration-500 group-hover:border-accent/30">
            <Icon size={14} strokeWidth={1.7} />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
            {fact.label}
          </span>
        </div>
        <p className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink">
          {fact.value}
        </p>
        {fact.detail ? (
          <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">{fact.detail}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Profile() {
  return (
    <section id="profile" className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={User}
          index="02"
          title="A little about"
          accentWord="me"
          description={`${profile.availability} · Based in ${profile.location}.`}
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-6">
            {profileParagraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p
                  className={
                    index === 0
                      ? "text-balance text-lg leading-relaxed tracking-[-0.01em] text-ink sm:text-xl"
                      : "max-w-[38rem] text-[15px] leading-relaxed text-ink-dim"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-canvas text-sm font-semibold text-accent-soft">
                  {profile.initials}
                  <span className="absolute inset-0 rounded-full border border-accent/30 animate-slow-spin [border-right-color:transparent] [border-bottom-color:transparent]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{profile.title}</p>
                  <p className="text-xs text-ink-mute">{profile.eyebrow}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {profileFacts.map((fact, index) => (
              <FactCard key={fact.label} fact={fact} delay={0.1 + index * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
