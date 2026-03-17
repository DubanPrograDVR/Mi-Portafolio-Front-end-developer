import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface ProjectCarouselProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function ProjectCarousel({
  isOpen,
  onClose,
  images,
  title,
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      setCurrent(0);
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  const hasImages = images.length > 0;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                {title}
              </h3>
              <div className="flex items-center gap-3">
                {hasImages && (
                  <span className="text-gray-400 text-sm">
                    {current + 1} / {images.length}
                  </span>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Cerrar">
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden bg-gray-900/80 border border-cyan-400/20">
              {hasImages ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={images[current]}
                    alt={`${title} - captura ${current + 1}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center px-8">
                  <Images size={48} className="text-gray-600 mb-4" />
                  <p className="text-gray-400 text-lg font-semibold">
                    Próximamente
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Las capturas de pantalla de este proyecto estarán
                    disponibles pronto.
                  </p>
                </div>
              )}

              {/* Navigation arrows */}
              {hasImages && images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-cyan-500/30 border border-cyan-400/30 text-white transition-all backdrop-blur-sm"
                    aria-label="Anterior">
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-cyan-500/30 border border-cyan-400/30 text-white transition-all backdrop-blur-sm"
                    aria-label="Siguiente">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hasImages && images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 px-2 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === current
                        ? "border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
                        : "border-gray-600/50 opacity-60 hover:opacity-100"
                    }`}>
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
