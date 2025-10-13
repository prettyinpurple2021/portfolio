"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type HolographicBadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "purple" | "teal" | "gold" | "silver";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
};

export default function HolographicBadge({ 
  children, 
  className = "",
  variant = "purple",
  size = "md",
  glow = true
}: HolographicBadgeProps) {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const variantClasses = {
    purple: "bg-gradient-to-r from-purple-400 to-pink-400 text-white",
    teal: "bg-gradient-to-r from-teal-400 to-cyan-400 text-white", 
    gold: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white",
    silver: "bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800"
  };

  const glowClasses = glow ? {
    purple: "shadow-glow-purple",
    teal: "shadow-glow-teal", 
    gold: "shadow-lg shadow-yellow-400/50",
    silver: "shadow-lg shadow-gray-400/50"
  }[variant] : "";

  return (
    <motion.span
      className={`
        inline-flex items-center rounded-pill font-medium
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glowClasses}
        ${className}
      `}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      style={{
        backgroundImage: variant === "purple" 
          ? "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)"
          : variant === "teal"
          ? "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)"
          : variant === "gold"
          ? "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
          : "linear-gradient(135deg, #d1d5db 0%, #f3f4f6 100%)"
      }}
    >
      {children}
    </motion.span>
  );
}
