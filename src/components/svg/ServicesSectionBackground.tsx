// src/components/svg/ServicesSectionBackground.tsx (and similarly for CoursesSectionBackground.tsx)

import React from 'react';

interface ServicesSectionBackgroundProps {
  backgroundImage: string;
  backgroundImageMobile: string;
  objectPosition: 'bottom';
  children: React.ReactNode;
}

const ServicesSectionBackground: React.FC<ServicesSectionBackgroundProps> = ({
  backgroundImage,
  backgroundImageMobile,
  objectPosition = 'center',
  children,
}) => {
  
  return (
    <div className="relative w-full overflow-hidden"> {/* Make the container relative */}
      <div className="absolute inset-0 w-full h-full z-0"> {/* Background now fills the container */}
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet={backgroundImageMobile} />
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            style={{
              objectPosition,
              opacity: 0.4, // Añadido opacidad
              filter: 'blur(4px)', // Añadido desenfoque
            }}
          />
        </picture>
      </div>
      <div className="relative z-10"> {/* Content is now relative and on top */}
        {children}
      </div>
    </div>
  );
};

export default ServicesSectionBackground;
