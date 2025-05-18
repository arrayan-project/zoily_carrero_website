// src/components/BackgroundImageHero.tsx
import { FC, useState, useEffect } from "react";
import images from "../../assets/images"; // Importamos el objeto images

interface Props {
  className?: string;
  imageKey: keyof typeof images; // Clave para la imagen en el objeto images
  overlayOpacityClass?: string;
  alt?: string;
   mobileObjectPositionClass?: string;
  desktopObjectPositionClass?: string;
}

const BackgroundImageHero: FC<Props> = ({
  className = "",
  imageKey,
  alt = "Hero image",
  overlayOpacityClass = "opacity-45",
  mobileObjectPositionClass = "object-center",
  desktopObjectPositionClass = "object-center",
}) => {
  const image = images[imageKey];
  const [isLoaded, setIsLoaded] = useState(false);

  if (!image) {
    console.error("Error: Image key not found in images object", { imageKey });
    return (
      <div
        className={`${className} fixed inset-x-0 top-0 h-[95vh] z-0 bg-red-500`}
      >
        Error al cargar imagen de fondo.
      </div>
    );
  }

  const placeholderBgStyle = image.placeholder
    ? { backgroundImage: `url("${image.placeholder}")` }
    : {};

  useEffect(() => {
    // Resetea el estado isLoaded si imageKey cambia, para manejar posibles re-renderizados con diferentes imágenes.
    setIsLoaded(false);
  }, [imageKey]);

  return (
    <div
      className={`${className} absolute inset-0 w-full h-full z-0 bg-center bg-cover`}
      style={placeholderBgStyle} // Placeholder se aplica como fondo de este div
    >
      <picture>
        {/* móvil primero */}
        <source
          media="(max-width: 639px)"
          type="image/avif"
          srcSet={image.avif} // Usar la misma imagen para móvil
        />
        <source
          media="(max-width: 639px)"
          type="image/webp"
          srcSet={image.webp} // Usar la misma imagen para móvil
        />
        {/* desktop */}
        <source
          media="(min-width: 640px)"
          type="image/avif"
          srcSet={image.avif}
        />
        <source
          media="(min-width: 640px)"
          type="image/webp"
          srcSet={image.webp}
        />
        {/* fallback */}
        <img
          src={image.webp} // Fallback a WebP
          alt={alt}
          className={`w-full h-full object-cover ${mobileObjectPositionClass} sm:${desktopObjectPositionClass} transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0" // Control de opacidad de la imagen principal
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)} // Marcar como cargada cuando la imagen real esté lista
        />
        {/* Overlay oscuro sobre la imagen. Se muestra cuando la imagen principal está cargada. */}
        <div
          className={`absolute inset-0 w-full h-full bg-black transition-opacity duration-500 ease-in-out ${
            isLoaded ? overlayOpacityClass : "opacity-0" // Control de opacidad del overlay
          }`}
          aria-hidden="true"
        ></div>{" "}
      </picture>
    </div>
  );
};

export default BackgroundImageHero;
