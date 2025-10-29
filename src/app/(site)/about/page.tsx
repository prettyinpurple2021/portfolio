"use client";
import { useEffect } from 'react';
import styles from './page.module.css';

export default function AboutPage() {
  useEffect(() => {
    const container = document.getElementById('star-container');
    if (container) {
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 5 + 3}s`;
        container.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div id="star-container" className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30"></div>
      <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg shadow-2xl shadow-primary/20 items-center justify-center p-8 relative overflow-hidden" style={{backgroundImage: `linear-gradient(45deg, rgba(127, 19, 236, 0.4) 0%, rgba(5, 232, 255, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYzVIYC-urfcwlPD2pBcmOMoyhXZXUxbvrSGqu6Qj9nAzVbQUqpdibzRnpGJB-dXYZh5DkzyBu8yUorrf1IcccssQB7pBOUt1-gSMSF8n-lOvBuO98aZ_fuB5dWTA_0v6freA_ozHPo09qRFUUYxxVPJOHIkxo0CPJP7G_jKHqo-LxR9HmvvEpWLl5B_74-Ju7Ij8UHNtPwt4n513Z16JwZ-GRuiWsM9dc_UbByb5k7cfkLuhxylTPRCEObG3vP-ohDItLniHg")`}}>
                <div className="absolute inset-0 bg-background-dark/20 backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col gap-4 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                    Enchanted Nightmare
                  </h1>
                  <p className="text-white/90 text-base font-normal leading-relaxed @[480px]:text-lg max-w-2xl mx-auto">
                    Crafting digital dreams with a touch of magic. We are a startup dedicated to creating immersive and enchanting digital experiences. Our team of talented designers and developers combines creativity with cutting-edge technology to bring your vision to life.
                  </p>
                </div>
                <button className="relative z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg shadow-lg shadow-primary/50 hover:scale-105 transition-transform">
                  <span className="truncate">Explore Our Work</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 space-y-12 px-4">
            <div className="p-8 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md rounded-lg border border-primary/20 dark:border-primary/30">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-4">About Us</h2>
              <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed">
                At Enchanted Nightmare, we believe in the power of imagination and innovation. Our mission is to transform ordinary ideas into extraordinary realities. With a passion for holographic, Y2K-inspired aesthetics and glassmorphism, we create designs that are both nostalgic and futuristic. Our expertise spans across various domains, including web design, app development, and digital art. We are committed to delivering high-quality, visually stunning, and user-centric solutions that exceed expectations.
              </p>
            </div>
            <div className="p-8 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md rounded-lg border border-primary/20 dark:border-primary/30">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-6">Our Skills</h2>
              <div className="flex flex-wrap gap-3">
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">UI/UX Design</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Web Development</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Mobile App Development</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Graphic Design</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">3D Modeling</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Animation</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Virtual Reality</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-primary to-teal-400 px-4 text-white shadow-md shadow-primary/30">
                  <p className="text-sm font-medium">Augmented Reality</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md rounded-lg border border-primary/20 dark:border-primary/30">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-6">Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg p-4 bg-primary/10 dark:bg-primary/20">
                  <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal-400 text-white shrink-0 size-12 shadow-lg shadow-primary/40">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Digital Art Excellence Award</p>
                    <p className="text-primary dark:text-primary/80 text-sm font-normal leading-normal">Awarded for innovative design in the digital art category.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 bg-primary/10 dark:bg-primary/20">
                  <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal-400 text-white shrink-0 size-12 shadow-lg shadow-primary/40">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Best UX Design Award</p>
                    <p className="text-primary dark:text-primary/80 text-sm font-normal leading-normal">Recognized for outstanding user experience design in a mobile application.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 bg-primary/10 dark:bg-primary/20">
                  <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal-400 text-white shrink-0 size-12 shadow-lg shadow-primary/40">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Featured in Tech Innovators Magazine</p>
                    <p className="text-primary dark:text-primary/80 text-sm font-normal leading-normal">Featured in a leading tech magazine for groundbreaking work in virtual reality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}