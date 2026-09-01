import { ServicesHero } from "@/components/layout/Services/ServicesHero";
import { ServicesOverview } from "@/components/layout/Services/ServicesOverview";
import { ServicesDevelopment } from "@/components/layout/Services/ServicesDevelopment";
import { ServicesManagement } from "@/components/layout/Services/ServicesManagement";
import { ServicesWebMobile } from "@/components/layout/Services/ServicesWebMobile";
import { ServicesConsulting } from "@/components/layout/Services/ServicesConsulting";
import { ServicesCTA } from "@/components/layout/Services/ServicesCTA";

export default function Services() {
  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      <ServicesDevelopment />

      <ServicesManagement />

      <ServicesWebMobile />

      <ServicesConsulting />

      <ServicesCTA />
    </>
  );
}
