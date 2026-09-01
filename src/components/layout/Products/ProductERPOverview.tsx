import { BarChart3, Database, Layers3, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ZContainer } from "@/components/common/ZContainer";

import { slideUp, staggerContainer, staggerItem } from "@/animations";

const points = [
  {
    icon: Database,
    title: "Informação centralizada",
    description:
      "Tenha os dados essenciais da empresa organizados e acessíveis numa única plataforma.",
  },
  {
    icon: Workflow,
    title: "Processos integrados",
    description:
      "Conecte diferentes áreas do negócio e reduza tarefas repetitivas e informação dispersa.",
  },
  {
    icon: BarChart3,
    title: "Mais controlo",
    description: "Acompanhe operações e indicadores para tomar decisões com mais segurança.",
  },
  {
    icon: Layers3,
    title: "Tudo numa plataforma",
    description: "Clientes, vendas, stock e faturação trabalham em conjunto.",
  },
];

export function ProductERPOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <ZContainer>
        {/* Cabeçalho */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={slideUp}
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F4C81]
            "
          >
            Uma nova forma de gerir
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-950

              sm:text-4xl

              lg:text-5xl
            "
          >
            Menos complexidade.
            <br />
            <span className="text-[#0F4C81]">Mais controlo.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            O Zenda ERP foi pensado para tornar a gestão empresarial mais simples, conectando os
            processos essenciais numa experiência única.
          </p>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          className="
            mt-14
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
          "
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={staggerContainer}
        >
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                variants={staggerItem}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-100
                  hover:shadow-lg
                  hover:shadow-slate-200/40
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
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
                  <Icon size={19} />
                </div>

                <h3
                  className="
                    mt-5
                    font-bold
                    text-slate-950
                  "
                >
                  {point.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </ZContainer>
    </section>
  );
}
