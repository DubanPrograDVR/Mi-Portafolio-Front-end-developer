import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56940958342" // <-- pon aquí tu número con código de país
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[70] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110">
      <MessageCircle size={28} />
    </a>
  );
}
