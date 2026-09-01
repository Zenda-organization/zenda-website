interface BlogCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "Todos",
  "Gestão",
  "Tecnologia",
  "Transformação Digital",
  "Saúde",
  "Desenvolvimento",
];

export function BlogCategories({ activeCategory, onCategoryChange }: BlogCategoriesProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
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
            {category}
          </button>
        );
      })}
    </div>
  );
}
