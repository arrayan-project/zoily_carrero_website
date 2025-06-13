import { useState, useRef, useCallback, useEffect } from "react";
import { Service } from "../../types/ServiceInterfaces";

const FADE_OUT_DURATION = 300;
const FADE_IN_DURATION = 300;
const TOTAL_TRANSITION_COOLDOWN = FADE_OUT_DURATION + FADE_IN_DURATION + 100;

interface ServicesLogicProps {
  initialServiceItems: Service[];
}

interface ServicesLogicReturn {
  currentIndex: number;
  currentItem: Service | undefined;
  handleServiceTransition: (direction: "next" | "prev") => void;
  isTransitioning: React.MutableRefObject<boolean>;
  totalItems: number;
  currentAnimationClass: string;
}

const ServicesLogic = ({
  initialServiceItems,
}: ServicesLogicProps): ServicesLogicReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnimationClass, setCurrentAnimationClass] = useState("");
  const serviceItems = initialServiceItems;
  const totalItems = serviceItems.length;
  const isTransitioning = useRef(false);

  const handleServiceTransition = useCallback((direction: "next" | "prev") => {
    if (isTransitioning.current || totalItems === 0) return;
    isTransitioning.current = true;
    setCurrentAnimationClass("carousel-item-fade-out");

    const fadeOutTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        return direction === "next"
          ? (prevIndex + 1) % totalItems
          : (prevIndex - 1 + totalItems) % totalItems;
      });
      setCurrentAnimationClass("carousel-item-fade-in");
    }, FADE_OUT_DURATION);

    const cooldownTimer = setTimeout(() => {
      isTransitioning.current = false;
      setCurrentAnimationClass("");
    }, TOTAL_TRANSITION_COOLDOWN);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(cooldownTimer);
    };
  }, [totalItems]);

  useEffect(() => {
    return () => {
      isTransitioning.current = false;
    };
  }, []);

  return {
    currentIndex,
    currentItem: serviceItems[currentIndex],
    handleServiceTransition,
    isTransitioning,
    totalItems,
    currentAnimationClass,
  };
};

export default ServicesLogic;
