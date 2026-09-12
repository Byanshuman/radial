import React from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CounterRotationProps {
  children: React.ReactNode;
  /** Initial counter-rotation angle in degrees (default: 360 to cancel parent's -360) */
  initialAngle?: number;
  /** Transition duration in seconds (default: 0.75) */
  duration?: number;
  /** Cubic bezier easing array */
  ease?: number[];
  className?: string;
}

/**
 * CounterRotation Layer
 *
 * Implements the "Ferris Wheel" animation trick:
 * As the parent RadialWheel spins into view (-360° -> 0°),
 * this child layer counter-rotates (+360° -> 0°) simultaneously.
 * The two rotations cancel out on the contents, ensuring icons
 * and labels remain upright and legible throughout the entrance.
 */
export const CounterRotation: React.FC<CounterRotationProps> = ({
  children,
  initialAngle = 360,
  duration = 0.75,
  ease = [0.16, 1, 0.3, 1],
  className,
}) => {
  const transition: Transition = {
    duration,
    ease: ease as [number, number, number, number],
  };

  return (
    <motion.div
      initial={{ rotate: initialAngle }}
      animate={{ rotate: 0 }}
      exit={{ rotate: initialAngle }}
      transition={transition}
      className={cn("w-full h-full flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
};
