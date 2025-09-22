import AnimatedSection from "../components/AnimatedSection";
import skills from "../data/skills";

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="bg-gray-900/50 rounded-xl py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-cyan-400 pb-1">
            Habilidades Técnicas
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-gray-800/70 rounded-lg p-6 shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300">
                <Icon className="text-cyan-400 text-4xl mb-3" />
                <p className="text-gray-200 font-medium text-center">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
