import { motion, useReducedMotion } from "motion/react";

import { ERPMockup } from "@/components/common/ERPMockup";

export function HeroImage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: 40,
            }
      }
      animate={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              x: 0,
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }
      }
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[680px]
        items-center
        justify-center
        lg:ml-auto
      "
    >
      <ERPMockup />
    </motion.div>
  );
}
