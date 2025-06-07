import React, { useState } from 'react';
import { ChevronLeftCircle, ChevronRightCircle, XCircle } from 'lucide-react';
import Sliderone from '../assets/Artboard 1-min.jpg';
import Slidertwo from '../assets/Artboard 2-min.jpg';
import Sliderthree from '../assets/Artboard 5-min.jpg';
import Sliderfour from '../assets/Artboard 6-min.jpg';

const slides = [Sliderone, Slidertwo, Sliderthree, Sliderfour];

const PortfolioGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-center">
      <h2 className="text-5xl lg:text-7xl font-bold text-[#021b2d] mb-12 leading-tight">
        Proud of{' '}
        <span className="stroke-text-two text-4xl lg:text-7xl">
          Our Rich Portfolio!
        </span>
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {slides.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md transform hover:scale-105 transition duration-500 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full Image + Slider */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl px-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-50"
            >
              <XCircle size={40} />
            </button>

            {/* Full Image */}
            <img
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg transition-all duration-500"
            />

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400"
            >
              <ChevronLeftCircle size={50} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400"
            >
              <ChevronRightCircle size={50} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
