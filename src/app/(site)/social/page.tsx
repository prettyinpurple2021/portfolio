"use client";

import { motion } from "framer-motion";
import HolographicHeading from "@/components/HolographicHeading";
import HolographicBadge from "@/components/HolographicBadge";
import SocialLinks from "@/components/SocialLinks";
import BlogFeed from "@/components/BlogFeed";
import StarryBackground from "@/components/StarryBackground";
import GlassCard from "@/components/GlassCard";

export default function SocialPage() {
  return (
    <StarryBackground intensity="subtle" className="py-10">
      {/* Social Media Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <HolographicHeading as="h1" variant="3d" className="mb-4">
            Connect With Me
          </HolographicHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow my journey as a solo founder building AI-powered tools. 
            Get insights, updates, and behind-the-scenes content across all platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { platform: "Twitter/X", color: "purple", icon: "🐦" },
                { platform: "LinkedIn", color: "teal", icon: "💼" },
                { platform: "GitHub", color: "silver", icon: "💻" },
                { platform: "Instagram", color: "purple", icon: "📸" },
                { platform: "Bluesky", color: "teal", icon: "🦋" },
                { platform: "Facebook", color: "purple", icon: "👥" },
                { platform: "Pinterest", color: "gold", icon: "📌" },
              ].map((social, index) => (
                <motion.div
                  key={social.platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{social.icon}</div>
                  <HolographicBadge 
                    variant={social.color as any}
                    size="sm"
                    className="text-xs"
                  >
                    {social.platform}
                  </HolographicBadge>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Social Links Component */}
          <div className="text-center">
            <HolographicHeading as="h2" variant="script" className="mb-6">
              Visit My Profiles
            </HolographicHeading>
            <SocialLinks className="justify-center" />
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <HolographicHeading as="h2" variant="3d" className="mb-4">
            Latest Blog Posts
          </HolographicHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and strategies for solo founders building with AI. 
            From automation workflows to scaling strategies.
          </p>
        </motion.div>

        <BlogFeed />
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <GlassCard className="p-8 max-w-2xl mx-auto">
          <HolographicHeading as="h3" variant="script" className="mb-4">
            Let's Connect!
          </HolographicHeading>
          <p className="text-gray-600 mb-6">
            Have questions about AI automation, solo founding, or just want to chat? 
            I'd love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HolographicBadge variant="purple" glow>
              AI Automation
            </HolographicBadge>
            <HolographicBadge variant="teal" glow>
              Solo Founding
            </HolographicBadge>
            <HolographicBadge variant="gold" glow>
              Product Strategy
            </HolographicBadge>
            <HolographicBadge variant="silver" glow>
              Tech Stack
            </HolographicBadge>
          </div>
        </GlassCard>
      </motion.section>
    </StarryBackground>
  );
}
