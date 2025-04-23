import React from 'react';

interface ServicesContentProps {
  children: React.ReactNode;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ children }) => (
  <div className="content absolute top-1/2 left-[100px] w-[300px] text-left text-[#eee] -translate-y-1/2 font-['system-ui'] hidden z-20">
    {children}
  </div>
);

export default ServicesContent;
