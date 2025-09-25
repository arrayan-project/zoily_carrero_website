/**
 * Componente reutilizable para mostrar un grupo de iconos sociales con enlaces.
 *
 * @component
 * @param {SocialIconsProps} props - Props del componente, incluyendo el array de iconos, clases opcionales y clases para los iconos.
 * @returns {JSX.Element}
 */
import React from "react";

interface SocialIcon {
  icon: React.ComponentType<{ className?: string }>;
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
          aria-label="Iconos redes sociales"
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
