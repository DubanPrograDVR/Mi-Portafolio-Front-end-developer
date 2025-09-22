import AnimatedSection from "../components/AnimatedSection";
import timeline from "../data/timeline";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, Rocket } from "lucide-react";

const icons = [GraduationCap, Laptop, Rocket]; // Puedes expandir según tus items

export default function Timeline() {
  return (
    <AnimatedSection id="timeline">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="border-b-4 border-cyan-400 pb-1">Mi Trayectoria</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

        <div className="space-y-16">
          {timeline.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}>
                {/* Contenedor tarjeta */}
                <div
                  className={`bg-gray-800/90 p-6 rounded-xl shadow-lg w-5/12 ${
                    isLeft ? "mr-auto" : "ml-auto"
                  } hover:shadow-cyan-500/30 transition-transform hover:scale-105`}>
                  <time className="text-sm text-cyan-400 font-semibold">
                    {item.year}
                  </time>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-center">
                    {item.description}
                  </p>
                </div>

                {/* Punto central */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Icon className="text-white" size={22} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
