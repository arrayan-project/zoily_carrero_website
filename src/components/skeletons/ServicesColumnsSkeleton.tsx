/**
 * Skeleton de carga para la sección "Columna de servicios".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const ServicesColumnsSkeleton = () => (
  <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-0 mb-8">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="w-full lg:w-1/3 h-[250px] bg-gray-200 rounded-[20px] m-2 animate-pulse"
      />
    ))}
  </div>
);

export default ServicesColumnsSkeleton;