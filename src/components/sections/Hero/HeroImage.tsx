import { motion, useReducedMotion } from "motion/react";

import { ERPMockup } from "@/components/common/ERPMockup";

import { slideLeft } from "@/animations";

export function HeroImage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={slideLeft}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
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
