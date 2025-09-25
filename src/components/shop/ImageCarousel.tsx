/**
 * Carrusel de imágenes para la vista de detalle del producto.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string[]} props.imageKeys - Array de claves de las imágenes a mostrar.
 * @returns {JSX.Element} El carrusel de imágenes renderizado.
 */
import React, { useState } from 'react';
import { getImageObject } from '../../utils/getImageObject';
import SmoothImage from '../smoothImages/SmoothImage';

interface ImageCarouselProps {
  imageKeys: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageKeys }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? imageKeys.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === imageKeys.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentImageKey = imageKeys[currentIndex];
  const imageObject = currentImageKey ? getImageObject(currentImageKey) : null;

  return (
    <div className="relative w-full h-96">
      {imageKeys.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute top-1/2 left-2 z-10 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors duration-200 transform -translate-y-1/2">
            &#10094;
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-2 z-10 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors duration-200 transform -translate-y-1/2">
            &#10095;
          </button>
        </>
      )}
      {imageObject ? (
        <SmoothImage
          src={imageObject.webp}
          alt={`Imagen del producto ${currentIndex + 1}`}
          className="w-full h-full object-contain rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
