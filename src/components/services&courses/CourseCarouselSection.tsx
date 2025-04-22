// ServicesCarouselSection.tsx
import React, { useRef, useEffect } from 'react';
import CoursesCarouselNavigation from './CourseCarouselNavigation';
import CoursesContent from './CourseCarouselContent';
import { coursesData } from '../../data/coursesData';
import { useModal } from '../context/ModalContext';
import './CoursesCarousel.css';
import useWindowSize from "../../hooks/useWindowSize";


const CoursesCarouselSection: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const { windowWidth, isMobileView } = useWindowSize();

  useEffect(() => {
    const slide = slideRef.current!;
  }, []);

  const handleNext = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>('.item');
    if (items.length) slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>('.item');
    if (items.length) slide.prepend(items[items.length - 1]);
  };

  return (
    <div id="courses-carousel" className="container">
      <div className="slide" ref={slideRef}>
        {coursesData.map(item => (
          <div
            key={item.category}
            className="item"
            style={{ backgroundImage: `url(${item.modalContent.images[0]})` }}
          >
            <CoursesContent>
              <div className="name font-cinzel">{item.category}</div>
              <div className="description font-cinzel">
                {item.description}
              </div>
              <button
                onClick={() => openModal(item.modalContent)}
                className={`p-2 border-none bg-white font-cinzel text-black rounded-none cursor-pointer absolute left-center top-[110%] -translate-y-1/2 opacity-100 transition-opacity duration-500  ${
                  isMobileView ? "text-sm" : "text-base"
                }`}
              >
                Ver más
              </button>
            </CoursesContent>
          </div>
        ))}
      </div>
      <CoursesCarouselNavigation
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default CoursesCarouselSection;