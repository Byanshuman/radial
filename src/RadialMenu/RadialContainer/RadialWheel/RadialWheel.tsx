import React from "react";
import { motion, type Transition } from "framer-motion";
import { Pod } from "./Pod";
import type { RadialMenuItem, OriginCoordinates } from "../../types";
import { cn } from "@/lib/utils";

export interface RadialWheelProps {
  items: RadialMenuItem[];
  origin?: OriginCoordinates;
  onItemClick?: (item: RadialMenuItem) => void;
  duration?: number;
  ease?: number[];
  className?: string;
}

/**
 * RadialWheel Component
 *
 * The constellation of orbital pods. Handles the revolver entrance
 * rotation (-360° -> 0°) and scaling from the specified origin coordinates.
 */
export const RadialWheel: React.FC<RadialWheelProps> = ({
  items,
  origin = { x: 90, y: 240 },
  onItemClick,
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
      initial={{
        rotate: -360,
        scale: 0.15,
        x: origin.x,
        y: origin.y,
        opacity: 0,
      }}
      animate={{
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
      }}
      exit={{
        rotate: -360,
        scale: 0.15,
        x: origin.x,
        y: origin.y,
        opacity: 0,
      }}
      transition={transition}
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      {items.map((item) => (
        <Pod
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          duration={duration}
          ease={ease}
        />
      ))}
    </motion.div>
  );
};
