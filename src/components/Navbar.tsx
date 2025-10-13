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
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="container-section py-4">
        <div className="glass-dark rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Logo size={36} />
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-xl transition-colors ${
                    active
                      ? "text-[--color-brand-pink]"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-0 -z-[1] rounded-xl bg-white/5"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/admin" className="btn-primary hidden sm:inline-flex">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}


