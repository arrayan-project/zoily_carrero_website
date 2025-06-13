/**
 * Skeleton visual para la grilla de la galería.
 * Usa la misma proporción, columnas y animación fade-in-up con delay progresivo.
 */
const GalleryGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-1 mt-10 mb-10 px-1">
    {[...Array(9)].map((_, index) => (
      <div key={index} className="overflow-hidden aspect-[4/5]">
        <div
          className={`w-full h-full bg-gray-300 rounded animate-pulse opacity-80 fade-in-up-animation`}
          style={{ animationDelay: `${index * 100}ms` }}
        />
      </div>
    ))}
  </div>
);

export default GalleryGridSkeleton;
