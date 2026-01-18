import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, ArrowDown } from "lucide-react";

export default function Hero({
  onNavLinkClick,
}: {
  onNavLinkClick: (e: React.MouseEvent, href: string) => void;
}) {
  const [txt, setTxt] = useState("");
  const full = "Desarrollador Front-End";

  useEffect(() => {
    if (txt.length < full.length) {
      const t = setTimeout(() => setTxt(full.slice(0, txt.length + 1)), 100);
      return () => clearTimeout(t);
    }
  }, [txt]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [null, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradiente radial de fondo */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-cyan-400/30">
          <Sparkles size={16} className="text-cyan-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Disponible para trabajar
          </span>
        </motion.div>

        {/* Título principal con animación */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="block text-white mb-2">Hola, soy</span>
          <span className="block gradient-text-cyan text-5xl sm:text-6xl md:text-8xl">
            Dubán Alejandro
          </span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl mt-2">
            Vásquez Romero
          </span>
        </motion.h1>

        {/* Subtítulo con efecto de escritura */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6">
          <Code className="text-cyan-400" size={28} />
          <span className="text-2xl md:text-3xl font-semibold text-gray-200">
            {txt}
            <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Apasionado por crear{" "}
          <span className="text-cyan-400 font-semibold">
            interfaces modernas
          </span>
          , <span className="text-purple-400 font-semibold">accesibles</span> y
          con{" "}
          <span className="text-pink-400 font-semibold">
            experiencia excepcional
          </span>
          .
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => onNavLinkClick(e, "#projects")}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <span className="relative z-10 flex items-center gap-2">
              Ver mis Proyectos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            onClick={(e) => onNavLinkClick(e, "#contact")}
            className="px-8 py-4 glass text-white font-bold rounded-full border border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
            Contáctame
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={(e) => onNavLinkClick(e, "#about")}>
          <span className="text-sm">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
