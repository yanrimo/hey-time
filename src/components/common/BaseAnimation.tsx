"use client";

import {
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  initial?: TargetAndTransition | VariantLabels | boolean;
  animate?: TargetAndTransition | VariantLabels | boolean;
  transition?: Transition;
  className?: string;
};

export default function BaseAnimation({
  children,
  initial,
  animate,
  transition,
  className,
}: Props) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
