/**
 * Skeleton de carga para la sección "Columna de cursos".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const CoursesColumnsSkeleton = () => (
  <section className="py-8 px-4 animate-pulse bg-white dark:bg-black">
    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-full lg:w-1/3 h-[250px] bg-gray-300 rounded-[20px]"
        />
      ))}
    </div>
  </section>
);

export default CoursesColumnsSkeleton;
