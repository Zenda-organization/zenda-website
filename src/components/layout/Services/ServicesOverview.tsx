import { Code2, Globe2, LayoutDashboard, Lightbulb, Smartphone } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas personalizados para responder às necessidades específicas de cada negócio.",
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "Sistemas de Gestão",
    description:
      "Desenvolvemos soluções para centralizar operações, organizar informação e melhorar a gestão empresarial.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Websites e Plataformas Web",
    description:
      "Criamos experiências digitais modernas, rápidas e responsivas para empresas e organizações.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Aplicações Mobile",
    description:
      "Transformamos ideias em aplicações móveis intuitivas e preparadas para diferentes dispositivos.",
  },
  {
    icon: Lightbulb,
    number: "05",
    title: "Consultoria Tecnológica",
    description:
      "Ajudamos empresas a identificar oportunidades e escolher tecnologias adequadas aos seus objetivos.",
  },
];

export function ServicesOverview() {
  return (
    <section id="servicos" className="border-t border-slate-100 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Cabeçalho */}
        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F4C81]
            "
          >
            O que fazemos
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
            Tecnologia pensada para
            <span className="text-[#0F4C81]"> o seu negócio.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            Da conceção ao desenvolvimento, combinamos estratégia, design e tecnologia para criar
            soluções que geram valor real.
          </p>
        </div>

        {/* Serviços */}
        <div
          className="
            mt-14
            grid
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
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
                  hover:shadow-lg
                  hover:shadow-slate-200/40

                  sm:p-8
                "
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
                    {service.number}
                  </span>
                </div>

                <h3
                  className="
                    mt-7
                    text-xl
                    font-bold
                    text-slate-950
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {service.description}
                </p>

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
