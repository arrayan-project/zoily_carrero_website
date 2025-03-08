import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import images, {
  noviaGalleryImages,
  socialGalleryImages,
  peinadoGalleryImages,
  pielMaduraGalleryImages,
  glamGalleryImages,
  expressGalleryImages,
} from "../assets/img/images";
import { useTheme } from "../components/context/useTheme";
import AnimationWrapper from "../components/AnimationWrapper";
import "../index.css";
import SmoothImage from "../components/SmoothImage";
import { MOBILE_BREAKPOINT } from "../constants";
import { getTextColorClass } from "../util";//Importamos las funciones globales


// Define las categorías del menú
const categories = [
  { name: "Novia", value: "novia" },
  { name: "Social", value: "social" },
  { name: "Peinado", value: "peinado" },
  { name: "Piel Madura", value: "pielMadura" },
  { name: "Glam", value: "glam" },
  { name: "Express", value: "express" },
];

interface ServicesProps {}

export default function Gallery({}: ServicesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);

  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const SWIPE_THRESHOLD = 50;

  const getImagesForCategory = useCallback(() => {
    switch (selectedCategory) {
      case "novia":
        return noviaGalleryImages;
      case "social":
        return socialGalleryImages;
      case "peinado":
        return peinadoGalleryImages;
      case "pielMadura":
        return pielMaduraGalleryImages;
      case "glam":
        return glamGalleryImages;
      case "express":
        return expressGalleryImages;
      default:
        return noviaGalleryImages;
    }
  }, [selectedCategory]);

  const currentGalleryImages = useMemo(() => {
    return getImagesForCategory();
  }, [getImagesForCategory]);

  const { theme } = useTheme();

  //estado del tamaño de ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(currentGalleryImages[index] ?? null);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setIsModalTransitioning(true);
    const newIndex = (currentIndex + 1) % currentGalleryImages.length;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSelectedImage(currentGalleryImages[newIndex] ?? null);
      setIsModalTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setIsModalTransitioning(true);
    const newIndex =
      (currentIndex - 1 + currentGalleryImages.length) %
      currentGalleryImages.length;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSelectedImage(currentGalleryImages[newIndex] ?? null);
      setIsModalTransitioning(false);
    }, 500);
  };

  const handleCategoryClick = (categoryValue: string) => {
    setIsGalleryTransitioning(true);
    setSelectedCategory(categoryValue);
    setTimeout(() => {
      setIsGalleryTransitioning(false);
    }, 500);
  };

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  };
  //Funciones para el touch

  const handleModalTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleModalTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = currentX - startX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
      setStartX(currentX);
    }
  };

  const handleModalTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Comprobar si es un dispositivo móvil antes de agregar los event listeners
    if (isMobileView) {
      const container = modalContainerRef.current;

      if (container) {
        container.addEventListener("touchstart", handleModalTouchStart);
        container.addEventListener("touchmove", handleModalTouchMove);
        container.addEventListener("touchend", handleModalTouchEnd);
      }

      return () => {
        if (container) {
          container.removeEventListener("touchstart", handleModalTouchStart);
          container.removeEventListener("touchmove", handleModalTouchMove);
          container.removeEventListener("touchend", handleModalTouchEnd);
        }
      };
    }
  }, [isDragging, currentX, startX, isMobileView]);

  return (
    <div
      className={`min-h-screen flex flex-col ${getTextColorClass(theme)}`}
    >
      <PageBanner
        title="PORTAFOLIO"
        imageSrcs={[images.galleryBannerUp]}
        objectPosition="left-bottom"
      ></PageBanner>

      <main className="flex-grow">
        <div className="mx-auto py-16 md:py-32">
        <AnimationWrapper animationClassName="fade-in-text">
        <h1
              className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(theme)}`}
            >
              MIRA NUESTROS TRABAJOS
            </h1>
            </AnimationWrapper>

          <div
            className="flex md:justify-center justify-start space-x-4 mb-8 overflow-x-auto whitespace-nowrap px-12 text-xs font-light md:text-base md:font-normal"
            style={{ maxWidth: "100%" }}
          >
            {categories.map((category) => (
          <AnimationWrapper animationClassName="fade-in">
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-full font-cinzel font-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                                    ${getTextColorClass(theme)}
                                    ${getTextColorClass(theme)}
                                    ${
                                      selectedCategory === category.value
                                        ? theme === "dark"
                                          ? "bg-pink-400"
                                          : "bg-pink-200"
                                        : theme === "dark"
                                        ? "bg-gray-700"
                                        : "bg-gray-100"
                                    }
                                `}
                  onClick={() => handleCategoryClick(category.value)}
                >
                  {category.name}
                </button>
                </AnimationWrapper>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 p-4">
            {!isGalleryTransitioning &&
              currentGalleryImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full aspect-square overflow-hidden"
                >
                  <SmoothImage
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover cursor-pointer lazy-image"
                    onClick={() => openImage(index)}
                  />
                </div>
              ))}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
                onClick={handleModalClick}
                ref={modalContainerRef} // Añadimos el ref aqui.
              >
                <button
                  className="absolute top-20 right-4 text-white"
                  onClick={closeImage}
                >
                  <X size={32} />
                </button>
                <button
                  className="absolute left-4 text-white top-1/2 transform -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft size={40} />
                </button>
                <SmoothImage
                  key={selectedImage}
                  src={selectedImage}
                  alt="Selected"
                  className="max-h-full max-w-full rounded-lg"
                  isTransitioning={isModalTransitioning}
                />
                <button
                  className="absolute right-4 text-white top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight size={40} />
                </button>
              </div>
            )}
          </div>
        </div>

        {!isMobileView && (
          <PageBanner
            title="'Te debes este momento'"
            imageSrcs={[images.galleryBannerBottom]}
          ></PageBanner>
        )}
      </main>
    </div>
  );
}
