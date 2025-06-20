import React from 'react';
import configatorImage from '../assets/images/konfig.png';

export default function Configator() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-white dark:bg-black transition-colors duration-300">
      {/* Chap tomon (matn) */}
      <div className="md:w-1/2 ml-12 space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white uppercase">
          Конфигуратор
        </h2>
        <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
          Конфигуратор системного блока UPGrade поможет подобрать комплектацию ПК и проверить комплектующие на совместимость. Выбирайте, сравнивайте характеристики, заказывайте дополнительные опции для создания конфигурации своей мечты!
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-lg font-semibold transition duration-300 transform hover:scale-105">
          подобрать ПК
        </button>
      </div>

      {/* O‘ng tomon (rasm) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={configatorImage}
          alt="Конфигуратор изображение"
          className="max-w-[90%] h-auto object-contain"
        />
      </div>
    </div>
  );
}
