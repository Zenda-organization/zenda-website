import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ZContainer } from "@/components/common/ZContainer";

import { slideLeft, slideRight, slideUp, staggerContainer } from "@/animations";

const highlights = [
  "Soluções pensadas para necessidades reais",
  "Tecnologia simples e fácil de utilizar",
  "Desenvolvimento orientado para resultados",
];

export function AboutStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="quem-somos"
      className="
        border-t
        border-slate-100
        py-20

        sm:py-24

        lg:py-28
      "
    >
      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =========================================================
              CONTEÚDO
          ========================================================= */}
          <motion.div
            className="max-w-xl"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={slideRight}
          >
            {/* Eyebrow */}
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Quem somos
            </span>

            {/* Título */}
            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-slate-950

                sm:text-4xl

                lg:text-5xl
                lg:leading-[1.1]
              "
            >
              Construímos tecnologia
              <br />
              <span className="text-[#0F4C81]">com propósito.</span>
            </h2>

            {/* Primeiro parágrafo */}
            <p
              className="
                mt-6
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              A Zenda nasceu com uma ideia simples: a tecnologia deve tornar os negócios mais
              simples, não mais complicados.
            </p>

            {/* Segundo parágrafo */}
            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              Criamos produtos e soluções digitais que aproximam pessoas, processos e informação,
              permitindo que as empresas tenham mais controlo, eficiência e capacidade para crescer.
            </p>

            {/* =====================================================
                DESTAQUES
            ===================================================== */}
            <motion.div
              className="mt-8 space-y-4"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
            >
              {highlights.map((item) => (
                <motion.div key={item} variants={slideUp} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-[#0F4C81]" />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Link */}
            <a
              href="/contacto"
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
              Fale com a Zenda
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* =========================================================
              DESTAQUE VISUAL
          ========================================================= */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={slideLeft}
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#0F4C81]
              p-8

              sm:p-10

              lg:p-12
            "
          >
            {/* Glow superior */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-white/10
                blur-2xl
              "
            />

            {/* Glow inferior */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-32
                -left-20
                h-72
                w-72
                rounded-full
                bg-blue-300/10
                blur-3xl
              "
            />

            {/* Conteúdo */}
            <div className="relative">
              {/* Pequeno título */}
              <span
                className="
                  text-sm
                  font-medium
                  text-blue-200
                "
              >
                O nosso propósito
              </span>

              {/* Título */}
              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  leading-tight
                  text-white

                  sm:text-3xl
                "
              >
                Tornar a tecnologia mais acessível, útil e transformadora para os negócios.
              </h3>

              {/* Separador */}
              <div className="mt-10 h-px bg-white/15" />

              {/* Descrição */}
              <p
                className="
                  mt-6
                  text-sm
                  leading-6
                  text-blue-100
                "
              >
                Da gestão empresarial ao desenvolvimento de soluções personalizadas, criamos
                ferramentas pensadas para gerar impacto real.
              </p>

              {/* Indicador */}
              <div className="mt-10 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white" />

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-blue-100
                  "
                >
                  Tecnologia com propósito
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </ZContainer>
    </section>
  );
}
