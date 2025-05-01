// src/components/home/HomeGallerySection.tsx
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import RevealWrapper from "../common/RevealWrapper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../components/context/useThemeHook";

interface HomeGallerySectionProps {
  imageSrc: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({
  imageSrc,
  alt,
  gallery,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleViewMoreClick = () => {
    navigate("/gallery#gallery");
  };

  return (
    <section
      className={`py-16 px-4`}
      style={{ backgroundColor: colors.background, color: colors.section }}
    >
      <div className={`mx-auto w-full`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Container */}

          <div className="flex flex-col items-center justify-center gap-8 text-center">
            {gallery.map((galleryItem, index) => (
              <div key={index} className="w-full">
                <div className="px-6 py-8 flex flex-col items-center justify-center">
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <h3
                      className={`text-xl md:text-4xl font-cinzel font-medium mb-4`}
                      style={{ color: colors.accent }}
                    >
                      {galleryItem.title}
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={`text-sm md:text-base font-cinzel px-4 mb-12`}
                      style={{ color: colors.bannerTitle }}
                    >
                      {galleryItem.description}
                    </p>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <button
                      type="button"
                      onClick={handleViewMoreClick}
                      className="bg-pink-700 text-white px-12 border rounded py-4 md:px-16 md:py-6 font-cinzel hover:bg-pink-900 transition-colors duration-300"
                      style={{
                        minWidth: "fit-content",
                        borderColor: colors.border,
                      }}
                    >
                      VER MÁS
                    </button>
                  </RevealWrapper>
                </div>
              </div>
            ))}
          </div>

          {/* Image Container */}
          <div className="overflow-hidden">
            <RevealWrapper animationClass="slide-in-right-animation">  
            <SmoothImage
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
              disableInternalTransition={true}
              loading="lazy"
            />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
