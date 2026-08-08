import { ArrowRight } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Soluções Tecnológicas para Empresas
      </span>

      <h1 className="max-w-xl text-5xl font-bold leading-tight">
        Transformamos ideias em soluções digitais que impulsionam empresas.
      </h1>

      <p className="max-w-lg text-lg text-slate-600">
        Tecnologia que acelera o crescimento do seu negócio.
      </p>

      <div className="flex flex-wrap gap-4">
        <ZButton size="lg" rightIcon={<ArrowRight size={18} />}>
          Solicitar Demonstração
        </ZButton>

        <ZButton variant="outline" size="lg">
          Conhecer Soluções
        </ZButton>
      </div>
    </div>
  );
}
