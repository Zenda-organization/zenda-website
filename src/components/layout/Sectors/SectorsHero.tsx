import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";

import { ArrowDown, Layers3 } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";
import { fadeIn, slideUp } from "@/animations";

export function SectorsHero() {
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
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.span
            variants={slideUp}
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
          </motion.span>

          <motion.h1
            variants={slideUp}
            transition={{ delay: 0.1 }}
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
          </motion.h1>

          <motion.p
            variants={slideUp}
            transition={{ delay: 0.2 }}
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
          </motion.p>

          <motion.a
            href="#setores"
            variants={slideUp}
            transition={{ delay: 0.3 }}
            whileHover={shouldReduceMotion ? undefined : { y: 4 }}
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
          </motion.a>
        </motion.div>
      </ZContainer>
    </section>
  );
}
