import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/1578095645512-BQ9UROH8F9Y8BLYE2XF9/honeygold-180.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/c6cccc22-90ae-4e11-b0d4-9dbd66916575/maritwilliamsphoto2021-katieelijanwedding-1212.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/77e16fd2-efb0-4a6a-bc04-f19f79fbdba7/maritwilliamsphoto2021-katieelijanwedding-339.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/1526340291692-3QY555B30SEGQOH0A1AE/0011.jpg?format=1500w'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index] ?? null);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex] ?? null);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex] ?? null);
  };

  return (
    <div className="grid mx-auto px-4 py-16 md:py-52">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
        PORTAFOLIO
        </h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-0 p-4">
      {images.map((img, index) => (
        <div key={index} className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openImage(index)}
          />
        </div>
      ))}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <button className="absolute top-20 right-4 text-white" onClick={closeImage}>
            <X size={32} />
          </button>
          <button className="absolute left-4 text-white top-1/2 transform -translate-y-1/2" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <img src={selectedImage} alt="Selected" className="max-h-full max-w-full rounded-lg" />
          <button className="absolute right-4 text-white top-1/2 transform -translate-y-1/2" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
