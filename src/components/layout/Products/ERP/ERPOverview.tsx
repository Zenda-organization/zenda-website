import { motion, useReducedMotion } from "motion/react";

import { CheckCircle2 } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp, staggerContainer, staggerItem } from "@/animations";

const benefits = [
  "Centralização das informações",
  "Redução de tarefas manuais",
  "Maior controlo das operações",
  "Acesso rápido aos dados do negócio",
];

export function ERPOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
            lg:gap-20
          "
        >
          {/* Conteúdo */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.2,
            }}
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
            <motion.span
              variants={fadeIn}
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Porquê Zenda ERP?
            </motion.span>

            {/* Título */}
            <motion.h2
              variants={slideUp}
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-4xl
              "
            >
              Menos complexidade.
              <br />
              <span className="text-[#0F4C81]">Mais controlo.</span>
            </motion.h2>

            {/* Descrição */}
            <motion.p
              variants={slideUp}
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              Muitas empresas utilizam ferramentas diferentes para controlar áreas diferentes do
              negócio. O Zenda ERP foi pensado para reunir essas operações numa única experiência.
            </motion.p>
          </motion.div>

          {/* Benefícios */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={staggerItem}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-shadow
                  duration-300
                  hover:shadow-lg
                "
              >
                <CheckCircle2
                  size={20}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#0F4C81]
                  "
                />

                <span
                  className="
                    text-sm
                    font-medium
                    leading-6
                    text-slate-700
                  "
                >
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ZContainer>
    </section>
  );
}
