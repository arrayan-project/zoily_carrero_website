/**
 * Skeleton de carga para la sección "UGC".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const UGCMainSectionSkeleton = () => (
  <section className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100 overflow-hidden shadow-md animate-pulse">
    <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
      <div className="h-64 bg-gray-200 rounded mb-4" />
      <div className="h-24 bg-gray-100 rounded" />
    </div>
    <div className="ugc-seccion-derecha md:w-1/2 w-full">
      <div className="w-full h-96 bg-gray-200 rounded" />
    </div>
  </section>
);
export default UGCMainSectionSkeleton;