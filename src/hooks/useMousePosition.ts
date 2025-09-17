import { useEffect, useState } from "react";
export function useMousePosition() {
  const [pos, setPos] = useState<{x: number|null, y: number|null}>({ x: null, y: null });
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return pos;
}