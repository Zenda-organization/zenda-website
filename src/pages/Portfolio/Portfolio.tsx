import { PortfolioHero } from "@/components/layout/Portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/layout/Portfolio/PortfolioGrid";
import { PortfolioCTA } from "@/components/layout/Portfolio/PortfolioCTA";

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />

      <PortfolioGrid />

      <PortfolioCTA />
    </>
  );
}
