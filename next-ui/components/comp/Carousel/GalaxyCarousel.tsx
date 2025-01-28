"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-72 max-w-sm mx-auto flex flex-col items-center">
      <div className="relative w-full h-48 flex items-center justify-center border text-4xl font-bold rounded-lg">
        {slides[currentIndex]}
      </div>

      <div className="mt-4 flex justify-between w-full">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 border rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 border rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 border rounded-full ${
              index === currentIndex ? "bg-black" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
