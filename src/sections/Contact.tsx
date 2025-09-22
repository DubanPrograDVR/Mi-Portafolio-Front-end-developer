import AnimatedSection from "../components/AnimatedSection";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="border-b-4 border-cyan-400 pb-1">Contacto</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          ¿Quieres colaborar o tienes alguna propuesta? ¡Hablemos! Estoy
          disponible para proyectos, colaboraciones y nuevas oportunidades.
        </p>

        {/* Links de contacto directo */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="flex items-center gap-2 bg-gray-800 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg transition-colors">
            <Mail size={20} /> Correo
          </a>
          <a
            href="https://github.com/DubanPrograDVR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg transition-colors">
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/duban-alejandro-vasquez-romero-19303122b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg transition-colors">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>

        {/* Formulario como componente */}
        <ContactForm />
      </div>
    </AnimatedSection>
  );
}
