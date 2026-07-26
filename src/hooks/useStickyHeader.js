import { useEffect, useState } from 'react';
 
export function useStickyHeader(heroRef) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    function handleScroll() {
      const triggerPoint = hero.offsetHeight - 150;
      setIsSticky(window.scrollY > triggerPoint);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  return isSticky;
}
