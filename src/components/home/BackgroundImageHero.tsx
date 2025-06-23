// src/components/BackgroundImageHero.tsx

import { FC, useState, useEffect } from "react";
import images from "../../assets/images";

interface Props {
  className?: string;
  /** Key base en el objeto `images` (por ejemplo "bg-home2") */
  imageKey: keyof typeof images;
  /** Opacidad del overlay cuando la imagen carga (Tailwind class) */
  overlayOpacityClass?: string;
  alt?: string;
  /** object-position en móvil (Tailwind class) */
  mobileObjectPositionClass?: string;
  /** object-position en desktop (Tailwind class) */
  desktopObjectPositionClass?: string;
}

const BackgroundImageHero: FC<Props> = ({
  className = "",
  imageKey,
  alt = "Imagen Hero",
  overlayOpacityClass = "opacity-60",
  mobileObjectPositionClass = "object-center",
  desktopObjectPositionClass = "object-center",
}) => {
  // Objeto desktop (e.g. "bg-home2")
  const desktop = images[imageKey];
  // Objeto mobile (key + "-m", e.g. "bg-home2-m")
  const mobileKey = `${imageKey}m` as keyof typeof images;
  const mobile = images[mobileKey];

  const [isLoaded, setIsLoaded] = useState(false);

  if (!desktop || !mobile) {
    console.error("Error: keys inválidas en images", { imageKey, mobileKey });
    return (
      <div className="fixed inset-0 h-[100vh] bg-red-500 z-0">
        Error al cargar imagen de fondo.
      </div>
    );
  }

  // Placeholder borroso como fondo inline
  const placeholderStyle = desktop.placeholder
    ? { backgroundImage: `url("${desktop.placeholder}")` }
    : {};

  // Resetear estado de carga cuando cambie la key
  useEffect(() => {
    setIsLoaded(false);
  }, [imageKey]);

  return (
    <div
      className={`absolute inset-0 w-screen h-[100vh] overflow-hidden z-0 ${className}`}
      style={placeholderStyle}
    >
      <picture className="absolute inset-0 w-full h-full">
        {/* Mobile: max-width 639px */}
        <source
          media="(max-width: 639px)"
          type="image/avif"
          srcSet={mobile.avif}
        />
        <source
          media="(max-width: 639px)"
          type="image/webp"
          srcSet={mobile.webp}
        />

        {/* Desktop: min-width 640px */}
        <source
          media="(min-width: 640px)"
          type="image/avif"
          srcSet={desktop.avif}
        />
        <source
          media="(min-width: 640px)"
          type="image/webp"
          srcSet={desktop.webp}
        />

        {/* Fallback <img> */}
        <img
          src={desktop.webp}
          alt={alt}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover
            ${mobileObjectPositionClass} sm:${desktopObjectPositionClass}
            transition-opacity duration-500 ease-in-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </picture>

      {/* Overlay oscuro */}
      <div
        className={`
          absolute inset-0 w-full h-full bg-black
          transition-opacity duration-500 ease-in-out
          ${isLoaded ? overlayOpacityClass : "opacity-0"}
        `}
        aria-hidden="true"
      />
    </div>
  );
};

export default BackgroundImageHero;
