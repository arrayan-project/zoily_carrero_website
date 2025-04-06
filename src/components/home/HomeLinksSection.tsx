// src/components/home/HomeLinksSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationWrapper from "../common/AnimationLayer";
import { useTheme } from "../../components/context/useThemeHook";

interface HomeLinksSectionProps {
  title: string;
  subtitle: string;
  subtitle1: string;
  links: {
    to: string;
    sectionId?: string;
    imageSrc: string;
    alt: string;
    label: string;
    hash?: string;
    id: string; // Add a unique ID for each link
  }[];
  isMobileView: boolean;
  onSmoothScroll: (sectionId: string) => void;
}

const HomeLinksSection: React.FC<HomeLinksSectionProps> = ({ title, subtitle, subtitle1, links }) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleClick = (link: HomeLinksSectionProps['links'][number]) => {
    if (link.hash) {
      navigate(`${link.to}${link.hash}`);
    } else {
      navigate(link.to);
    }
  };

  return (
    <section className={`py-16 px-4`} style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className="container mx-auto text-center mb-8 md:mb-18" style={{ color: colors.text }}>
        <AnimationWrapper animationClassName="fade-in-up">
          <h2 className={`text-4xl md:text-5xl font-cinzel font-extralight mb-12 `} style={{ color: colors.accent }}>{title}</h2>
          <p className={`text-gray-600 font-cinzel `} style={{ color: colors.bannerTitle }}>{subtitle}</p>
          <p className={`text-gray-600 mb-24 md:mb-28 font-cinzel `} style={{ color: colors.bannerTitle }}>{subtitle1}</p>
        </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <AnimationWrapper key={link.id} animationClassName="fade-in-up"> {/* Use the unique ID as the key */}
              <div
                className="w-full aspect-square overflow-hidden p-1 sm:p-2 md:p-3 lg:p-3 rounded-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative group"
                style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.3)' }}
                onClick={() => handleClick(link)}
              >
                <img
                  src={link.imageSrc}
                  alt={link.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute bottom-0 left-0 w-full h-1/3 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70`} style={{ backgroundColor: colors.bannerImageOverlay }}>
                  <p className="text-white font-cinzel text-lg">{link.label}</p>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLinksSection;
