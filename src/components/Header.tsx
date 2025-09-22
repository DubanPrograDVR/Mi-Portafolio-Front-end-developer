import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import CV from "../assets/Duban_Alejandro_Vasquez_Romero cv trabajo.pdf";

type NavLink = { href: string; label: string };

export default function Header({
  navLinks,
  onNavLinkClick,
}: {
  navLinks: NavLink[];
  onNavLinkClick: (e: React.MouseEvent, href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => onNavLinkClick(e, "#hero")}
          className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
          <Code size={28} /> <span>Duban Alejandro</span>
        </a>

        {/* Links en escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => onNavLinkClick(e, l.href)}
              className="relative group text-gray-200 hover:text-cyan-400 transition">
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          {/* CTA */}
          <a
            href="/CV_DubanAlejandro.pdf"
            download="CV_DubanAlejandro.pdf"
            className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg transition">
            Descargar CV
          </a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50 text-gray-200">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 flex flex-col items-center justify-center z-[60]">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  onNavLinkClick(e, l.href);
                }}
                className="text-2xl hover:text-cyan-400">
                {l.label}
              </a>
            ))}
            <a
              href={CV}
              download="CV_DubanAlejandro.pdf"
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
              Descargar CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
