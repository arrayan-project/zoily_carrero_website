/**
 * Componente para mostrar un item de servicio en formato columna.
 * Presenta la imagen, categoría, descripción y botón para ver más detalles en un modal.
 *
 * @component
 * @param {ServiceColumnsItemProps} props - Props del componente, incluyendo el servicio y el callback para abrir el modal.
 * @returns {JSX.Element}
 */
import React from "react";
import { Service } from "../../types/ServiceInterfaces";
import ServicesButton from "../buttons/ServicesButton";
import { FONT_FAMILY_PRIMARY, TEXT_SIZE_LG, TEXT_SIZE_BASE } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface ServiceColumnsItemProps {
  service: Service;
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ServiceColumnsItem: React.FC<ServiceColumnsItemProps> = ({
  service,
  openModal,
}) => {
  const imageObject = getImageObject(service.imageKey);

  if (!imageObject) {
    console.error(`Image not found for key: ${service.imageKey} in ServiceColumnsItem`);
    return <div className="w-full aspect-[3/4] lg:w-[200px] lg:h-[800px] bg-gray-200 flex items-center justify-center">Error al cargar imagen</div>;
  }

  const preloadImage = (
    <img
      src={imageObject.webp}
      alt={service.category}
      loading="lazy"
      className="sr-only"
      aria-hidden="true"
    />
  );

  const placeholderBgStyle = imageObject.placeholder ? { backgroundImage: `url("${imageObject.placeholder}")` } : {};

  return (
    <>
      {preloadImage}
      <div
        className="group relative w-full aspect-[3/4] lg:w-[200px] lg:h-[800px] lg:aspect-auto flex-1 lg:hover:grow-[3] lg:hover:shrink-0 text-center text-white no-underline bg-cover bg-center bg-no-repeat cursor-pointer transition-[flex-grow] duration-400"
        style={placeholderBgStyle}
      >
        <picture>
          <source srcSet={imageObject.avif} type="image/avif" />
          <source srcSet={imageObject.webp} type="image/webp" />
          <img
            src={imageObject.webp}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center -z-10"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 flex justify-center items-end p-4 bg-gradient-to-t from-[rgba(0,0,0,0.7)_25%] to-[rgba(0,0,0,0)_90%] opacity-100 lg:items-center lg:p-0 lg:bg-[rgba(0,0,0,0.5)] lg:opacity-0 group-hover:lg:opacity-100 transition-opacity duration-300 ease-out lg:transition-opacity z-10">
          <div className="text-center text-white w-full mb-4">
            <h2 className={`${FONT_FAMILY_PRIMARY} ${TEXT_SIZE_LG} opacity-100 visible lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-opacity duration-400 lg:transition-opacity`}>
              {service.category}
            </h2>
            <p className="hidden">{service.description}</p>
            <ServicesButton
              onClick={openModal}
              className={`relative mt-2.5 px-3 py-1 bg-red-900/50 ${TEXT_SIZE_BASE} ${FONT_FAMILY_PRIMARY} shadow hover:bg-red-800/70 transition duration-200 text-center opacity-100 visible lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible lg:transition-opacity`}
            >
              VER MÁS
            </ServicesButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceColumnsItem;