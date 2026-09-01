import { ArrowDown, Layers3 } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

export function SectorsHero() {
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
          top-1/3
          -z-10
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

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
            <Layers3 size={16} />
            Setores
          </span>

          <h1
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.04em]
              text-slate-950

              sm:text-5xl

              lg:text-6xl
              lg:leading-[1.05]
            "
          >
            Tecnologia adaptada
            <br />
            <span className="text-[#0F4C81]">ao seu negócio.</span>
          </h1>

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
            Cada setor tem desafios diferentes. Desenvolvemos soluções digitais capazes de responder
            às necessidades específicas de cada negócio.
          </p>

          <a
            href="#setores"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#0F4C81]
              transition-colors
              hover:text-blue-700
            "
          >
            Explorar setores
            <ArrowDown size={17} />
          </a>
        </div>
      </ZContainer>
    </section>
  );
}
