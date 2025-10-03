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
  ];

  const [selectedImg, setSelectedImg] = useState(null);

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
            onClick={() => setSelectedImg(src)}
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

      {/* Modal for selected image */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
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
