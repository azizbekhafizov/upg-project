import React, { useEffect, useState } from "react";
import data from "../data/kupit.json";
import { Heart, ShoppingCart, ListPlus } from "lucide-react";

export default function Kupit() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [brandOnly, setBrandOnly] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFiltered(data);
  }, []);

  useEffect(() => {
    let sorted = [...products];

    if (sortOrder === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortOrder === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));

    if (priceRange.min || priceRange.max) {
      sorted = sorted.filter((item) => {
        const price = parseInt(item.price.replace(/\D/g, ""));
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

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((p) => p.title === product.title)
        ? prev.filter((p) => p.title !== product.title)
        : [...prev, product]
    );
  };

  const toggleCompare = (product) => {
    setCompareList((prev) =>
      prev.find((p) => p.title === product.title)
        ? prev.filter((p) => p.title !== product.title)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div className="flex p-6 gap-6 bg-white text-black">
      <div className="w-64 border h-[300px] rounded p-4 space-y-6 bg-gray-100">
        <div>
          <h2 className="font-semibold mb-2">Цена</h2>
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
          <h2 className="font-semibold mb-2">Торговая марка</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={brandOnly}
              onChange={() => setBrandOnly(!brandOnly)}
            />
            <span className="text-pink-600 font-semibold">UPGrade</span>
          </label>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <select
            className="border px-3 py-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="az">Название (A - Z)</option>
            <option value="za">Название (Z - A)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-white hover:shadow-lg transition relative overflow-hidden"
            >
              {/* Wishlist icon */}
              <button
                className="absolute top-2 right-2 text-pink-500 hover:text-pink-600"
                onClick={() => toggleWishlist(product)}
              >
                <Heart
                  className="w-5 h-5"
                  fill={wishlist.find((p) => p.title === product.title) ? "pink" : "none"}
                />
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-contain bg-white"
              />

              <div className="p-4 space-y-3">
                <h3 className="font-medium text-gray-900 text-sm leading-tight h-10 overflow-hidden">
                  {product.title}
                </h3>

                <div className="flex items-center gap-1">{renderStars(product.rating || 0)}</div>

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

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCompare(product)}
                    className="border rounded p-2 hover:bg-gray-100"
                    title="Сравнить"
                  >
                    <ListPlus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
