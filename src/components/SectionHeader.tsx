"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="text-foreground/70 mt-1 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}


