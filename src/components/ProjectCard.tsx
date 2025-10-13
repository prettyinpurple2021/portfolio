"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import GlassCard from "./GlassCard";

type Project = {
  title: string;
  summary: string;
  tags?: string[];
  href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="h-full">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-foreground/80">{project.summary}</p>
          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-lg text-xs bg-white/10 border border-white/15"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {project.href && (
            <div className="mt-2">
              <Button href={project.href}>View</Button>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}


