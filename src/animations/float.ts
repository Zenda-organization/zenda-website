import type { Variants } from "motion/react";

export const float: Variants = {
  initial: {
    y: 0,
  },

  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
