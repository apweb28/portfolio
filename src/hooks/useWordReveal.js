import { useEffect, useRef } from 'react';

const TRIGGER_RATIO = 0.8;

/**
 * Splits the referenced element's text into per-word spans and toggles
 * an `is-active` class as each word crosses the trigger line on scroll.
 * Matches the working "about text" reveal from the original markup
 * (the separate letter-by-letter version was dead code - it built
 * `.letter` spans that got immediately overwritten by this same
 * word-splitting script, so only this behaviour ever rendered).
 */
export function useWordReveal(text) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = text
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ');

    container.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(' ');

    const wordEls = Array.from(container.querySelectorAll('.word'));
    let ticking = false;

    function updateWords() {
      const triggerY = window.innerHeight * TRIGGER_RATIO;
      wordEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const wordCenter = rect.top + rect.height / 2;
        el.classList.toggle('is-active', wordCenter < triggerY);
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateWords();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateWords);
    updateWords();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateWords);
    };
  }, [text]);

  return containerRef;
}
