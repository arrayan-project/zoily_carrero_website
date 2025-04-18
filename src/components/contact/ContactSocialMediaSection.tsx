// src/components/contact/ContactSocialMediaSection.tsx
import React from 'react';
import AnimationWrapper from '../common/AnimationLayer';
import { contactInfo } from '../../data/contactData';
import { useTheme } from '../context/useThemeHook';

const ContactSocialMediaSection: React.FC = () => {
  const { colors} = useTheme();

  return (
    <div className={`rounded-lg shadow-sm p-2 md:p-8 `} style={{ backgroundColor: colors.background, color: colors.accent }}>
      <AnimationWrapper animationClassName="fade-in-text">
        {contactInfo?.followUsTitle && (
          <h2 className={`text-2xl font-cinzel tracking-wide mb-6`} style={{ backgroundColor: colors.background, color: colors.accent }}>
            {contactInfo.followUsTitle}
          </h2>
        )}
      </AnimationWrapper>
      <div className="flex space-x-4">
        {[
          { platform: "Instagram", link: contactInfo?.socialMedia?.instagram },
          { platform: "Pinterest", link: contactInfo?.socialMedia?.pinterest },
          { platform: "Facebook", link: contactInfo?.socialMedia?.facebook }
        ].map(
          ({ platform, link }, index) =>
            link && (
              <AnimationWrapper key={index} animationClassName="fade-in-text">
                <a href={link} target="_blank" rel="noopener noreferrer" className={`font-cinzel hover:text-pink-600 transition-colors`} style={{ backgroundColor: colors.background, color: colors.text }}>
                  {platform}
                </a>
              </AnimationWrapper>
            )
        )}
      </div>
    </div>
  );
};

export default ContactSocialMediaSection;
