import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="py-10 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            SoloSuccess AI
            <span className="block text-2xl sm:text-3xl font-medium text-foreground/80 mt-2">
              Your command center for launching as a solo founder
            </span>
          </h1>
          <p className="text-foreground/80 max-w-xl">
            8 specialized AI agents to help you ship faster: strategy, branding,
            content, operations, and growth — all in one hub.
          </p>
          <div className="flex gap-3">
            <Button href="/projects">Explore Projects</Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
          <SocialLinks className="mt-2" />
        </div>

        <GlassCard className="p-8">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-pink-500/30 to-violet-500/30 grid place-items-center">
            <div className="text-center">
              <div className="text-6xl">⬇️⬇️⬇️</div>
              <p className="mt-3 text-foreground/80">Upload work-in-progress shots to the Gallery via the Admin page</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-4">Why SoloSuccess?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Agent-powered workflows",
            "Founder-friendly UI",
            "Built for speed",
          ].map((b) => (
            <GlassCard key={b}>
              <p className="text-foreground/85">{b}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
