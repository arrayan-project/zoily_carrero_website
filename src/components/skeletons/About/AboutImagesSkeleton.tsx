const AboutImagesSkeleton = () => (
  <section className="mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="aspect-[4/3] bg-gray-100 rounded-lg shadow-inner"
      />
    ))}
  </section>
);

export default AboutImagesSkeleton;
