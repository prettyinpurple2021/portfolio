import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const adminPass = process.env.ADMIN_PASSCODE;
  if (!adminPass || auth !== `Bearer ${adminPass}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { params } = await req.json();
  const timestamp = Math.floor(Date.now() / 1000);
  const toSign = { timestamp, ...params } as Record<string, string | number>;
  const signature = cloudinary.utils.api_sign_request(
    toSign,
    process.env.CLOUDINARY_API_SECRET as string
  );

  return NextResponse.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
  });
}


