import type { ReactNode } from "react";
import { motion } from "motion/react";

interface FloatingBadgeProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
}

export function FloatingBadge({
  icon,
  title,
  description,
  className = "",
  delay = 0,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        scale: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`
        absolute
        z-20
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/70
        bg-white/90
        px-4
        py-3
        shadow-xl
        backdrop-blur-xl
        ${className}
      `}
    >
      {icon}

      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>

        {description && <p className="mt-0.5 text-xs text-slate-500">{description}</p>}
      </div>
    </motion.div>
  );
}
