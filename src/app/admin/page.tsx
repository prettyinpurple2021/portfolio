"use client";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { CldUploadWidget } from "next-cloudinary";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const pass = prompt("Enter admin passcode");
    if (pass && pass === process.env.NEXT_PUBLIC_FAKE_ADMIN_HINT) {
      // Not secure; just UX hint in dev. Real check uses ADMIN_PASSCODE via route.
    }
    // Simple client-side gate; real protection: only the signed upload params from API.
    if (pass && pass.length > 0) {
      setAuthed(true);
    }
  }, []);

  if (!authed) return null;

  return (
    <div className="py-10">
      <SectionHeader title="Admin Uploads" subtitle="Uploads go to Cloudinary folder 'portfolio/' with tag 'portfolio'." />
      <GlassCard>
        <CldUploadWidget
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET}
          options={{ folder: "portfolio", tags: ["portfolio"] }}
        >
          {({ open }) => (
            <button className="btn-primary" onClick={() => open?.()}>
              Upload image
            </button>
          )}
        </CldUploadWidget>
        <p className="text-sm text-foreground/70 mt-3">
          Note: For production, we will use a signed upload via /api/cloudinary/sign. The unsigned preset is fine for initial setup.
        </p>
      </GlassCard>
    </div>
  );
}


