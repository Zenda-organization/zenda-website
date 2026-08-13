import { ArrowUpRight, Code2, Handshake, Layers3, TrendingUp } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const differentials = [
  {
    number: "01",
    icon: Handshake,
    title: "Proximidade",
    description:
      "Trabalhamos lado a lado com os nossos clientes para compreender o negócio e construir soluções alinhadas às suas necessidades.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Soluções sob medida",
    description:
      "Cada negócio tem desafios diferentes. Desenvolvemos soluções adaptadas aos processos, objetivos e realidade de cada empresa.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Tecnologia moderna",
    description:
      "Utilizamos tecnologias atuais e boas práticas de desenvolvimento para criar produtos seguros, eficientes e preparados para evoluir.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Visão de longo prazo",
    description:
      "Não pensamos apenas no problema de hoje. Criamos soluções capazes de acompanhar a evolução e o crescimento do negócio.",
  },
];

export function AboutDifferentials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.85fr_1.5fr]
            lg:gap-20
          "
        >
          {/* Introdução */}
          <div className="max-w-md">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Por que a Zenda
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
                lg:leading-[1.1]
              "
            >
              Tecnologia que
              <br />
              entende o<span className="text-[#0F4C81]"> negócio.</span>
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
              Mais do que desenvolver software, procuramos compreender os desafios por trás de cada
              negócio para criar soluções que realmente façam diferença.
            </p>

            <a
              href="/contacto"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#0F4C81]
                transition-colors
                hover:text-blue-700
              "
            >
              Falar com a nossa equipa
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Diferenciais */}
          <div
            className="
              grid
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white

              sm:grid-cols-2
            "
          >
            {differentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`
                    group
                    relative
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-slate-50

                    sm:p-8

                    ${index < 2 ? "border-b border-slate-200" : ""}

                    ${index % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""}
                  `}
                >
                  <div className="flex items-center justify-between">
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
                      <Icon size={21} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        tracking-wider
                        text-slate-400
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-lg
                      font-bold
                      text-slate-950
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
