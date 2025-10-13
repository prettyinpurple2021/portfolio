"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/social", label: "Social" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="container-section py-4">
        <div className="glass-frosted rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border border-white/20">
          <Logo size={36} />
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-pill transition-all duration-300 ${
                    active
                      ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-glow-purple"
                      : "text-gray-700 hover:text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}


