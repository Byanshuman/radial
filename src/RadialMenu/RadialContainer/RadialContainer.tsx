import React from "react";
import { cn } from "@/lib/utils";

export interface RadialContainerProps {
  children: React.ReactNode;
  /** Explicit radius override in px (otherwise uses responsive CSS variables) */
  radius?: number;
  /** Explicit podSize override in px (otherwise uses responsive CSS variables) */
  podSize?: number;
  className?: string;
}

/**
 * RadialContainer Component
 *
 * Defines the circular coordinate plane and sets the responsive CSS variables
 * `--radius` and `--pod-size` that drive all trigonometric pod calculations.
 */
export const RadialContainer: React.FC<RadialContainerProps> = ({
  children,
  radius,
  podSize,
  className,
}) => {
  const customStyles: Record<string, string> = {};
  if (radius) {
    customStyles["--radius"] = `${radius}px`;
  }
  if (podSize) {
    customStyles["--pod-size"] = `${podSize}px`;
  }

  return (
    <div
      style={customStyles}
      className={cn(
        "relative z-10 w-[336px] h-[336px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] flex items-center justify-center select-none",
        "[--radius:124px] [--pod-size:88px] sm:[--radius:175px] sm:[--pod-size:120px] md:[--radius:205px] md:[--pod-size:136px]",
        className
      )}
    >
      {children}
    </div>
  );
};
