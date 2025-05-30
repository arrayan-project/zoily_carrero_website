/**
 * Skeleton de carga para la sección "Grilla de la galeria".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const GalleryGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-1 mt-10 mb-10 px-1">
    {[...Array(9)].map((_, index) => (
      <div key={index} className="overflow-hidden aspect-[4/3]">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
      </div>
    ))}
  </div>
);

export default GalleryGridSkeleton;