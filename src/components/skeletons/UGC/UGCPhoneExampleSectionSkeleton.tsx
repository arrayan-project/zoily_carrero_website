/**
 * Skeleton de carga para la sección "Imagenes UGC".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const UGCPhoneExampleSectionSkeleton = () => (
  <section className="mt-10 mb-24">
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[0.7] w-full bg-gray-200 rounded-[20px] animate-pulse" />
      ))}
    </div>
  </section>
);
export default UGCPhoneExampleSectionSkeleton;