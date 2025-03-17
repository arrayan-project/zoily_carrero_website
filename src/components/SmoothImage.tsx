/*
##### Función #####
- Este componente muestra una imagen con una transición suave de opacidad al cargar.

##### Componentes con los que interactúa #####
- SmoothImage.css: Utiliza este archivo para los estilos.

##### Componentes que lo utilizan #####
- e utiliza en varios lugares de la aplicación para mostrar imágenes.
*/

import React, { useState, useEffect, useRef } from 'react';



interface SmoothImageProps {
    src: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
    isTransitioning?: boolean;
}

const SmoothImageComponent: React.FC<SmoothImageProps> = ({ src, alt = "", className = "", onClick, isTransitioning = false }) => {
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para el error
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setLoading(true); // Iniciar el estado de carga
        setError(null); // Limpiar el estado de error

        const img = new Image(); // Crear un nuevo objeto Image para la carga en segundo plano
        img.src = src;
        img.onload = () => {
            setImageSrc(src); // Establecer la URL de la imagen una vez cargada
            setLoading(false); // Indicar que la carga ha finalizado
        };
        img.onerror = () => {
            setError("Error al cargar la imagen."); // Establecer el estado de error
            setLoading(false); // Indicar que la carga ha finalizado (con error)
        };

        return () => {
            // Función de limpieza si el componente se desmonta o src cambia antes de la carga
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    if (error) {
        console.error("Error en SmoothImage:", error);
        return (
          <div className="error-container">
            <p className="error-message">Ha ocurrido un error inesperado al cargar la imagen.</p>
          </div>
        );
      }

    return (
        <div className={`h-full opacity-1 flex justify-center items-center ${isTransitioning ? 'opacity-0' : ''}`}>
            <img
                ref={imageRef}
                src={imageSrc || ""} // Mostrar una cadena vacía inicialmente o un placeholder si prefieres
                alt={alt}
                className={`w-full h-full object-cover ${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
                onClick={onClick}
            />
        </div>
    );
};

export default SmoothImageComponent;
