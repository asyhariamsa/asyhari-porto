import { ArrowUpRight, Mail } from "lucide-react";
import { profile, socials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/sections/CopyEmail";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-5 pb-16 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-6 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 blur-[60px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,198,138,0.16), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.3em] text-accent">06</span>
                <span className="h-px w-10 bg-white/15" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  Contact
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
                Let's build something{" "}
                <span className="font-serif font-normal italic text-accent-soft">
                  worth shipping
                </span>
                .
              </h2>

              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-dim">
                I'm {profile.availability.toLowerCase()}. Tell me about the product
                you're building and I'll reply within a day.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-canvas transition-colors duration-300 hover:bg-accent-soft"
                >
                  <Mail size={14} strokeWidth={1.9} />
                  {profile.email}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-12 grid gap-3 border-t border-white/8 pt-8 sm:grid-cols-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <span className="flex items-center gap-2.5 text-[13px] text-ink-dim transition-colors group-hover:text-ink">
                      <SocialIcon name={social.icon} size={14} className="text-accent-soft" />
                      {social.label}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
