import React, { useState, useRef, useEffect } from "react";
import SlideComponent from "../SlideComponent";
import Slider from "react-slick"; // Importa Slider
import "slick-carousel/slick/slick.css"; // Importa estilos del carrusel
import "slick-carousel/slick/slick-theme.css"; // Importa tema del carrusel

interface NoviaMakeupServiceItem {
  // Define la interfaz para los items de servicio
  name: string;
  price: string;
  description: string;
}

interface NoviaModalProps {
  isOpen: boolean;
  onClose: () => void;
  noviaImages: any[];
  theme: string;
  noviaMakeupServices: {
    // Define el tipo de noviaMakeupServices como un objeto con una propiedad 'items' que es un array de NoviaMakeupServiceItem
    category: string;
    items: NoviaMakeupServiceItem[]; // 'items' ahora es un array de NoviaMakeupServiceItem
  };
}

const ModalServices: React.FC<NoviaModalProps> = ({
  isOpen,
  onClose,
  theme,
  noviaImages,
  noviaMakeupServices,
}) => {
  const [activeTabModalNovia, setActiveTabModalNovia] = useState(
    "InformacionModalNovia"
  );

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Añade ": MouseEvent" para tipar el parámetro 'event'
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        // Añade "as Node" para el tipo de event.target
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Settings para el carrusel de React Slick (dentro del componente porque usa props)
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${
        theme === "dark"
          ? "bg-black bg-opacity-80 backdrop-blur-md"
          : "bg-gray-100 bg-opacity-50 backdrop-blur-sm"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4 md:mx-0 relative ${
          theme === "dark" 
          ? "bg-gray-900 text-white bg-opacity-30" 
          : "bg-white text-gray-800 bg-opacity-50"
        } max-h-[90vh] overflow-y-auto`}
        ref={modalContentRef} // Asocia la referencia al div del contenido del modal
      >
        {/* Botón de cerrar modal */}
        <button
          onClick={onClose} // Usa la prop onClose para cerrar el modal
          className={`absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${
            theme === "dark"
              ? "dark:text-gray-300 dark:hover:text-gray-100 "
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="tw-w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navegación de Pestañas DENTRO del Modal */}
        <div
          className={`flex mb-4 w-full ${
            theme === "dark" 
            ? "bg-black-400 bg-opacity-50" 
            : "bg-gray-100 bg-opacity-50"
          }`}
        >
          <button
            className={`flex-1 px-4 py-2 text-sm font-semibold ${
              activeTabModalNovia === "InformacionModalNovia"
                ? "bg-white dark:bg-gray-800 text-pink-600 bg-opacity-20"
                : "text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50"
            }`}
            onClick={() => setActiveTabModalNovia("InformacionModalNovia")}
          >
            Informacion
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-semibold ${
              activeTabModalNovia === "TerminosModalNovia"
                ? "bg-white dark:bg-gray-800 text-pink-600 bg-opacity-20"
                : "text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50"
            }`}
            onClick={() => setActiveTabModalNovia("TerminosModalNovia")}
          >
            Términos
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-semibold ${
              activeTabModalNovia === "ImagenesModalNovia"
                ? "bg-white dark:bg-gray-800 text-pink-600 bg-opacity-20"
                : "text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50"
            }`}
            onClick={() => setActiveTabModalNovia("ImagenesModalNovia")}
          >
            Imagenes
          </button>
        </div>

        {/* Contenido de la Pestaña: Informacion (Modal) */}
        {activeTabModalNovia === "InformacionModalNovia" && (
          <div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" 
                ? "text-white" 
                : "text-gray-800"
              }`}
            >
              Información Maquillaje Novia
            </h3>
            <p
              className={`leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Aquí va la información detallada del servicio de Maquillaje de
              Novia (EN MODAL). Puedes describir en detalle qué incluye este
              servicio, los productos que utilizas, la duración aproximada, y
              cualquier otra información relevante para tus clientas.
            </p>
            <div className="tw-mb-16">
              <div
                className={`shadow-sm mt-8 p-2 md:p-8 ${
                  theme === "dark" 
                  ? "bg-gray-900 bg-opacity-5" 
                  : "bg-white bg-opacity-5"
                }`}
              >
                <h2
                  className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {noviaMakeupServices.category}
                </h2>
                <div className="tw-space-y-6">
                  {noviaMakeupServices.items.map(
                    (item: NoviaMakeupServiceItem, itemIndex: number) => (
                      <div
                        key={itemIndex}
                        className={`border-b pb-4 last:border-0 ${
                          theme === "dark"
                            ? "border-gray-600"
                            : "border-gray-100"
                        }`}
                      >
                        <div className="tw-flex justify-between items-center mb-2">
                          <h3
                            className={`font-montserrat text-sm sm:text-lg ${
                              theme === "dark" ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <span className="tw-font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                            {item.price}
                          </span>
                        </div>
                        <p
                          className={`text-xs sm:text-sm md:text-base ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de la Pestaña: Terminos&Condiciones (Modal) */}
        {activeTabModalNovia === "TerminosModalNovia" && (
          <div>
            <h3
              className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 ${
                theme === "dark" 
                ? "text-white" 
                : "text-gray-700"
              }`}
            >
              Términos y Condiciones - Maquillaje Novia (MODAL)
            </h3>
            <ul
              className={`list-disc list-inside leading-relaxed ${
                theme === "dark" 
                ? "text-gray-300" 
                : "text-gray-700"
              }`}
            >
              <li>
                Los Peinados no incluyen secado, por motivo de tiempo y
                durabilidad del mismo, el cabello debe estar previamente secado
                o si es liso, TOTALMENTE limpio y seco al natural.
              </li>
              <li>
                La prueba debe ser pagada en su totalidad para ser agendada.
              </li>
              <li>
                Si abona el 30% para separar fecha, deberá cancelar el 70%
                restante al menos 24 horas antes del evento.
              </li>
              <li>
                Si realizó solo el pago de la Prueba y no reservó el servicio
                para el día de la celebración, no se asegura la disponibilidad
                de la fecha.
              </li>
              <li>
                Verificar disponibilidad de fechas antes de realizar los abonos.
              </li>
              <li>
                El traslado para el servicio a domicilio es adicional ida y
                vuelta.
              </li>
              <li>
                El Servicio a domicilio tendrá un recargo adicional al traslado,
                de $20.000.
              </li>
              <li>
                Favor no tener lifting de pestañas ya que interfiere con las
                pestañas de cortina.
              </li>
              <li>Informar si hay algún retraso.</li>
              <li>No se atenderá después de 15 min de retraso.</li>
              <li>
                Una vez realizada la reserva del servicio, no se reembolsa por
                ningún motivo.
              </li>
              <li>El Servicio es intransferible.</li>
            </ul>
            {/* Añade aquí más contenido específico para la pestaña "Terminos&Condiciones" dentro del Modal de Novia */}
          </div>
        )}

        {/* Pestaña Imagenes - Slider (Modal) */}
        {activeTabModalNovia === "ImagenesModalNovia" && (
          <div>
            {/* No necesitas 'group-hover' ni 'opacity' aquí, el modal ya está visible */}
            <Slider {...sliderSettings}>
              {noviaImages.map((img, index) => (
                <SlideComponent
                  key={index}
                  img={img}
                  index={index}
                  images={noviaImages}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalServices;
