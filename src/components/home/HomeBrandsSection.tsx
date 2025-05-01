import React, { useRef, useEffect, useState } from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import { useTheme } from "../../components/context/useThemeHook";


interface HomeBrandsSectionProps {
  brands: {
    imageSrc: string;
    alt: string;
  }[];
}

const HomeBrandsSection: React.FC<HomeBrandsSectionProps> = ({ brands }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1; // Ajusta la velocidad del desplazamiento
  const { colors } = useTheme();
  

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2; // Tomamos la mitad, ya que duplicamos contenido

    let animationFrameId: number;

    const animate = () => {
      setScrollPosition((prev) => {
        const newPos = prev + scrollSpeed;
        return newPos >= totalWidth ? 0 : newPos; // Reseteamos suavemente sin cortes
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cinzel font-extralight text-center mb-8" style={{ color: colors.accent }}>Nuestras Marcas</h2>
        <div ref={sliderRef} className="relative overflow-hidden w-full">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              willChange: "transform",
            }}
          >
            {/* Se duplican las marcas para efecto de desplazamiento infinito */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                <SmoothImage 
                  src={brand.imageSrc} 
                  alt={brand.alt} 
                  className="max-w-full max-h-full object-contain" 
                  loading="lazy"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandsSection;
