import { ArrowRight, BarChart3, Check, Database, LayoutDashboard } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";

const modules = [
  "Clientes e contactos",
  "Vendas e faturação",
  "Gestão de stock",
  "Relatórios e indicadores",
];

export function ServicesManagement() {
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
          {/* Visual primeiro no desktop */}
          <div
            className="
              relative
              order-2

              lg:order-1
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-xl
                shadow-slate-200/50

                sm:p-7
              "
            >
              {/* Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  pb-5
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-50
                      text-[#0F4C81]
                    "
                  >
                    <LayoutDashboard size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">Gestão empresarial</p>

                    <p className="text-xs text-slate-500">Visão geral</p>
                  </div>
                </div>

                <BarChart3 size={20} className="text-[#0F4C81]" />
              </div>

              {/* Indicadores */}
              <div className="grid grid-cols-2 gap-3 py-6">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Vendas</p>

                  <p className="mt-2 text-2xl font-bold text-slate-950">+24%</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Clientes</p>

                  <p className="mt-2 text-2xl font-bold text-slate-950">1.248</p>
                </div>
              </div>

              {/* Barra */}
              <div className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">Desempenho</span>

                  <span className="text-xs text-slate-400">Este mês</span>
                </div>

                <div className="mt-5 flex h-24 items-end gap-2">
                  {[35, 48, 42, 65, 58, 74, 68, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-blue-100"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Elemento flutuante */}
            <div
              className="
                absolute
                -bottom-5
                -right-3
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-lg

                sm:-right-5
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                  text-[#0F4C81]
                "
              >
                <Database size={17} />
              </div>

              <div>
                <p className="text-xs text-slate-500">Dados centralizados</p>

                <p className="text-sm font-semibold text-slate-900">Tudo num só lugar</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className="
              order-1
              max-w-xl

              lg:order-2
            "
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
              Sistemas de gestão
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
              Mais controlo.
              <br />
              <span className="text-[#0F4C81]">Mais clareza.</span>
            </h2>

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
              Criamos sistemas que centralizam a informação e ajudam empresas a tomar decisões com
              mais rapidez e segurança.
            </p>

            <ul className="mt-7 space-y-3">
              {modules.map((module) => (
                <li
                  key={module}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-700
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-[#0F4C81]
                    "
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  {module}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ZButton variant="primary" rightIcon={<ArrowRight size={17} />}>
                Conhecer o Zenda ERP
              </ZButton>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
