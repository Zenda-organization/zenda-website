import { ArrowRight, Check, Globe2, Smartphone } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

const solutions = [
  "Websites institucionais",
  "Plataformas web",
  "Aplicações mobile",
  "Interfaces responsivas",
];

export function ServicesWebMobile() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
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
          {/* Conteúdo */}
          <div className="max-w-xl">
            <span
              className="
                inline-flex
                items-center
                gap-2
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
                text-[#0F4C81]
              "
            >
              <Globe2 size={14} />
              Web & Mobile
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
              A sua presença digital
              <br />
              <span className="text-[#0F4C81]">começa aqui.</span>
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
              Criamos experiências digitais modernas que representam a sua marca, facilitam a
              interação com os seus clientes e funcionam em qualquer dispositivo.
            </p>

            <ul className="mt-7 space-y-3">
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-700
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-[#0F4C81]
                    "
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  {solution}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ZButton variant="primary" rightIcon={<ArrowRight size={17} />}>
                Falar sobre o meu projeto
              </ZButton>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Desktop */}
            <div
              className="
                relative
                mx-auto
                max-w-lg
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-5
                shadow-xl
                shadow-slate-200/40

                sm:p-7
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                "
              >
                {/* Browser */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-slate-100
                    px-4
                    py-3
                  "
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                  <div
                    className="
                      ml-3
                      h-5
                      flex-1
                      rounded-md
                      bg-slate-50
                    "
                  />
                </div>

                {/* Página */}
                <div className="p-6">
                  <div className="h-3 w-24 rounded-full bg-[#0F4C81]/20" />

                  <div className="mt-5 h-7 w-3/4 rounded-lg bg-slate-100" />

                  <div className="mt-3 h-3 w-full rounded-full bg-slate-100" />
                  <div className="mt-2 h-3 w-5/6 rounded-full bg-slate-100" />

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl bg-blue-50" />
                    <div className="h-20 rounded-xl bg-slate-50" />
                    <div className="h-20 rounded-xl bg-blue-50" />
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div
                className="
                  absolute
                  -bottom-5
                  -right-3
                  w-28
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-xl

                  sm:-right-5
                  sm:w-32
                "
              >
                <div className="rounded-xl bg-slate-50 p-3">
                  <Smartphone size={18} className="text-[#0F4C81]" />

                  <div className="mt-4 h-2 w-14 rounded-full bg-slate-200" />
                  <div className="mt-2 h-2 w-10 rounded-full bg-slate-100" />

                  <div className="mt-4 h-12 rounded-lg bg-blue-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
