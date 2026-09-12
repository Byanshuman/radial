import React from "react";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractionLayerProps {
  onClose: () => void;
  headerTitle?: React.ReactNode;
  headerSubtitle?: React.ReactNode;
  annotationText?: string;
  footerContent?: React.ReactNode;
  className?: string;
}

export interface RadialMenuTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

/**
 * InteractionLayer Component
 *
 * Surrounds the radial system with accessible controls:
 * - Floating top-left/top-right Close button
 * - Animated header typography
 * - Contextual curved annotation arrow
 * - Optional bottom footer / status controls
 */
export const InteractionLayer: React.FC<InteractionLayerProps> = ({
  onClose,
  headerTitle,
  headerSubtitle,
  annotationText = "Everything You Need, In One Place",
  footerContent,
  className,
}) => {
  return (
    <div className={cn("pointer-events-none relative z-50 w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 md:p-8", className)}>
      {/* Top Left Close Circular Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
        type="button"
        onClick={onClose}
        className="pointer-events-auto absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform active:scale-90 backdrop-blur-md cursor-pointer"
        aria-label="Close radial menu"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </motion.button>

      {/* Top Header Information */}
      {(headerTitle || headerSubtitle) && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 text-center px-4 max-w-[280px] sm:max-w-md md:max-w-xl mx-auto pt-2 sm:pt-4"
        >
          {headerTitle && (
            <h2 className="text-base sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
              {headerTitle}
            </h2>
          )}
          {headerSubtitle && (
            <p className="text-[11px] sm:text-sm md:text-base text-slate-300 font-medium mt-1 sm:mt-1.5">
              {headerSubtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Optional Top-Right Quadrant Annotation with Curved Arrow */}
      {annotationText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="absolute top-16 right-4 sm:top-20 sm:right-10 md:top-24 md:right-16 z-40 pointer-events-none flex flex-col items-end"
        >
          <span className="text-[11px] sm:text-sm md:text-base font-semibold italic text-slate-200/95 tracking-tight leading-tight text-right max-w-[90px] sm:max-w-[130px] md:max-w-[150px] drop-shadow">
            {annotationText}
          </span>
          <svg
            viewBox="0 0 28 22"
            fill="none"
            className="text-slate-300/90 mt-0.5 mr-2 w-7 h-5 sm:w-9 sm:h-7 md:w-10 md:h-8"
          >
            <path
              d="M 22 2 C 18 10 9 12 2 18 M 2 18 L 7 15 M 2 18 L 4 11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}

      {/* Spacer to allow radial container center position */}
      <div className="flex-1" />

      {/* Bottom Footer Content */}
      {footerContent && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-auto relative z-20 w-full max-w-lg mx-auto pb-2 sm:pb-4"
        >
          {footerContent}
        </motion.div>
      )}
    </div>
  );
};

/**
 * RadialMenuTrigger Component
 *
 * Example trigger button for docks or floating navigation bars.
 */
export const RadialMenuTrigger: React.FC<RadialMenuTriggerProps> = ({
  isOpen,
  onToggle,
  className,
  label = "Menu",
  icon,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative rounded-full px-5 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-orange-500/25 transition-all active:scale-95 flex items-center gap-2 cursor-pointer",
        className
      )}
      aria-expanded={isOpen}
      aria-label="Toggle radial menu"
    >
      {icon || <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />}
      <span>{label}</span>
    </button>
  );
};
