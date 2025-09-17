import { useEffect, useState, useRef } from "react";


export function useOnScreen<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true);
  }, options);

  const el = ref.current;
  if (el) obs.observe(el);

  return () => {
    if (el) obs.unobserve(el);
  };
}, [options]);
  
  return [ref, isVisible] as const;
}

