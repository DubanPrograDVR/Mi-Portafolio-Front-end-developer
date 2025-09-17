import { useMousePosition } from "../hooks/useMousePosition";

export default function CursorSpot() {
  const { x, y } = useMousePosition();
  if (x === null || y === null) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29,78,216,0.15), transparent 80%)`,
      }}
    />
  );
}
