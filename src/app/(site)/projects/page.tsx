import projects from "@/content/projects.json";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <SectionHeader
        title="Projects"
        subtitle="A selection of work including SoloSuccess AI, focused on empowering solo founders."
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}


