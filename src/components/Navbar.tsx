"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/links", label: "Links" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-4 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-white/40 dark:border-black/40">
      <div className="flex items-center gap-3">
        <div className="size-8 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tighter gradient-text">Enchanted Nightmare</h1>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-lg font-bold">
        {nav.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${
                active
                  ? "text-primary dark:text-cyan-400"
                  : "text-background-dark/80 dark:text-background-light/80"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <button className="md:hidden flex items-center justify-center size-10 rounded-full bg-white/50 dark:bg-black/50 text-background-dark dark:text-background-light hover:bg-white/70 dark:hover:bg-black/70 transition-colors">
          <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7viXYEDXdrWzytr190b-Y3HstGYpjPokCaSwROSdwwWMDn3Py8Xp8T3JAXCOje0PE6l_SCkGpmqWtf8hVFwTcn9qXWbfHzNXsfLIhOKWQTHg1vH9laXu2zjtBYG4brAo_83Q4jOMJWVeQA4QqGejvbzKyKdNzYCdfx7Uw5lO_Jk7mqFdmN-Uw9QGRiGD9gQwXHvNMt3kduFPQ1jY2WFMCAy9Rk4TmB-k8lZZTCX1raERJml7MrWMTfajL7SU472dLFCV4dRh_")'}}></div>
      </div>
    </header>
  );
}


