import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";

export default function AboutPage() {
  return (
    <div className="py-10">
      <SectionHeader
        title="About"
        subtitle="Solo founder building tools that help solo founders."
      />
      <div className="grid md:grid-cols-2 gap-4">
        <GlassCard>
          <p className="text-foreground/80">
            I’m a solo founder building SoloSuccess AI — a command center of 8 AI
            agents built to remove friction from launching and growing a business.
            From strategy to content and operations, my goal is simple: help you
            ship faster with more clarity.
          </p>
        </GlassCard>
        <GlassCard>
          <ul className="list-disc pl-5">
            <li>Design systems and brand kits</li>
            <li>Marketing ops and content pipelines</li>
            <li>Automation-first product development</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}


