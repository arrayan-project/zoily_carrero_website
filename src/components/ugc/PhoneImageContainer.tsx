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
      />
      <SmoothImage
        src={contentImage}
        alt={alt}
        className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[94%] h-[99%] rounded-[40px] md:w-[94%] md:h-[99%] md:rounded-[50px] object-cover aspect-[0.7]"
      />
    </div>
  );
};

export default PhoneImageContainer;
