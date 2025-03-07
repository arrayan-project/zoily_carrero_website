import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import images, { // Importa el objeto 'images' para el banner
  noviaGalleryImages, // Importa los arrays de imágenes categorizadas
  socialGalleryImages,
  peinadoGalleryImages,
  pielMaduraGalleryImages,
  glamGalleryImages,
  expressGalleryImages,
} from "../assets/img/images";
import { useTheme } from "../components/context/useTheme";
import ScrollReveal from "../components/ScrollReveal"; // Importa el componente ScrollReveal
import "../index.css"; // Asegúrate de importar About.css para los estilos de transición
import SmoothImage from "../components/SmoothImage"; // Importa el componente SmoothImage
import { MOBILE_BREAKPOINT } from "../constants";

// Define las categorías del menú
const categories = [
  { name: "Novia", value: "novia" },
  { name: "Social", value: "social" },
  { name: "Peinado", value: "peinado" },
  { name: "Piel Madura", value: "pielMadura" },
  { name: "Glam", value: "glam" },
  { name: "Express", value: "express" },
];

// Define ServicesProps interface here
interface ServicesProps {}

export default function Gallery({}: ServicesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Estado para la categoría seleccionada
    const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
    const [isModalTransitioning, setIsModalTransitioning] = useState(false);

  // Función para obtener el array de imágenes según la categoría seleccionada
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
        // Si seleccionas 'Todas' o por defecto, puedes mostrar todas las imágenes de todas las categorías.
        // En este ejemplo, para simplificar, usaremos solo las de 'novia' si es 'all', ajusta según necesites.
        return noviaGalleryImages;
    }
  }, [selectedCategory]);

  const currentGalleryImages = useMemo(() => {
    return getImagesForCategory();
  }, [getImagesForCategory]); // Obtiene el array de imágenes a mostrar

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
    setSelectedImage(currentGalleryImages[index] ?? null); // Usa 'currentGalleryImages'
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setIsModalTransitioning(true);
    const newIndex = (currentIndex + 1) % currentGalleryImages.length; // Usa 'currentGalleryImages'
    setTimeout(()=>{
        setCurrentIndex(newIndex);
        setSelectedImage(currentGalleryImages[newIndex] ?? null); // Usa 'currentGalleryImages'
        setIsModalTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
      setIsModalTransitioning(true);
    const newIndex =
      (currentIndex - 1 + currentGalleryImages.length) %
      currentGalleryImages.length; // Usa 'currentGalleryImages'
    setTimeout(()=>{
        setCurrentIndex(newIndex);
        setSelectedImage(currentGalleryImages[newIndex] ?? null); // Usa 'currentGalleryImages'
        setIsModalTransitioning(false);
    }, 500);
  };

  const handleCategoryClick = (categoryValue: string) => {
      setIsGalleryTransitioning(true);
    setSelectedCategory(categoryValue); // Actualiza la categoría seleccionada
      setTimeout(()=>{
          setIsGalleryTransitioning(false);
      }, 500)
  };

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Verifica si el objetivo del clic (event.target) es el mismo elemento que tiene el evento onClick asignado (event.currentTarget)
    if (event.target === event.currentTarget) {
      closeImage(); // Cierra el modal si el clic fue directamente en el fondo oscuro
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "text-white" : "text-gray-800"
      }`}
    >
      <PageBanner
        title="PORTAFOLIO"
        imageSrcs={[images.galleryBannerUp]}
        objectPosition="left-bottom"
      ></PageBanner>

      <main className="flex-grow">
        <div className="mx-auto py-16 md:py-32">
          <ScrollReveal animationClassName="fade-in-text">
            {" "}
            {/* ScrollReveal para el título principal */}
            <h1
              className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              MIRA NUESTROS TRABAJOS
            </h1>
          </ScrollReveal>

          <div
            className="flex md:justify-center justify-start space-x-4 mb-8 overflow-x-auto whitespace-nowrap px-12 text-xs font-light md:text-base md:font-normal"
            style={{ maxWidth: "100%" }}
          >
            {categories.map((category) => (
              <ScrollReveal animationClassName="fade-in-image">
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-full font-cinzel font-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                                    ${
                                      theme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                    }  // Color de texto dinámico
                                    ${
                                      theme === "dark"
                                        ? "hover:bg-pink-400"
                                        : "hover:bg-pink-200"
                                    } // Hover dinámico (rosa más oscuro en modo oscuro)
                                    ${
                                      selectedCategory === category.value
                                        ? theme === "dark"
                                          ? "bg-pink-400"
                                          : "bg-pink-200" // Fondo seleccionado dinámico (rosa más oscuro en modo oscuro)
                                        : theme === "dark"
                                        ? "bg-gray-700"
                                        : "bg-gray-100" // Fondo NO seleccionado dinámico (gris oscuro en modo oscuro)
                                    }
                                `}
                  onClick={() => handleCategoryClick(category.value)}
                >
                  {category.name}
                </button>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 p-4">
            { !isGalleryTransitioning && currentGalleryImages.map(
              (
                img,
                index // Usa 'currentGalleryImages' para mapear las imágenes FILTRADAS
              ) => (
                <div
                  key={index}
                  className="w-full aspect-square overflow-hidden"
                >
                   <SmoothImage
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover cursor-pointer lazy-image"
                    onClick={() => openImage(index)} // Agregar onClick a SmoothImage
                  />
                </div>
              )
            )}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 flex justify-center items-center" //agregar estas clases
                onClick={handleModalClick}
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
          >
          </PageBanner>
        )}
      </main>
    </div>
  );
}
