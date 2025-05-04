// ServicesCarouselSection.tsx
import React, { useRef} from "react";
import CoursesCarouselNavigation from "./CourseCarouselNavigation";
import CoursesContent from "./CourseCarouselContent";
import { coursesData } from "../../data/coursesData";
import { useModal } from "../context/ModalContext";
import "./CoursesCarousel.css";
import useWindowSize from "../../hooks/useWindowSize";
import RevealWrapper from "../common/RevealWrapper";

const CoursesCarouselSection: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const { isMobileView } = useWindowSize();

  const handleNext = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>(".item");
    if (items.length) slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>(".item");
    if (items.length) slide.prepend(items[items.length - 1]);
  };

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="courses-carousel"
        className="relative w-full h-[85vh] mx-auto overflow-visible rounded-[20px]"
      >
        <div className="slide" ref={slideRef}>
          {coursesData.map((item) => (
            <div
              key={item.category}
              className="item absolute w-[200px] h-[300px] top-1/2 -translate-y-1/2 rounded-[20px] bg-center bg-cover bg-no-repeat inline-block"
              style={{ backgroundImage: `url(${item.modalContent.images[0]})` }}
            >
              <CoursesContent>
                <div className="name text-[40px] uppercase font-bold font-cinzel">
                  {item.category}
                </div>
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
              </CoursesContent>
            </div>
          ))}
        </div>
        <div className="sr-only" aria-hidden="true">
          {coursesData.map((item, index) => (
            <img
              key={item.category}
              src={item.modalContent.images[0]}
              alt=""
              loading={index === 1 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <CoursesCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default CoursesCarouselSection;
