// GalleryImageGrid.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';

interface GalleryImageGridProps {
  currentGalleryImages: string[];
  openImage: (index: number) => void;
  isGalleryTransitioning: boolean;
}

const GalleryImageGrid: React.FC<GalleryImageGridProps> = ({
  currentGalleryImages,
  openImage,
  isGalleryTransitioning
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 p-4">
      {!isGalleryTransitioning &&
        currentGalleryImages.map((img, index) => (
          <div key={index} className={`w-full aspect-square overflow-hidden`}>
            <SmoothImage
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full cursor-pointer lazy-image" // Eliminamos object-cover
              onClick={() => openImage(index)}
              fallbackSrc="/img/default-image.png"
              isGridImage={true} // Añadimos la prop en true
            />
          </div>
        ))}
    </div>
  );
};

export default GalleryImageGrid;
