SoloSuccess AI — Portfolio
==========================

Free-stack portfolio using Next.js 14 (App Router), Tailwind, Framer Motion, Cloudinary, and Vercel.

Setup
-----

1. Create `.env.local` with:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_PASSCODE=change-me
NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET=unsigned-upload
```

2. Install & run:

```
npm install
npm run dev
```

3. Deploy:

- Push to GitHub (connected to Vercel)
- Add the same env vars in Vercel Project Settings → Environment Variables

Image uploads
-------------

- Visit `/admin` and use the upload widget
- Images are stored under `folder=portfolio` with tag `portfolio`
- `/gallery` lists them automatically via the server route

Customize
---------

- Edit brand tokens and glass styles in `src/app/globals.css`
- Add projects in `src/content/projects.json`
- Update social links in `src/content/socials.ts`
