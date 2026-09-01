import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp } from "@/animations";

export function AboutCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <motion.div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#0F4C81]
            px-7
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
            amount: 0.2,
          }}
          variants={fadeIn}
        >
          {/* Elementos decorativos */}
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
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-1/3
              h-96
              w-96
              rounded-full
              bg-blue-300/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-3xl
              text-center
            "
          >
            {/* Ícone */}
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeIn}
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
              "
            >
              <MessageCircle size={21} />
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{
                once: true,
                amount: 0.3,
              }}
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
              Tem um desafio?
              <br />
              Vamos construir a solução.
            </motion.h2>

            {/* Descrição */}
            <motion.p
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={slideUp}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-base
                leading-7
                text-blue-100

                sm:text-lg
                sm:leading-8
              "
            >
              Conte-nos o que precisa e descubra como a Zenda pode transformar o seu desafio numa
              solução digital.
            </motion.p>

            {/* Ação */}
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={slideUp}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mt-8 flex justify-center"
            >
              <ZButton variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Falar com a Zenda
              </ZButton>
            </motion.div>
          </div>
        </motion.div>
      </ZContainer>
    </section>
  );
}
