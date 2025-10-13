import { motion } from "framer-motion";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SocialLinks from "@/components/SocialLinks";
import HolographicHeading from "@/components/HolographicHeading";
import HolographicBadge from "@/components/HolographicBadge";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <StarryBackground intensity="subtle" className="py-10 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HolographicHeading as="h1" variant="3d" className="mb-4">
            SoloSuccess AI
          </HolographicHeading>
          
          <HolographicHeading as="h2" variant="script" className="text-2xl sm:text-3xl">
            Your command center for launching as a solo founder
          </HolographicHeading>
          
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            8 specialized AI agents to help you ship faster: strategy, branding,
            content, operations, and growth — all in one hub.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">Explore Projects</Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
          
          <SocialLinks className="mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 hover:shadow-holographic transition-all duration-300">
            <div className="aspect-video w-full rounded-xl bg-sparkle-gradient bg-[length:200%_200%] animate-shimmer grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4 animate-float">⬇️⬇️⬇️</div>
                <p className="text-white/90 font-medium">
                  Upload work-in-progress shots to the Gallery via the Admin page
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <motion.section 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HolographicHeading as="h2" variant="3d" className="mb-8 text-center">
          Why SoloSuccess?
        </HolographicHeading>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Agent-powered workflows", badge: "Automation", color: "purple" as const },
            { title: "Founder-friendly UI", badge: "UX Focus", color: "teal" as const },
            { title: "Built for speed", badge: "Performance", color: "gold" as const },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 hover:shadow-holographic transition-all duration-300 group h-full">
                <div className="flex items-center justify-between mb-4">
                  <HolographicBadge variant={item.color} size="sm">
                    {item.badge}
                  </HolographicBadge>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </StarryBackground>
  );
}
