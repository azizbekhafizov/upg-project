"use client";

import React, { useEffect, useState } from "react";
import data from "../data/kupit.json";
import { Heart, Scale, ShoppingCart, Star } from "lucide-react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function Kupit() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [brandOnly, setBrandOnly] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [filterOpen, setFilterOpen] = useState(true); // 👉 filter panel toggle

  useEffect(() => {
    const loaded = data;
    setProducts(loaded);
    setFiltered(loaded);
  }, []);

  useEffect(() => {
    let sorted = [...products];

    if (sortOrder === "az") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "za") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "priceLowHigh") {
      sorted.sort((a, b) => {
        const priceA = parseInt(a.price.toString().replace(/\D/g, ""));
        const priceB = parseInt(b.price.toString().replace(/\D/g, ""));
        return priceA - priceB;
      });
    } else if (sortOrder === "priceHighLow") {
      sorted.sort((a, b) => {
        const priceA = parseInt(a.price.toString().replace(/\D/g, ""));
        const priceB = parseInt(b.price.toString().replace(/\D/g, ""));
        return priceB - priceA;
      });
    }

    if (priceRange.min || priceRange.max) {
      sorted = sorted.filter((item) => {
        const price = parseInt(item.price.toString().replace(/\D/g, ""));
        const min = parseInt(priceRange.min || 0);
        const max = parseInt(priceRange.max || Infinity);
        return price >= min && price <= max;
      });
    }

    if (brandOnly) {
      sorted = sorted.filter((item) => item.upgrade);
    }

    setFiltered(sorted);
  }, [sortOrder, priceRange, brandOnly, products]);

  const toggleFavorite = (product) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = stored.find((p) => p.title === product.title);
    const updated = exists
      ? stored.filter((p) => p.title !== product.title)
      : [...stored, product];

    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlist(new Set(updated.map((p) => p.title)));
    window.dispatchEvent(new Event("storage"));
  };

  const toggleCompare = (product) => {
    const stored = JSON.parse(localStorage.getItem("compare")) || [];
    const exists = stored.find((p) => p.title === product.title);
    const updated = exists
      ? stored.filter((p) => p.title !== product.title)
      : [...stored, product];

    localStorage.setItem("compare", JSON.stringify(updated));
    setCompareList(new Set(updated.map((p) => p.title)));
    window.dispatchEvent(new Event("storage"));
  };

  const addToCart = (product) => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const index = stored.findIndex((item) => item.title === product.title);

    if (index > -1) {
      stored[index].quantity += 1;
    } else {
      stored.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(stored));
    setCart(stored);
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

  return (
    <div className="flex p-6 gap-6 bg-white text-black">
      {/* FILTER PANEL */}
     <div
  className={`w-64 border rounded p-4 space-y-4 transition-all duration-300 ${
    filterOpen ? "max-h-[500px]" : "max-h-[60px] overflow-hidden"
  }`}
>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span className="inline-block w-4 h-4">⚙️</span> Фильтр
          </h2>
          {filterOpen ? (
            <FiChevronUp className="text-xl" />
          ) : (
            <FiChevronDown className="text-xl text-gray-400" />
          )}
        </div>

        {filterOpen && (
          <>
            <div>
              <h3 className="font-semibold mb-2">Цена</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="От"
                  className="border px-2 py-1 w-full"
                  onChange={(e) =>
                    setPriceRange((prev) => ({ ...prev, min: e.target.value }))
                  }
                />
                <input
                  type="number"
                  placeholder="До"
                  className="border px-2 py-1 w-full"
                  onChange={(e) =>
                    setPriceRange((prev) => ({ ...prev, max: e.target.value }))
                  }
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Торговая марка</h3>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={brandOnly}
                  onChange={() => setBrandOnly(!brandOnly)}
                />
                <span className="text-pink-600 font-semibold">UPGrade</span>
              </label>
            </div>
          </>
        )}
      </div>

      {/* PRODUCT SECTION */}
      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <select
            className="border px-3 py-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="az">Название (A - Z)</option>
            <option value="za">Название (Z - A)</option>
            <option value="priceLowHigh">Цена (низкая → высокая)</option>
            <option value="priceHighLow">Цена (высокая → низкая)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl duration-300 border border-gray-100 overflow-hidden group w-full"
            >
              <div className="relative p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      wishlist.has(product.title)
                        ? "bg-pink-500 text-white shadow-lg"
                        : "bg-white text-gray-400 hover:text-pink-500 hover:bg-pink-50 shadow-md"
                    }`}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={
                        wishlist.has(product.title) ? "currentColor" : "none"
                      }
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
                <div className="flex items-center gap-1">
                  {renderStars(product.rating || 0)}
                </div>
                <div className="flex justify-start">
                  <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block">
                    {product.brand || "UPGrade"}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Цена:</p>
                  <p className="text-lg font-bold text-pink-500">
                    {product.price} <span className="text-sm">UZS</span>
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
