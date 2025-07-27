/**
 * Sección izquierda del portafolio UGC.
 * Muestra el título, la palabra UGC en grande, iconos sociales y el nombre de usuario, todo con animaciones.
 *
 * @component
 * @param {UGCLeftSectionProps} props - Props del componente, incluyendo el nombre de usuario.
 * @returns {JSX.Element}
 */
import React from "react";
import SocialIcons from "../common/SocialIcons";
import {
  Instagram,
  Facebook,
  MessageSquare,
  Pointer,
} from "../../assets/icons";
import RevealWrapper from "../common/RevealWrapper";
import {
  FONT_FAMILY_PRIMARY,
  FONT_WEIGHT_LIGHT,
} from "../../constants/styles";
import { useTheme } from "../context/themeContext";

export interface UGCLeftSectionProps {
  username: string;
}

const UGCLeftSection: React.FC<UGCLeftSectionProps> = ({ username }) => {
  const { colors } = useTheme();

  return (
    <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
      <section
        className="ugc-seccion-izquierda-superior md:h-3/4 h-[75%] flex justify-center items-center pt-24 md:pt-0"
        style={{ backgroundColor: colors.section }}
      >
        <div className="text-center mt-6">
          <RevealWrapper animationClass="slide-in-left-animation">
            <h2
              className={`ugc-title-portafolio ${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} text-3xl md:text-5xl lg:text-4xl mb-2 tracking-normal`}
              style={{ color: colors.secondaryText }}
            >
              PORTAFOLIO
            </h2>
          </RevealWrapper>
          <RevealWrapper animationClass="slide-in-left-animation">
            <h1
              className="ugc-title-ugc font-serif text-[10rem] md:text-[10rem] lg:text-[13rem] xl:text-[19rem] leading-[0.9] mb-0 mt-8"
              style={{ color: `${colors.secondaryText }20` }}
            >
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
              iconClassName="ugc-social-icon hover:text-pink-500 transition-colors duration-200 lg:text-sm md:text-base"
            />
          </RevealWrapper>
        </div>
      </section>
      <section
        className="ugc-seccion-izquierda-inferior md:h-1/4 h-[25%] flex justify-center items-center"
        style={{ backgroundColor: colors.footerbackground }}
      >
        <RevealWrapper animationClass="slide-in-left-animation">
          <span
            className="ugc-username font-serif text-2xl lg:text-2xl md:text-3xl lg:text-4xl italic pl-0 md:text-center"
            style={{ color: colors.text }}
          >
            {username}
          </span>
        </RevealWrapper>
      </section>
    </div>
  );
};

export default UGCLeftSection;
