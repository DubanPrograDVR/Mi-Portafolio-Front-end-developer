import AnimatedSection from "../components/AnimatedSection";
import { skills } from "../data/skills";
import { Star } from "lucide-react";

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="bg-gray-900/50 rounded-lg py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-cyan-400 pb-1">
            Habilidades Técnicas
          </span>
        </h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {skills.map((s) => (
            <div
              key={s}
              className="bg-gray-800 text-gray-300 py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition-all hover:scale-105">
              <Star size={16} className="opacity-70" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
