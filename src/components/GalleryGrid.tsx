import Image from "next/image";
import GlassCard from "./GlassCard";

export type GalleryItem = {
  id: string;
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (!items?.length) {
    return (
      <GlassCard>
        <p className="text-foreground/70">No images yet. Use the Admin page to upload.</p>
      </GlassCard>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((img) => (
        <div key={img.id} className="relative overflow-hidden rounded-2xl glass-dark">
          <Image
            src={img.secure_url}
            alt={img.public_id}
            width={img.width}
            height={img.height}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}


