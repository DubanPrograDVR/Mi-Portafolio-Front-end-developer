import type { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "Ruta Accesible",
    description:
      "Aplicativo inclusivo desarrollado en conjunto con la Municipalidad de Curicó. Permite a las personas encontrar recintos accesibles en la ciudad.",
    tags: ["React", "TypeScript", "Supabase", "Google Maps API"],
    link: "https://rutaaccesible.site",
    repo: "https://github.com/DubanPrograDVR/MapaInteractivo",
  },
  {
    title: "ProAgendify",
    description:
      "Sistema de reservas y gestión de citas para profesionales de salud y bienestar.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    link: "https://proagendify.site",
    repo: "https://github.com/DubanPrograDVR/ProAgendify",
  },
  {
    title: "Portafolio Personal",
    description:
      "Mi portafolio profesional, donde muestro mis proyectos, habilidades y trayectoria.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://midominio.com",
    repo: "https://github.com/tuusuario/mi-portafolio",
  },
];

export default projects;
