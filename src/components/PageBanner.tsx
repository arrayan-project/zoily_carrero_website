import React from 'react';
import images from '../assets/img/images';
import { useTheme } from './context/useTheme'; // Asegúrate de que la ruta a useTheme sea correcta


interface PageBannerProps {
    title: string;
    imageSrcs: string[];
    objectPosition?: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
    marginTop?: string;
    className?: string;
    children?: React.ReactNode;
    imageOpacity?: number;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageSrcs, objectPosition = 'center', children, imageOpacity }) => {
    const bannerImageSrc = imageSrcs && imageSrcs.length > 0 ? imageSrcs[0] : null;
    const defaultImageOpacity = imageOpacity !== undefined ? imageOpacity : 0.7;
    const { theme, colors } = useTheme(); // **Acceder a 'colors' desde useTheme**

    // Define el color de superposición por defecto basado en el tema
    const defaultOverlayColor = theme === 'dark' ? colors.bannerImageOverlayDark : colors.bannerImageOverlayLight; // **NUEVO: Color de superposición por defecto basado en el tema**


    return (
        <div className="relative bg-gray-100 overflow-hidden">
            <div className="relative h-full">
                <div className="absolute inset-0 h-full">
                {bannerImageSrc && (
                    <img
                        className={`h-full w-full object-cover object-${objectPosition}`}
                        src={bannerImageSrc}
                        alt="title"
                        style={{ opacity: defaultImageOpacity }} // Opacidad de la imagen (ya existente)
                    />
                )}
                    {/* **NUEVO: Capa de superposición con color temático** */}
                    <div
                        className="absolute inset-0 h-full"
                        style={{ backgroundColor: defaultOverlayColor }} // Color de fondo de la superposición basado en el tema
                        aria-hidden="true" // Para que sea ignorado por lectores de pantalla
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-800 to-transparent opacity-60 mix-blend-overlay" aria-hidden="true" /> {/* Degradado existente - MANTENER */}
                </div>
                <div className={"relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8"}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight font-montserrat text-center mb-12 tracking-wider text-white">
                        {title}
                    </h1>
                    {children && (
                        <div className="flex justify-center"> {/* Centrar los children, puedes ajustar esto */}
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;