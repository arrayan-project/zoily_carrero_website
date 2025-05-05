import React from 'react';
import { CheckCircle } from '../../../assets/icons';
import { whyUsPoints, aboutInfo } from '../../../data/aboutData';
import { useTheme } from '../../context/useThemeHook';
import RevealWrapper from '../../common/RevealWrapper';

const AboutWhyUsSection: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const title = aboutInfo?.whyUsTitle ?? 'Why Choose Us';

  if (!whyUsPoints.length) return null;

  return (
    <section className="mt-24 lg:mt-32 py-16 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="max-w-screen-lg mx-auto">
        {title && (
          <RevealWrapper animationClass="fade-in-text">
            <h3
              className="text-center md:text-left text-2xl font-cinzel mb-12"
              style={{ color: colors.accent }}
            >
              {title}
            </h3>
          </RevealWrapper>
        )}

        <RevealWrapper animationClass="fade-in-text">
          <ul className="space-y-4">
            {whyUsPoints.map((point, index) => (
              <li key={`why-us-${index}`} className="flex items-center space-x-6">
                <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: colors.accent }} />
                <p
                  className="leading-relaxed font-cinzel text-sm md:text-base"
                  style={{ color: colors.text }}
                >
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </RevealWrapper>
      </div>
    </section>
  );
});

export default AboutWhyUsSection;
