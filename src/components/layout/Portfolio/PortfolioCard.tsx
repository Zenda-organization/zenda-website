import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "./portfolio.data";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const Icon = project.icon;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-slate-200/50
      "
    >
      {/* Visual */}
      <div
        className="
          relative
          flex
          h-64
          items-center
          justify-center
          overflow-hidden
          bg-slate-50
        "
      >
        <div
          className="
            absolute
            h-48
            w-48
            rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-[#0F4C81]
            shadow-lg
            shadow-slate-200/50
            transition-transform
            duration-300

            group-hover:scale-110
          "
        >
          <Icon size={34} strokeWidth={1.7} />
        </div>

        {project.featured && (
          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-[#0F4C81]
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-white
            "
          >
            Destaque
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-[#0F4C81]
              "
            >
              {project.category}
            </span>

            <h2
              className="
                mt-2
                text-xl
                font-bold
                tracking-tight
                text-slate-950
              "
            >
              {project.title}
            </h2>
          </div>

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              text-slate-500
              transition-all
              duration-300

              group-hover:border-[#0F4C81]
              group-hover:bg-[#0F4C81]
              group-hover:text-white
            "
          >
            <ArrowUpRight size={17} />
          </div>
        </div>

        <p
          className="
            mt-4
            text-sm
            leading-6
            text-slate-600
          "
        >
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                bg-slate-100
                px-3
                py-1
                text-xs
                font-medium
                text-slate-600
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
