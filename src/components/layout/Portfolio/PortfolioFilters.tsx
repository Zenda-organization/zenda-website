import type { PortfolioCategory } from "./portfolio.data";

interface PortfolioFiltersProps {
  activeCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
}

const filters: {
  label: string;
  value: PortfolioCategory;
}[] = [
  {
    label: "Todos",
    value: "todos",
  },
  {
    label: "Gestão",
    value: "gestao",
  },
  {
    label: "Saúde",
    value: "saude",
  },
  {
    label: "Comércio",
    value: "comercio",
  },
];

export function PortfolioFilters({ activeCategory, onCategoryChange }: PortfolioFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {filters.map((filter) => {
        const isActive = activeCategory === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onCategoryChange(filter.value)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-[#0F4C81] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
