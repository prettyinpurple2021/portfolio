import socials from "@/content/socials";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}


