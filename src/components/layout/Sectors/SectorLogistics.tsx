import { BarChart3, MapPinned, Package, Truck } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

export function SectorLogistics() {
  return (
    <section id="logistica" className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-7

            sm:p-10

            lg:p-14
          "
        >
          <div
            className="
              grid
              items-center
              gap-12

              lg:grid-cols-2
              lg:gap-20
            "
          >
            {/* Conteúdo */}
            <div>
              <span
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
                <Truck size={16} />
                Logística
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950

                  sm:text-4xl

                  lg:text-5xl
                "
              >
                Informação em movimento.
                <br />
                <span className="text-[#0F4C81]">Operações sob controlo.</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600

                  sm:text-lg
                  sm:leading-8
                "
              >
                Soluções digitais para apoiar empresas de logística na organização de operações,
                recursos e informação.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Package,
                    title: "Encomendas",
                  },
                  {
                    icon: MapPinned,
                    title: "Operações",
                  },
                  {
                    icon: Truck,
                    title: "Transportes",
                  },
                  {
                    icon: BarChart3,
                    title: "Indicadores",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                      "
                    >
                      <Icon size={17} className="text-[#0F4C81]" />

                      <span className="text-sm font-medium text-slate-700">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual */}
            <div>
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Operações</p>

                    <p className="mt-1 text-xl font-bold text-slate-950">Em acompanhamento</p>
                  </div>

                  <Truck size={22} className="text-[#0F4C81]" />
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    ["Encomendas", "128"],
                    ["Em transporte", "46"],
                    ["Entregues", "82"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-4
                      "
                    >
                      <span className="text-sm text-slate-600">{label}</span>

                      <span className="font-bold text-slate-950">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
