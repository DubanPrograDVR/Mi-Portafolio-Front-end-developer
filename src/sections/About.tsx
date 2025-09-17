import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Fotos (lado izquierdo en desktop) */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <img
            src="/assets/profile1.jpg"
            alt="Duban Alejandro trabajando en proyectos"
            className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/assets/profile2.jpg"
            alt="Duban Alejandro presentando un proyecto"
            className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto (lado derecho en desktop) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">
            <span className="border-b-4 border-cyan-400 pb-1">Sobre mí</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            ¡Hola! Soy{" "}
            <span className="text-cyan-400 font-semibold">
              Duban Alejandro Vásquez Romero
            </span>
            , desarrollador Front-End egresado de Ingeniería en Informática. Me
            apasiona construir interfaces accesibles, modernas y con gran
            experiencia de usuario.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Durante mi práctica profesional desarrollé el aplicativo inclusivo{" "}
            <span className="text-cyan-400">“Ruta Accesible”</span>
            en colaboración con la Municipalidad de Curicó, integrando Google
            Maps, accesibilidad y diseño inclusivo.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Además de programar, disfruto del boxeo, la música y seguir
            aprendiendo nuevas tecnologías para crecer como profesional y
            aportar a proyectos con impacto real.
          </p>

          {/* Botón para descargar CV */}
          <a
            href="/CV_DubanAlejandro.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            Descargar CV
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
