import React, { useEffect, useState } from "react";

interface GalleryImageGridProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const GalleryImageGrid: React.FC<GalleryImageGridProps> = ({ images, onImageClick }) => {
  const [visible, setVisible] = useState(false);
  const [mountedImages, setMountedImages] = useState(images);

  // Suaviza cambio de categoría
  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setMountedImages(images);
      setVisible(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [images]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-1 mt-10 mb-10 px-1">
      {mountedImages.map((src, index) => (
        <div key={index} className="overflow-hidden aspect-[3/4]">
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            loading="lazy"
            className={`w-full h-full object-cover cursor-pointer transition-transform duration-300 fade-in-up-animation ${
              visible ? "visible" : ""
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onImageClick(index)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImageGrid;
