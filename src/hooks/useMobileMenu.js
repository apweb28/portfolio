import { useState } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  return { isOpen, toggle };
}
