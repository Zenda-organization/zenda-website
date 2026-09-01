import { useMemo, useState } from "react";

import { ZContainer } from "@/components/common/ZContainer";

import { PortfolioCard } from "./PortfolioCard";
import { PortfolioFilters } from "./PortfolioFilters";
import { portfolioProjects, type PortfolioCategory } from "./portfolio.data";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "todos") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <ZContainer>
        <PortfolioFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-500">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </ZContainer>
    </section>
  );
}
