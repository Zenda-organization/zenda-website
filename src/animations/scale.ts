import type { Variants } from "motion/react";

import { smoothTransition } from "./transition";

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};
