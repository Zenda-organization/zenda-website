import { ArrowRight, Compass, Hammer, Lightbulb, Rocket } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Descobrir",
    description:
      "Começamos por compreender o negócio, os seus desafios, objetivos e oportunidades.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planear",
    description:
      "Transformamos necessidades em uma estratégia clara, definindo prioridades e a melhor solução.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Construir",
    description:
      "Desenvolvemos a solução com tecnologia moderna, foco na qualidade e atenção à experiência.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Evoluir",
    description:
      "Acompanhamos a solução e procuramos continuamente novas formas de gerar valor para o negócio.",
  },
];

export function AboutProcess() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Cabeçalho */}
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_1.5fr]
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
              Como trabalhamos
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
              Da ideia à solução,
              <br />
              <span className="text-[#0F4C81]">juntos.</span>
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

              lg:ml-auto
            "
          >
            Trabalhamos de forma próxima com cada cliente, transformando desafios de negócio em
            soluções digitais práticas, escaláveis e preparadas para acompanhar o crescimento da
            empresa.
          </p>
        </div>

        {/* Processo */}
        <div
          className="
            mt-14
            grid
            gap-0

            md:grid-cols-2

            lg:grid-cols-4
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.number}
                className="
                    group
                    relative
                    border-t
                    border-slate-200
                    py-8
                    md:px-6
                    md:first:pl-0

                    lg:border-l
                    lg:border-t-0
                    lg:px-7
                    lg:py-0
                    lg:first:border-l-0
                    lg:first:pl-0
                    lg:last:pr-0
                    "
              >
                {/* Número */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-wider
                      text-[#0F4C81]
                    "
                  >
                    {step.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-[#0F4C81]
                    "
                  />
                </div>

                {/* Título */}
                <h3
                  className="
                    mt-8
                    text-xl
                    font-bold
                    text-slate-950
                  "
                >
                  {step.title}
                </h3>

                {/* Descrição */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {step.description}
                </p>

                {/* Indicador */}
                {!isLast && (
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    className="
                      absolute
                      right-[-9px]
                      top-1/2
                      hidden
                      -translate-y-1/2
                      bg-white
                      text-slate-300

                      lg:block
                    "
                  />
                )}
              </div>
            );
          })}
        </div>
      </ZContainer>
    </section>
  );
}
