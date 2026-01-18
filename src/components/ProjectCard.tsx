import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  repo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left,
      y = e.clientY - top;
    const rx = (y / height - 0.5) * -15;
    const ry = (x / width - 0.5) * 15;
    ref.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative">
      {/* Card principal con efecto 3D */}
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative glass-strong rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col"
        style={{ transformStyle: "preserve-3d" }}>
        {/* Imagen de previsualización */}
        {project.image && (
          <div className="relative w-full h-48 overflow-hidden bg-gray-800/50">
            <img
              src={project.image}
              alt={`Previsualización de ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ transform: "translateZ(20px)" }}
            />
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Badge de estado (opcional) */}
            <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/30">
              ✨ Proyecto Destacado
            </div>
          </div>
        )}

        {/* Efecto de brillo animado en el fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Partículas decorativas */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="text-cyan-400 animate-pulse" size={20} />
        </div>

        <div className="relative z-10 p-8 flex-1 flex flex-col">
          {/* Título del proyecto */}
          <motion.h3
            className="text-2xl font-bold mb-3 gradient-text-cyan"
            style={{ transform: "translateZ(60px)" }}
            whileHover={{ scale: 1.05 }}>
            {project.title}
          </motion.h3>

          {/* Descripción */}
          <p
            className="text-gray-300 text-base mb-6 leading-relaxed"
            style={{ transform: "translateZ(50px)" }}>
            {project.description}
          </p>

          {/* Tags de tecnologías */}
          <div
            className="flex flex-wrap gap-2 mb-6"
            style={{ transform: "translateZ(40px)" }}>
            {project.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 transition-all cursor-default">
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Botones de acción */}
          <div
            className="flex items-center gap-4 mt-auto relative z-10"
            style={{ transform: "translateZ(30px)" }}>
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                <ExternalLink size={18} />
                Ver Demo
              </motion.a>
            )}
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 glass border border-gray-600 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 rounded-lg font-semibold transition-all">
                <Github size={18} />
                Código
              </motion.a>
            )}
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Sombra glow animada */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
    </motion.div>
  );
}
