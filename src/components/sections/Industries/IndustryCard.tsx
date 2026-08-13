import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { Industry } from "./Industries.types";

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export function IndustryCard({ industry, index }: IndustryCardProps) {
  const Icon = industry.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }
      }
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/70
        bg-white
        p-6
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-xl
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-slate-100
          text-slate-700
          transition-all
          duration-300

          group-hover:bg-primary
          group-hover:text-white
          group-hover:shadow-lg
        "
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="
            mt-5
            text-lg
            font-semibold
            text-slate-950
          "
        >
          {industry.title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-600
          "
        >
          {industry.description}
        </p>
      </div>

      {/* Link visual */}
      <div
        className="
          relative
          mt-6
          inline-flex
          items-center
          gap-1.5
          text-sm
          font-semibold
          text-slate-500
          transition-colors
          duration-300

          group-hover:text-primary
        "
      >
        Explorar
        <ArrowUpRight
          size={16}
          className="
            transition-transform
            duration-300

            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </div>
    </motion.article>
  );
}
