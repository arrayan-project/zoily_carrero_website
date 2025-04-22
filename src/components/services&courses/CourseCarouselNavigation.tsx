// ServicesCarouselNavigation.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onNext: () => void;
  onPrev: () => void;
}

const buttonStyle = `bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200`;

const CoursesCarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrev,
  onNext,
}) => (
  <div className="button absolute bottom-4 left-1/2 transform -translate-x-1 flex gap-4 z-50">
    <button className={buttonStyle} onClick={onPrev} aria-label="Anterior">
      <ChevronLeft size={24} />
    </button>
    <button className={buttonStyle} onClick={onNext} aria-label="Siguiente">
      <ChevronRight size={24} />
    </button>
  </div>
);

export default CoursesCarouselNavigation;
