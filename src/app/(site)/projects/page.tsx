"use client";
import { useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const projectImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAmU9MM9LNErCP-8x1-Q9JFn7yvXid0ev5WEV4E-FGDApI0wNZNZtUrOe3xE3mcPH4u5_hcMX9d1IcXDnHw2sudFZglu_Vi6DU5roY1f7anrzU-0Ztt-hRo5RKCyOVfUxG5bhEA_VoeNMKEqFS1zhjbK5Nc2i1CahGQAYiWTRwnvXNL-RuGadZCflNhbH27Bnj8C8yryrcYMtwRpFIsijX2UBywP2GAiru74IpNdnpMk6gQsnJG2_PwAOKGMk4MdND4qj6DaaPU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAbCCDgPV0dftQ7u0DnzB2_9CjMQM4ZKmLhNKhg7zly0qA0wKHSxzuh0L64igDBoAIXLW6NnDvKtlRQE5kV0gLUggcuV1WWZTCrhh1CpwkCgdslLNO9gid_AD--LKhDiLn0ntgRapwZ-cnFZtDtkC9gijKZd2cVhiMzYw9dKLJ-sPABOC5OMxANGT9AOZc0KKa-PNjGvY3Q3tl5hoxI0sw1iBadv2tEvpPPhrSkgIls_o9jqxRpK1pMhylzbiXV6fKvsxdWftch',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCz6vbYzGj16lHj1o4ocgU9GYSf3N1Ad11kisUjxjkSLMgQcKGiG4HNOLx7_qdiEt4t5VGPN6y4P3qwG8UkOLgKR2lOdThMou8Ty7ewvSXEaWh81LopumuLpQUkCiOoggjv0oGpmnVQ4muOI6XFQ0ApX1z4Zbg_GBtOss4DyoCr5GpXuaf3qD7EY_PFIHHTM0XArDUmvYGrcU7cnxz6smAiWCYjwVq7SLPAG2mZWKrELw_cnXyYCqk7Z1XQbiakJ1-9nZ81CB23'
];

const technologies = ['HTML5', 'CSS3', 'JavaScript', 'Three.js'];

export default function ProjectDetailPage() {
  useEffect(() => {
    const container = document.getElementById('sparkles-container');
    if (container) {
      const sparkleCount = 80;
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = styles['sparkle'];
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(sparkle);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 -z-10 ${styles['holo-bg-animated']}`}>
        <div id="sparkles-container" className="absolute inset-0"></div>
      </div>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className={`relative ${styles['holographic-border-hover']}`}>
              <div className="w-full aspect-video rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-lg bg-center bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALNqxUXh_98lLD-lnTjbARofwXqK2m2RlGfKTHvQmfC3E_k9Ssk5P6DO8YvqWp7-zAUCsB9sO3NR4P1K2QSNjswrO5RsoZWDfmX3IM-0sUzR4EiRewX7ZkxgE1q9WhS4rwgu5GOGCz32AH-Q8S8yJyMbX5xLtNlhk1yahPr5ks2ys3DGCimltoqAV1Emf4eYtAHC2swgJ6qd45yFZYnBHyAbf1gxDrroAmalY-_mhQKA7nR1YE1IOE_vdHWgXJlO5xi6XN65IC')"}}></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {projectImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-md bg-cover bg-center" style={{backgroundImage: `url('${image}')`}}></div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="p-8 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-lg flex-1">
              <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/20 text-primary dark:text-cyan-300 dark:bg-cyan-300/20 mb-4">Web Design</span>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${styles['gradient-text']} mb-4`}>Digital Dreamscape</h2>
              <p className="text-background-dark/80 dark:text-background-light/80 mb-6 text-lg leading-relaxed">
                An immersive e-commerce platform designed to merge virtual fashion with tangible reality. This project involved creating a fluid, Y2K-inspired user interface with holographic elements and glassmorphism cards to showcase our unique digital and physical collections.
              </p>
              <div className="border-t border-white/40 dark:border-black/40 pt-6">
                <h3 className="text-xl font-bold text-background-dark dark:text-background-light mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-white/50 dark:bg-black/50 text-background-dark dark:text-background-light">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link href="#" className={`${styles['holographic-button']} inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}>
                  Visit Live Site
                  <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" fillRule="evenodd"></path>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" fillRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}