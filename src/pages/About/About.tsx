import { AboutHero } from "@/components/layout/AboutZenda/AboutHero";
import { AboutStory } from "@/components/layout/AboutZenda/AboutStory";
import { AboutValues } from "@/components/layout/AboutZenda/AboutValues";
import { AboutProcess } from "@/components/layout/AboutZenda/AboutProcess";
import { AboutCTA } from "@/components/layout/AboutZenda/AboutCTA";
import { AboutDifferentials } from "@/components/layout/AboutZenda/AboutDifferentials";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutProcess />
      <AboutDifferentials />
      <AboutCTA />
    </>
  );
}
