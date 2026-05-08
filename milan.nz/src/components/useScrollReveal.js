import { useEffect } from 'react';

// On no-hover (touch) devices, fires `spawn(x, y)` at random points
// within the container as the user scrolls past it.
export function useScrollReveal(containerRef, spawn, minScrollDelta = 25) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: none)').matches) return;

    let lastY = window.scrollY;

    const handler = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const y = window.scrollY;
      if (Math.abs(y - lastY) < minScrollDelta) return;
      lastY = y;

      const px = Math.random() * rect.width;
      const py = Math.random() * rect.height;
      spawn(px, py);
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [containerRef, spawn, minScrollDelta]);
}
