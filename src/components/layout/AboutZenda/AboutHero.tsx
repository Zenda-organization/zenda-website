import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp } from "@/animations";

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

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
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

      <ZContainer>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeIn}
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
            Sobre a Zenda
          </motion.span>

          {/* Título */}
          <motion.h1
            variants={slideUp}
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
            Tecnologia criada para <span className="text-[#0F4C81]">fazer negócios avançarem.</span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            variants={slideUp}
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
            A Zenda é uma empresa de tecnologia focada no desenvolvimento de soluções digitais que
            simplificam processos, melhoram a gestão e ajudam empresas a crescer de forma mais
            eficiente.
          </motion.p>

          {/* Navegação interna */}
          <motion.div variants={slideUp} className="mt-10 flex justify-center">
            <a
              href="#quem-somos"
              className="
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
              Conheça a nossa história
              <ArrowDown size={17} />
            </a>
          </motion.div>
        </motion.div>
      </ZContainer>
    </section>
  );
}
