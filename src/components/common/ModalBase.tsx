/**
 * Componente base reutilizable para modales.
 * Permite mostrar contenido personalizado, tabs, imágenes y controla accesibilidad y bloqueo de scroll.
 * Adapta los colores y estilos según el tema actual.
 *
 * @component
 * @param {ModalBaseProps} props - Props del modal, incluyendo control de apertura, cierre, contenido, tabs, imágenes y estilos.
 * @returns {JSX.Element | null}
 */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "../context/themeContext";
import { getImageObject } from "../../utils/getImageObject";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useScrollIndicators } from "../../hooks/useScrollIndicators";
import CloseButton from "./CloseButton";
import ScrollIndicatorArrow from "./ScrollIndicatorArrow";

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
  showCloseButtonFlag?: boolean;
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
  showCloseButtonFlag = true,
}) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "Informacion" | "Terminos" | "Imagenes"
  >("Informacion");
  const modalContentRef = modalRef || useRef<HTMLDivElement>(null);
  const modalContainerElementRef = useRef<HTMLDivElement>(null);

  const handleAccessibilityClose = useCallback(
    (event?: Event | React.SyntheticEvent) => {
      const targetElement = event?.target as Node | null;
      const containerElement = modalContainerElementRef.current;
      if (event && targetElement && containerElement) {
        const isContained = containerElement.contains(targetElement);
        if (isContained) return;
      }
      onClose();
    },
    [onClose]
  );

  useBodyScrollLock(isOpen);
  useModalAccessibility(isOpen, handleAccessibilityClose, modalContentRef);

  // Usamos el nuevo hook
  const {
    showScrollUpIndicator,
    showScrollDownIndicator,
    updateScrollIndicators,
  } = useScrollIndicators({
    contentRef: modalContentRef,
    isOpen,
    dependencies: [
      activeTab,
      children,
      infoContent,
      termsContent,
      images,
      title,
      description,
    ],
  });

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        updateScrollIndicators();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [
    activeTab,
    children,
    infoContent,
    termsContent,
    images,
    title,
    description,
    isOpen,
    updateScrollIndicators,
  ]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 px-4 ${overlayClassName}`}
      style={{
        background: colors.bannerImageOverlay,
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-desc" : undefined}
    >
      <div
        ref={modalContainerElementRef}
        className={`modal-animation modal-container relative rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col ${className}`}
        style={{
          background: colors.bannerBackground,
          color: colors.text,
          border: `1px solid ${colors.border}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        +{" "}
        {showScrollUpIndicator && (
          <ScrollIndicatorArrow
            direction="up"
            isVisible={showScrollUpIndicator}
            backgroundColor={colors.bannerImageOverlay}
            strokeColor={colors.text}
            onClick={(e) => {
              e.stopPropagation();
              modalContentRef.current?.scrollBy({
                top: -150,
                behavior: "smooth",
              });
            }}
            aria-label="Desplazar contenido hacia arriba"
          />
        )}
        {showCloseButtonFlag && (
          <div className="absolute top-4 right-4 z-20">
            <CloseButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onClose();
              }}
            />
          </div>
        )}
        {/* Contenedor del contenido scrolleable */}
        <div
          className="modal-content-area px-8 pt-8 mb-8 overflow-y-auto no-scrollbar flex-grow"
          ref={modalContentRef}
          tabIndex={-1}
        >
          {title && (
            <div className="font-cinzel">
              <h2
                id="modal-title"
                className="text-xl font-bold mb-8"
                style={{ color: colors.bannerTitle }}
              >
                {title}
              </h2>
              {description && (
                <p id="modal-desc" className="mb-4 text-sm">
                  {description}
                </p>
              )}
            </div>
          )}

          {showTabs ? (
            <>
              {/* Tab Navigation */}
              <div
                role="tablist"
                aria-label="Pestañas del modal"
                className="flex mb-12 mt-12 w-full"
                style={{
                  background: colors.section,
                  borderRadius: 8,
                }}
              >
                <button
                  className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                  style={{
                    background:
                      activeTab === "Informacion"
                        ? colors.section
                        : "transparent",
                    color:
                      activeTab === "Informacion"
                        ? colors.accent
                        : colors.secondaryText,
                    borderBottom:
                      activeTab === "Informacion"
                        ? `2px solid ${colors.accent}`
                        : "none",
                  }}
                  onClick={() => setActiveTab("Informacion")}
                  aria-label="Pestaña Informacion"
                  role="tab"
                  id="tab-informacion"
                  aria-selected={activeTab === "Informacion"}
                >
                  Información
                </button>
                <button
                  className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                  style={{
                    background:
                      activeTab === "Terminos" ? colors.section : "transparent",
                    color:
                      activeTab === "Terminos"
                        ? colors.accent
                        : colors.secondaryText,
                    borderBottom:
                      activeTab === "Terminos"
                        ? `2px solid ${colors.accent}`
                        : "none",
                  }}
                  onClick={() => setActiveTab("Terminos")}
                  aria-label="Pestaña terminos"
                  role="tab"
                  id="tab-terminos"
                  aria-selected={activeTab === "Terminos"}
                >
                  Términos
                </button>
                {images && images.length > 0 && (
                  <button
                    className="flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50"
                    style={{
                      background:
                        activeTab === "Imagenes"
                          ? colors.section
                          : "transparent",
                      color:
                        activeTab === "Imagenes"
                          ? colors.accent
                          : colors.secondaryText,
                      borderBottom:
                        activeTab === "Imagenes"
                          ? `2px solid ${colors.accent}`
                          : "none",
                    }}
                    onClick={() => setActiveTab("Imagenes")}
                    aria-label="Pestaña Imagen"
                    role="tab"
                    id="tab-imagenes"
                    aria-selected={activeTab === "Imagenes"}
                  >
                    Imágenes
                  </button>
                )}
              </div>
              {/* Tab Content */}
              <div className="relative min-h-[24rem]">
                {" "}
                {/* min-h-96 es 24rem */}
                {activeTab === "Informacion" && (
                  <div
                    role="tabpanel"
                    aria-labelledby="tab-informacion"
                    id="panel-informacion"
                    className="absolute top-0 left-0 w-full h-full tab-content-animation"
                  >
                    {infoContent}
                  </div>
                )}
                {activeTab === "Terminos" && (
                  <div
                    role="tabpanel"
                    aria-labelledby="tab-terminos"
                    id="panel-terminos"
                    className="absolute top-0 left-0 w-full h-full tab-content-animation"
                  >
                    {termsContent}
                  </div>
                )}
                {activeTab === "Imagenes" && images && images.length > 0 && (
                  <div
                    role="tabpanel"
                    aria-labelledby="tab-imagenes"
                    id="panel-imagenes"
                    className="absolute top-0 left-0 w-full h-full tab-content-animation"
                  >
                    {images.map((imageKey, index) => {
                      const imageObject = getImageObject(imageKey);
                      if (!imageObject) return null;
                      return (
                        <img
                          key={index}
                          src={imageObject.webp}
                          alt={title || `Imagen ${index + 1}`}
                          className="w-full h-full object-contain object-center"
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
        {showScrollDownIndicator && (
          <ScrollIndicatorArrow
            direction="down"
            isVisible={showScrollDownIndicator}
            backgroundColor={colors.bannerImageOverlay}
            strokeColor={colors.text}
            onClick={(e) => {
              e.stopPropagation();
              modalContentRef.current?.scrollBy({
                top: 150,
                behavior: "smooth",
              });
            }}
            aria-label="Desplazar contenido hacia abajo"
          />
        )}
      </div>
    </div>
  );
};

export default ModalBase;
