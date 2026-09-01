import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

import { slideUp } from "@/animations";

export function ProductsCTA() {
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
            text-center

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
          variants={slideUp}
        >
          {/* Glow superior */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-32
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          {/* Glow inferior */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-1/4
              h-80
              w-80
              rounded-full
              bg-blue-300/10
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-3xl">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-blue-100
              "
            >
              Zenda ERP
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
              Pronto para simplificar
              <br />a gestão do seu negócio?
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
                sm:leading-8
              "
            >
              Conheça o Zenda ERP e descubra como uma gestão mais integrada pode ajudar a sua
              empresa a crescer.
            </p>

            <div className="mt-8 flex justify-center">
              <ZButton variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Solicitar demonstração
              </ZButton>
            </div>
          </div>
        </motion.div>
      </ZContainer>
    </section>
  );
}
