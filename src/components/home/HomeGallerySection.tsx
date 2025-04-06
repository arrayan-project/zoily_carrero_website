// src/components/home/HomeGallerySection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import AnimationWrapper from "../common/AnimationLayer";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../components/context/useThemeHook";

interface HomeGallerySectionProps {
  imageSrc: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({ imageSrc, alt, gallery }) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleViewMoreClick = () => {
    navigate('/gallery#gallery');
  };

  return (
    <section className={`py-16 px-4`} style={{ backgroundColor: colors.background, color: colors.section }}>
      <div className={`mx-auto w-full`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Container */}
          <AnimationWrapper animationClassName="slide-in-left">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              {gallery.map((galleryItem, index) => (
                <div key={index} className="w-full">
                  <div className="px-6 py-8 flex flex-col items-center justify-center">
                    <h3 className={`text-xl md:text-4xl font-cinzel font-medium mb-4`} style={{ color: colors.accent }}>{galleryItem.title}</h3>
                    <p className={`text-sm md:text-base font-cinzel px-4 mb-12`} style={{ color: colors.bannerTitle }}>{galleryItem.description}</p>
                    <button
                      type="button"
                      onClick={handleViewMoreClick}
                      className="bg-pink-700 text-white px-12 py-4 md:px-16 md:py-6 font-cinzel hover:bg-pink-900 transition-colors duration-300"
                    >
                      VER MÁS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>

          {/* Image Container */}
          <AnimationWrapper animationClassName="slide-in-right">
            <div className="overflow-hidden">
              <SmoothImage
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
