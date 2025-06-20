"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroBannerImg3 from "../assets/images/HeroBanner3.png"; // Import qilindi


export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: HeroBannerImg3 },
    { id: 2, image: HeroBannerImg3 },
    { id: 3, image: HeroBannerImg3 },
    { id: 4, image: HeroBannerImg3 },
    { id: 5, image: HeroBannerImg3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slaydlar */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* CTA Button */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="mt-28 lg:mt-0">
                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-12 py-3 relative top-44 left-14 text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  ПОДРОБНЕЕ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* O'ng tugmalar (Chevron) */}
      <div className="absolute right-4 bottom-6 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pastki nuqtalar */}
      <div className="absolute bottom-6 left-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-pink-500 shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
