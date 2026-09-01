import { motion, useReducedMotion } from "motion/react";
import { Search, ClipboardList, Code2, Rocket, TrendingUp } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";
import { ProcessStep } from "./ProcessStep";

import { slideUp, staggerContainer } from "@/animations";

const steps = [
  {
    number: "01",
    icon: <Search size={21} />,
    title: "Descobrir",
    description:
      "Compreendemos o seu negócio, os seus desafios e aquilo que precisa de ser melhorado.",
  },
  {
    number: "02",
    icon: <ClipboardList size={21} />,
    title: "Planear",
    description:
      "Definimos a solução, os requisitos, as prioridades e o caminho mais adequado para o projeto.",
  },
  {
    number: "03",
    icon: <Code2 size={21} />,
    title: "Desenvolver",
    description:
      "Transformamos o planeamento em uma solução funcional, moderna e preparada para crescer.",
  },
  {
    number: "04",
    icon: <Rocket size={21} />,
    title: "Entregar",
    description: "Colocamos a solução em funcionamento e garantimos uma implementação organizada.",
  },
  {
    number: "05",
    icon: <TrendingUp size={21} />,
    title: "Evoluir",
    description:
      "Continuamos a melhorar a solução de acordo com o crescimento e as novas necessidades do negócio.",
  },
];

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="processo"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <ZContainer>
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={slideUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span
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
              tracking-wider
              text-blue-700
            "
          >
            Como trabalhamos
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            Do desafio à solução,
            <br />
            <span className="text-[#0F4C81]">passo a passo.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Trabalhamos de forma estruturada para transformar necessidades reais em soluções
            digitais eficientes e sustentáveis.
          </p>
        </motion.div>

        <motion.div
          className="
            mt-16
            grid
            gap-10
            sm:grid-cols-2
            lg:grid-cols-5
            lg:gap-6
          "
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={slideUp}>
              <ProcessStep
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </ZContainer>
    </section>
  );
}
