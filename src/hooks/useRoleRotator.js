import { useEffect, useState } from 'react';
 
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
