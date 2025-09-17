import { useOnScreen } from "../hooks/useOnScreen";

interface AnimatedSectionProps {
  id?: string;
  children?: React.ReactNode; // ya viene de PropsWithChildren, pero queda más claro
}

export default function AnimatedSection({
  id,
  children,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 transition-all duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-sm"
      }`}>
      {children}
    </section>
  );
}
