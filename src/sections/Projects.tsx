import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="border-b-4 border-cyan-400 pb-1">Mis Proyectos</span>
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        style={{ perspective: "1000px" }}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </AnimatedSection>
  );
}
