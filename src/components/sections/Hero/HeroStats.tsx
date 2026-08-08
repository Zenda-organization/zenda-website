import { Building2, GraduationCap, HeartPulse, ShoppingCart, Truck } from "lucide-react";

const sectors = [
  {
    label: "Comércio",
    icon: ShoppingCart,
  },
  {
    label: "Saúde",
    icon: HeartPulse,
  },
  {
    label: "Educação",
    icon: GraduationCap,
  },
  {
    label: "Construção",
    icon: Building2,
  },
  {
    label: "Logística",
    icon: Truck,
  },
];

export function HeroStats() {
  return (
    <div className="border-t border-slate-200/70 py-8">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium text-slate-500">Soluções para diferentes setores</p>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-3

          sm:grid-cols-3

          lg:flex
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
      >
        {sectors.map((sector) => {
          const Icon = sector.icon;

          return (
            <div
              key={sector.label}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200/70
                bg-white/50
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-slate-300
                hover:bg-white
                hover:text-slate-900
                hover:shadow-sm
              "
            >
              <Icon size={18} strokeWidth={1.8} />

              <span>{sector.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
