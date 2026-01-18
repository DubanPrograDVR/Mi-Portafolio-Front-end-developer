import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const socialLinks = [
    {
      name: "Correo",
      icon: Mail,
      href: "mailto:tuemail@ejemplo.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/DubanPrograDVR",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/duban-alejandro-vasquez-romero-19303122b/",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <AnimatedSection id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Conectemos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!{" "}
            <span className="text-cyan-400 font-semibold">
              Estoy disponible
            </span>{" "}
            para nuevas oportunidades y desafíos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Panel izquierdo - Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8">
            {/* Links de contacto directo mejorados */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="text-cyan-400" size={24} />
                Encuéntrame en
              </h3>

              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all group">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-20`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-gray-400 text-sm">Conecta conmigo</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Mensaje adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-400/20">
              <p className="text-gray-300 leading-relaxed">
                💼{" "}
                <span className="text-purple-400 font-semibold">
                  Disponible para:
                </span>
                <br />
                • Proyectos freelance
                <br />
                • Oportunidades laborales
                <br />
                • Colaboraciones en proyectos
                <br />• Mentorías y consultoría
              </p>
            </motion.div>
          </motion.div>

          {/* Panel derecho - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
