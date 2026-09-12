import React from "react";

export interface RadialMenuItem {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  onClick?: () => void;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  /**
   * Orbital Angle in degrees:
   * 0° is 3 o'clock (Right)
   * 90° is 6 o'clock (Bottom)
   * 180° is 9 o'clock (Left)
   * 270° is 12 o'clock (Top)
   */
  angle: number;
  iconColor?: string;
  bgGradient?: string;
  badge?: string | number;
}

export interface OriginCoordinates {
  x: number;
  y: number;
}

export interface RadialMenuProps {
  /** Controls open/closed visibility */
  isOpen: boolean;
  /** Callback fired when user requests close (backdrop click, escape, close button) */
  onClose: () => void;
  /** Array of items to place radially around the hub */
  items: RadialMenuItem[];
  /** Optional custom React node inside the central hub */
  centerContent?: React.ReactNode;
  /** Optional top header title */
  headerTitle?: React.ReactNode;
  /** Optional top header subtitle */
  headerSubtitle?: React.ReactNode;
  /** Optional footer controls or branding */
  footerContent?: React.ReactNode;
  /** Coordinate origin where the revolver constellation springs from (default: bottom nav button) */
  origin?: OriginCoordinates;
  /** Radius in px for orbital layout (default: responsive via CSS variables) */
  radius?: number;
  /** Size in px of each circular pod (default: responsive via CSS variables) */
  podSize?: number;
  /** Extra CSS classes applied to root overlay */
  className?: string;
}
