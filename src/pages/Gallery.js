import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    "/img1.jpg","/img2.jpg","/img3.jpg","/img4.jpg","/img5.jpg",
    "/img6.jpg","/img7.jpg","/img8.jpg","/img9.jpg","/img10.jpg",
    "/img11.jpg","/img12.jpg","/img13.jpg","/img14.jpg","/img15.jpg",
    "/img16.jpg","/img17.jpg","/img18.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 py-12 pt-28 px-6">
      <h1 className="text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">
        🖼️ Our Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => openModal(idx)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white font-bold text-lg">View Image</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 font-bold text-3xl z-10"
              >
                &times;
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 text-gray-700 hover:text-gray-900 font-bold text-4xl z-10 flex items-center justify-center h-full"
              >
                &#10094;
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 text-gray-700 hover:text-gray-900 font-bold text-4xl z-10 flex items-center justify-center h-full"
              >
                &#10095;
              </button>

              {/* Image */}
              <motion.img
                key={selectedImg}
                src={selectedImg}
                alt="Selected"
                className="w-full h-auto rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
