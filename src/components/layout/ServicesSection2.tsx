// ServicesSection2.tsx
import React from 'react';
import styles from './ServicesSection2.module.css';
import ServicesSectionEffect from './ServicesSectionEffect';
import images from '../../assets/img/images';

interface ServiceItem {
  name: string;
  description: string;
  imageUrl: string;
}

const ServicesSection2: React.FC = () => {
  const serviceItems: ServiceItem[] = [
    {
      name: 'Servicio 1',
      description: 'Descripción del servicio 1',
      imageUrl: images.novia,
    },
    {
      name: 'Servicio 2',
      description: 'Descripción del servicio 2',
      imageUrl: images.social,
    },
    {
      name: 'Servicio 3',
      description: 'Descripción del servicio 3',
      imageUrl: images.m_peinado,
    },
    {
      name: 'Servicio 4',
      description: 'Descripción del servicio 4',
      imageUrl: images.glam,
    },
    {
      name: 'Servicio 5',
      description: 'Descripción del servicio 5',
      imageUrl: images.express,
    },
    {
      name: 'Servicio 6',
      description: 'Descripción del servicio 6',
      imageUrl: images.pmadura,
    },
  ];

return (
    <div className={styles['carousel-container']}>
      <ServicesSectionEffect>
        <div className={styles['carousel-slide']}>
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className={styles['carousel-item']}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles['carousel-content']}>
                <h2 className={styles['carousel-name']}>{item.name}</h2>
                <p className={styles['carousel-description']}>{item.description}</p>
                <button>Ver más</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles['carousel-buttons']}></div>
      </ServicesSectionEffect>
    </div>
  );
};

export default ServicesSection2;