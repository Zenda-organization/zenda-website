import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  number: string;
}

export function ServiceCard({ icon, title, description, number }: ServiceCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        hover:shadow-blue-900/5
      "
    >
      {/* Número */}
      <span
        className="
          absolute
          right-6
          top-5
          text-sm
          font-semibold
          text-slate-200
          transition-colors
          duration-300
          group-hover:text-blue-100
        "
      >
        {number}
      </span>

      {/* Ícone */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          text-[#0F4C81]
          transition-all
          duration-300
          group-hover:bg-[#0F4C81]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <h3
        className="
          mt-6
          text-xl
          font-bold
          tracking-tight
          text-slate-950
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-slate-600
        "
      >
        {description}
      </p>
    </article>
  );
}
