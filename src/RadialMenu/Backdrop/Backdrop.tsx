import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-40 select-none",
          className
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      {children}
    </>
  );
};
