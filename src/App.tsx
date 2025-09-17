import CursorSpot from "./components/CursorSpot";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];
  const onNavLinkClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed bg-gradient-to-br from-gray-900 to-slate-900 relative">
      <CursorSpot />
      <Header navLinks={navLinks} onNavLinkClick={onNavLinkClick} />
      <main className="container mx-auto px-6 py-12 md:py-20">
        <Hero onNavLinkClick={onNavLinkClick} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800/50">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} [Tu Nombre]. Todos los derechos
            reservados.
          </p>
          <p className="text-sm mt-1">Diseñado con ❤️, React y Tailwind CSS.</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
