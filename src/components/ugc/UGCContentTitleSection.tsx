/**
 * Sección de título y descripción para el contenido UGC.
 * Muestra el título y la descripción con estilos y colores adaptados al tema.
 *
 * @component
 * @param {UGCContentTitleSectionProps} props - Props del componente, incluyendo título y descripción.
 * @returns {JSX.Element}
 */
import React from "react";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import { useTheme } from "../context/themeContext";;
import { UGC_SECTION_TITLE_CLASS, UGC_SECTION_DESCRIPTION_CLASS } from "../../constants/styles";;


interface UGCContentTitleSectionProps {
  title: string;
  description: string[];
}

const UGCContentTitleSection: React.FC<UGCContentTitleSectionProps> = ({
  title,
  description,
}) => {
  const { colors } = useTheme();
  
  return (
    <section className=" mt-20 text-center md:mt-36 md:mb-36 mb-14">
      <SectionTitle
        title={title}
        className={`${UGC_SECTION_TITLE_CLASS} mb-12`}
        style={{ color: colors.accent }}
      />
      <SectionDescription
        description={description}
        className={`${UGC_SECTION_DESCRIPTION_CLASS} mt-4`}
        style={{ color: colors.text }}
      />
    </section>
  );
};

export default UGCContentTitleSection;
