import React, { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import images, { // Importa el objeto 'images' para el banner
    noviaGalleryImages,     // Importa los arrays de imágenes categorizadas
    socialGalleryImages,
    peinadoGalleryImages,
    pielMaduraGalleryImages,
    glamGalleryImages,
    expressGalleryImages,
} from '../assets/img/images';

// Define las categorías del menú
const categories = [
    { name: 'Todas', value: 'all' },
    { name: 'Novia', value: 'novia' },
    { name: 'Social', value: 'social' },
    { name: 'Peinado', value: 'peinado' },
    { name: 'Piel Madura', value: 'pielMadura' },
    { name: 'Glam', value: 'glam' },
    { name: 'Express', value: 'express' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('all'); // Estado para la categoría seleccionada


    // Función para obtener el array de imágenes según la categoría seleccionada
    const getImagesForCategory = () => {
        switch (selectedCategory) {
            case 'novia': return noviaGalleryImages;
            case 'social': return socialGalleryImages;
            case 'peinado': return peinadoGalleryImages;
            case 'pielMadura': return pielMaduraGalleryImages;
            case 'glam': return glamGalleryImages;
            case 'express': return expressGalleryImages;
            case 'all':
            default:
                // Si seleccionas 'Todas' o por defecto, puedes mostrar todas las imágenes de todas las categorías.
                // En este ejemplo, para simplificar, usaremos solo las de 'novia' si es 'all', ajusta según necesites.
                return noviaGalleryImages.concat(socialGalleryImages, peinadoGalleryImages, pielMaduraGalleryImages, glamGalleryImages, expressGalleryImages);
        }
    };

    const currentGalleryImages = getImagesForCategory(); // Obtiene el array de imágenes a mostrar
    const imageRefs = useRef<Array<React.RefObject<HTMLImageElement>>>([]);
    imageRefs.current = currentGalleryImages.map((_, i) => imageRefs.current[i] || React.createRef());

    useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const imgElement = entry.target as HTMLImageElement;
                      const src = imgElement.dataset.src; // Obtén el URL real de la imagen desde data-src
                      if (src) {
                          imgElement.src = src; // Carga la imagen real
                          observer.unobserve(imgElement); // Deja de observar esta imagen
                      }
                  }
              });
          },
          {
              rootMargin: '50px 0px', // Opcional: Carga las imágenes 50px antes de que entren completamente en el viewport
              threshold: 0.1 // Opcional: Carga la imagen cuando el 10% de ella sea visible
          }
      );

      imageRefs.current.forEach(ref => {
          if (ref.current) {
              observer.observe(ref.current); // Observa cada elemento <img> usando su ref
          }
      });


      return () => {
          observer.disconnect(); // Limpia el observador al desmontar el componente
      };
  }, [currentGalleryImages]); // Dependencia: useEffect se ejecuta cuando cambian las imágenes


    const openImage = (index: number) => {
        setCurrentIndex(index);
        setSelectedImage(currentGalleryImages[index] ?? null); // Usa 'currentGalleryImages'
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % currentGalleryImages.length; // Usa 'currentGalleryImages'
        setCurrentIndex(newIndex);
        setSelectedImage(currentGalleryImages[newIndex] ?? null); // Usa 'currentGalleryImages'
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length; // Usa 'currentGalleryImages'
        setCurrentIndex(newIndex);
        setSelectedImage(currentGalleryImages[newIndex] ?? null); // Usa 'currentGalleryImages'
    };

    const handleCategoryClick = (categoryValue: string) => {
        setSelectedCategory(categoryValue); // Actualiza la categoría seleccionada
    };

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // Verifica si el objetivo del clic (event.target) es el mismo elemento que tiene el evento onClick asignado (event.currentTarget)
      if (event.target === event.currentTarget) {
          closeImage(); // Cierra el modal si el clic fue directamente en el fondo oscuro
        }
     };

    return (
        <div className="min-h-screen flex flex-col bg-pink-50">
            <PageBanner
                title="PORTAFOLIO"
                imageSrcs={[images.galleryBannerUp]}
                objectPosition="left-bottom"
            />

            <main className="flex-grow">
              <div className="mx-auto py-16 md:py-32">
                    <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-8 tracking-wider text-gray-800">
                        Mira nuestros trabajos con amor
                    </h1>

                    <div className="flex md:justify-center justify-start space-x-4 mb-8 overflow-x-auto whitespace-nowrap px-12" style={{ maxWidth: '100%' }}>

                        {categories.map((category) => (
                            <button
                                key={category.value}
                                className={`px-4 py-2 rounded-full text-gray-700 font-semibold hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 ${selectedCategory === category.value ? 'bg-pink-200' : 'bg-gray-100'} whitespace-nowrap`}
                                onClick={() => handleCategoryClick(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                  
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-0 p-4">
                        {currentGalleryImages.map((img, index) => ( // Usa 'currentGalleryImages' para mapear las imágenes FILTRADAS
                            <div key={index} className="w-full aspect-[4/3] overflow-hidden">
                                <img
                                    ref={imageRefs.current[index]} // Asigna el ref a la imagen
                                    data-src={img} // Almacena el URL real en data-src
                                    src="" // <<--- URL de imagen placeholder (o deja src vacío)
                                    alt={`Gallery ${index}`}
                                    className="w-full h-full object-cover cursor-pointer lazy-image" // Añade clase lazy-image para identificar
                                    onClick={() => openImage(index)}
                                />
                            </div>
                        ))}
                        {selectedImage && (
                            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
                            onClick={handleModalClick} 
                            >
                                <button className="absolute top-20 right-4 text-white" onClick={closeImage}>
                                    <X size={32} />
                                </button>
                                <button className="absolute left-4 text-white top-1/2 transform -translate-y-1/2" onClick={prevImage}>
                                    <ChevronLeft size={40} />
                                </button>
                                <img src={selectedImage} alt="Selected" className="max-h-full max-w-full rounded-lg" />
                                <button className="absolute right-4 text-white top-1/2 transform -translate-y-1/2" onClick={nextImage}>
                                    <ChevronRight size={40} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}