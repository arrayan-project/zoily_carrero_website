import React from "react";
import SlideComponent from "./SlideComponent";
import Slider from "react-slick";
import ScrollReveal from "./ScrollReveal";
import { useTheme } from "./context/useTheme";

interface ServiceCarouselProps {
  images: string[];
  title: string;
  description: string;
  openModal: (content: {
    images: string[];
    title: string;
    infoContent: React.ReactNode;
    termsContent: React.ReactNode;
  }) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ images, title, description, openModal, infoContent, termsContent }) => {
  const { theme } = useTheme();

     // Settings para el carrusel de React Slick
     const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Opcional: Autoplay del carrusel
        autoplaySpeed: 3000, // Opcional: Velocidad de autoplay
        arrows: false, // Oculta las flechas de navegación del carrusel (opcional)
    };

  return (
    <div className="space-y-6">
      <div className="w-full aspect-square shadow-lg overflow-hidden relative group ">
        {/*Contenedor para hover y botones */}
        <button
          className="servicio-boton-clickable"
          onClick={() =>
            openModal({
              images: images,
              title: title,
              infoContent: infoContent,
              termsContent: termsContent,
            })
          }
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          {/* Imagen del servicio*/}
          <ScrollReveal animationClassName="fade-in-image">
            <div>
              <Slider {...sliderSettings}>
                {images.map((img, index) => (
                  <SlideComponent
                    key={index}
                    img={img}
                    index={index}
                    images={images}
                  />
                ))}
              </Slider>
            </div>
          </ScrollReveal>
        </button>
        <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
          Reserva tu cita
        </button>
        <button
          onClick={() =>
            openModal({
              images: images,
              title: title,
              infoContent: infoContent,
              termsContent: termsContent,
            })
          }
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
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
      <ScrollReveal animationClassName="fade-in-text">
        <h2 className={`text-xl md:text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal animationClassName="fade-in-text">
        <p className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
         {description}
        </p>
      </ScrollReveal>
    </div>
  );
};

export default ServiceCarousel;
