import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 768;
const isBrowser = typeof window !== 'undefined';

export const useIsMobile = () => {
  const initialWidth = isBrowser ? window.innerWidth : DESKTOP_BREAKPOINT;
  const [width, setWidth] = useState(initialWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return width < DESKTOP_BREAKPOINT;
};
