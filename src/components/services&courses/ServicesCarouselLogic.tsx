// src/components/services&courses/ServicesCarouselLogic.tsx
import { useState, useEffect, useRef } from 'react';
import { Service } from '../../types/ServiceInterfaces'; // Importamos Service

interface ServicesLogicProps {
  initialServiceItems: Service[]; // Usamos Service
}

interface ServicesLogicReturn {
  mainIndex: number;
  serviceItems: Service[]; // Usamos Service
  handleServiceTransition: (direction: 'next' | 'prev') => void;
  isTransitioning: React.MutableRefObject<boolean>;
}

const ServicesLogic = ({ initialServiceItems }: ServicesLogicProps): ServicesLogicReturn => {
  const [mainIndex, setMainIndex] = useState(0);
  const [serviceItems, setServiceItems] = useState<Service[]>([]); // Usamos Service
  const isTransitioning = useRef(false);

  useEffect(() => {
    setServiceItems([...initialServiceItems]);
  }, [initialServiceItems]);

  const handleServiceTransition = (direction: 'next' | 'prev') => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const newServiceItems = [...serviceItems]; // Usamos Service
    let newMainIndex = mainIndex;

    if (direction === 'next') {
      const firstItem = newServiceItems.shift();
      if (firstItem) {
        newServiceItems.push(firstItem);
      }
      newMainIndex = (mainIndex + 1) % serviceItems.length;
    } else if (direction === 'prev') {
      const lastItem = newServiceItems.pop();
      if (lastItem) {
        newServiceItems.unshift(lastItem);
      }
      newMainIndex = (mainIndex - 1 + serviceItems.length) % serviceItems.length;
    }

    setServiceItems(newServiceItems);
    setMainIndex(newMainIndex);

    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  return { mainIndex, serviceItems, handleServiceTransition, isTransitioning };
};

export default ServicesLogic;
