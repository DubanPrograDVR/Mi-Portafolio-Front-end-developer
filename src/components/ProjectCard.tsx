import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
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
    const rx = (y / height - 0.5) * -25;
    const ry = (x / width - 0.5) * 25;
    ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.05,1.05,1.05)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}>
      <div>
        <h3
          className="text-xl font-bold text-cyan-400 mb-2"
          style={{ transform: "translateZ(50px)" }}>
          {project.title}
        </h3>
        <p
          className="text-gray-400 text-sm mb-4"
          style={{ transform: "translateZ(40px)" }}>
          {project.description}
        </p>
        <div
          className="flex flex-wrap gap-2 mb-4"
          style={{ transform: "translateZ(30px)" }}>
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div
        className="flex items-center mt-4"
        style={{ transform: "translateZ(20px)" }}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-cyan-400 flex items-center mr-4">
            <ExternalLink size={18} className="mr-1" />
            Ver Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-cyan-400 flex items-center">
            <Github size={18} className="mr-1" />
            Repositorio
          </a>
        )}
      </div>
    </div>
  );
}
