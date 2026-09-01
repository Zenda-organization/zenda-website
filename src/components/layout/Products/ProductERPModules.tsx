import { BarChart3, Boxes, FileText, ShoppingCart, Users, WalletCards } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const modules = [
  {
    icon: Users,
    number: "01",
    title: "Clientes",
    description:
      "Organize os dados dos seus clientes, acompanhe o relacionamento e tenha toda a informação comercial centralizada.",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Vendas",
    description:
      "Registe vendas, acompanhe operações comerciais e tenha uma visão mais clara do desempenho do negócio.",
  },
  {
    icon: Boxes,
    number: "03",
    title: "Stock",
    description:
      "Controle produtos, entradas e saídas e acompanhe o inventário para reduzir perdas e melhorar a gestão.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Faturação",
    description:
      "Simplifique o processo de faturação e mantenha os documentos comerciais organizados.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Relatórios",
    description:
      "Transforme os dados da empresa em informação útil para acompanhar resultados e apoiar decisões.",
  },
  {
    icon: WalletCards,
    number: "06",
    title: "Gestão",
    description:
      "Tenha uma visão integrada das principais operações e acompanhe o negócio a partir de um único sistema.",
  },
];

export function ProductERPModules() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Header */}
        <div
          className="
            grid
            gap-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          <div>
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Módulos
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-slate-950

                sm:text-4xl

                lg:text-5xl
              "
            >
              Tudo o que precisa.
              <br />
              <span className="text-[#0F4C81]">Num só lugar.</span>
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              lg:justify-self-end
            "
          >
            O Zenda ERP reúne diferentes áreas da gestão empresarial para que a sua equipa possa
            trabalhar com mais organização, rapidez e controlo.
          </p>
        </div>

        {/* Modules */}
        <div
          className="
            mt-14
            grid
            gap-4

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
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
                "
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
                  {module.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-[#0F4C81]
                    transition-colors
                    duration-300

                    group-hover:bg-[#0F4C81]
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>

                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    text-slate-950
                  "
                >
                  {module.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {module.description}
                </p>
              </article>
            );
          })}
        </div>
      </ZContainer>
    </section>
  );
}
