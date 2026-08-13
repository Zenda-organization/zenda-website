import { ArrowRight } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";
import { ERPMockup } from "@/components/common/ERPMockup";

import { ERPFeatures } from "./ERPFeatures";

export function ERPShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

      <ZContainer>
        {/* Conteúdo principal */}
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
                text-blue-700
              "
            >
              Zenda ERP
            </span>

            <h3
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
              Uma plataforma.
              <br />
              <span className="text-[#0F4C81]">Todo o seu negócio.</span>
            </h3>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              Centralize clientes, vendas, stock, faturação e outras operações essenciais numa única
              plataforma criada para simplificar a gestão da sua empresa.
            </p>

            <div className="mt-8">
              <ZButton variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Conhecer o Zenda ERP
              </ZButton>

              <p className="mt-3 text-xs text-slate-500">
                Gestão simples, integrada e preparada para crescer com o seu negócio.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative w-full">
            <ERPMockup />
          </div>
        </div>

        {/* Funcionalidades */}
        <ERPFeatures />
      </ZContainer>
    </section>
  );
}
