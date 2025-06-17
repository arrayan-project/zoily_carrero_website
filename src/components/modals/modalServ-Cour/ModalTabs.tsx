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
  termsContent?: React.ReactNode;
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
              {infoContent}
              <ServiceItemsList items={serviceItems} />
            </div>
          </div>
        )}
        {activeTab === "Terminos" && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
            <div className="mx-auto max-w-3xl text-left py-4">
              {termsContent}
            </div>
          </div>
        )}
        {activeTab === "Imagenes" && images && images.length > 0 && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation flex flex-col items-center">
            {/* Contenedor para la imagen, para que el botón quede debajo */}
            <div className="w-full flex-grow flex items-center justify-center">
              {images.map((imageKey, index) => {
                // Idealmente, aquí se mostraría una imagen a la vez o un carrusel
                const imageObject = getImageObject(imageKey);
                if (!imageObject) return null;
                // Si hay múltiples imágenes, considera un carrusel o mostrar solo la primera.
                // Por ahora, se mostrarán todas apiladas, lo cual no es ideal para múltiples imágenes.
                // Para este ejemplo, asumiremos que solo se muestra la primera imagen o que el diseño maneja múltiples.
                if (index === 0 || images.length === 1) {
                  // Mostrando solo la primera imagen como ejemplo
                  return (
                    <img
                      key={index}
                      src={imageObject.webp}
                      alt={title || `Imagen ${index + 1}`}
                      className="max-w-full max-h-[calc(24rem-4rem)] object-contain object-center" // Ajustar max-h para dejar espacio al botón
                      loading="lazy"
                    />
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
