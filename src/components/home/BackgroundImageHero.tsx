// BackgroundImageHero.tsx
import { FC, useState, useEffect } from "react";
import images from "../../assets/images";
import { getImageObject } from "../../utils/getImageObject";

interface Props {
  className?: string;
  imageKey: keyof typeof images;
  overlayOpacityClass?: string;
  alt?: string;
  mobileObjectPositionClass?: string;
  desktopObjectPositionClass?: string;
  /** If provided, overrides bundle asset with a PUBLIC path to match <link rel=preload> */
  publicSrcOverride?: string; // e.g. "/img/background-home/bg-home2.avif"
}

const BackgroundImageHero: FC<Props> = ({
  className = "",
  imageKey,
  alt = "Maquillaje profesional Zoily Carrero",
  overlayOpacityClass = "opacity-60",
  mobileObjectPositionClass = "object-center",
  desktopObjectPositionClass = "object-center",
  publicSrcOverride,
}) => {
  const image = getImageObject(imageKey);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(false), [imageKey]);

  if (!image) {
    console.error("Image key not found", { imageKey });
    return <div className={`${className} absolute inset-0`} />;
  }

  // Use a single public URL for the hero so it matches your <link rel="preload"> in index.html.
  const src = publicSrcOverride ?? image.webp; // fallback to bundled webp if not provided

  return (
    <div className={`${className} absolute inset-0 w-full h-full z-0`}>
      <picture className="absolute inset-0 block">
        {/* Provide both AVIF/WEBP with the SAME public path if you have them */}
        {publicSrcOverride ? (
          <>
            <source
              type="image/avif"
              srcSet={publicSrcOverride.replace(
                /\.webp$|\.jpg$|\.png$/i,
                ".avif"
              )}
            />
            <source
              type="image/webp"
              srcSet={publicSrcOverride.replace(
                /\.avif$|\.jpg$|\.png$/i,
                ".webp"
              )}
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
          className="w-full h-full object-cover ..."
          loading="eager"
          decoding="async"
          fetchPriority="high" // ← aquí el camelCase
          width={1920}
          height={1080}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>

      {/* Overlay must be a sibling, not inside <picture> */}
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
