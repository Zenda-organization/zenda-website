import type { ReactNode } from "react";

interface ProcessStepProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
  return (
    <div className="group relative">
      {/* Linha de conexão */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-6
          top-6
          hidden
          h-px
          w-full
          bg-slate-200
          lg:block
        "
      />

      {/* Ícone */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-blue-100
          bg-blue-50
          text-[#0F4C81]
          transition-all
          duration-300
          group-hover:border-[#0F4C81]
          group-hover:bg-[#0F4C81]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Número */}
      <span
        className="
          mt-4
          block
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-blue-600
        "
      >
        {number}
      </span>

      {/* Conteúdo */}
      <h3
        className="
          mt-2
          text-lg
          font-bold
          tracking-tight
          text-slate-950
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}
