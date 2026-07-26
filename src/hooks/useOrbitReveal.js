import { useEffect, useRef, useState } from 'react';

const GROW_START_RATIO = 0.9;
const GROW_END_RATIO = 0.35;
const MIN_SCALE = 10 / 155;

/**
 * Scales the "sun" illustration up and reveals the orbit rings/stars as
 * the About section scrolls into view, matching the original inline
 * "SOLAR ORBIT" animation.
 */
export function useOrbitReveal() {
  const wrapperRef = useRef(null);
  const sunRef = useRef(null);
  const [isGrown, setIsGrown] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sun = sunRef.current;
    if (!wrapper || !sun) return;

    function updateOrbit() {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      const startY = vh * GROW_START_RATIO;
      const endY = vh * GROW_END_RATIO;

      let progress = (startY - rect.top) / (startY - endY);
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = MIN_SCALE + (1 - MIN_SCALE) * progress;
      sun.style.transform = `scale(${scale})`;

      setIsGrown(progress >= 1);
    }

    function onScroll() {
      requestAnimationFrame(updateOrbit);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateOrbit);
    updateOrbit();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateOrbit);
    };
  }, []);

  return { wrapperRef, sunRef, isGrown };
}
