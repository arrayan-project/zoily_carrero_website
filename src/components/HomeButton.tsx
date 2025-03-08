import React from 'react';
import { Link } from 'react-router-dom';

interface HomeButtonProps {
  isMobileView: boolean;
  onSmoothScroll?: (sectionId: string) => void;
  to?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ isMobileView, onSmoothScroll, to, className, children, onClick }) => {
  if (isMobileView) {
    return (
      <button
        onClick={() => {
          if (onClick) {
            onClick();
          }
          if (onSmoothScroll && to) {
            onSmoothScroll(to);
          }
        }}
        className={className}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link to={to ? to : ""} className={className}>
        {children}
      </Link>
    );
  }
};

export default HomeButton;
