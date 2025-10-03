import { useState } from "react";
export default function Gallery() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img15.jpg",
    "/img16.jpg",
    "/img17.jpg",
    "/img18.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImg(images[index]);
  };

  const closeModal = () => setSelectedImg(null);

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
    if (touchStartX - e.changedTouches[0].screenX > 50) {
      // Swiped left → next
      nextImage();
    } else if (touchStartX - e.changedTouches[0].screenX < -50) {
      // Swiped right → previous
      prevImage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">
        🖼️ Our Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer relative group"
            onClick={() => openModal(idx)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">View Image</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 font-bold text-2xl z-10"
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 text-gray-700 hover:text-gray-900 font-bold text-3xl z-10 hidden md:flex items-center justify-center h-full"
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 text-gray-700 hover:text-gray-900 font-bold text-3xl z-10 hidden md:flex items-center justify-center h-full"
            >
              &#10095;
            </button>

            {/* Image */}
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
