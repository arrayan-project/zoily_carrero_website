/**
 * Sección que muestra los servicios incluidos.
 * Presenta una lista de ítems destacados con animación y estilos adaptados al tema.
 *
 * @component
 * @returns {JSX.Element}
 */
import { useTheme } from "../context/themeContext";;
import RevealWrapper from "../common/RevealWrapper";
import ServiceIncludeItem from "../common/ServiceIncludeItem";
import { HEADING_3_CLASS, TEXT_CENTER } from "../../constants/styles"; // Using HEADING_3_CLASS as a base

const ServicesIncludeSection = () => {
  const { colors } = useTheme();
  return (
    <div className="text-center space-y-8 px-2 py-16 md:py-8 md:px-6 lg:px-68 mb-24 md:mb-32">
      <RevealWrapper animationClass="fade-in-text">
        {/* Original SERVICES_INCLUDE_TITLE_CLASS was HEADING_2_CLASS (text-2xl md:text-3xl) */}
        {/* Component used text-lg md:text-xl lg:text-3xl. HEADING_3_CLASS is text-lg md:text-xl */}
        <h2
          className={`${HEADING_3_CLASS} lg:text-3xl ${TEXT_CENTER}`}
          style={{ backgroundColor: colors.background, color: colors.accent }}
        >
          Nuestros servicios incluyen
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600" style={{ color: colors.bannerTitle }}>
          <ServiceIncludeItem
            title="Asesoría para cuidado de la piel"
            description="Hidratación, limpieza y productos"
          />
          <ServiceIncludeItem
            title="Asesoría de imagen"
            description="Accesorios y prendas según la ocasión"
          />
          <ServiceIncludeItem
            title="Regalo sorpresa"
            description="Algo que te ayudará a recordar tu día"
          />
        </ul>
      </RevealWrapper>
    </div>
  );
};

export default ServicesIncludeSection;
