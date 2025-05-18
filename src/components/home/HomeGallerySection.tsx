// src/components/home/HomeGallerySection.tsx
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import RevealWrapper from "../common/RevealWrapper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../components/context/useThemeHook";
import { FONT_FAMILY_PRIMARY, FONT_WEIGHT_LIGHT , PARAGRAPH_CLASS, TEXT_SIZE_BASE, COLOR_TEXT_WHITE } from "../../constants/styles";

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
      className={`py-4 md:py-16 md:px-4`}
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
                      className={`${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT } text-xl md:text-4xl mb-12`}
                      style={{ color: colors.accent }}
                    >
                      {galleryItem.title}
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={`${PARAGRAPH_CLASS} px-4 mb-12`}
                      style={{ color: colors.bannerTitle }}
                    >
                      {galleryItem.description}
                    </p>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <button
                      type="button"
                      onClick={handleViewMoreClick}
                      className={`bg-pink-700 ${COLOR_TEXT_WHITE} px-12 border rounded py-4 md:px-16 md:py-6 ${FONT_FAMILY_PRIMARY} ${TEXT_SIZE_BASE} hover:bg-pink-900 transition-colors duration-300`}
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
