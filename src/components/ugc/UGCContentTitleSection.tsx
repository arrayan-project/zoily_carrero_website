// src/components/ugc/UGCContentTitleSection.tsx
import React from "react";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import { useTheme } from "../context/useThemeHook";
import { HEADING_1_CLASS, PARAGRAPH_CLASS, TEXT_CENTER } from "../../constants/styles";;


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
        className={`${HEADING_1_CLASS} ${TEXT_CENTER} mb-12`}
        style={{ color: colors.accent }}
      />
      <SectionDescription
        description={description}
        className={`${PARAGRAPH_CLASS} ${TEXT_CENTER} mt-4`}
        style={{ color: colors.text }}
      />
    </section>
  );
};

export default UGCContentTitleSection;
