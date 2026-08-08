import { ZContainer } from "@/components/common/ZContainer";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-12
            pt-28
            pb-12

            sm:gap-16
            sm:pt-32

            lg:grid-cols-2
            lg:gap-12
            lg:pt-36
            lg:pb-16
          "
        >
          <HeroContent />

          <HeroImage />
        </div>

        <HeroStats />
      </ZContainer>
    </section>
  );
}
