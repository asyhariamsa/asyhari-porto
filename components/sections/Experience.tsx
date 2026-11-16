import { ArrowUpRight, Building2, Waypoints } from "lucide-react";
import type { ExperienceItem } from "@/lib/types";
import { experiences } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

function ExperienceCard({ job, index }: { job: ExperienceItem; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="relative">
      <div className="group relative grid gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/16 hover:bg-white/[0.035] sm:grid-cols-[1fr_auto] sm:p-7">
        <div className="min-w-0">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-soft transition-colors duration-500 group-hover:border-accent/30">
              <Building2 size={15} strokeWidth={1.7} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[17px] font-medium leading-snug tracking-[-0.015em] text-ink">
                {job.role}
              </h3>
              <p className="mt-0.5 text-[13px] text-ink-mute">{job.organization}</p>
            </div>
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-ink-dim">{job.summary}</p>

          <ul className="mt-4 space-y-2">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-[13px] leading-relaxed text-ink-mute">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="sm:pl-6 sm:text-right">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
            {job.period}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Waypoints}
          index="03"
          title="Where I've"
          accentWord="worked"
          description="A short timeline of teams, products, and the problems I was hired to solve."
        />

        <div className="space-y-3">
          {experiences.map((job, index) => (
            <ExperienceCard key={`${job.role}-${job.organization}`} job={job} index={index} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-ink-dim transition-colors hover:text-ink"
          >
            Want the full history? Let's talk
            <ArrowUpRight
              size={14}
              className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
