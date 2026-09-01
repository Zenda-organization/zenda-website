import { ZContainer } from "@/components/common/ZContainer";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import { IndustryCard } from "./IndustryCard";
import { IndustriesHeader } from "./IndustriesHeader";
import { industries } from "./industries.data";

export function Industries() {
  return (
    <section id="setores" className="relative py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <ScrollReveal>
          <IndustriesHeader />
        </ScrollReveal>

        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>
      </ZContainer>
    </section>
  );
}
