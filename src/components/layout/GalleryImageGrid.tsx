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
              className={'w-full aspect-square overflow-hidden p-1.5 sm:p-2 md:p-2.5 lg:p-2.5 rounded-sm bg-white'} style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.3)' }}
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