// ServicesCarouselSection.tsx
import React, { useRef, useEffect } from 'react';
import ServicesCarouselNavigation from './ServicesCarouselNavigation';
import ServicesContent from './ServicesCarouselContent';
import { servicesData } from '../../data/servicesData';
import { useModal } from '../context/ModalContext';
import './ServicesCarousel.css';
import useWindowSize from "../../hooks/useWindowSize";


const ServicesCarouselSection: React.FC = () => {
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
    <div id="services-carousel" className="container">
      <div className="slide" ref={slideRef}>
        {servicesData.map(item => (
          <div
            key={item.category}
            className="item"
            style={{ backgroundImage: `url(${item.modalContent.images[0]})` }}
          >
            <ServicesContent>
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
            </ServicesContent>
          </div>
        ))}
      </div>
      <ServicesCarouselNavigation
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default ServicesCarouselSection;
