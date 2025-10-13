import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import HolographicHeading from "@/components/HolographicHeading";
import StarryBackground from "@/components/StarryBackground";
import { headers } from "next/headers";
import GalleryContent from "./GalleryContent";

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
      <GalleryContent items={items} />
    </StarryBackground>
  );
}
