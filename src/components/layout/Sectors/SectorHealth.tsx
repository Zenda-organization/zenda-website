import { CalendarDays, ClipboardList, HeartPulse, Users } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const features = [
  {
    icon: Users,
    title: "Pacientes",
    description: "Informação organizada e acessível para apoiar a gestão dos atendimentos.",
  },
  {
    icon: CalendarDays,
    title: "Agendamentos",
    description: "Organize horários e reduza conflitos na gestão das marcações.",
  },
  {
    icon: ClipboardList,
    title: "Registos",
    description: "Centralize informação e facilite o acesso aos dados necessários.",
  },
];

export function SectorHealth() {
  return (
    <section id="saude" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Visual */}
          <div
            className="
              order-2
              lg:order-1
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm

                sm:p-8
              "
            >
              <div className="flex items-center gap-3">
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
                  <HeartPulse size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">Gestão de Saúde</p>

                  <p className="text-xs text-slate-500">Informação organizada</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["Consultas", "24"],
                  ["Agendamentos", "18"],
                  ["Pacientes", "156"],
                  ["Atendimentos", "42"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      bg-slate-50
                      px-4
                      py-3
                    "
                  >
                    <span className="text-sm text-slate-600">{label}</span>

                    <span className="text-sm font-bold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 max-w-xl lg:order-2">
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
              <HeartPulse size={16} />
              Saúde
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
              Informação organizada
              <br />
              <span className="text-[#0F4C81]">para melhores processos.</span>
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
              Desenvolvemos soluções para ajudar instituições de saúde a organizar os seus processos
              administrativos e melhorar a gestão da informação.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-[#0F4C81]
                        shadow-sm
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-950">{feature.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
