import React from "react";
import { NavLink } from "react-router-dom";
import { NavSubItem } from "./NavBarMenu"; // Asegúrate de exportar NavSubItem desde NavBarMenu o un archivo de tipos común

interface MobileServicesSubMenuProps {
  subItems: NavSubItem[];
  onCloseSubMenu: () => void;
  onLinkClick: () => void;
  baseLinkClass: string;
  activeLinkClass: string;
  inactiveLinkClass: string;
  backButtonColor: string;
}

const MobileServicesSubMenu: React.FC<MobileServicesSubMenuProps> = ({
  subItems,
  onCloseSubMenu,
  onLinkClick,
  baseLinkClass,
  activeLinkClass,
  inactiveLinkClass,
  backButtonColor,
}) => {
  return (
    <div
      role="menu"
      aria-label="Submenú Servicios Móvil"
      className="flex flex-col items-center justify-center w-full"
    >
      <button
        onClick={onCloseSubMenu}
        className={`absolute top-80 left-1/2 -translate-x-1/2 p-2 ${backButtonColor} hover:text-pink-500`}
        aria-label="Volver al menú principal"
      >
        {/* Icono de flecha hacia atrás */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transform rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
      <div className="flex flex-col items-center space-y-6 mt-24">
        {subItems.map((subItem) => (
          <NavLink role="menuitem" key={subItem.label} to={subItem.path} onMouseEnter={subItem.prefetch} onClick={onLinkClick} className={({ isActive }) => `${baseLinkClass} text-base ${isActive ? activeLinkClass : inactiveLinkClass}`}>
            {subItem.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileServicesSubMenu;