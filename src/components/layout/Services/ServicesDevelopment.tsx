import { ArrowRight, Check, Code2 } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";
import { ZButton } from "@/components/common/ZButton";

const features = [
  "Sistemas personalizados",
  "Arquitetura escalável",
  "Integração de APIs",
  "Automatização de processos",
];

export function ServicesDevelopment() {
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
              <Code2 size={14} />
              Desenvolvimento
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
              Software criado para
              <span className="text-[#0F4C81]"> o seu negócio.</span>
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
              Desenvolvemos sistemas personalizados para empresas que precisam de mais do que uma
              solução pronta. Analisamos os processos do negócio e transformamos necessidades
              específicas em software funcional e escalável.
            </p>

            <ul className="mt-7 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
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

                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ZButton variant="primary" rightIcon={<ArrowRight size={17} />}>
                Falar sobre um projeto
              </ZButton>
            </div>
          </div>

          {/* Visual */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-slate-950
              p-6
              shadow-xl
              shadow-slate-200/40

              sm:p-8
            "
          >
            {/* Barra superior */}
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            </div>

            {/* Código visual */}
            <div className="mt-8 space-y-4 font-mono text-xs sm:text-sm">
              <div className="text-blue-300">
                const <span className="text-white">solution</span> =
              </div>

              <div className="pl-5 text-slate-400">
                zenda.<span className="text-white">build</span>(
              </div>

              <div className="pl-10 text-slate-400">
                business:
                <span className="text-blue-300"> yourBusiness</span>
              </div>

              <div className="pl-10 text-slate-400">
                technology:
                <span className="text-blue-300"> modern</span>
              </div>

              <div className="pl-10 text-slate-400">
                scalable:
                <span className="text-blue-300"> true</span>
              </div>

              <div className="pl-5 text-slate-400">);</div>

              <div className="pt-4 text-green-300">✓ solution.ready()</div>
            </div>

            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-24
                h-56
                w-56
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
            />
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
