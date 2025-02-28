import React, { useState, useEffect, useRef, memo } from 'react';
import './SmoothImage.css';

interface SmoothImageProps {
    src: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
}

const SmoothImageComponent: React.FC<SmoothImageProps> = ({ src, alt = "", className = "", onClick }) => {
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState('');
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setLoading(true); // Iniciar el estado de carga

        const img = new Image(); // Crear un nuevo objeto Image para la carga en segundo plano
        img.src = src;
        img.onload = () => {
            setImageSrc(src); // Establecer la URL de la imagen una vez cargada
            setLoading(false); // Indicar que la carga ha finalizado
        };
        img.onerror = () => {
            setLoading(false); // Manejar error de carga si es necesario
        };

        return () => {
            // Función de limpieza si el componente se desmonta o src cambia antes de la carga
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);


    return (
        <img
            ref={imageRef}
            src={imageSrc || ""} // Mostrar una cadena vacía inicialmente o un placeholder si prefieres
            alt={alt}
            className={`${className} smooth-image ${loading ? 'loading' : 'loaded'}`}
            style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} // Transición de opacidad
            onClick={onClick}
        />
    );
};

const SmoothImage = memo(SmoothImageComponent); // Envuelve SmoothImageComponent con memo

export default SmoothImage;