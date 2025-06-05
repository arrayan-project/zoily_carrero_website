const HomeFeaturesSkeleton = () => (
  <section className="py-20 px-4 md:px-12 animate-pulse bg-white dark:bg-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen */}
      <div className="aspect-video bg-gray-200 rounded shadow-inner" />

      {/* Features (2x2 grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFeaturesSkeleton;
