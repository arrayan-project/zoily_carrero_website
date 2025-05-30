/**
 * Componente base reutilizable para modales.
 * Permite mostrar contenido personalizado, tabs, imágenes y controla accesibilidad y bloqueo de scroll.
 * Adapta los colores y estilos según el tema actual.
 *
 * @component
 * @param {ModalBaseProps} props - Props del modal, incluyendo control de apertura, cierre, contenido, tabs, imágenes y estilos.
 * @returns {JSX.Element | null}
 */
import React, { useState, useRef } from "react";
import { useTheme } from "../context/themeContext";
import { getImageObject } from "../../utils/getImageObject";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  images?: string[];
  infoContent?: React.ReactNode;
  termsContent?: React.ReactNode;
  showTabs?: boolean;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  modalRef?: React.RefObject<HTMLDivElement>;
  showCloseButton?: boolean;
}

const ModalBase: React.FC<ModalBaseProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images = [],
  infoContent,
  termsContent,
  showTabs = false,
  children,
  className = "",
  overlayClassName = "",
  modalRef,
  showCloseButton = true,
}) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<"Informacion" | "Terminos" | "Imagenes">("Informacion");
  const modalContentRef = modalRef || useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useModalAccessibility(isOpen, onClose, modalContentRef);
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${overlayClassName}`}
      style={{
        background: colors.bannerImageOverlay,
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div
        className={`modal-animation relative rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${className}`}
        style={{
          background: colors.bannerBackground,
          color: colors.text,
          border: `1px solid ${colors.border}`,
        }}
        ref={modalContentRef}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-2 right-2"
            style={{
              color: colors.secondaryText,
            }}
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {title && (
          <div className="font-cinzel">
            <h2 id="modal-title" className="text-xl font-bold mb-8" style={{ color: colors.bannerTitle }}>{title}</h2>
            {description && <p id="modal-desc" className="mb-4 text-sm">{description}</p>}
          </div>
        )}

        {showTabs ? (
          <>
            {/* Tab Navigation */}
            <div
              className="flex mb-12 mt-12 w-full"
              style={{
                background: colors.section,
                borderRadius: 8,
              }}
            >
              <button
                className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                style={{
                  background: activeTab === "Informacion" ? colors.hover : "transparent",
                  color: activeTab === "Informacion" ? colors.accent : colors.secondaryText,
                  borderBottom: activeTab === "Informacion" ? `2px solid ${colors.accent}` : "none",
                }}
                onClick={() => setActiveTab("Informacion")}
                aria-label="Pestaña Informacion"
              >
                Información
              </button>
              <button
                className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                style={{
                  background: activeTab === "Terminos" ? colors.hover : "transparent",
                  color: activeTab === "Terminos" ? colors.accent : colors.secondaryText,
                  borderBottom: activeTab === "Terminos" ? `2px solid ${colors.accent}` : "none",
                }}
                onClick={() => setActiveTab("Terminos")}
                aria-label="Pestaña terminos"
              >
                Términos
              </button>
              <button
                className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                style={{
                  background: activeTab === "Imagenes" ? colors.hover : "transparent",
                  color: activeTab === "Imagenes" ? colors.accent : colors.secondaryText,
                  borderBottom: activeTab === "Imagenes" ? `2px solid ${colors.accent}` : "none",
                }}
                onClick={() => setActiveTab("Imagenes")}
                aria-label="Pestaña Imagen"
              >
                Imágenes
              </button>
            </div>
            {/* Tab Content */}
            <div className="relative h-96 mb-12">
              {activeTab === "Informacion" && (
                <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                  {infoContent}
                </div>
              )}
              {activeTab === "Terminos" && (
                <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                  {termsContent}
                </div>
              )}
              {activeTab === "Imagenes" && (
                <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                  {images.map((imageKey, index) => {
                    const imageObject = getImageObject(imageKey);
                    if (!imageObject) return null;
                    return (
                      <img
                        key={index}
                        src={imageObject.webp}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </>
        ) : (
          // Si no hay tabs, renderiza children directamente
          children
        )}
      </div>
    </div>
  );
};

export default ModalBase;