// BackgroundImageHero.tsx
import { FC, useState, useEffect } from "react";
import images from "../../assets/images";
import { getImageObject } from "../../utils/getImageObject";

interface Props {
  className?: string;
  imageKey: keyof typeof images;
  overlayOpacityClass?: string;
  alt?: string;
  objectPositionClass?: string;
  publicSrcOverride?: string;
}

const BackgroundImageHero: FC<Props> = ({
  className = "",
  imageKey,
  alt = "Maquillaje profesional Zoily Carrero",
  overlayOpacityClass = "opacity-60",
  objectPositionClass = "object-center",
  publicSrcOverride,
}) => {
  const image = getImageObject(imageKey);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(false), [imageKey]);

  if (!image) {
    console.error("Image key not found", { imageKey });
    return <div className={`${className} absolute inset-0`} />;
  }

 const src = publicSrcOverride ?? image.webp;

  return (
    <div className={`absolute inset-0 w-full h-full z-0 ${className}`}>
      <picture className="absolute inset-0 block">
        {publicSrcOverride ? (
          <>
            <source
              type="image/avif"
              srcSet={publicSrcOverride.replace(/\.(webp|jpg|png|avif)$/i, ".avif")}
            />
            <source
              type="image/webp"
              srcSet={publicSrcOverride.replace(/\.(webp|jpg|png|avif)$/i, ".webp")}
            />
          </>
        ) : (
          <>
            <source type="image/avif" srcSet={image.avif} />
            <source type="image/webp" srcSet={image.webp} />
          </>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${objectPositionClass}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={1920}
          height={1080}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
          isLoaded ? overlayOpacityClass : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
};

export default BackgroundImageHero;
