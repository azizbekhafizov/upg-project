import React, { useEffect, useState } from "react";
import { Heart, Trash2, ShoppingCart } from "lucide-react";

export default function Compare__productsList() {
  const [compareItems, setCompareItems] = useState([]);
  

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("compare")) || [];
    setCompareItems(stored);
  }, []);

  const updateCompare = (updated) => {
    setCompareItems(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  const removeFromCompare = (title) => {
    const updated = compareItems.filter((item) => item.title !== title);
    updateCompare(updated);
  };

  const addToWishlist = (product) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = stored.some((item) => item.title === product.title);
    if (!alreadyExists) {
      const updated = [...stored, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    }
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

  const clearCompare = () => {
    localStorage.removeItem("compare");
    setCompareItems([]);
    window.dispatchEvent(new Event("storage"));
  };

  if (compareItems.length === 0) {
    return (
      <div className="container text-center py-20">
        <h2 className="text-xl text-gray-500">Solishtirish ro‘yxati bo‘sh</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
          <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            Клавиатуры
            <button onClick={clearCompare} className="text-white font-bold ml-2">×</button>
          </span>
        </div>
        <button
          onClick={clearCompare}
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-sm text-gray-600"
        >
          Очистить всё
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {compareItems.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white transition-all relative"
          >
            <div className="absolute left-2 top-2 flex flex-col gap-3 z-10">
              <button
                onClick={() => removeFromCompare(product.title)}
                className="w-9 h-9 bg-white hover:bg-red-500 hover:text-white text-gray-700 rounded-full shadow flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className="w-9 h-9 bg-white hover:bg-pink-500 hover:text-white text-gray-700 rounded-full shadow flex items-center justify-center"
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={() => addToCart(product)}
                className="w-9 h-9 bg-white hover:bg-green-500 hover:text-white text-gray-700 rounded-full shadow flex items-center justify-center"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>

            {/* Rasm */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-sm font-semibold mb-2">{product.title}</h3>

            {/* Price */}
            <p className="text-lg font-bold text-pink-600 mb-4">
              {product.price?.toLocaleString?.() || "—"} {product.currency || "UZS"}
            </p>

            {/* Xususiyatlar */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Общие характеристики
              </h4>
              <p className="text-xs text-gray-500">ТОРГОВАЯ МАРКА</p>
              <p className="text-sm text-gray-800 font-medium">{product.brand || "—"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
