import { BackgroundFX } from "@/components/fx/BackgroundFX";
import { CursorGlow } from "@/components/fx/CursorGlow";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <BackgroundFX />
      <CursorGlow />
      <NavBar />

      <main id="content" className="relative">
        <Hero />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
