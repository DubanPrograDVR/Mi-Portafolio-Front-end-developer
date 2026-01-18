import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import skills from "../data/skills";

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias web
            excepcionales
          </p>
        </motion.div>

        {/* Grid de habilidades con efectos mejorados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group">
                {/* Card con glassmorphism */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

                  {/* Icono con animación */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10">
                    <Icon className="text-cyan-400 text-5xl drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                  </motion.div>

                  {/* Nombre de la tecnología */}
                  <p className="text-gray-200 font-semibold text-center relative z-10 group-hover:text-white transition-colors">
                    {skill.name}
                  </p>

                  {/* Barra de nivel visual (opcional) */}
                  <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Efecto de sombra animada */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              12+
            </div>
            <p className="text-gray-400">Tecnologías Dominadas</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-400/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <p className="text-gray-400">Años de Experiencia</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-blue-400/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-gray-400">Proyectos Completados</p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
