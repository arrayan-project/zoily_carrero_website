import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { NavItem } from './NavBarMenu';

interface NavLinksListProps {
  navItems: NavItem[];
  onLinkClick: () => void;
}

const NavLinksList: React.FC<NavLinksListProps> = ({ navItems, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const { colors } = useTheme();

  const baseLinkClasses = "py-3 text-2xl md:text-3xl xl:text-4xl font-cinzel transition-colors text-left group";

  return (
    <>
      {navItems.map(item => (
        <div key={item.id} className="w-full flex flex-col items-start">
          {item.subItems ? (
            <>
              <button
                onClick={() => setSubmenuOpen(submenuOpen === item.id ? null : item.id)}
                className={`${baseLinkClasses}`}
                style={{
                  color: submenuOpen === item.id ? colors.accent : colors.text,
                  textDecoration: submenuOpen === item.id ? 'underline' : 'none',
                }}
              >
                <div className="flex items-center relative">
                  <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                    —
                  </span>
                  <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                    {item.label}
                  </span>
                </div>
              </button>
              {submenuOpen === item.id && (
                <div className="mt-2 flex flex-col items-start space-y-2 pl-6">
                  {item.subItems.map(sub => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={onLinkClick}
                      className={`${baseLinkClasses} !text-xl md:!text-2xl`}
                      style={({ isActive }) => ({
                        color: isActive ? colors.accent : colors.text,
                        textDecoration: isActive ? 'underline' : 'none',
                      })}
                    >
                      <div className="flex items-center relative">
                        <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                          —
                        </span>
                        <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                          {sub.label}
                        </span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavLink
              to={item.path!}
              onClick={onLinkClick}
              className={`${baseLinkClasses}`}
              style={({ isActive }) => ({
                color: isActive ? colors.accent : colors.text,
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              <div className="flex items-center relative">
                <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                  —
                </span>
                <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                  {item.label}
                </span>
              </div>
            </NavLink>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinksList;