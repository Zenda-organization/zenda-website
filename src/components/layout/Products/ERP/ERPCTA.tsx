import { motion, useReducedMotion } from "motion/react";

import { ArrowRight, Sparkles } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp } from "@/animations";

export function ERPCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <motion.div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#0F4C81]
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-20
              h-72
              w-72
              rounded-full
              bg-blue-300/10
              blur-[100px]
            "
          />

          {/* Conteúdo */}
          <motion.div
            className="
              relative
              z-10
              mx-auto
              max-w-3xl
              text-center
            "
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Label */}
            <motion.div
              variants={fadeIn}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white/90
              "
            >
              <Sparkles size={14} />
              Zenda ERP
            </motion.div>

            {/* Título */}
            <motion.h2
              variants={slideUp}
              className="
                mt-6
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
                lg:leading-[1.1]
              "
            >
              Pronto para simplificar
              <br className="hidden sm:block" />
              <span className="text-blue-100">a gestão do seu negócio?</span>
            </motion.h2>

            {/* Descrição */}
            <motion.p
              variants={slideUp}
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-blue-100/80
                sm:text-lg
                sm:leading-8
              "
            >
              Descubra como o Zenda ERP pode ajudar a sua empresa a centralizar operações, ganhar
              produtividade e crescer com maior controlo.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={slideUp}
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <ZButton variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Solicitar Demonstração
              </ZButton>

              <ZButton
                variant="ghost"
                size="lg"
                className="
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
              >
                Falar com a Zenda
              </ZButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </ZContainer>
    </section>
  );
}
