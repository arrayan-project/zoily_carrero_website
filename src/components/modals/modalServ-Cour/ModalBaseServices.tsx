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
import { useTheme } from "../../../components/context/themeContext";
import { useModalAccessibility } from "../../../hooks/useModalAccessibility";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { useScrollIndicators } from "../../../hooks/useScrollIndicators";
import { useModalAnimation } from "../../../hooks/useModalAnimation"; // Importar el nuevo hook
import CloseButton from "../../../components/common/CloseButton";
import { ServiceItem } from "./ModalInterfacesServices"; // Importar la interfaz
import ModalTabs, { ActiveTabType } from "./ModalTabs"; // Importar el componente de Tabs
import ServiceItemsList from "./ServiceItemsList"; // Importar el componente de lista de servicios
import ScrollIndicatorArrow from "../../../components/common/ScrollIndicatorArrow";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  images?: string[];
  infoContent?: React.ReactNode;
  termsContent?: React.ReactNode;
  showTabs?: boolean;
  serviceItems?: ServiceItem[]; // Añadir la nueva prop
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  modalRef?: React.RefObject<HTMLDivElement>;
  showCloseButtonFlag?: boolean;
  onAnimationEnd?: () => void;
  galleryCategorySlug?: string;
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
  serviceItems = [], // Valor por defecto como array vacío
  children,
  className = "",
  overlayClassName = "",
  modalRef,
  showCloseButtonFlag = true,
  onAnimationEnd,
  galleryCategorySlug,
}) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Informacion");
  const modalContentRef = modalRef || useRef<HTMLDivElement>(null);
  const modalContainerElementRef = useRef<HTMLDivElement>(null);

  const { isModalRendered, animationTriggerClass } = useModalAnimation({
    isOpen,
    onAnimationEnd, // Esta es la función clearModalContent del contexto
  });

  const handleAccessibilityClose = useCallback(
    (event?: Event | React.SyntheticEvent) => {
      const targetElement = event?.target as Node | null;
      const containerElement = modalContainerElementRef.current;

      if (event && targetElement && containerElement) {
        const isContained = containerElement.contains(targetElement);
        if (isContained) {
          return;
        }
      }
      onClose();
    },
    [onClose, modalContainerElementRef]
  );

  useBodyScrollLock(isOpen);
  useModalAccessibility(isOpen, handleAccessibilityClose, modalContentRef);

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
      serviceItems, // Añadir serviceItems a las dependencias
      description,
    ],
  });

  useEffect(() => {
    // Efecto para actualizar indicadores de scroll
    if (isOpen && isModalRendered) {
      // Solo actualiza si está abierto y renderizado
      const timer = setTimeout(() => {
        updateScrollIndicators();
      }, 100); // Delay para asegurar que el contenido se haya renderizado
      return () => clearTimeout(timer);
    }
  }, [
    activeTab,
    children,
    infoContent,
    termsContent,
    images,
    title,
    serviceItems, // Añadir serviceItems a las dependencias
    description,
    isOpen,
    isModalRendered, // Añadido isModalRendered
    updateScrollIndicators,
  ]);

  // Si el modal no debe estar renderizado (ni abriendo, ni abierto, ni cerrando), no renderizar nada.
  // Esta condición permite que el modal permanezca en el DOM durante la animación de cierre.
  // Se desmontará cuando isModalRendered se vuelva false DESPUÉS de la animación.
  if (
    !isModalRendered &&
    animationTriggerClass === "translate-x-full" &&
    !isOpen
  ) {
    return null;
  }

  return (
    <div
      className={`modal-overlay fixed inset-0 z-50 flex items-center justify-center !m-0 p-0 ${overlayClassName}`}
      style={{
        background: colors.bannerImageOverlay,
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        // Cierra el modal si se hace clic directamente en el overlay
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
        className={`modal-container w-full h-full flex flex-col
                    transform transition-transform duration-1000 ease-in-out
                    ${animationTriggerClass}
                    ${className}`}
        style={{
          background: colors.bannerBackground,
          color: colors.text,
          // Considera eliminar el borde para un look de pantalla completa más limpio:
          // border: `1px solid ${colors.border}`,
        }}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal cierre el modal.
      >
        {showScrollUpIndicator && (
          <ScrollIndicatorArrow
            direction="up"
            onClick={(e) => {
              e.stopPropagation();
              modalContentRef.current?.scrollBy({
                top: -150,
                behavior: "smooth",
              });
            }}
            isVisible={showScrollUpIndicator}
            backgroundColor={colors.bannerImageOverlay}
            strokeColor={colors.text}
          />
        )}

        {/* Nueva Flecha de Cierre (estilo slider) */}
        <button
          aria-label="Cerrar modal"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 rounded-full focus:outline-none transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110"
          style={{ color: colors.text }} // Asegurar contraste con el fondo del modal
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1} // Ajustado para mejor visibilidad en tamaño pequeño
            stroke="currentColor"
            className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" // Tamaño ajustado para el modal
          >
            {/* Path de flecha hacia la derecha, indicando la dirección de cierre */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

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
          className="modal-content-area pl-20 pr-8 pt-32 mb-8 overflow-y-auto no-scrollbar flex-grow"
          ref={modalContentRef}
          tabIndex={-1} // Para que sea enfocable programáticamente si es necesario
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
            <ModalTabs
              activeTab={activeTab}
              onTabSelect={setActiveTab}
              images={images}
              infoContent={infoContent}
              termsContent={termsContent}
              serviceItems={serviceItems}
              title={title}
              galleryCategorySlug={galleryCategorySlug}
              onCloseRequest={onClose} 
            />
          ) : // Si no hay tabs, decide qué renderizar:
          children ? (
            children // 1. children si se proporciona
          ) : serviceItems && serviceItems.length > 0 ? ( // 2. serviceItems si se proporcionan
            <div className="mx-auto max-w-3xl text-left py-4">
              <ServiceItemsList items={serviceItems} />
            </div>
          ) : (
            // 3. infoContent como fallback
            infoContent && (
              <div className="mx-auto max-w-3xl text-left py-4">
                {infoContent}
              </div>
            )
          )}
        </div>

        {showScrollDownIndicator && (
          <ScrollIndicatorArrow
            direction="down"
            onClick={(e) => {
              e.stopPropagation(); // Detener la propagación del evento
              modalContentRef.current?.scrollBy({
                top: 150,
                behavior: "smooth",
              });
            }}
            isVisible={showScrollDownIndicator}
            backgroundColor={colors.bannerImageOverlay}
            strokeColor={colors.text}
          />
        )}
      </div>
    </div>
  );
};

export default ModalBase;
