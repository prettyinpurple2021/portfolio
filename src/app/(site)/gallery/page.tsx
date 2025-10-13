import { motion } from "framer-motion";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import HolographicHeading from "@/components/HolographicHeading";
import StarryBackground from "@/components/StarryBackground";
import { headers } from "next/headers";

async function getGallery(): Promise<GalleryItem[]> {
  const h = await headers();
  const host = h.get("host");
  const protocol = process.env.VERCEL ? "https" : "http";
  const base = `${protocol}://${host}`;
  const res = await fetch(`${base}/api/gallery`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function GalleryPage() {
  const items = await getGallery();
  return (
    <StarryBackground intensity="subtle" className="py-10">
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
    </StarryBackground>
  );
}
