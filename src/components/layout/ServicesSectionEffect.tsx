import React, { useEffect } from 'react';
import styles from './ServicesSection2.module.css';

interface ServicesSectionEffectProps {
  children: React.ReactNode;
}

const ServicesSectionEffect: React.FC<ServicesSectionEffectProps> = ({ children }) => {
  useEffect(() => {
    // Corregir los selectores para que coincidan con las clases CSS reales
    const carousel = document.querySelector(`.${styles['carousel-slide']}`);
    const items = document.querySelectorAll(`.${styles['carousel-item']}`) as NodeListOf<HTMLElement>;
    const totalItems = items.length;
    let currentItem = 0;

    const updateCarousel = () => {
      items.forEach((item, index) => {
        const newIndex = (index - currentItem + totalItems) % totalItems;
        item.style.order = newIndex.toString();

        // Reiniciar estilos para todos los elementos antes de aplicar nuevos
        item.style.position = 'absolute';
        
        if (newIndex === 0) {
          // Imagen principal centrada en el carrusel
          item.style.left = '50%';
          item.style.top = '50%';
          item.style.transform = 'translate(-50%, -50%)';
          item.style.borderRadius = '0';
          item.style.width = '100%';
          item.style.height = '100%';
          item.style.zIndex = '1';
        } else {
          // Tarjetas laterales bien posicionadas
          const offset = (newIndex - 1) * 220;
          item.style.left = `calc(70% + ${offset}px)`;
          item.style.top = '50%'; // Centrar verticalmente
          item.style.transform = 'translate(-50%, -50%)'; // Centrar horizontal y verticalmente
          item.style.borderRadius = '20px';
          item.style.width = '180px';
          item.style.height = '260px';
          item.style.zIndex = '3';
        }
      });
    };

    const nextSlide = () => {
      currentItem = (currentItem + 1) % totalItems;
      updateCarousel();
    };

    const prevSlide = () => {
      currentItem = (currentItem - 1 + totalItems) % totalItems;
      updateCarousel();
    };

    // Crear botones de navegación
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.classList.add(styles['carousel-button']);
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.classList.add(styles['carousel-button']);
    prevButton.addEventListener('click', prevSlide);

    const buttonsContainer = document.querySelector(`.${styles['carousel-buttons']}`);
    if (buttonsContainer) {
      // Limpiar botones existentes para evitar duplicados
      buttonsContainer.innerHTML = '';
      buttonsContainer.appendChild(prevButton);
      buttonsContainer.appendChild(nextButton);
    }

    // Aplicar la configuración inicial inmediatamente
    updateCarousel();

    return () => {
      nextButton.removeEventListener('click', nextSlide);
      prevButton.removeEventListener('click', prevSlide);
      if (buttonsContainer) {
        buttonsContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {children}
      <div className={styles.carouselButtons}></div>
    </div>
  );
};

export default ServicesSectionEffect;
