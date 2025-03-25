// src/components/common/ScrollDownArrow.tsx
import React, { useState, useEffect } from 'react';

const ScrollDownArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="animate-bounce">
        <svg
          className="w-12 h-12 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollDownArrow;
