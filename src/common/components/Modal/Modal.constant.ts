export const modal_variant = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 50, opacity: 1, transition: { duration: 0.7 } },
  exit: { y: 0, opacity: 0, transition: { duration: 0.5 } },
};

export const opacity_variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
