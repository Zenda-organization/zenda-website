import { BookOpen, CalendarDays, GraduationCap, Users } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";
import { slideLeft, slideRight } from "@/animations";

const features = [
  {
    icon: Users,
    title: "Alunos",
    description: "Centralize informações dos alunos e facilite o acompanhamento administrativo.",
  },
  {
    icon: CalendarDays,
    title: "Turmas",
    description: "Organize turmas, horários e informações académicas num único lugar.",
  },
  {
    icon: BookOpen,
    title: "Gestão académica",
    description: "Tenha processos educacionais mais organizados e informação facilmente acessível.",
  },
];

export function SectorEducation() {
  return (
    <section id="educacao" className="py-20 sm:py-24 lg:py-28">
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
          <div className="max-w-xl" {...slideLeft}>
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
              <GraduationCap size={16} />
              Educação
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
              Gestão educacional
              <br />
              <span className="text-[#0F4C81]">mais organizada.</span>
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
              Desenvolvemos soluções digitais para ajudar instituições de ensino a organizar
              informações, acompanhar processos e melhorar a gestão das suas operações.
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
                        bg-blue-50
                        text-[#0F4C81]
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

          <div {...slideRight}>
            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-6

                sm:p-8
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
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
                    <GraduationCap size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">Gestão Educacional</p>

                    <p className="text-xs text-slate-500">Informação centralizada</p>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    ["Alunos", "428"],
                    ["Turmas", "24"],
                    ["Professores", "36"],
                    ["Cursos", "12"],
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
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
