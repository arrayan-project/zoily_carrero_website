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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24">
      {!isGalleryTransitioning &&
        currentGalleryImages.map((img, index) => (
          <div key={index} className={`w-full aspect-square overflow-hidden p-1 sm:p-2 md:p-3 lg:p-3 rounded-sm bg-white`} style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.3)' }}>
            <SmoothImage
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full cursor-pointer lazy-image rounded-lg"
              onClick={() => openImage(index)}
              fallbackSrc="/img/default-image.png"
              isGridImage={true}
            />
          </div>
        ))}
    </div>
  );
};

export default GalleryImageGrid;
