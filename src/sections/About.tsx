import { motion } from "framer-motion";
import { Download, Award, Heart, Code2 } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CV from "../assets/Duban_Alejandro_Vasquez_Romero cv trabajo.pdf";
import foto1 from "../assets/img/Ruta1.jpg";
import foto2 from "../assets/img/Ruta2.jpg";

export default function About() {
  const highlights = [
    { icon: Code2, text: "Desarrollo Front-End", color: "cyan" },
    { icon: Award, text: "Ingeniería en Informática", color: "purple" },
    { icon: Heart, text: "UX/UI & Accesibilidad", color: "pink" },
  ];

  return (
    <AnimatedSection id="about">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan">Sobre mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Fotos con efecto parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group overflow-hidden rounded-2xl">
                <img
                  src={foto1}
                  alt="Duban Alejandro trabajando en proyectos"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group overflow-hidden rounded-2xl mt-8">
                <img
                  src={foto2}
                  alt="Duban Alejandro presentando un proyecto"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            
            {/* Highlights */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 glass p-3 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                  <div className={`p-2 rounded-lg bg-${item.color}-500/20`}>
                    <item.icon className={`text-${item.color}-400`} size={20} />
                  </div>
                  <span className="text-gray-200 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Descripción */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                ¡Hola! Soy{" "}
                <span className="gradient-text-cyan font-bold text-xl">
                  Duban Alejandro Vásquez Romero
                </span>
                , desarrollador Front-End egresado de Ingeniería en Informática.
              </p>
              
              <p>
                Me apasiona construir{" "}
                <span className="text-cyan-400 font-semibold">
                  interfaces accesibles, modernas y con gran experiencia de usuario
                </span>
                . Cada proyecto es una oportunidad para crear soluciones que impacten positivamente.
              </p>
              
              <p>
                Durante mi práctica profesional desarrollé el aplicativo inclusivo{" "}
                <span className="text-purple-400 font-semibold">"Ruta Accesible"</span>{" "}
                en colaboración con la Municipalidad de Curicó, integrando{" "}
                <span className="text-cyan-400">Google Maps, accesibilidad y diseño inclusivo</span>.
              </p>
              
              <p>
                Además de programar, disfruto del{" "}
                <span className="text-pink-400">boxeo</span>, la{" "}
                <span className="text-purple-400">música</span> y seguir{" "}
                <span className="text-cyan-400">aprendiendo nuevas tecnologías</span>{" "}
                para crecer como profesional.
              </p>
            </div>

            {/* Botón CTA */}
            <motion.a
              href={CV}
              download="CV_DubanAlejandro.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all mt-6">
              <Download size={20} />
              Descargar CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
