"use client";
import { useState } from "react";
import { Heart, Scale, Star, ShoppingCart } from "lucide-react";
import img1 from "../assets/images/img1.png";

export default function ProductsSection() {
  const [favorites, setFavorites] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Brateck LDT69-C022 Black",
      brand: "Brateck",
      price: "1 110 000",
      image: img1,
      rating: 0,
      brandColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "DarkProject ALU87 Daylight",
      brand: "Dark Project",
      price: "1 175 000",
      image: img1,
      rating: 0,
      brandColor: "bg-pink-500",
    },
    {
      id: 3,
      name: "DarkProject ALU87 Midnight",
      brand: "Dark Project",
      price: "1 175 000",
      image: img1,
      rating: 0,
      brandColor: "bg-pink-500",
    },
    {
      id: 4,
      name: "DarkProject ALU87 Violet",
      brand: "Dark Project",
      price: "849 000",
      image: img1,
      rating: 0,
      brandColor: "bg-pink-500",
    },
    {
      id: 5,
      name: "HyperX Cloud III Red Wireless",
      brand: "HyperX",
      price: "2 100 000",
      image: img1,
      rating: 0,
      brandColor: "bg-pink-500",
    },
    {
      id: 6,
      name: "Logitech G Pro X Superlight",
      brand: "Logitech",
      price: "1 850 000",
      image: img1,
      rating: 0,
      brandColor: "bg-blue-500",
    },
    {
      id: 7,
      name: "Razer DeathAdder V3 Pro",
      brand: "Razer",
      price: "1 650 000",
      image: img1,
      rating: 0,
      brandColor: "bg-green-500",
    },
    {
      id: 8,
      name: "SteelSeries Arctis Nova Pro",
      brand: "SteelSeries",
      price: "2 850 000",
      image: img1,
      rating: 0,
      brandColor: "bg-orange-500",
    },
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productId)
      ? newFavorites.delete(productId)
      : newFavorites.add(productId);
    setFavorites(newFavorites);
  };

  const toggleCompare = (productId) => {
    const newCompareList = new Set(compareList);
    newCompareList.has(productId)
      ? newCompareList.delete(productId)
      : newCompareList.add(productId);
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

  const renderProductGrid = (title) => (
    <>
      <div className="mb-8 mt-16">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl duration-300 border border-gray-100 overflow-hidden group w-full"
          >
            <div className="relative p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    favorites.has(product.id)
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-400 hover:text-pink-500 hover:bg-pink-50 shadow-md"
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={favorites.has(product.id) ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={() => toggleCompare(product.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    compareList.has(product.id)
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
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm leading-tight h-10 overflow-hidden">
                {product.name}
              </h3>

              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>

              <div className="flex justify-start">
                <span
                  className={`${product.brandColor} text-white text-xs px-3 py-1 rounded-full font-medium inline-block`}
                >
                  {product.brand}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Цена:</p>
                <p className="text-lg font-bold text-pink-500">
                  {product.price.split(" ").map((part, index) => (
                    <span key={index} className="mr-1">
                      {part}
                    </span>
                  ))}
                  <span className="text-sm">UZS</span>
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
      {renderProductGrid("НОВИНКИ")}
      {renderProductGrid("Лучшие предложения")}
    </section>
  );
}
