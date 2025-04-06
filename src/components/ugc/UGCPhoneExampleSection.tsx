// src/components/ugc/UGCPhoneExamplesSection.tsx
import React from "react";
import PhoneImageContainer from "./PhoneImageContainer";
import AnimationWrapper from "../common/AnimationLayer";

interface UGCPhoneExampleSectionProps {
  images: {
    phoneImage: string;
    contentImage: string;
    alt: string;
  }[];
}

const UGCPhoneExampleSection: React.FC<UGCPhoneExampleSectionProps> = ({
  images,
}) => {
  return (
    <section className="ugc-section ugc-section-images-example-png bg-transparent shadow-none rounded-none mt-10 md:mt-10 mb-24">
      <div className="ugc-right-section ugc-right-section-four-images-png flex flex-col md:flex-row justify-around items-center">
      <AnimationWrapper animationClassName="slide-in-right">
        <div className="ugc-images-container-png p-3 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 w-full justify-around">
          {images.map((image, index) => (
            <PhoneImageContainer
              key={index}
              phoneImage={image.phoneImage}
              contentImage={image.contentImage}
              alt={image.alt}
            />
          ))}
        </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default UGCPhoneExampleSection;
