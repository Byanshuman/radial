import React from "react";
import { CounterRotation } from "./CounterRotation";
import type { RadialMenuItem } from "../../../types";
import { cn } from "@/lib/utils";

export interface PodProps {
  item: RadialMenuItem;
  onItemClick?: (item: RadialMenuItem) => void;
  className?: string;
  duration?: number;
  ease?: number[];
}

/**
 * Pod Component
 *
 * Positions an item on the circumference of the radial orbit using
 * trigonometry: x = cos(angle) * r, y = sin(angle) * r.
 * Embeds CounterRotation to keep content upright.
 */
export const Pod: React.FC<PodProps> = ({
  item,
  onItemClick,
  className,
  duration = 0.75,
  ease = [0.16, 1, 0.3, 1],
}) => {
  const Icon = item.icon;

  // Convert degrees to radians
  const rad = (item.angle * Math.PI) / 180;
  const cosVal = Number(Math.cos(rad).toFixed(4));
  const sinVal = Number(Math.sin(rad).toFixed(4));

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const content = (
    <div className="w-[84%] h-[84%] flex flex-col items-center justify-center pointer-events-none select-none">
      {/* Icon with Color Accent */}
      <div
        className={cn(
          "w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0",
          item.iconColor || "text-slate-700"
        )}
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 drop-shadow-sm" strokeWidth={2.2} />
      </div>

      {/* Label / Title */}
      <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 leading-tight mt-0.5 sm:mt-1 tracking-tight group-hover:text-foxx-primary transition-colors px-1 text-center truncate max-w-full">
        {item.title}
      </span>

      {/* Optional Subtitle */}
      {item.subtitle && (
        <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight hidden sm:block truncate max-w-full">
          {item.subtitle}
        </span>
      )}

      {/* Optional Badge */}
      {item.badge && (
        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-red-500 text-white shadow-sm">
          {item.badge}
        </span>
      )}
    </div>
  );

  return (
    <div
      className={cn("absolute pointer-events-auto", className)}
      style={{
        left: `calc(50% + var(--radius) * ${cosVal} - var(--pod-size) / 2)`,
        top: `calc(50% + var(--radius) * ${sinVal} - var(--pod-size) / 2)`,
        width: "var(--pod-size)",
        height: "var(--pod-size)",
      }}
    >
      <CounterRotation duration={duration} ease={ease}>
        {item.href ? (
          <a
            href={item.href}
            onClick={handleClick}
            className="group relative w-full h-full rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-foxx-primary overflow-hidden"
            aria-label={item.title}
          >
            {content}
          </a>
        ) : (
          <button
            type="button"
            onClick={handleClick}
            className="group relative w-full h-full rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-foxx-primary overflow-hidden cursor-pointer"
            aria-label={item.title}
          >
            {content}
          </button>
        )}
      </CounterRotation>
    </div>
  );
};
