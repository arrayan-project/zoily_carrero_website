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
    <div id="services-carousel" className="relative w-full h-[85vh] my-8 mx-auto overflow-visible rounded-[20px]">
      <div className="slide relative w-full h-full" ref={slideRef}>
        {servicesData.map(item => (
          <div
            key={item.category}
            className="item absolute w-[200px] h-[300px] top-1/2 -translate-y-1/2 rounded-[20px] bg-center bg-cover bg-no-repeat inline-block"
            style={{ backgroundImage: `url(${item.modalContent.images[0]})` }}
          >
            <ServicesContent>
              <div className="name text-[40px] uppercase font-bold font-cinzel">{item.category}</div>
              <div className="description my-[10px] mb-[20px] font-cinzel">
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
