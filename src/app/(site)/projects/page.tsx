import { motion } from "framer-motion";
import projects from "@/content/projects.json";
import HolographicHeading from "@/components/HolographicHeading";
import ProjectCard from "@/components/ProjectCard";
import StarryBackground from "@/components/StarryBackground";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <StarryBackground intensity="subtle" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <HolographicHeading as="h1" variant="3d" className="mb-4">
          Projects
        </HolographicHeading>
        <HolographicHeading as="h2" variant="script" className="text-xl">
          A selection of work including SoloSuccess AI, focused on empowering solo founders
        </HolographicHeading>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </StarryBackground>
  );
}


