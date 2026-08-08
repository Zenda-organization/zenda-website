import { motion } from "motion/react";

import erpPreview from "@/assets/images/hero/zenda-erp-hero-preview.png";

import { FloatingElements } from "./FloatingElements";

export function ERPMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      <motion.img
        src={erpPreview}
        alt="Zenda ERP"
        className="w-full object-contain"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FloatingElements />
    </motion.div>
  );
}
