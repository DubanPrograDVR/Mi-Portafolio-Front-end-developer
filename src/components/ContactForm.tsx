import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xandglae", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-cyan-400/20">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <MessageSquare className="text-cyan-400" size={24} />
        Envíame un mensaje
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Campo de nombre */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Nombre completo
          </label>
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-gray-600 focus:border-cyan-400 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* Campo de email */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-gray-600 focus:border-cyan-400 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* Campo de mensaje */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            placeholder="Cuéntame sobre tu proyecto o propuesta..."
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-gray-600 focus:border-cyan-400 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
          />
        </div>

        {/* Botón de envío */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar mensaje
            </>
          )}
        </motion.button>

        {/* Mensajes de estado */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            ✅ ¡Mensaje enviado exitosamente! Te responderé pronto.
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            ❌ Hubo un error. Por favor, intenta de nuevo.
          </motion.div>
        )}
      </form>
    </div>
  );
}
