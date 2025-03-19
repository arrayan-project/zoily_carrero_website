// src/components/common/ServiceIncludeItem.tsx
import React from 'react';
import { useTheme } from '../context/useThemeHook';
import { getTextColorClass } from '../../utils/utils';
import { SERVICES_INCLUDE_ITEM_CLASS, SERVICES_INCLUDE_ITEM_TITLE_CLASS, SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS } from '../../constants/styles';
import { ServiceIncludeItemProps } from '../../interfaces/interfaces';

/**
 * @description Componente para mostrar un item de la seccion "Nuestros servicios incluyen".
 * @param {ServiceIncludeItemProps} props - Propiedades del componente.
 */
const ServiceIncludeItem: React.FC<ServiceIncludeItemProps> = ({ title, description }) => {
  const { theme } = useTheme();
  return (
    <li className={`${SERVICES_INCLUDE_ITEM_CLASS} ${getTextColorClass(theme)}`}>
      <h4 className={`${SERVICES_INCLUDE_ITEM_TITLE_CLASS} ${getTextColorClass(theme)}`}>
        {title}
      </h4>
      <p className={`${SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS} ${getTextColorClass(theme)}`}>
        {description}
      </p>
    </li>
  );
};

export default ServiceIncludeItem;
