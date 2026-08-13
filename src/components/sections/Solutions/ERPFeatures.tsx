import { BarChart3, Boxes, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Clientes",
    description: "Gestão centralizada",
  },
  {
    icon: BarChart3,
    title: "Vendas",
    description: "Acompanhe resultados",
  },
  {
    icon: Boxes,
    title: "Stock",
    description: "Controle em tempo real",
  },
  {
    icon: FileText,
    title: "Faturação",
    description: "Processos simplificados",
  },
];

export function ERPFeatures() {
  return (
    <div
      className="
        mt-12
        grid
        gap-3

        sm:grid-cols-2

        lg:grid-cols-4
      "
    >
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200/70
              bg-white/60
              px-4
              py-4
              backdrop-blur-sm
              transition-all
              duration-300

              hover:border-slate-300
              hover:bg-white
              hover:shadow-sm
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-blue-50
                text-[#0F4C81]
              "
            >
              <Icon size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">{feature.title}</p>

              <p className="text-xs text-slate-500">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
