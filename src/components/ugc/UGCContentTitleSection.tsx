// src/components/ugc/UGCContentTitleSection.tsx
import React from "react";
import SectionTitle from "../services&courses/ServicesSectionTitle";
import SectionDescription from "../common/SectionDescription";


interface UGCContentTitleSectionProps {
  title: string;
  description: string[];
}

const UGCContentTitleSection: React.FC<UGCContentTitleSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className=" mt-20 text-center md:mt-36 md:mb-36 mb-14">
      <SectionTitle
        title={title}
        className="text-4xl md:text-5xl font-cinzel font-extralight text-center mb-12 tracking-wider"
      />
      <SectionDescription
        description={description}
        className="mt-4 font-cinzel text-center"
      />
    </section>
  );
};

export default UGCContentTitleSection;
