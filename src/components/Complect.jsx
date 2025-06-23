import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const categories = [
  // Birinchi sahifa
  { title: "Мат. Платы", img: "/images/motherboard.png" },
  { title: "SSD", img: "/images/ssd.png" },
  { title: "Кулеры", img: "/images/fan.png" },
  { title: "Блоки питания", img: "/images/psu.png" },
  { title: "Столы", img: "/images/desk.png" },
  { title: "Кресла", img: "/images/chair.png" },
  { title: "Освещение", img: "/images/lights.png" },
  { title: "Аксессуары", img: "/images/accessories.png" },

  // Ikkinchi sahifa
  { title: "Ноутбуки", img: "/images/laptop.png" },
  { title: "Консоли", img: "/images/console.png" },
  { title: "Контроллеры", img: "/images/controller.png" },
  { title: "Wi-Fi", img: "/images/router.png" },
  { title: "Корпуса", img: "/images/case.png" },
  { title: "Процессоры", img: "/images/cpu.png" },
  { title: "Видеокарты", img: "/images/gpu.png" },
  { title: "ОЗУ", img: "/images/ram.png" },
];

export default function Complect() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8;

  const handleNext = () => {
    if (startIndex + visibleCount < categories.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleItems = categories.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full px-6 py-12 bg-white text-black font-sans">
      {/* Title and Buttons */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">Комплектующие</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-20">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl w-[350px] h-[350px] shadow hover:shadow-lg hover:-translate-y-1 transform transition-all cursor-pointer group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-24 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-center text-base font-semibold tracking-tight flex justify-center items-center gap-1">
              {item.title}
              <span className="text-pink-600 group-hover:translate-x-1 transition-all">→</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
