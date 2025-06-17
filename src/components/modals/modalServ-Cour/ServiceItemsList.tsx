
/**
 * Componente para renderizar una lista de ítems de servicio o curso.
 * Muestra el nombre, precio y descripción de cada ítem.
 *
 * @component
 * @param {ServiceItemsListProps} props - Propiedades del componente.
 * @returns {JSX.Element | null} El componente de lista de servicios o null si no hay ítems.
 */
import React from 'react';
import { useTheme } from '../../context/themeContext';
import { ServiceItem } from './ModalInterfacesServices';


interface ServiceItemsListProps {
  items: ServiceItem[];
}

const ServiceItemsList: React.FC<ServiceItemsListProps> = ({ items }) => {
  const { colors } = useTheme();

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="service-items-list mt-4 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="service-item pb-4 border-b last:border-b-0"
          style={{ borderColor: colors.bannerTitle }}
        >
          <h4 className="tex-base md:text-lg font-semibold mb-1 font-cinzel" style={{ color: colors.accent }}>
            {item.name}
          </h4>
          <p className="text-sm md:text-md font-semibold mb-2 font-cinzel" style={{ color: colors.text }}>
            Precio: {item.price}
          </p>
          {item.description && item.description.length > 0 && (
            <div className="mt-1">
              <ul className="list-disc list-inside ml-4 md:text-sm space-y-1 font-cinzel" style={{ color: colors.text }}>
                {item.description.map((descPoint, pointIndex) => (
                  <li key={pointIndex}>{descPoint}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceItemsList;
