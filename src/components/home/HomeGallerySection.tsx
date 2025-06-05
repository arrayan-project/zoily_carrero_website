/**
 * Sección de galería en el Home.
 * Muestra información de la galería, imagen destacada y botón para ver más, con animaciones y estilos adaptados al tema.
 *
 * @component
 * @param {HomeGallerySectionProps} props - Props del componente, incluyendo la imagen, alt y el array de galerías.
 * @returns {JSX.Element}
 */
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import RevealWrapper from "../common/RevealWrapper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../components/context/themeContext";
import { HOME_GALLERY_SECTION_ITEM_TITLE_CLASS, HOME_GALLERY_SECTION_ITEM_DESCRIPTION_CLASS, HOME_GALLERY_SECTION_BUTTON_CLASS } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";


interface HomeGallerySectionProps {
  imageKey: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({
  imageKey,
  alt,
  gallery,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const imageObject = getImageObject(imageKey);

  const handleViewMoreClick = () => {
    navigate("/gallery#gallery");
  };

  return (
    <section
      className={`py-1 md:py-1 md:px-1`}
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
                      className={HOME_GALLERY_SECTION_ITEM_TITLE_CLASS}
                      style={{ color: colors.accent }}
                    >
                      {galleryItem.title}
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={HOME_GALLERY_SECTION_ITEM_DESCRIPTION_CLASS}
                      style={{ color: colors.bannerTitle }}
                    >
                      {galleryItem.description}
                    </p>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <button
                      type="button"
                      aria-label="Abrir Galeria de imagenes"
                      onClick={handleViewMoreClick}
                      className={`${HOME_GALLERY_SECTION_BUTTON_CLASS}`}
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
              src={imageObject.webp}
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
