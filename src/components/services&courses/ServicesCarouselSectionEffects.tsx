import React, {useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons

interface ServicesSectionEffectProps {
  children: React.ReactNode;
  onMainChange: (index: number, direction: 'next' | 'prev') => void;
  windowWidth: number;
}

const ServicesSectionEffect: React.FC<ServicesSectionEffectProps> = ({ children, onMainChange, windowWidth }) => {
  const [, setCurrentItem] = useState(0);
  const totalItems = React.Children.count(children);

  const nextSlide = () => {
    setCurrentItem((prev) => {
      const newIndex = (prev + 1) % totalItems;
      onMainChange(newIndex, 'next');
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentItem((prev) => {
      const newIndex = (prev - 1 + totalItems) % totalItems;
      onMainChange(newIndex, 'prev');
      return newIndex;
    });
  };

  // Calculate responsive container dimensions
  const getContainerStyles = () => {
    let height = '600px';

    if (windowWidth >= 2560) {
      height = '800px';
    } else if (windowWidth >= 1440 && windowWidth < 2560) {
      height = '650px';
    } else if (windowWidth >= 1024 && windowWidth < 1440) {
      height = '550px';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      height = '500px';
    } else if (windowWidth < 768) {
      height = '450px';
    }

    return {
      height
    };
  };

  const containerStyles = getContainerStyles();

  return (
    <div
      className="carousel-container relative w-full mx-auto"
      style={{
        height: containerStyles.height
      }}
    >
      <div className="carousel-slide absolute w-full h-full">
        {children}
      </div>

      {/* Responsive navigation buttons */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50`}> {/* Consistent gap */}
        <button
          onClick={prevSlide}
          className={`bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200`} // Refined styles
          aria-label="Previous Slide"
        >
          <ChevronLeft size={windowWidth < 768 ? 20 : 24} /> {/* Responsive icon size */}
        </button>
        <button
          onClick={nextSlide}
          className={`bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200`} // Refined styles
          aria-label="Next Slide"
        >
          <ChevronRight size={windowWidth < 768 ? 20 : 24} /> {/* Responsive icon size */}
        </button>
      </div>
    </div>
  );
};

export default ServicesSectionEffect;
