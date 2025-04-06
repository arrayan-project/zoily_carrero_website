import { useState, useEffect } from "react";
import ServicesCarouselSectionEffects from './ServicesCarouselSectionEffects';
import images from '../../assets/images';
import useWindowSize from "../../hooks/useWindowSize";
import { getTextColorClass } from "../../utils/utils";
import { useTheme } from "../context/useThemeHook";
import { useModal } from "../../pages/Services"; // Importamos useModal
import { getInfoContent } from "../../data/servicesData"; // Importamos getInfoContent
import { ModalContent } from "../../types";


interface ServiceItem {
  name: string;
  description: string;
  imageUrl: string;
}


const ServicesCarouselSection: React.FC = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [orderedItems, setOrderedItems] = useState<ServiceItem[]>([]);
  const { windowWidth, isMobileView } = useWindowSize();
  const { theme, colors } = useTheme();
  const { openModal } = useModal(); // Obtenemos openModal

  const initialServiceItems: ServiceItem[] = [
    { name: 'Novia', description: 'Descripción del servicio 1', imageUrl: images.novia },
    { name: 'Social', description: 'Descripción del servicio 2', imageUrl: images.social },
    { name: 'Maquillaje & Peinado', description: 'Descripción del servicio 3', imageUrl: images.m_peinado },
    { name: 'Piel Madura', description: 'Descripción del servicio 4', imageUrl: images.pmadura },
    { name: 'Glam', description: 'Descripción del servicio 5', imageUrl: images.glam },
    { name: 'Quinceañera', description: 'Descripción del servicio 6', imageUrl: images.express },
  ];

  useEffect(() => {
    setOrderedItems([...initialServiceItems]);
  }, []);

  const handleMainChange = (_newMainIndex: number, direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setMainIndex((prevIndex) => (prevIndex + 1) % initialServiceItems.length);
      const newOrderedItems = [...orderedItems];
      const firstItem = newOrderedItems.shift();
      if (firstItem) {
        newOrderedItems.push(firstItem);
      }
      setOrderedItems(newOrderedItems);
    } else if (direction === 'prev') {
      setMainIndex((prevIndex) => (prevIndex - 1 + initialServiceItems.length) % initialServiceItems.length);
      const newOrderedItems = [...orderedItems];
      const lastItem = newOrderedItems.pop();
      if (lastItem) {
        newOrderedItems.unshift(lastItem);
      }
      setOrderedItems(newOrderedItems);
    }
  };

  // Calculate responsive offset
  const calculateOffset = (index: number) => {
    const tabletOffset = 160; // New offset for tablet view
    const mobileOffset = 120;
    const desktopOffset = 220;

    if (windowWidth >= 768 && windowWidth < 1024) {
      return index * tabletOffset; // Use tablet offset
    } else if (isMobileView) {
      return index * mobileOffset; // Use mobile offset
    } else {
      return index * desktopOffset; // Use desktop offset
    }
  };

  // Calculate responsive item width
  const getItemWidth = (isMain: boolean) => {
    if (isMain) {
      return 'w-full h-full left-0 z-10';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      return 'w-[140px] h-[200px] z-20'; // Tablet size
    } else if (isMobileView) {
      return 'w-[120px] h-[180px] z-20';
    } else {
      return 'w-[180px] h-[260px] z-20';
    }
  };

  return (
    <ServicesCarouselSectionEffects onMainChange={handleMainChange} windowWidth={windowWidth}>
      {orderedItems.map((item, index) => {
        const isMain = index === 0;
        const offset = calculateOffset(index);

        return (
          <div
            key={`service-${index}`}
            className={`carousel-item absolute top-1/2 -translate-y-1/2 rounded-2xl shadow-lg bg-no-repeat transition-all duration-700 ${getItemWidth(isMain)}`}
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundPosition: '65% 30%',
              backgroundSize: 'cover', // Ensure entire image is visible
              backgroundRepeat: 'no-repeat', // Avoid image repetition
              left: isMain ? '50%' : `calc(60% + ${offset}px)`,
              transform: isMain ? 'translate(-50%, -50%)' : 'translateY(-50%)',
              backgroundColor: colors.background, 
              color: colors.text
            }}
          >
            <CarouselContent isMain={isMain} isMobileView={isMobileView} windowWidth={windowWidth}>
              {isMain && (
                <>
                  <h2
                    className={`carousel-name mb-2 font-cinzel opacity-100 transition-opacity duration-500 ${getTextColorClass(theme)} ${
                    isMobileView ? "text-[24px]" : "text-[44px]"
                    }`}
                    >
                    {item.name}                   
                  </h2>
                  <p
                    className={`carousel-description mb-3 font-cinzel opacity-100 transition-opacity duration-500 ${getTextColorClass(theme)} ${
                    isMobileView ? "text-sm" : "text-base"
                    }`}
                  >
                    {item.description}
                  </p>
                  <button
                    className={`p-2 border-none bg-white font-cinzel text-black rounded-none cursor-pointer absolute left-center top-[110%] -translate-y-1/2 opacity-100 transition-opacity duration-500 ${
                      isMobileView ? "text-sm" : "text-base"
                    }`}
                    onClick={() => {
                      const modalContent: ModalContent = getInfoContent(mainIndex); // Obtenemos el contenido del modal
                      openModal(modalContent); // Abrimos el modal
                    }}
                  >
                    Ver más
                  </button>
                </>
              )}
            </CarouselContent>
          </div>
        );
      })}
    </ServicesCarouselSectionEffects>
  );
};

const CarouselContent = ({ isMain, children, isMobileView}: { isMain: boolean; children: React.ReactNode; isMobileView: boolean; windowWidth: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMain) {
      setTimeout(() => setIsVisible(true), 500);
    } else {
      setIsVisible(false);
    }
  }, [isMain]);

  // Responsive max-width for carousel-content
  const contentMaxWidth = isMobileView ? 'max-w-[80%]' : 'max-w-[30%]';

  return (
    <div className={`carousel-content absolute top-1/2 -translate-y-1/2 left-[60px] w-auto ${contentMaxWidth} p-4 text-left text-text-color bg-transparent`}
         style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  );
};

export default ServicesCarouselSection;
