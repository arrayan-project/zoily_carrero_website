import React from "react";
import { useTheme } from "./context/useThemeHook";

interface CourseCarouselProps {
  courseKey: string;
  title: string;
  image: string;
  openModal: (content: any, courseKey?: string) => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({
  courseKey,
  title,
  image,
  openModal,
}) => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Image with onClick */}
      <div
        className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-lg"
        onClick={() => openModal(null, courseKey)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the image's onClick
            openModal(null, courseKey);
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100"
        >
          Ver detalles
        </button>
      </div>
      <h2
        onClick={() => openModal(null, courseKey)}
        className={`text-xl md:text-2xl font-cinzel tracking-wide ${
          theme === "dark" ? "text-white" : "text-gray-800"
        } cursor-pointer`}
      >
        {title}
      </h2>
    </div>
  );
};

export default CourseCarousel;
