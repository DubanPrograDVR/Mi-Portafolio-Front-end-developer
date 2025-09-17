import AnimatedSection from "../components/AnimatedSection";

const MoreAboutMe = () => {
  return (
    <AnimatedSection id="more-about-me">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">
            <span className="border-b-4 border-cyan-400 pb-1">
              Más sobre mí
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Además de mi pasión por la tecnología, me gusta mantener un
            equilibrio con actividades que me inspiran disciplina, creatividad y
            trabajo en equipo.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Practico <span className="text-cyan-400 font-semibold">boxeo</span>,
            lo cual me ha enseñado constancia, esfuerzo y la importancia de
            nunca rendirse. También disfruto de la{" "}
            <span className="text-cyan-400 font-semibold">música</span>; toco la
            guitarra y escribo canciones, lo que me permite expresar mi lado
            creativo.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Creo que estas pasiones personales me ayudan a aportar energía,
            creatividad y resiliencia a los proyectos en los que participo.
          </p>
        </div>

        {/* Fotos */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <img
            src="/assets/boxeo.jpg"
            alt="Entrenando boxeo"
            className="rounded-2xl shadow-lg object-cover h-56 md:h-72 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/assets/musica.jpg"
            alt="Tocando guitarra"
            className="rounded-2xl shadow-lg object-cover h-56 md:h-72 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MoreAboutMe;
