import { SectorsHero } from "@/components/layout/Sectors/SectorsHero";
import { SectorsGrid } from "@/components/layout/Sectors/SectorsGrid";

import { SectorCommerce } from "@/components/layout/Sectors/SectorCommerce";
import { SectorHealth } from "@/components/layout/Sectors/SectorHealth";
import { SectorEducation } from "@/components/layout/Sectors/SectorEducation";
import { SectorConstruction } from "@/components/layout/Sectors/SectorConstruction";
import { SectorLogistics } from "@/components/layout/Sectors/SectorLogistics";
import { SectorsCTA } from "@/components/layout/Sectors/SectorsCTA";
import { SectorsOverview } from "@/components/layout/Sectors/SectorsOverview";

export default function Sectors() {
  return (
    <>
      <SectorsHero />

      <SectorsOverview />

      <SectorsGrid />

      <SectorCommerce />

      <SectorHealth />

      <SectorEducation />

      <SectorConstruction />

      <SectorLogistics />

      <SectorsCTA />
    </>
  );
}
