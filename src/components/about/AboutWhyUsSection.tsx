// src/components/about/AboutWhyUsSection.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { whyUsPoints, aboutInfo } from '../../data/aboutData';
import { useTheme } from '../context/useThemeHook';
import RevealWrapper from '../common/RevealWrapper';

const AboutWhyUsSection: React.FC = () => {
  const {colors } = useTheme();

  return (
    <section className="mt-24 lg:mt-32 py-16 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="max-w-screen-lg mx-auto">
      <RevealWrapper animationClass="fade-in-text">
          {aboutInfo?.whyUsTitle && (
            <h3 className={`text-center md:text-left text-2xl font-cinzel font-base mb-12 `} style={{ color: colors.accent}}>
              {aboutInfo.whyUsTitle}
            </h3>
          )}
        </RevealWrapper>

        <RevealWrapper animationClass="fade-in-text">
          <ul className="space-y-4">
            {whyUsPoints.map((point, index) => (
              <li key={index} className="flex items-center space-x-6">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className={`leading-relaxed font-cinzel text-sm font-light md:text-base md:font-normal`} style={{ color: colors.text }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
          </RevealWrapper>
      </div>
    </section>
  );
};

export default AboutWhyUsSection;
