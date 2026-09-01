import { BarChart3, Database, Layers3, Workflow } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const points = [
  {
    icon: Database,
    title: "Informação centralizada",
    description:
      "Tenha os dados essenciais da empresa organizados e acessíveis numa única plataforma.",
  },
  {
    icon: Workflow,
    title: "Processos integrados",
    description:
      "Conecte diferentes áreas do negócio e reduza tarefas repetitivas e informação dispersa.",
  },
  {
    icon: BarChart3,
    title: "Mais controlo",
    description: "Acompanhe operações e indicadores para tomar decisões com mais segurança.",
  },
  {
    icon: Layers3,
    title: "Tudo numa plataforma",
    description: "Clientes, vendas, stock e faturação trabalham em conjunto.",
  },
];

export function ProductERPOverview() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
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
            Uma nova forma de gerir
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
            Menos complexidade.
            <br />
            <span className="text-[#0F4C81]">Mais controlo.</span>
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
            O Zenda ERP foi pensado para tornar a gestão empresarial mais simples, conectando os
            processos essenciais numa experiência única.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
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
      </ZContainer>
    </section>
  );
}
