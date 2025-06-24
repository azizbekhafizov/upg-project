"use client";
import { useState } from "react";
import { Heart, Scale, Star, ShoppingCart } from "lucide-react";
import products from "../data/Product.json";
import products2 from "../data/Products2.json";

export default function ProductsSection() {
  const [favorites, setFavorites] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const toggleFavorite = (productTitle) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productTitle)
      ? newFavorites.delete(productTitle)
      : newFavorites.add(productTitle);
    setFavorites(newFavorites);
  };

  const toggleCompare = (productTitle) => {
    const newCompareList = new Set(compareList);
    newCompareList.has(productTitle)
      ? newCompareList.delete(productTitle)
      : newCompareList.add(productTitle);
    setCompareList(newCompareList);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderProductGrid = (title, productList) => (
    <>
      <div className="mb-8 mt-16">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto">
        {productList.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl duration-300 border border-gray-100 overflow-hidden group w-full"
          >
            <div className="relative p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button
                  onClick={() => toggleFavorite(product.title)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    favorites.has(product.title)
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-400 hover:text-pink-500 hover:bg-pink-50 shadow-md"
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={favorites.has(product.title) ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={() => toggleCompare(product.title)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    compareList.has(product.title)
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white text-gray-400 hover:text-blue-500 hover:bg-blue-50 shadow-md"
                  }`}
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[4/3] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm leading-tight h-10 overflow-hidden">
                {product.title}
              </h3>

              <div className="flex items-center gap-1">
                {renderStars(product.rating || 0)}
              </div>

              <div className="flex justify-start">
                <span className={`bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block`}>
                  {product.brand}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Цена:</p>
                <p className="text-lg font-bold text-pink-500">
                  {formatPrice(product.price)} <span className="text-sm">{product.currency}</span>
                </p>
              </div>

              <button className="w-full bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="container mx-auto px-4 py-12">
      {renderProductGrid("НОВИНКИ", products)}
      {renderProductGrid("Лучшие предложения", products2)}
    </section>
  );
}
