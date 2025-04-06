// src/components/common/SocialIcons.tsx
import React from "react";

interface SocialIcon {
  icon: React.ComponentType<any>;
  href: string;
}

interface SocialIconsProps {
  icons: SocialIcon[];
  className?: string;
  iconClassName?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  icons,
  className,
  iconClassName,
}) => {
  return (
    <div className={className}>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
