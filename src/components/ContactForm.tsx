import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xandglae", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ ¡Gracias! Tu mensaje fue enviado correctamente.");
      form.reset();
    } else {
      setStatus("❌ Hubo un error, inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform hover:scale-105">
        Enviar mensaje
      </button>

      {status && <p className="mt-4 text-cyan-400">{status}</p>}
    </form>
  );
}
