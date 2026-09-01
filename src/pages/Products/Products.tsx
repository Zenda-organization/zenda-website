import { ProductsHero } from "@/components/layout/Products/ProductsHero";
import { ProductERPOverview } from "@/components/layout/Products/ProductERPOverview";
import { ProductERPModules } from "@/components/layout/Products/ProductERPModules";
import { ProductERPBenefits } from "@/components/layout/Products/ProductERPBenefits";
import { ProductsCTA } from "@/components/layout/Products/ProductsCTA";

export default function Products() {
  return (
    <>
      <ProductsHero />

      <ProductERPOverview />

      <ProductERPModules />

      <ProductERPBenefits />

      <ProductsCTA />
    </>
  );
}
