import { useEffect, useRef, useState } from 'react';

const GAP = 24;
const AUTO_SLIDE_MS = 4000;

function getVisibleCards() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
}

/**
 * Drives the testimonials carousel: responsive visible-card count,
 * dot navigation, and autoplay - ported from the original vanilla
 * track/dots slider.
 */
export function useTestimonialSlider(itemCount) {
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    setVisibleCards(getVisibleCards());
  }, []);

  useEffect(() => {
    function updateTranslate() {
      const card = firstCardRef.current;
      if (!card) return;
      const cardWidth = card.offsetWidth + GAP;
      setTranslateX(currentIndex * cardWidth);
    }

    updateTranslate();
    window.addEventListener('resize', updateTranslate);
    return () => window.removeEventListener('resize', updateTranslate);
  }, [currentIndex, visibleCards]);

  useEffect(() => {
    function handleResize() {
      setVisibleCards(getVisibleCards());
      setCurrentIndex(0);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = itemCount - visibleCards;
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1 > maxIndex ? 0 : index + 1));
    }, AUTO_SLIDE_MS);
    return () => clearInterval(interval);
  }, [itemCount, visibleCards]);

  const totalDots = itemCount - visibleCards + 1;

  return {
    trackRef,
    firstCardRef,
    currentIndex,
    setCurrentIndex,
    translateX,
    totalDots,
  };
}
