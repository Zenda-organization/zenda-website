import { motion, useReducedMotion } from "motion/react";

import erpPreview from "@/assets/images/hero/zenda-erp-hero-preview.png";

import { scaleIn } from "@/animations";

import { FloatingElements } from "./FloatingElements";

export function ERPMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full"
      variants={scaleIn}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
        src={erpPreview}
        alt="Pré-visualização do Zenda ERP"
        className="
          block
          h-auto
          w-full
          object-contain
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <FloatingElements />
    </motion.div>
  );
}
