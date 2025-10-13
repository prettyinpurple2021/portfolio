"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <Link href="/" aria-label="SoloSuccess AI Home">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <div
          className="rounded-full glass-dark flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div className="w-[55%] h-[55%] rounded-full bg-[--color-brand-pink]" />
        </div>
        <span className="text-lg font-semibold tracking-wide">
          SoloSuccess <span className="text-[--color-brand-pink]">AI</span>
        </span>
      </motion.div>
    </Link>
  );
}


