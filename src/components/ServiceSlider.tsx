import React from "react";
import SlideComponent from "./SlideComponent";
import Slider from "react-slick";
import { useTheme } from "./context/useThemeHook";
import { ModalContent } from "../data/servicesData"; // Importamos la interface
import AnimationWrapper from "./AnimationLayer";



interface ServiceCarouselProps {
  images: string[];
  title: string;
  openModal: (content: ModalContent) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
}) => {
  const { theme } = useTheme();

  const handleOpenModal = () => {
    openModal({ images, title, infoContent, termsContent, description });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="space-y-6 justify-center items-center text-center">
      {/* Image Container */}
      <div
        className="w-full aspect-square shadow-lg overflow-hidden relative group cursor-pointer rounded-lg"
        onClick={handleOpenModal}
      >
          <AnimationWrapper animationClassName="fade-in-up">
              <div>
            <Slider {...sliderSettings}>
              {images.map((img, index) => (
                <SlideComponent key={index} img={img} />
              ))}
            </Slider>
          </div>
          </AnimationWrapper>
        <button
          onClick={handleOpenModal}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
        >
          Ver Detalles
        </button>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 text-pink-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>

      {/* Title Container */}
      <h2
      onClick={handleOpenModal} // Add the onClick event handler
        className={`text-xl md:text-2xl font-cinzel tracking-wide cursor-pointer ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default ServiceCarousel;
