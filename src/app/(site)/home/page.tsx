"use client";
import { useEffect } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  useEffect(() => {
    const container = document.getElementById('sparkles-container');
    if (container) {
      const sparkleCount = 20;
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = styles.sparkle;
        const size = Math.random() * 2 + 1;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(sparkle);
      }
    }
  }, []);

  return (
    <main className="flex-1">
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div id="sparkles-container" className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `linear-gradient(180deg, rgba(25, 16, 34, 0.4) 0%, rgba(127, 19, 236, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnZdQCqgj5uOcSO-Nlezy8zmCkwhYvNFzzxN8L_taqLleC3Lku-_WBJMpLREIVDluWNG2tQoB0HjVuwdEScsjH7Df7RWJHkiZNFXYEUjznkVTlbVLhPxw8zYm3LZQtPwgxyVEpzzrYrPnwdygKT1Co8HygtrNLebAY2nJSmBqfXjm9rCfpmwp63LFKbyF-2hHZHU_dL-UCSYYeLmXYyEeEVqyRRpznbKz9PV-KRpBN6YUm7nEzA8Oh_7d1DsRJJwkIQl0sglsh")`}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20"></div>
        <div className={`relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 ${styles['holographic-overlay']}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]" style={{textShadow: '0 2px 4px rgba(255,105,180,0.3), 0 5px 15px rgba(138,43,226,0.3), 0 0 20px rgba(255, 255, 255, 0.2)', transform: 'perspective(500px) rotateX(5deg)'}}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Enchanted Nightmare
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 drop-shadow-md">
            Crafting digital dreams with a touch of magic. We specialize in creating immersive experiences that captivate and inspire.
          </p>
          <button className={`relative overflow-hidden ${styles['shimmer-effect']} mt-8 flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/60 hover:scale-105`}>
            <span className="truncate">Explore Our Work</span>
          </button>
        </div>
      </div>
    </main>
  );
}