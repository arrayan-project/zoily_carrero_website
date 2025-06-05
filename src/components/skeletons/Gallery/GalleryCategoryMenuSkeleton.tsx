/**
 * Skeleton de carga para la sección "Menu de galeria".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const GalleryCategoryMenuSkeleton = () => (
  <div className="flex flex-wrap justify-center gap-3 my-8">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="h-8 w-28 bg-gray-200 rounded-full animate-pulse"
      />
    ))}
  </div>
);

export default GalleryCategoryMenuSkeleton;