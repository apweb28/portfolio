import { useEffect, useState } from 'react';

const MIN_DISPLAY_MS = 3500;
const FADE_MS = 600;

export function useSiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    document.body.classList.add('is-loading');

    let rafId;
    function tick(now) {
      const elapsed = now - startedAt;
      const pct = Math.min(100, Math.round((elapsed / MIN_DISPLAY_MS) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    }
    rafId = requestAnimationFrame(tick);

    function finish() {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);

      setTimeout(() => {
        setProgress(100);
        setIsHiding(true);
        document.body.classList.remove('is-loading');
        setTimeout(() => setIsVisible(false), FADE_MS);
      }, remaining);
    }

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', finish);
    };
  }, []);

  return { isVisible, isHiding, progress };
}