/**
 * Skeleton de carga para la sección "Carrusel de cursos".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const CoursesCarouselSkeleton = () => (
  <div className="w-full h-[85vh] flex items-center justify-center">
    <div className="flex gap-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-[200px] h-[300px] bg-gray-100 rounded-[20px] animate-pulse"
        />
      ))}
    </div>
  </div>
);

export default CoursesCarouselSkeleton;