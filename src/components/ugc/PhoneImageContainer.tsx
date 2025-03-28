// src/components/ugc/PhoneImageContainer.tsx
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";

interface PhoneImageContainerProps {
  phoneImage: string;
  contentImage: string;
  alt: string;
}

const PhoneImageContainer: React.FC<PhoneImageContainerProps> = ({ phoneImage, contentImage, alt }) => {
  return (
    <div className="ugc-phone-container-png relative max-w-sm mx-auto">
      <SmoothImage
        src={phoneImage}
        alt="Marco Smartphone"
        className="ugc-phone-frame-png w-full h-auto block relative z-10"
      />
      <SmoothImage
        src={contentImage}
        alt={alt}
        className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
      />
    </div>
  );
};

export default PhoneImageContainer;
