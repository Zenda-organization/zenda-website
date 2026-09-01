import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";
import { ERPMockup } from "@/components/common/ERPMockup";

import { fadeIn, slideUp, slideFromRight } from "@/animations";

export function ERPHero() {
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
        lg:pt-40
        lg:pb-28
      "
    >
      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[140px]
        "
      />

      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Conteúdo */}
          <motion.div
            className="max-w-xl"
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Badge */}
            <motion.span
              variants={fadeIn}
              className="
                inline-flex
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
            </motion.span>

            {/* Título */}
            <motion.h1
              variants={slideUp}
              className="
                mt-5
                text-4xl
                font-bold
                tracking-[-0.03em]
                text-slate-950
                sm:text-5xl
                lg:text-6xl
                lg:leading-[1.05]
              "
            >
              A gestão do seu negócio,
              <br />
              <span className="text-[#0F4C81]">num só lugar.</span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              variants={slideUp}
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
              O Zenda ERP reúne as operações essenciais da sua empresa numa plataforma simples,
              integrada e preparada para acompanhar o seu crescimento.
            </motion.p>

            {/* Botões */}
            <motion.div
              variants={slideUp}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <ZButton size="lg" rightIcon={<ArrowRight size={18} />}>
                Solicitar Demonstração
              </ZButton>

              <ZButton variant="outline" size="lg">
                Ver funcionalidades
              </ZButton>
            </motion.div>

            {/* Texto auxiliar */}
            <motion.p variants={fadeIn} className="mt-4 text-xs text-slate-500">
              Gestão simples, integrada e preparada para crescer.
            </motion.p>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className="relative"
            variants={slideFromRight}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
          >
            <ERPMockup />
          </motion.div>
        </div>
      </ZContainer>
    </section>
  );
}
