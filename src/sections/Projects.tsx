import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado, aplicando mis
            conocimientos en desarrollo front-end
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          style={{ perspective: "1200px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
