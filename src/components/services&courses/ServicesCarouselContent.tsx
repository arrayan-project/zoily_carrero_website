import React from 'react';
import { FONT_FAMILY_PRIMARY, COLOR_TEXT_WHITE } from '../../constants/styles';

interface ServicesContentProps {
  children: React.ReactNode;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ children }) => (
  <div className={`content absolute top-1/2 left-[100px] w-[300px] text-left ${COLOR_TEXT_WHITE} -translate-y-1/2 ${FONT_FAMILY_PRIMARY} hidden z-20`}>
    {children}
  </div>
);

export default ServicesContent;
