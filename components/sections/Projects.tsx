import { FolderGit2 } from "lucide-react";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={FolderGit2}
          index="04"
          title="Selected"
          accentWord="work"
          description="Products I built end to end — architecture decisions, trade-offs, and the parts that shipped."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="h-full">
              <ProjectCard project={project} index={index} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
