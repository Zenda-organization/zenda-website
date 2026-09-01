import { BarChart3, Building2, ClipboardCheck, PackageCheck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";
import { slideLeft, slideRight } from "@/animations";

const items = [
  {
    icon: ClipboardCheck,
    title: "Projetos",
    text: "Organize informações e acompanhe diferentes etapas dos projetos.",
  },
  {
    icon: PackageCheck,
    title: "Recursos",
    text: "Tenha maior controlo sobre materiais e recursos utilizados.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento",
    text: "Acompanhe indicadores para apoiar decisões de gestão.",
  },
];

export function SectorConstruction() {
  return (
    <section id="construcao" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-20
          "
        >
          <div {...slideLeft}>
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              <Building2 size={16} />
              Construção
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-slate-950

                sm:text-4xl

                lg:text-5xl
              "
            >
              Mais organização
              <br />
              <span className="text-[#0F4C81]">em cada projeto.</span>
            </h2>

            <p
              className="
                mt-6
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              A tecnologia pode ajudar empresas de construção a centralizar informação, acompanhar
              recursos e melhorar a visibilidade sobre os seus projetos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3" {...slideRight}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-md

                    ${index === 1 ? "sm:translate-y-6" : ""}
                  `}
                >
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
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
