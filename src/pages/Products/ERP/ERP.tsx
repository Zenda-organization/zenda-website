import { ScrollReveal } from "@/animations";

import { ERPHero } from "@/components/layout/Products/ERP/ERPHero";
import { ERPOverview } from "@/components/layout/Products/ERP/ERPOverview";
import { ERPModules } from "@/components/layout/Products/ERP/ERPModules";
import { ERPBenefits } from "@/components/layout/Products/ERP/ERPBenefits";
import { ERPCTA } from "@/components/layout/Products/ERP/ERPCTA";

export default function ERP() {
  return (
    <>
      <ERPHero />

      <ScrollReveal>
        <ERPOverview />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ERPModules />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ERPBenefits />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ERPCTA />
      </ScrollReveal>
    </>
  );
}
