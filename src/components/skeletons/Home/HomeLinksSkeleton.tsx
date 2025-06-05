const HomeLinksSkeleton = () => (
  <section className="py-16 px-4 animate-pulse bg-white dark:bg-black">
    <div className="container mx-auto text-center space-y-6">
      <div className="h-8 w-1/3 mx-auto bg-gray-300 rounded" />
      <div className="h-5 w-2/3 mx-auto bg-gray-200 rounded" />
      <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full aspect-square bg-gray-100 rounded-lg shadow-inner"
          />
        ))}
      </div>
    </div>
  </section>
);

export default HomeLinksSkeleton;
