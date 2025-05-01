// ContactSkeleton.tsx
const ContactSkeleton = () => (
    <section id="contact" className="min-h-[700px] bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-6">
          <div className="h-10 bg-gray-300 rounded animate-pulse" />
          <div className="h-10 bg-gray-300 rounded animate-pulse" />
          <div className="h-10 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
  export default ContactSkeleton;