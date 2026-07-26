import { useEffect, useState } from 'react';

/**
 * Cycles through the hero "role" labels, applying an `exit` class for
 * 600ms before swapping to the next one - same timing as the original
 * inline script (3s interval, 600ms exit transition).
 */
export function useRoleRotator(roles, intervalMs = 3000, exitMs = 600) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);

      const timeout = setTimeout(() => {
        setIsExiting(false);
        setActiveIndex((current) => (current + 1) % roles.length);
      }, exitMs);

      return () => clearTimeout(timeout);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [roles.length, intervalMs, exitMs]);

  return { activeIndex, isExiting };
}
