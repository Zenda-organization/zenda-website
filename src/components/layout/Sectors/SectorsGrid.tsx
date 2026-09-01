import { Building2, GraduationCap, HeartPulse, ShoppingCart, Truck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const sectors = [
  {
    id: "comercio",
    icon: ShoppingCart,
    number: "01",
    title: "Comércio",
    description: "Soluções para melhorar vendas, stock, clientes e operações comerciais.",
  },
  {
    id: "saude",
    icon: HeartPulse,
    number: "02",
    title: "Saúde",
    description: "Tecnologia para organizar processos, informação e operações na área da saúde.",
  },
  {
    id: "educacao",
    icon: GraduationCap,
    number: "03",
    title: "Educação",
    description: "Ferramentas digitais para instituições de ensino e gestão educacional.",
  },
  {
    id: "construcao",
    icon: Building2,
    number: "04",
    title: "Construção",
    description: "Soluções para apoiar a gestão de projetos, recursos e operações.",
  },
  {
    id: "logistica",
    icon: Truck,
    number: "05",
    title: "Logística",
    description: "Tecnologia para melhorar o controlo de operações, recursos e movimentações.",
  },
];

export function SectorsGrid() {
  return (
    <section id="setores" className="pb-20 sm:pb-24 lg:pb-28">
      <ZContainer>
        <div
          className="
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-6
          "
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            const isFeatured = index === 0;

            return (
              <a
                key={sector.id}
                href={`#${sector.id}`}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-100
                  hover:shadow-xl
                  hover:shadow-slate-200/40

                  ${isFeatured ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-2"}
                `}
              >
                {/* Número */}
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-xs
                    font-semibold
                    tracking-wider
                    text-slate-300
                  "
                >
                  {sector.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-[#0F4C81]
                    transition-all
                    duration-300

                    group-hover:bg-[#0F4C81]
                    group-hover:text-white
                  "
                >
                  <Icon size={21} />
                </div>

                <h2
                  className="
                    mt-7
                    text-xl
                    font-bold
                    text-slate-950

                    sm:text-2xl
                  "
                >
                  {sector.title}
                </h2>

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {sector.description}
                </p>

                <span
                  className="
                    mt-7
                    inline-flex
                    text-sm
                    font-semibold
                    text-[#0F4C81]
                  "
                >
                  Ver soluções →
                </span>
              </a>
            );
          })}
        </div>
      </ZContainer>
    </section>
  );
}
