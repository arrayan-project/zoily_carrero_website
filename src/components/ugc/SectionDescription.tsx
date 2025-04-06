// src/components/common/SectionDescription.tsx
import React from "react";

interface SectionDescriptionProps {
  description: string[] | string;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  description,
  className,
}) => {
  return (
    <div className={className}>
      {Array.isArray(description) ? (
        description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default SectionDescription;
