import { motion, useReducedMotion } from "motion/react";

import { Check, TrendingUp, Clock3, BarChart3, ShieldCheck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp, staggerContainer, staggerItem } from "@/animations";

const benefits = [
  {
    title: "Mais produtividade",
    description: "Reduza tarefas repetitivas e concentre a equipa no que realmente importa.",
    icon: TrendingUp,
  },
  {
    title: "Menos tempo perdido",
    description: "Tenha as informações importantes acessíveis sem procurar em várias ferramentas.",
    icon: Clock3,
  },
  {
    title: "Decisões mais inteligentes",
    description:
      "Utilize os dados do negócio para acompanhar resultados e tomar melhores decisões.",
    icon: BarChart3,
  },
  {
    title: "Mais segurança",
    description: "Organize o acesso às informações através de utilizadores e permissões.",
    icon: ShieldCheck,
  },
];

export function ERPBenefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
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
              Vantagens
            </motion.span>

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
              Uma gestão pensada
              <br />
              <span className="text-[#0F4C81]">para crescer consigo.</span>
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="
                mt-5
                max-w-lg
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              O Zenda ERP não serve apenas para organizar informações. Foi pensado para ajudar a sua
              empresa a trabalhar melhor, ganhar tempo e crescer com maior controlo.
            </motion.p>

            {/* Destaque */}
            <motion.div
              variants={slideUp}
              className="
                mt-8
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-blue-100
                bg-blue-50/60
                p-5
              "
            >
              <div
                className="
                  mt-0.5
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0F4C81]
                  text-white
                "
              >
                <Check size={16} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Tudo integrado numa única plataforma
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Menos ferramentas dispersas, mais controlo sobre o seu negócio.
                </p>
              </div>
            </motion.div>
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
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItem}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-shadow
                    duration-300
                    hover:shadow-lg
                  "
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            rotate: 3,
                          }
                    }
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-100
                      text-[#0F4C81]
                      transition-colors
                      duration-300
                      group-hover:bg-[#0F4C81]
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} strokeWidth={2} />
                  </motion.div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      text-slate-950
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </ZContainer>
    </section>
  );
}
