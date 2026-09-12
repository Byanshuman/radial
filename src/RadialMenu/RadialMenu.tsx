import React from "react";
import { AnimatePresence } from "framer-motion";
import { Backdrop } from "./Backdrop";
import { RadialContainer } from "./RadialContainer/RadialContainer";
import { CenterHub } from "./RadialContainer/CenterHub/CenterHub";
import { RadialWheel } from "./RadialContainer/RadialWheel/RadialWheel";
import { InteractionLayer } from "./InteractionLayer/InteractionLayer";
import type { RadialMenuProps } from "./types";
import { cn } from "@/lib/utils";

/**
 * RadialMenu
 *
 * An animated radial revolver navigation system combining:
 * 1. Backdrop (frosted glass + scroll lock)
 * 2. RadialContainer (coordinates and responsive sizing)
 *    ├── CenterHub (central core orb)
 *    └── RadialWheel (spinning constellation)
 *        └── Pods (trigonometric orbital positioning)
 *            └── CounterRotation (Ferris Wheel inverse rotation)
 * 3. InteractionLayer (close button, header/footer, controls)
 */
export const RadialMenu: React.FC<RadialMenuProps> = ({
  isOpen,
  onClose,
  items,
  centerContent,
  headerTitle,
  headerSubtitle,
  footerContent,
  origin = { x: 0, y: 220 },
  radius,
  podSize,
  className,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none",
            className
          )}
          role="dialog"
          aria-modal="true"
        >
          {/* 1. Backdrop */}
          <Backdrop isOpen={isOpen} onClose={onClose} />

          {/* 2. Radial Container Coordinate Space */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <RadialContainer radius={radius} podSize={podSize}>
              {/* 2.1 Center Hub */}
              <CenterHub origin={origin} onClick={onClose}>
                {centerContent}
              </CenterHub>

              {/* 2.2 Radial Wheel (Constellation of Pods + CounterRotation) */}
              <RadialWheel
                items={items}
                origin={origin}
                onItemClick={() => onClose()}
              />
            </RadialContainer>
          </div>

          {/* 3. Interaction Layer (Header, Controls, Close Trigger) */}
          <InteractionLayer
            onClose={onClose}
            headerTitle={headerTitle}
            headerSubtitle={headerSubtitle}
            footerContent={footerContent}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
