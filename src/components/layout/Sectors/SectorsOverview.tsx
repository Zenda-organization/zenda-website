import { GraduationCap, HardHat, HeartPulse, ShoppingBag, Truck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const sectors = [
  {
    icon: ShoppingBag,
    number: "01",
    title: "Comércio",
    description:
      "Soluções para organizar vendas, clientes, stock e operações comerciais, ajudando o negócio a trabalhar com mais controlo e eficiência.",
    features: ["Gestão de clientes", "Controlo de stock", "Gestão de vendas"],
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "Saúde",
    description:
      "Tecnologia para melhorar a organização de clínicas e instituições de saúde, facilitando a gestão de pacientes, profissionais e informação.",
    features: ["Gestão de pacientes", "Agendamento", "Registos e informação"],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Educação",
    description:
      "Sistemas que ajudam instituições de ensino a centralizar informação e simplificar processos administrativos e académicos.",
    features: ["Gestão de alunos", "Gestão académica", "Processos administrativos"],
  },
  {
    icon: HardHat,
    number: "04",
    title: "Construção",
    description:
      "Ferramentas digitais para acompanhar projetos, recursos e operações, proporcionando maior organização e visibilidade.",
    features: ["Gestão de projetos", "Recursos e equipas", "Acompanhamento de operações"],
  },
  {
    icon: Truck,
    number: "05",
    title: "Logística",
    description:
      "Soluções para melhorar o controlo de operações logísticas, movimentação de recursos e acompanhamento de processos.",
    features: ["Gestão de operações", "Controlo de recursos", "Acompanhamento logístico"],
  },
];

export function SectorsOverview() {
  return (
    <section id="setores" className="border-t border-slate-100 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F4C81]
            "
          >
            Onde atuamos
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
            Soluções para diferentes
            <br />
            <span className="text-[#0F4C81]">realidades de negócio.</span>
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
            A tecnologia da Zenda adapta-se ao contexto de cada setor, permitindo criar soluções
            alinhadas com os processos, desafios e objetivos de cada organização.
          </p>
        </div>

        {/* Setores */}
        <div
          className="
            mt-14
            grid
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <article
                key={sector.number}
                className="
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

                  sm:p-8
                "
              >
                {/* Número */}
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-[#0F4C81]
                      transition-all
                      duration-300

                      group-hover:bg-[#0F4C81]
                      group-hover:text-white
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-wider
                      text-slate-300
                    "
                  >
                    {sector.number}
                  </span>
                </div>

                {/* Conteúdo */}
                <h3
                  className="
                    mt-7
                    text-xl
                    font-bold
                    text-slate-950
                  "
                >
                  {sector.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {sector.description}
                </p>

                {/* Funcionalidades */}
                <div className="mt-6 space-y-2.5">
                  {sector.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#0F4C81]
                        "
                      />

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Linha inferior */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-[#0F4C81]
                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>
      </ZContainer>
    </section>
  );
}
