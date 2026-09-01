import { BookOpen, GraduationCap, UsersRound } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

export function SectorEducation() {
  return (
    <section id="educacao" className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div className="mx-auto max-w-3xl text-center">
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
            Tecnologia para
            <br />
            <span className="text-[#0F4C81]">instituições mais eficientes.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            Soluções digitais para apoiar a gestão de instituições de ensino, organizar informação e
            simplificar processos administrativos.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-4

            md:grid-cols-3
          "
        >
          {[
            {
              icon: UsersRound,
              title: "Gestão de alunos",
              text: "Organize informações e acompanhe os principais dados dos estudantes.",
            },
            {
              icon: BookOpen,
              title: "Gestão académica",
              text: "Facilite a organização de processos e informação académica.",
            },
            {
              icon: GraduationCap,
              title: "Gestão institucional",
              text: "Tenha uma visão mais integrada das operações da instituição.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  text-center
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-slate-200/40
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-[#0F4C81]
                  "
                >
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-bold text-slate-950">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </ZContainer>
    </section>
  );
}
