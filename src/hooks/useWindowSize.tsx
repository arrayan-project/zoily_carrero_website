import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { MOBILE_BREAKPOINT } from '../constants/breakpoints';

interface WindowSize {
  windowWidth: number;
  isMobileView: boolean;
}

const getWindowWidth = () => (typeof window !== "undefined" ? window.innerWidth : 1200);

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: getWindowWidth(),
    isMobileView: getWindowWidth() < MOBILE_BREAKPOINT,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        windowWidth: window.innerWidth,
        isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
      });
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
