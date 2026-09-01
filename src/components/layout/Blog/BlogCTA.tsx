import { ArrowRight } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

export function BlogCTA() {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <ZContainer>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#0F4C81]
            px-7
            py-12
            text-center

            sm:px-10
            sm:py-16

            lg:px-16
            lg:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-2xl">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-blue-100
              "
            >
              Tecnologia começa com conhecimento
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-white

                sm:text-4xl

                lg:text-5xl
              "
            >
              Quer transformar o seu negócio?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-base
                leading-7
                text-blue-100

                sm:text-lg
              "
            >
              Fale connosco e descubra como podemos transformar os desafios da sua empresa em
              soluções digitais.
            </p>

            <div className="mt-8">
              <ZButton variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Falar com a Zenda
              </ZButton>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
