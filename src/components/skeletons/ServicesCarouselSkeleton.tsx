/**
 * Skeleton de carga para la sección "Carrusel de servicios".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const ServicesCarouselSkeleton = () => (
  <div className="w-full h-[85vh] flex items-center justify-center">
    <div className="flex gap-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-[200px] h-[300px] bg-gray-200 rounded-[20px] animate-pulse"
        />
      ))}
    </div>
  </div>
);

export default ServicesCarouselSkeleton;