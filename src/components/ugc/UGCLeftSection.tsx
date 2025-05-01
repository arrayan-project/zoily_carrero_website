// src/components/ugc/UGCLeftSection.tsx
import React from "react";
import SocialIcons from "../common/SocialIcons";
import {
  Instagram,
  Facebook,
  MessageSquare,
  Pointer,
} from "../../assets/icons";
import RevealWrapper from "../common/RevealWrapper";

export interface UGCLeftSectionProps {
  username: string;
}

const UGCLeftSection: React.FC<UGCLeftSectionProps> = ({ username }) => {
  return (
    <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
      <section className="ugc-seccion-izquierda-superior md:h-3/4 h-[75%] bg-[rgb(242,232,225)] flex justify-center items-center">
        <div className="text-center mt-6">
          <RevealWrapper animationClass="slide-in-left-animation">
            <h2 className="ugc-title-portafolio font-cinzel font-light text-3xl md:text-5xl lg:text-4xl text-gray-700 mb-2 tracking-normal">
              PORTAFOLIO
            </h2>
          </RevealWrapper>
          <RevealWrapper animationClass="slide-in-left-animation">
            <h1 className="ugc-title-ugc font-serif text-[10rem] md:text-[10rem] lg:text-[13rem] xl:text-[19rem] text-[rgb(212,185,194)] leading-[0.9] mb-0 mt-8">
              UGC
            </h1>
          </RevealWrapper>
          <RevealWrapper animationClass="slide-in-left-animation">
            <SocialIcons
              icons={[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Pointer, href: "#" },
                { icon: MessageSquare, href: "#" },
              ]}
              className="ugc-social-icons flex gap-3 lg:mb-10 md:mb-20 mb-5 justify-center items-center"
              iconClassName="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 lg:text-sm md:text-base"
            />
          </RevealWrapper>
        </div>
      </section>
      <section className="ugc-seccion-izquierda-inferior md:h-1/4 h-[25%] bg-[rgb(229,210,196)] flex justify-center items-center">
        <RevealWrapper animationClass="slide-in-left-animation">
          <span className="ugc-username font-serif text-2xl lg:text-2xl md:text-3xl lg:text-4xl text-gray-600 italic pl-0 md:text-center">
            {username}
          </span>
        </RevealWrapper>
      </section>
    </div>
  );
};

export default UGCLeftSection;
