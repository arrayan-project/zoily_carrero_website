import React from 'react';

interface ServicesContentProps {
  children: React.ReactNode;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

export default ServicesContent;
