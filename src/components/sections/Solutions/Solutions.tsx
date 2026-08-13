import { SolutionsHeader } from "./SolutionsHeader";
import { ERPShowcase } from "./ERPShowcase";
import { Services } from "@/components/sections/Services";
import { WhyZenda } from "@/components/sections/WhyZenda";
import { Process } from "@/components/sections/Process";

export function Solutions() {
  return (
    <div id="solucoes">
      <WhyZenda />

      <Process />

      <Services />

      <SolutionsHeader />

      <ERPShowcase />
    </div>
  );
}
