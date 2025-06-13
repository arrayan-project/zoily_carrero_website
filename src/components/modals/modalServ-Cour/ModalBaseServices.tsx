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
import { getImageObject } from "../../../utils/getImageObject";
import { useModalAccessibility } from "../../../hooks/useModalAccessibility";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { useScrollIndicators } from "../../../hooks/useScrollIndicators";
import CloseButton from "../../../components/common/CloseButton";
import { ServiceItem } from "./ModalInterfacesServices"; // Importar la interfaz
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
}) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "Informacion" | "Terminos" | "Imagenes"
  >("Informacion");
  const modalContentRef = modalRef || useRef<HTMLDivElement>(null);
  const modalContainerElementRef = useRef<HTMLDivElement>(null);

  // Estados para controlar el renderizado y la animación
  const [isModalRendered, setIsModalRendered] = useState(isOpen);
  const [animationTriggerClass, setAnimationTriggerClass] =
    useState("translate-x-full"); // Inicia fuera de pantalla

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
  if (isOpen) {
    setIsModalRendered(true);
    const openTimer = setTimeout(() => {
      setAnimationTriggerClass("translate-x-0");
    }, 20); // 20 ms de buffer para que el navegador aplique primero translate-x-full
    return () => clearTimeout(openTimer);
  } else {
// isOpen es false.
    // Solo animar la salida si el modal estaba realmente abierto o abriéndose.
    if (isModalRendered) { // isModalRendered es true si isOpen fue true previamente
      setAnimationTriggerClass("translate-x-full"); // Inicia animación de salida
      const closeTimer = setTimeout(() => {
        setIsModalRendered(false); // Marca para desmontaje lógico del contenido del modal
        if (onAnimationEnd) {
          onAnimationEnd(); // Notifica al padre para limpiar el contenido en el contexto
        }
      }, 1020); // duration-1000 (Tailwind) + 20ms buffer
      return () => clearTimeout(closeTimer);
    } else {
      // Si isOpen es false y isModalRendered ya era false (nunca se abrió o ya se cerró)
      // Asegurarse de que el contenido se limpie si es necesario.
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }
  }
}, [isOpen, isModalRendered, onAnimationEnd]); // onAnimationEnd es estable, isModalRendered es clave aquí

  useEffect(() => {
    // Efecto para actualizar indicadores de scroll
    if (isOpen && isModalRendered) { // Solo actualiza si está abierto y renderizado
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
  if (!isModalRendered && animationTriggerClass === "translate-x-full" && !isOpen) {
  return null;
  }

  // Helper para renderizar la lista de items de servicio/curso
  const renderServiceItemsList = (items: ServiceItem[]) => (
    <div className="service-items-list mt-4 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="service-item pb-4 border-b last:border-b-0"
          style={{ borderColor: colors.bannerTitle }}
        >
          <h4 className="tex-base md:text-lg font-semibold mb-1 font-cinzel" style={{ color: colors.accent }}>
            {item.name}
          </h4>
          <p className="text-sm md:text-md font-semibold mb-2 font-cinzel" style={{ color: colors.text }}>
            Precio: {item.price}
          </p>
          {item.description && item.description.length > 0 && (
            <div className="mt-1">
              <ul className="list-disc list-inside ml-4 md:text-sm space-y-1 font-cinzel" style={{ color: colors.text }}>
                {item.description.map((descPoint, pointIndex) => (
                  <li key={pointIndex}>{descPoint}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
                  className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
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
                >
                  Información
                </button>
                <button
                  className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
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
                >
                  Términos
                </button>
                {images && images.length > 0 && (
                  <button
                  className="flex-1 px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold bg-opacity-50 text-center"
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
                 <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                    {/* Contenedor para centrar el bloque de contenido */}
                    <div className="mx-auto max-w-3xl text-left py-4">
                      {infoContent}
                      {serviceItems && serviceItems.length > 0 && renderServiceItemsList(serviceItems)}
                    </div>
                  </div>
                )}
                {activeTab === "Terminos" && (
                 <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                    {/* Contenedor para centrar el bloque de contenido */}
                    <div className="mx-auto max-w-3xl text-left py-4"> {/* Ajusta max-w-* según necesites */}
                      {termsContent}
                    </div>
                  </div>
                )}
                {activeTab === "Imagenes" && images && images.length > 0 && (
                  <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
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
            // Si no hay tabs, decide qué renderizar:
            children ? children : // 1. children si se proporciona
            (serviceItems && serviceItems.length > 0 ? ( // 2. serviceItems si se proporcionan
              <div className="mx-auto max-w-3xl text-left py-4">
                {renderServiceItemsList(serviceItems)}
              </div>
            ) : ( // 3. infoContent como fallback
              infoContent && (
                <div className="mx-auto max-w-3xl text-left py-4">
                  {infoContent}
                </div>
              )
            ))
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
