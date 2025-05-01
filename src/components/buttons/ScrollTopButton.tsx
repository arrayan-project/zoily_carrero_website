import { useState, useEffect } from 'react';

// Función throttle personalizada
function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  } as T;
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    }, 250);
  
    const setupScrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    };
  
    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupScrollListener);
    } else {
      setTimeout(setupScrollListener, 1);
    }
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-[10px] right-[10px] w-[40px] h-[40px] rounded-[6px]
        sm:bottom-[15px] sm:right-[15px] sm:w-[50px] sm:h-[50px] sm:rounded-[8px]
        md:bottom-[20px] md:right-[20px] md:w-[60px] md:h-[60px] md:rounded-[10px]
        bg-[#b2443a] text-white border-none
        flex justify-center items-center
        cursor-pointer
        opacity-80 hover:opacity-100
        hover:bg-[#6d0006]
        hover:scale-110
        transition-opacity transition-transform duration-300 ease-linear
        z-[1000]
        shadow-[2px_2px_5px_rgba(0,0,0,0.2)]
      `}
      aria-label="Volver arriba"
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;
