import { motion, useReducedMotion } from "motion/react";

import { Users, ShoppingCart, Package, Receipt, BarChart3, ShieldCheck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

import { fadeIn, slideUp, staggerContainer, staggerItem } from "@/animations";

const modules = [
  {
    title: "Clientes",
    description:
      "Centralize os dados dos seus clientes e tenha todas as informações importantes num só lugar.",
    icon: Users,
  },
  {
    title: "Vendas",
    description: "Acompanhe vendas, pedidos e operações comerciais de forma simples e organizada.",
    icon: ShoppingCart,
  },
  {
    title: "Stock",
    description: "Controle entradas, saídas e disponibilidade dos produtos em tempo real.",
    icon: Package,
  },
  {
    title: "Faturação",
    description:
      "Organize a faturação e tenha maior controlo sobre os documentos e operações financeiras.",
    icon: Receipt,
  },
  {
    title: "Relatórios",
    description:
      "Transforme os dados do negócio em informações úteis para apoiar as suas decisões.",
    icon: BarChart3,
  },
  {
    title: "Utilizadores",
    description:
      "Defina acessos e permissões para garantir que cada utilizador tenha o nível de acesso adequado.",
    icon: ShieldCheck,
  },
];

export function ERPModules() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <ZContainer>
        {/* Cabeçalho */}
        <motion.div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
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
            Funcionalidades
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
            Tudo o que precisa para
            <br />
            <span className="text-[#0F4C81]">gerir o seu negócio.</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Módulos integrados para simplificar as principais operações da sua empresa e dar-lhe
            maior controlo sobre o negócio.
          </motion.p>
        </motion.div>

        {/* Módulos */}
        <motion.div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
          "
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={module.title}
                variants={staggerItem}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
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
                  hover:shadow-xl
                "
              >
                {/* Ícone */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                        }
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-[#0F4C81]
                    transition-colors
                    duration-300
                    group-hover:bg-[#0F4C81]
                    group-hover:text-white
                  "
                >
                  <Icon size={21} strokeWidth={2} />
                </motion.div>

                {/* Conteúdo */}
                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    text-slate-950
                  "
                >
                  {module.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {module.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </ZContainer>
    </section>
  );
}
