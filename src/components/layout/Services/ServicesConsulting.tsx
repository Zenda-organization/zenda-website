import { ArrowRight, Check, Lightbulb, ShieldCheck, Target, Zap } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

const points = [
  {
    icon: Target,
    title: "Estratégia",
    description: "Identificamos objetivos, prioridades e oportunidades de transformação.",
  },
  {
    icon: Zap,
    title: "Tecnologia",
    description: "Avaliamos as tecnologias mais adequadas para cada necessidade.",
  },
  {
    icon: ShieldCheck,
    title: "Eficiência",
    description: "Encontramos formas de reduzir tarefas manuais e melhorar processos.",
  },
];

export function ServicesConsulting() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div className="mx-auto max-w-4xl">
          {/* Cabeçalho */}
          <div className="text-center">
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
              <Lightbulb size={16} />
              Consultoria tecnológica
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
              Antes de construir,
              <span className="text-[#0F4C81]"> entendemos.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              Nem todos os desafios precisam começar com software. A nossa consultoria ajuda a
              perceber primeiro o problema e só depois definir a melhor solução.
            </p>
          </div>

          {/* Pontos */}
          <div
            className="
              mt-12
              grid
              gap-4

              md:grid-cols-3
            "
          >
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-[#0F4C81]
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <h3
                    className="
                      mt-5
                      font-bold
                      text-slate-950
                    "
                  >
                    {point.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Lista */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-between
              gap-6
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-6
              py-5

              sm:flex-row
              sm:px-7
            "
          >
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["Análise de processos", "Transformação digital", "Planeamento tecnológico"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-700
                  "
                  >
                    <Check size={15} className="text-[#0F4C81]" />

                    {item}
                  </span>
                ),
              )}
            </div>

            <ZButton variant="ghost" rightIcon={<ArrowRight size={17} />}>
              Saber mais
            </ZButton>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
