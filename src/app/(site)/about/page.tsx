import { motion } from "framer-motion";
import HolographicHeading from "@/components/HolographicHeading";
import HolographicBadge from "@/components/HolographicBadge";
import GlassCard from "@/components/GlassCard";
import StarryBackground from "@/components/StarryBackground";

export default function AboutPage() {
  return (
    <StarryBackground intensity="subtle" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <HolographicHeading as="h1" variant="3d" className="mb-4">
          About
        </HolographicHeading>
        <HolographicHeading as="h2" variant="script" className="text-xl">
          Solo founder building tools that help solo founders
        </HolographicHeading>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-6 hover:shadow-holographic transition-all duration-300">
            <p className="text-gray-600 leading-relaxed">
              I'm a solo founder building SoloSuccess AI — a command center of 8 AI
              agents built to remove friction from launching and growing a business.
              From strategy to content and operations, my goal is simple: help you
              ship faster with more clarity.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard className="p-6 hover:shadow-holographic transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Core Expertise</h3>
            <div className="space-y-3">
              {[
                { skill: "Design systems and brand kits", color: "purple" as const },
                { skill: "Marketing ops and content pipelines", color: "teal" as const },
                { skill: "Automation-first product development", color: "gold" as const },
              ].map((item, index) => (
                <div key={item.skill} className="flex items-center gap-3">
                  <HolographicBadge variant={item.color} size="sm">
                    {index + 1}
                  </HolographicBadge>
                  <span className="text-gray-600">{item.skill}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </StarryBackground>
  );
}


