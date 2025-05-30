/**
 * Componente para mostrar un item de la sección "Nuestros servicios incluyen".
 *
 * @component
 * @param {ServiceIncludeItemProps} props - Propiedades del componente.
 * @returns {JSX.Element}
 */
import React from 'react';
import { SERVICES_INCLUDE_ITEM_CLASS, SERVICES_INCLUDE_ITEM_TITLE_CLASS, SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS } from '../../constants/styles';
import { ServiceIncludeItemProps } from '../../interfaces/interfaces';

/**
 * @description Componente para mostrar un item de la seccion "Nuestros servicios incluyen".
 * @param {ServiceIncludeItemProps} props - Propiedades del componente.
 */
const ServiceIncludeItem: React.FC<ServiceIncludeItemProps> = ({ title, description }) => {

  return (
    <li className={`${SERVICES_INCLUDE_ITEM_CLASS}`} > 
      <h4 className={`${SERVICES_INCLUDE_ITEM_TITLE_CLASS}`}>
        {title}
      </h4>
      <p className={`${SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS}`} >
        {description}
      </p>
    </li>
  );
};

export default ServiceIncludeItem;
