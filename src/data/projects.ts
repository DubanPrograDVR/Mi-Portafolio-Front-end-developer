import type { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "Ruta Accesible",
    description:
      "Aplicativo inclusivo desarrollado en conjunto con la Municipalidad de Curicó. Permite a las personas encontrar recintos accesibles en la ciudad.",
    tags: ["React", "TypeScript", "Supabase", "Google Maps API"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop", // Reemplaza con tu captura de pantalla
    link: "https://rutaaccesible.site",
    repo: "https://github.com/DubanPrograDVR/MapaInteractivo",
  },
  {
    title: "ProAgendify",
    description:
      "Sistema de reservas y gestión de citas para profesionales de salud y bienestar.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop", // Reemplaza con tu captura de pantalla
    link: "https://proagendify.site",
    repo: "https://github.com/DubanPrograDVR/ProAgendify",
  },
  {
    title: "Portafolio Personal",
    description:
      "Mi portafolio profesional, donde muestro mis proyectos, habilidades y trayectoria.",
    tags: ["React", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop", // Reemplaza con tu captura de pantalla
    link: "https://midominio.com",
    repo: "https://github.com/DubanPrograDVR/Mi-Portafolio-Front-end-developer",
  },
  {
    title: "Tienda De Muebles",
    description:
      "Tienda de muebles desarrollada con HTML y CSS, enfocada en un diseño moderno y totalmente responsive que se adapta a distintos dispositivos",
    tags: ["Html", "CSS"],
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=400&fit=crop", // Reemplaza con tu captura de pantalla
    link: "https://tienda-venta-muebles.netlify.app/",
    repo: "https://github.com/DubanPrograDVR/Tienda-de-Muebles",
  },

  {
    title: "TeachPro",
    description:
      "Sitio web de tienda de audífonos modernos, construido con HTML y CSS. El proyecto destaca por un diseño limpio y responsive que ofrece una experiencia fluida en móviles, tablets y escritorio",
    tags: ["Html", "CSS"],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=400&fit=crop", // Reemplaza con tu captura de pantalla
    link: "https://tienda-teachpro.netlify.app/",
    repo: "https://github.com/DubanPrograDVR/Teach-Pro",
  },
];

export default projects;
