import type { Transition } from "motion/react";

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

export const smoothTransition: Transition = {
  duration: 0.8,
  ease: "easeOut",
};

export const fastTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
};

export const viewportTransition = {
  duration: 0.6,
  ease: "easeOut",
};
