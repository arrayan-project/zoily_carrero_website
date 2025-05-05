// src/components/ugc/PhoneImageContainer.tsx
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";

interface PhoneImageContainerProps {
  phoneImage: string;
  contentImage: string;
  alt: string;
}

const PhoneImageContainer: React.FC<PhoneImageContainerProps> = ({
  phoneImage,
  contentImage,
  alt,
}) => {
  return (
    <div className="ugc-phone-container-png relative max-w-md mx-auto">
      <SmoothImage
        src={phoneImage}
        alt="Marco Smartphone"
        className="ugc-phone-frame-png w-full h-auto block relative z-10"
        loading="lazy"
      />
      <SmoothImage
        src={contentImage}
        alt={alt}
        className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[95%] h-[98%] rounded-[20px] md:w-[94%] md:h-[99%] md:rounded-[50px] object-cover aspect-[0.7]"
        loading="lazy"
      />
    </div>
  );
};

export default PhoneImageContainer;
