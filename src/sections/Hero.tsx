import { useEffect, useState } from "react";

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
      className="text-center min-h-[70vh] flex flex-col justify-center items-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <span className="block">Hola, soy [Tu Nombre]</span>
        <span className="block text-cyan-400 mt-2 h-16 md:h-20">
          {txt}
          <span className="animate-ping">_</span>
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
        Apasionado por crear interfaces modernas, accesibles y con gran UX.
      </p>
      <a
        href="#projects"
        onClick={(e) => onNavLinkClick(e, "#projects")}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20">
        Ver mis Proyectos
      </a>
    </section>
  );
}
