"use client";

import { ReactNode } from "react";

type StarryBackgroundProps = {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "high";
};

export default function StarryBackground({ 
  children, 
  className = "",
  intensity = "subtle" 
}: StarryBackgroundProps) {
  const starCount = intensity === "subtle" ? 20 : intensity === "medium" ? 40 : 60;
  
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = Math.random() * 2 + 2;
      
      stars.push(
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {generateStars()}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
