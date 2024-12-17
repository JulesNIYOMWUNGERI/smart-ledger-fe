'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const slides = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V7sdr7lpiT4akEqgKILxixXHedzimsIYxg&s", label: "Home use" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrzUgUMEDRdjYjE_DY5AeIMBT_Untu9XK0XH6atxHDMvmoYVQS1TOP_ODX3w6BDYMmvY&usqp=CAU", label: "Boutique" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZXFeD0ESBeqQgT-BexP-m3xK9YrUJmHLtQ&s", label: "Supermarket" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd21MgF-I1LK95WAhPFD32avOo0XS8_djfBQ&s", label: "Pharmacy" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1M2O9swHRymAEu75JS1QS1nLa_Sj3drZHg&s", label: "Grage" },
    { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iirGX2tU5PmQMW6PCXKfTpJN6pPf5IX-vQ&s", label: "Spare shop" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full  px-6 flex flex-col items-center">
      {/* Carousel */}
      <div className="flex justify-center items-center gap-4 overflow-hidden">
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % slides.length;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;

          return (
            <motion.div
              key={slide.id}
              className={`transition-all duration-500 ${
                isCurrent
                  ? "w-60 h-80 z-10"
                  : isPrev || isNext
                  ? "w-40 h-60 opacity-75 z-0"
                  : "hidden"
              }`}
            >
              <div
                className="relative flex flex-col justify-end items-center h-full bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <p className="absolute bottom-4 text-white text-lg bg-black/50 px-4 py-1 rounded-md">
                  {slide.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="w-full">
        <div className="flex justify-between items-center gap-6 mt-3 w-[10%]">
            <button
                className="bg-gray-800 text-white rounded-full px-3 py-2 hover:bg-gray-700"
                onClick={handlePrev}
            >
                ←
            </button>
            <button
                className="bg-gray-800 text-white rounded-full px-3 py-2 hover:bg-gray-700"
                onClick={handleNext}
            >
                →
            </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

