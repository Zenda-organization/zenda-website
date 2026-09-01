import { ArrowRight, Check } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";
import { ERPMockup } from "@/components/common/ERPMockup";

export function ProductsHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
        pb-20

        sm:pt-36
        sm:pb-24

        lg:pt-44
        lg:pb-28
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/5
          blur-[130px]
        "
      />

      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >
          {/* Conteúdo */}
          <div className="max-w-xl">
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
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Produto
            </span>

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                tracking-[-0.04em]
                text-slate-950

                sm:text-5xl

                lg:text-6xl
                lg:leading-[1.05]
              "
            >
              Gestão empresarial
              <br />
              <span className="text-[#0F4C81]">mais simples.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              O Zenda ERP centraliza as principais operações da sua empresa numa única plataforma,
              permitindo gerir o negócio com mais organização, controlo e eficiência.
            </p>

            {/* Benefícios rápidos */}
            <div className="mt-7 space-y-3">
              {[
                "Clientes e vendas centralizados",
                "Stock e faturação integrados",
                "Informação acessível num só lugar",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
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

                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <ZButton variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Solicitar demonstração
              </ZButton>

              <ZButton variant="ghost" size="lg">
                Conhecer funcionalidades
              </ZButton>
            </div>
          </div>

          {/* ERP */}
          <div className="relative">
            <ERPMockup />
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
