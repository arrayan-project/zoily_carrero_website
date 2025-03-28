// src/components/common/SocialIcons.tsx
import React from "react";

interface SocialIcon {
  icon: React.ComponentType<any>; // Type for Lucide icons
  href: string;
}

interface SocialIconsProps {
  icons: SocialIcon[];
  className?: string;
  iconClassName?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons, className, iconClassName }) => {
  return (
    <div className={className}>
      {icons.map((item, index) => (
        <a key={index} href={item.href} className={iconClassName}>
          {React.createElement(item.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
