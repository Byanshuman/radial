import React from "react";
import { motion, type Transition } from "framer-motion";
import type { OriginCoordinates } from "../../types";
import { cn } from "@/lib/utils";

export interface CenterHubProps {
  children?: React.ReactNode;
  origin?: OriginCoordinates;
  onClick?: () => void;
  duration?: number;
  ease?: number[];
  className?: string;
  gradientClass?: string;
}

/**
 * CenterHub Component
 *
 * The central anchor and visual core of the radial system.
 * Rotates and expands into view in sync with the outer wheel.
 */
export const CenterHub: React.FC<CenterHubProps> = ({
  children,
  origin = { x: 90, y: 240 },
  onClick,
  duration = 0.75,
  ease = [0.16, 1, 0.3, 1],
  className,
  gradientClass = "bg-gradient-to-tr from-[#ff4000] via-[#ff6a00] to-[#ffa34d]",
}) => {
  const transition: Transition = {
    duration,
    ease: ease as [number, number, number, number],
  };

  return (
    <motion.div
      initial={{
        scale: 0,
        x: origin.x,
        y: origin.y,
        rotate: -270,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        x: origin.x,
        y: origin.y,
        rotate: -270,
        opacity: 0,
      }}
      transition={transition}
      className={cn("relative z-20 flex items-center justify-center pointer-events-auto", className)}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full shadow-2xl border-2 border-white/40 flex items-center justify-center relative z-10 overflow-hidden text-white font-extrabold select-none transition-transform hover:scale-105 active:scale-95 cursor-pointer",
          gradientClass
        )}
      >
        <div className="w-[78%] h-[78%] relative flex items-center justify-center drop-shadow-md">
          {children || (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18" />
              <path d="M3 12h18" />
            </svg>
          )}
        </div>
      </div>
    </motion.div>
  );
};
