import { ArrowUpRight, Check, Gauge, LockKeyhole, RefreshCw } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const benefits = [
  "Centralização das informações",
  "Redução de tarefas manuais",
  "Maior controlo das operações",
  "Informação disponível em tempo real",
  "Processos mais organizados",
  "Base preparada para crescimento",
];

export function ProductERPBenefits() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
          {/* Visual */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-sm

              sm:p-9
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-blue-50
                blur-3xl
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">Visão geral</p>

                  <h3 className="mt-1 text-xl font-bold text-slate-950">Desempenho do negócio</h3>
                </div>

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
                  "
                >
                  <Gauge size={19} />
                </div>
              </div>

              {/* Métricas */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                "
              >
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Vendas</p>

                  <p className="mt-2 text-xl font-bold text-slate-950">+24%</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Clientes</p>

                  <p className="mt-2 text-xl font-bold text-slate-950">+18%</p>
                </div>
              </div>

              {/* Gráfico simplificado */}
              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                <div className="flex h-32 items-end gap-2">
                  {[35, 50, 42, 68, 55, 78, 92].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#0F4C81]/15"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-[10px] text-slate-400">
                  <span>Jan</span>
                  <span>Fev</span>
                  <span>Mar</span>
                  <span>Abr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>

              {/* Status */}
              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-100
                  px-4
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-50
                    text-[#0F4C81]
                  "
                >
                  <RefreshCw size={15} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900">Dados centralizados</p>

                  <p className="text-[11px] text-slate-500">
                    Informação organizada numa única plataforma
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="max-w-xl">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F4C81]
              "
            >
              Benefícios
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
                lg:leading-[1.1]
              "
            >
              Mais eficiência
              <br />
              <span className="text-[#0F4C81]">em cada operação.</span>
            </h2>

            <p
              className="
                mt-6
                text-base
                leading-7
                text-slate-600

                sm:text-lg
              "
            >
              Um sistema de gestão deve fazer mais do que armazenar informação. Deve ajudar a
              empresa a trabalhar melhor e tomar decisões mais rápidas.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-[#0F4C81]
                    "
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  {benefit}
                </div>
              ))}
            </div>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-6
                border-t
                border-slate-200
                pt-7
              "
            >
              <div className="flex items-center gap-2">
                <LockKeyhole size={17} className="text-[#0F4C81]" />

                <span className="text-sm text-slate-600">Gestão organizada</span>
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpRight size={17} className="text-[#0F4C81]" />

                <span className="text-sm text-slate-600">Preparado para crescer</span>
              </div>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
