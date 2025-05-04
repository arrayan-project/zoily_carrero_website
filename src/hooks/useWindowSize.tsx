// src/hooks/useWindowSize.ts
import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../constants/breakpoints';

interface WindowSize {
  windowWidth: number;
  isMobileView: boolean;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: window.innerWidth,
    isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
