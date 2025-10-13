"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type HolographicHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "3d" | "script";
  delay?: number;
};

export default function HolographicHeading({ 
  children, 
  className = "", 
  as = "h1",
  variant = "3d",
  delay = 0 
}: HolographicHeadingProps) {
  const baseClasses = variant === "3d" 
    ? "text-3d-holographic" 
    : "text-script-shimmer";
  
  const sizeClasses = {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-4xl lg:text-5xl", 
    h3: "text-2xl sm:text-3xl lg:text-4xl",
    h4: "text-xl sm:text-2xl lg:text-3xl",
    h5: "text-lg sm:text-xl lg:text-2xl",
    h6: "text-base sm:text-lg lg:text-xl"
  };

  const Component = motion[as];

  return (
    <Component
      className={`${baseClasses} ${sizeClasses[as]} ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </Component>
  );
}
