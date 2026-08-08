import { ArrowRight, Sparkles } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      {/* Badge */}
      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200
          bg-white/70
          px-4
          py-2
          text-sm
          font-medium
          text-slate-600
          shadow-sm
          backdrop-blur-md
        "
      >
        <Sparkles size={16} className="text-primary" />

        <span>Tecnologia para empresas que querem crescer</span>
      </div>

      {/* Título */}
      <h1
        className="
          max-w-3xl
          text-4xl
          font-bold
          leading-[1.08]
          tracking-[-0.04em]
          text-slate-950

          sm:text-5xl

          lg:text-6xl

          xl:text-[4.5rem]
        "
      >
        Transformamos ideias em <span className="text-primary">soluções digitais.</span>
      </h1>

      {/* Descrição */}
      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-7
          text-slate-600

          sm:text-lg
          sm:leading-8
        "
      >
        Tecnologia que acelera o crescimento do seu negócio. Desenvolvemos soluções digitais
        pensadas para simplificar processos, aumentar resultados e preparar empresas para o futuro.
      </p>

      {/* Ações */}
      <div
        className="
          mt-8
          flex
          flex-col
          gap-3

          sm:flex-row
        "
      >
        <ZButton size="lg" className="group">
          Solicitar Demonstração
          <ArrowRight
            size={18}
            className="
              ml-2
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </ZButton>

        <ZButton size="lg" variant="outline">
          Conhecer a Zenda
        </ZButton>
      </div>
    </div>
  );
}
