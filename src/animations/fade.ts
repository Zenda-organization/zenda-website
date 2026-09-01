import type { Variants } from "motion/react";
import { defaultTransition } from "./transition";

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};
