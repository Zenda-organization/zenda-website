import { ArrowRight, Boxes, ShoppingCart, Users } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";
import { slideLeft, slideRight } from "@/animations";

const features = [
  {
    icon: ShoppingCart,
    title: "Vendas",
    description: "Acompanhe as vendas e tenha uma visão mais clara das operações comerciais.",
  },
  {
    icon: Boxes,
    title: "Stock",
    description: "Controle produtos, entradas e saídas para manter o inventário organizado.",
  },
  {
    icon: Users,
    title: "Clientes",
    description: "Centralize os dados dos clientes e facilite o acompanhamento comercial.",
  },
];

export function SectorCommerce() {
  return (
    <section id="comercio" className="py-20 sm:py-24 lg:py-28">
      <ZContainer>
        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >
          <div className="max-w-xl" {...slideLeft}>
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
                text-[#0F4C81]
              "
            >
              Comércio
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
                lg:leading-[1.1]
              "
            >
              Mais controlo para
              <br />
              <span className="text-[#0F4C81]">o seu negócio.</span>
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
              Para empresas comerciais, uma boa gestão começa por ter informação organizada. As
              nossas soluções ajudam a centralizar vendas, stock, clientes e faturação numa única
              plataforma.
            </p>

            <div
              className="
                mt-8
                grid
                gap-4

                sm:grid-cols-3
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-md
                    "
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <Icon size={19} className="text-[#0F4C81]" />

                    <h3 className="mt-4 text-sm font-bold text-slate-950">{feature.title}</h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <ZButton variant="primary" rightIcon={<ArrowRight size={17} />}>
                Conhecer o Zenda ERP
              </ZButton>
            </div>
          </div>

          <div {...slideRight}>
            <div
              className="
                relative
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-6

                sm:p-8
              "
            >
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
                    <p className="text-xs text-slate-500">Vendas</p>
                    <p className="mt-1 text-2xl font-bold text-slate-950">1.248</p>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-blue-50
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-[#0F4C81]
                    "
                  >
                    +18,4%
                  </span>
                </div>

                <div className="mt-8 flex h-36 items-end gap-2">
                  {[35, 48, 42, 62, 55, 76, 68, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#0F4C81]/15"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Produtos</p>
                    <p className="mt-1 font-bold text-slate-950">856</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Clientes</p>
                    <p className="mt-1 font-bold text-slate-950">324</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ZContainer>
    </section>
  );
}
