"use client";
import { useState, useEffect } from "react";
import { Heart, Scale, Star, ShoppingCart } from "lucide-react";
import products from "../data/Product.json";
import products2 from "../data/Products2.json";

export default function ProductsSection() {
  const [favorites, setFavorites] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setFavorites(new Set(stored.map((item) => item.title)));
  }, []);

  const toggleFavorite = (product) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = stored.find((item) => item.title === product.title);

    let updated;
    if (exists) {
      updated = stored.filter((item) => item.title !== product.title);
    } else {
      updated = [...stored, product];
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
    setFavorites(new Set(updated.map((item) => item.title)));
    window.dispatchEvent(new Event("storage")); // Headerni yangilash uchun signal
  };

const toggleCompare = (product) => {
  const stored = JSON.parse(localStorage.getItem("compare")) || [];
  const exists = stored.find((item) => item.title === product.title);

  let updated;
  if (exists) {
    updated = stored.filter((item) => item.title !== product.title);
  } else {
    updated = [...stored, product];
  }

  localStorage.setItem("compare", JSON.stringify(updated));
  setCompareList(new Set(updated.map((item) => item.title)));
  window.dispatchEvent(new Event("storage")); // Header uchun signal
};


  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.title === product.title);

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };

  

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  const renderProductGrid = (title, productList) => (
    <>
      <div className="mb-8 mt-16">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{title}</h2>
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
                  onClick={() => toggleFavorite(product)}
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
                  onClick={() => toggleCompare(product)}
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
              <div className="flex items-center gap-1">{renderStars(product.rating || 0)}</div>
              <div className="flex justify-start">
                <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block">
                  {product.brand}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Цена:</p>
                <p className="text-lg font-bold text-pink-500">
                  {product.price.toLocaleString()}{" "}
                  <span className="text-sm">{product.currency}</span>
                </p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
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
