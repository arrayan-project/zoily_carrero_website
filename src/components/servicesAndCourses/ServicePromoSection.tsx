/**
 * Sección promocional de servicios.
 * Muestra una imagen de fondo optimizada, overlays y contenido centrado con título y descripción.
 *
 * @component
 * @param {ServicePromoSectionProps} props - Props del componente, incluyendo el objeto de imagen, título, descripción y clases opcionales.
 * @returns {JSX.Element}
 */
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SectionDescription from '../common/SectionDescription';
import images, { Image as ImageType } from '../../assets/images'; // Importar ImageType
import { SERVICES_PROMO_SECTION_TITLE_CLASS, SERVICES_PROMO_SECTION_DESCRIPTION_CLASS } from '../../constants/styles';

interface ServicePromoSectionProps {
  imageObjectProp?: ImageType; // Cambiado de backgroundImage string a imageObjectProp
  title: string;
  description: string[];
  descriptionClassName?: string;
}

const ServicePromoSection: React.FC<ServicePromoSectionProps> = ({
  imageObjectProp, // Recibe el objeto de imagen como prop
  title,
 description,
  descriptionClassName,
}) => {
  // Usar la imagen proporcionada o la de por defecto de images.tsx
  const imageObjectToUse = imageObjectProp || images.serviceSectionBG;

  if (!imageObjectToUse) {
    console.error("Image object not found for ServicePromoSection. Check props or default 'serviceSectionBG' in images.tsx.");
    return <section className="relative w-full h-screen bg-gray-300 flex items-center justify-center"><p>Error al cargar imagen de fondo.</p></section>;
  }

  const placeholderBgStyle = imageObjectToUse.placeholder ? { backgroundImage: `url("${imageObjectToUse.placeholder}")` } : {};

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={placeholderBgStyle} // Usar placeholder como fondo inicial
    >
      {/* Imagen real con <picture> */}
      <picture>
        <source srcSet={imageObjectToUse.avif} type="image/avif" />
        <source srcSet={imageObjectToUse.webp} type="image/webp" />
        <img
          src={imageObjectToUse.webp}
          alt="" // Decorativo, el contenido es el texto
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
        />
      </picture>
      {/* Dark overlay for the left half */}
      <div className="absolute top-0 left-0 h-full w-[65%] md:w-1/2 bg-black/70 backdrop-blur-sm z-10"></div>
      {/* Light overlay for the right half */}
      <div className="absolute top-0 left-[65%] md:left-1/2 h-full w-[35%] md:w-1/2 bg-black opacity-30 z-10"></div>

      {/* Content container - centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-[65%] md:w-1/2 text-center px-6 md:px-10 lg:px-16">
        <SectionTitle
          title={title}
          className={SERVICES_PROMO_SECTION_TITLE_CLASS}
        />
        <SectionDescription
          description={description}
          className={`${descriptionClassName || ''} ${SERVICES_PROMO_SECTION_DESCRIPTION_CLASS}`}
        />
      </div>
    </section>
  );
};

export default ServicePromoSection;
