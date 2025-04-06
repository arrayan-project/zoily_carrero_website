import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import LazyLoad from "react-lazyload";

interface GalleryImageGridProps {
  currentGalleryImages: string[];
  openImage: (index: number) => void;
  isGalleryTransitioning: boolean;
}

const GalleryImageGrid: React.FC<GalleryImageGridProps> = ({
  currentGalleryImages,
  openImage,
  isGalleryTransitioning,
}) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 p-5 sm:p-6 md:p-8 lg:p-8 xl:p-8">
        {!isGalleryTransitioning &&
          currentGalleryImages.map((img, index) => (
            <div
              key={index}
              className={'w-full aspect-square overflow-hidden rounded-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative group'} 
              style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
              border: '8px solid white'
               }}
            >
              <LazyLoad height={200} offset={100} once>
                <SmoothImage
                  src={img}
                  alt={`Galería ${index}`}
                  className="w-full h-full cursor-pointer rounded-xs"
                  onClick={() => openImage(index)}
                  fallbackSrc="/img/default-image.png"
                  isGridImage={true}
                />
              </LazyLoad>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryImageGrid;