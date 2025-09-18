import AnimatedSection from "../components/AnimatedSection";
import timeline from "../data/timeline";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <AnimatedSection id="timeline">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="border-b-4 border-cyan-400 pb-1">Mi Trayectoria</span>
      </h2>

      <div className="relative border-l border-cyan-500 max-w-3xl mx-auto">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="mb-10 ml-6 relative"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}>
            {/* Punto del timeline */}
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full mt-1.5 -left-2 border border-gray-900"></div>

            {/* Contenido */}
            <time className="ml-3  mb-1 text-sm font-normal leading-none text-gray-400">
              {item.year}
            </time>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
