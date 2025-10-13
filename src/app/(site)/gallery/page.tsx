import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import SectionHeader from "@/components/SectionHeader";
import { headers } from "next/headers";

async function getGallery(): Promise<GalleryItem[]> {
<<<<<<< Current (Your changes)
  const h = headers();
=======
  const h = await headers();
>>>>>>> Incoming (Background Agent changes)
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
    <div className="py-10">
      <SectionHeader
        title="Gallery"
        subtitle="Uploads tagged 'portfolio' in Cloudinary appear here automatically."
      />
      <GalleryGrid items={items} />
    </div>
  );
}


