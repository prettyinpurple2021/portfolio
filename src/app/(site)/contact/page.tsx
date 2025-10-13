"use client";

import { motion } from "framer-motion";
import HolographicHeading from "@/components/HolographicHeading";
import HolographicBadge from "@/components/HolographicBadge";
import GlassCard from "@/components/GlassCard";
import SocialLinks from "@/components/SocialLinks";
import StarryBackground from "@/components/StarryBackground";

export default function ContactPage() {
  return (
    <StarryBackground intensity="subtle" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <HolographicHeading as="h1" variant="3d" className="mb-4">
          Contact
        </HolographicHeading>
        <HolographicHeading as="h2" variant="script" className="text-xl">
          Let&apos;s collaborate. Reach out via socials or email
        </HolographicHeading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-8 hover:shadow-holographic transition-all duration-300">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Me</h3>
              <SocialLinks className="justify-center" />
            </div>
            
            <div className="text-center">
              <HolographicBadge variant="purple" size="lg" className="mb-4">
                📧 Email Me
              </HolographicBadge>
              <a 
                className="btn-primary text-lg px-8 py-4" 
                href="mailto:hello@solobossai.fun"
              >
                hello@solobossai.fun
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <HolographicBadge variant="purple" glow>
                AI Consulting
              </HolographicBadge>
              <HolographicBadge variant="teal" glow>
                Product Strategy
              </HolographicBadge>
              <HolographicBadge variant="gold" glow>
                Automation
              </HolographicBadge>
              <HolographicBadge variant="silver" glow>
                Solo Founding
              </HolographicBadge>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </StarryBackground>
  );
}


