import { Puzzle, Cpu, Target, TrendingUp } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

import { WhyZendaCard } from "./WhyZendaCard";

const advantages = [
  {
    number: "01",
    icon: <Puzzle size={24} />,
    title: "Soluções sob medida",
    description:
      "Desenvolvemos soluções adaptadas às necessidades, processos e objetivos específicos de cada empresa.",
  },
  {
    number: "02",
    icon: <Cpu size={24} />,
    title: "Tecnologia moderna",
    description:
      "Utilizamos tecnologias atuais para criar sistemas seguros, eficientes, escaláveis e preparados para evoluir.",
  },
  {
    number: "03",
    icon: <Target size={24} />,
    title: "Foco no negócio",
    description:
      "A tecnologia é apenas o meio. O nosso foco está em resolver problemas reais e gerar valor para a sua empresa.",
  },
  {
    number: "04",
    icon: <TrendingUp size={24} />,
    title: "Preparado para crescer",
    description:
      "Criamos soluções com uma arquitetura preparada para acompanhar o crescimento e as novas necessidades do negócio.",
  },
];

export function WhyZenda() {
  return (
    <section
      id="por-que-zenda"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <ZContainer>
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            Por que a Zenda?
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-950

              sm:text-4xl

              lg:text-5xl
              lg:leading-[1.1]
            "
          >
            Tecnologia que trabalha
            <br />
            <span className="text-[#0F4C81]">a favor do seu negócio.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            Desenvolvemos soluções pensando não apenas na tecnologia, mas nos resultados que ela
            pode gerar para a sua empresa.
          </p>
        </div>

        {/* Diferenciais */}
        <div
          className="
            mt-14
            grid
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {advantages.map((advantage) => (
            <WhyZendaCard
              key={advantage.number}
              number={advantage.number}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </ZContainer>
    </section>
  );
}
