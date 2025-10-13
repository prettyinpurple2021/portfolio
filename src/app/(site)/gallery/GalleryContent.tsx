"use client";

import { motion } from "framer-motion";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import HolographicHeading from "@/components/HolographicHeading";

type GalleryContentProps = {
  items: GalleryItem[];
};

export default function GalleryContent({ items }: GalleryContentProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <HolographicHeading as="h1" variant="3d" className="mb-4">
          Gallery
        </HolographicHeading>
        <HolographicHeading as="h2" variant="script" className="text-xl">
          Uploads tagged &apos;portfolio&apos; in Cloudinary appear here automatically
        </HolographicHeading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GalleryGrid items={items} />
      </motion.div>
    </>
  );
}
