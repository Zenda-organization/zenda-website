import { ZContainer } from "@/components/common/ZContainer";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <HeroBackground />

      <ZContainer>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>

        <HeroStats />
      </ZContainer>
    </section>
  );
}
