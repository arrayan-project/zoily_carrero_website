import React from 'react';

interface HomeButtonProps {
  onClick: () => void;
  primary?: boolean;
  children: React.ReactNode;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick, primary = false, children }) => {
  const baseClasses = 'px-6 py-3 font-normal font-cinzel rounded shadow transition duration-200';
  const primaryClasses = 'bg-white text-black hover:bg-gray-200';
  const secondaryClasses = 'bg-transparent text-white border border-white hover:bg-white hover:text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
