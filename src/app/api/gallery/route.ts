import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const revalidate = 60;

export async function GET() {
  try {
    const res = await cloudinary.search
      .expression("folder=portfolio AND tags=portfolio")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const items = (res.resources ?? []).map((r: { asset_id: string; public_id: string; secure_url: string; width: number; height: number; format: string }) => ({
      id: r.asset_id,
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
      format: r.format,
    }));
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}


