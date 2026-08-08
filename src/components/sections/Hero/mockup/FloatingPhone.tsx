import { motion } from "motion/react";

export function FloatingPhone() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay: 0.4,
        },
        x: {
          duration: 0.7,
          delay: 0.4,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="
        absolute
        -bottom-4
        -right-4
        z-30
        hidden
        w-24
        rounded-[1.5rem]
        border-[4px]
        border-slate-900
        bg-white
        p-1
        shadow-2xl
        sm:block
      "
    >
      <div className="overflow-hidden rounded-[1.1rem] bg-slate-950">
        <div className="px-2 py-3">
          <div className="mb-3 h-1 w-8 rounded-full bg-slate-700 mx-auto" />

          <div className="space-y-2">
            <div className="h-10 rounded-lg bg-blue-500/20" />
            <div className="h-3 w-3/4 rounded bg-slate-700" />
            <div className="h-3 w-1/2 rounded bg-slate-800" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
