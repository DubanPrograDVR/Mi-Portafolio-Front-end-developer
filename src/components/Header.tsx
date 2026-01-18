import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X, Download } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo mejorado */}
        <motion.a
          href="#"
          onClick={(e) => onNavLinkClick(e, "#hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold flex items-center gap-2 group">
          <div className="relative">
            <Code
              size={32}
              className="text-cyan-400 group-hover:rotate-12 transition-transform"
            />
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent hidden sm:inline">
            Duban Alejandro
          </span>
        </motion.a>

        {/* Links en escritorio */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => onNavLinkClick(e, l.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-lg transition-all ${
                activeSection === l.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}>
              {l.label}
              {activeSection === l.href && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}

          {/* CTA mejorado */}
          <motion.a
            href={CV}
            download="CV_DubanAlejandro.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
            <Download size={18} />
            <span className="hidden lg:inline">Descargar CV</span>
            <span className="lg:hidden">CV</span>
          </motion.a>
        </nav>

        {/* Botón hamburguesa mejorado */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden z-50 p-2 rounded-lg bg-white/5 backdrop-blur-md border border-cyan-400/30">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}>
                <X size={28} className="text-cyan-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={28} className="text-cyan-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Menú móvil mejorado */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-xl flex flex-col items-center justify-center z-40">
            <motion.nav
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center space-y-6">
              {navLinks.map((l, idx) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    setOpen(false);
                    onNavLinkClick(e, l.href);
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-3xl font-bold transition-colors ${
                    activeSection === l.href
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}>
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={CV}
                download="CV_DubanAlejandro.pdf"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Download size={20} />
                Descargar CV
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
