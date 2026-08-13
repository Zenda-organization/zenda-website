import { Eye, HeartHandshake, Lightbulb, Target, Users, Zap } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Procuramos novas formas de resolver problemas e transformar ideias em soluções úteis.",
  },
  {
    icon: Users,
    title: "Pessoas",
    description:
      "Colocamos pessoas no centro das nossas soluções, criando experiências simples e acessíveis.",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso",
    description: "Construímos relações baseadas em confiança, responsabilidade e resultados.",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description:
      "Desenvolvemos tecnologia para eliminar complexidade e tornar processos mais eficientes.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F4C81]
            "
          >
            O que nos orienta
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
            Os princípios por trás
            <span className="text-[#0F4C81]"> da Zenda.</span>
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
            A nossa forma de trabalhar é guiada por princípios que influenciam cada produto, projeto
            e relação que construímos.
          </p>
        </div>

        {/* Missão e Visão */}
        <div
          className="
            mt-14
            grid
            gap-6

            lg:grid-cols-2
          "
        >
          {/* Missão */}
          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8

              sm:p-10
            "
          >
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
              "
            >
              <Target size={22} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-950
              "
            >
              Missão
            </h3>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-600
              "
            >
              Desenvolver soluções tecnológicas simples, eficientes e acessíveis que ajudem empresas
              a melhorar a sua gestão, otimizar processos e crescer de forma sustentável.
            </p>
          </div>

          {/* Visão */}
          <div
            className="
              rounded-3xl
              bg-[#0F4C81]
              p-8

              sm:p-10
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/10
                text-white
              "
            >
              <Eye size={22} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-white
              "
            >
              Visão
            </h3>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-blue-100
              "
            >
              Tornar a Zenda uma referência em soluções tecnológicas em Angola, reconhecida pela
              inovação, qualidade e impacto positivo nos negócios.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-16">
          <div className="mb-8">
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950

                sm:text-3xl
              "
            >
              Os nossos valores
            </h3>
          </div>

          <div
            className="
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-slate-200

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    bg-white
                    p-7

                    sm:p-8
                  "
                >
                  <Icon size={22} className="text-[#0F4C81]" />

                  <h4
                    className="
                      mt-5
                      font-semibold
                      text-slate-950
                    "
                  >
                    {value.title}
                  </h4>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {value.description}
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
