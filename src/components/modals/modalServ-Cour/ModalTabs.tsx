/**
 * Componente que gestiona la navegación por pestañas y el contenido asociado dentro de un modal.
 * Permite mostrar pestañas para "Información", "Términos" e "Imágenes".
 *
 * @component
 * @param {ModalTabsProps} props - Propiedades del componente ModalTabs.
 * @returns {JSX.Element} El componente de pestañas del modal.
 */
import React from "react";
import { useTheme } from "../../context/themeContext";
import { getImageObject } from "../../../utils/getImageObject";
import { ServiceItem } from "./ModalInterfacesServices";
import ServiceItemsList from "./ServiceItemsList";
import { useNavigate } from "react-router-dom";

export type ActiveTabType = "Informacion" | "Terminos" | "Imagenes";

interface ModalTabsProps {
  activeTab: ActiveTabType;
  onTabSelect: (tab: ActiveTabType) => void;
  images?: string[];
  infoContent?: React.ReactNode;
  termsContent?: React.ComponentType | React.ReactNode;
  serviceItems?: ServiceItem[];
  title?: string; // For image alt text and potentially other uses
  galleryCategorySlug?: string;
  onCloseRequest?: () => void;
}

const ModalTabs: React.FC<ModalTabsProps> = ({
  activeTab,
  onTabSelect,
  images = [],
  infoContent,
  termsContent,
  serviceItems = [],
  title,
  galleryCategorySlug,
  onCloseRequest,
}) => {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const handleViewGallery = () => {
    if (galleryCategorySlug) {
      navigate(`/galeria/${galleryCategorySlug}`); // Asume que tu ruta de galería es /galeria/:categorySlug
      onCloseRequest?.(); // Llama a la función para cerrar el modal si se proporcionó
    }
  };

  return (
    <>
      {/* Tab Navigation */}
      <div
        className="flex mb-12 mt-12 w-full"
        style={{
          background: colors.section,
          borderRadius: 8,
        }}
        role="tablist"
      >
        <button
          className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
          style={{
            background:
              activeTab === "Informacion" ? colors.section : "transparent",
            color:
              activeTab === "Informacion"
                ? colors.accent
                : colors.secondaryText,
            borderBottom:
              activeTab === "Informacion"
                ? `2px solid ${colors.accent}`
                : "none",
          }}
          onClick={() => onTabSelect("Informacion")}
          aria-label="Pestaña Informacion"
          aria-selected={activeTab === "Informacion"}
          role="tab"
        >
          Información
        </button>
        <button
          className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
          style={{
            background:
              activeTab === "Terminos" ? colors.section : "transparent",
            color:
              activeTab === "Terminos" ? colors.accent : colors.secondaryText,
            borderBottom:
              activeTab === "Terminos" ? `2px solid ${colors.accent}` : "none",
          }}
          onClick={() => onTabSelect("Terminos")}
          aria-label="Pestaña terminos"
          aria-selected={activeTab === "Terminos"}
          role="tab"
        >
          Términos
        </button>
        {images && images.length > 0 && (
          <button
            className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
            style={{
              background:
                activeTab === "Imagenes" ? colors.section : "transparent",
              color:
                activeTab === "Imagenes" ? colors.accent : colors.secondaryText,
              borderBottom:
                activeTab === "Imagenes"
                  ? `2px solid ${colors.accent}`
                  : "none",
            }}
            onClick={() => onTabSelect("Imagenes")}
            aria-label="Pestaña Imagen"
            aria-selected={activeTab === "Imagenes"}
            role="tab"
          >
            Imágenes
          </button>
        )}
      </div>
      {/* Tab Content */}
      <div
        className="relative min-h-[24rem]"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.toLowerCase()}`}
      >
        {activeTab === "Informacion" && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
            <div className="mx-auto max-w-3xl text-left py-4">
              {/* Renderiza infoContent si existe */}
              {infoContent}
              {/* Renderiza ServiceItemsList si hay items, independientemente de infoContent */}
              {serviceItems && serviceItems.length > 0 && (
                <ServiceItemsList items={serviceItems} />
              )}
            </div>
          </div>
        )}
        {activeTab === "Terminos" && termsContent && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
            <div className="mx-auto max-w-3xl text-left py-4">
              {typeof termsContent === 'function' ? React.createElement(termsContent as React.ComponentType) : termsContent}
            </div>
          </div>
        )}
        {activeTab === "Imagenes" && images && images.length > 0 && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation flex flex-col items-center">
            {/* Contenedor para la imagen, para que el botón quede debajo */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex-grow flex items-center justify-center mb-4">
              {images.map((imageKey, index) => {
                const imageObject = getImageObject(imageKey);
                if (!imageObject) return null;
                if (index === 0 || images.length === 1) {
                  return (
                   <div 
                      key={index} 
                      className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg" 
                      // style={{ maxHeight: 'calc(100% - 4rem)' }} // Puedes mantener esto si necesitas limitar la altura máxima
                    >                      <img
                        src={imageObject.webp}
                        alt={title || `Imagen ${index + 1}`}
                        className="w-full h-full object-cover object-center" // object-cover para llenar y recortar
                        loading="lazy"
                        // Para un aspect ratio específico, podrías añadir clases como aspect-[3/4] o aspect-[9/16] si usas Tailwind JIT
                        // o definirlo en el div contenedor.
                        // Por ahora, w-full h-full con object-cover en un contenedor con max-h la hará vertical si la imagen original lo permite.
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {galleryCategorySlug && (
              <button
                onClick={handleViewGallery}
                className="mt-4 px-6 py-2 font-cinzel rounded focus:outline-none transition-colors duration-300"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text, // O el color de texto que contraste bien con colors.accent
                  border: `1px solid ${colors.accent}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.section;
                  e.currentTarget.style.color = colors.bannerTitle;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accent;
                  e.currentTarget.style.color = colors.bannerBackground;
                }}
              >
                Ver Galería
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ModalTabs;
