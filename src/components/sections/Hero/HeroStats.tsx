import { motion, useReducedMotion } from "motion/react";

import { Building2, GraduationCap, HeartPulse, ShoppingCart, Truck } from "lucide-react";

import { fadeIn, staggerContainer } from "@/animations";

const sectors = [
  {
    label: "Comércio",
    icon: ShoppingCart,
  },
  {
    label: "Saúde",
    icon: HeartPulse,
  },
  {
    label: "Educação",
    icon: GraduationCap,
  },
  {
    label: "Construção",
    icon: Building2,
  },
  {
    label: "Logística",
    icon: Truck,
  },
];

export function HeroStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-t border-slate-200/70 py-8">
      <motion.div
        className="mb-6 text-center"
        variants={fadeIn}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
      >
        <p className="text-sm font-medium text-slate-500">Soluções para diferentes setores</p>
      </motion.div>

      <motion.div
        className="
          grid
          grid-cols-2
          gap-3

          sm:grid-cols-3

          lg:flex
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
      >
        {sectors.map((sector) => {
          const Icon = sector.icon;

          return (
            <motion.div
              key={sector.label}
              variants={fadeIn}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200/70
                bg-white/50
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-slate-300
                hover:bg-white
                hover:text-slate-900
                hover:shadow-sm
              "
            >
              <Icon size={18} strokeWidth={1.8} />

              <span>{sector.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
