import { Cloud, Code2, Cpu, Database, Server, Sparkles, Wrench } from "lucide-react";
import type { SkillGroup } from "@/lib/types";
import { skillGroups, techMarquee } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillMeter } from "@/components/sections/SkillMeter";

const groupIcons = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
  tool: Wrench,
  cpu: Cpu,
} as const;

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = groupIcons[group.icon];

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/16 hover:bg-white/[0.035]">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-soft transition-colors duration-500 group-hover:border-accent/30">
            <Icon size={14} strokeWidth={1.7} />
          </span>
          <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink">
            {group.title}
          </h3>
        </div>

        <div className="space-y-4">
          {group.skills.map((skill, skillIndex) => (
            <SkillMeter
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.08 * skillIndex}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Sparkles}
          index="05"
          title="Tools of the"
          accentWord="trade"
          description="The stack I reach for most — and how confident I am with each piece of it."
        />

        <div className="marquee-host relative mb-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-3">
            {[...techMarquee, ...techMarquee].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="whitespace-nowrap rounded-full border border-white/8 bg-white/[0.02] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.1em] text-ink-mute"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
