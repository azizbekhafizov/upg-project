import React, { useEffect, useState } from "react";
import toza from "../assets/images/toza.png";
import { ShoppingCart, Star } from "lucide-react";

export default function WishListt() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(stored);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistItems(stored);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (wishlistItems.length === 0) {
    return (
      <div className="container">
        <img className="m-auto mt-6" src={toza} alt="Empty" />
      </div>
    );
  }

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

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Избранное</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white transition-all"
          >
            <img
              src={product.image || ""}
              alt={product.title || "Product"}
              className="w-full h-48 object-contain mb-2"
              onError={(e) => (e.target.style.display = "none")}
            />
            <h3 className="text-lg font-semibold h-10 overflow-hidden">
              {product.title || "Без названия"}
            </h3>
            <div className="flex items-center gap-1 mb-1">
              {renderStars(product.rating || 0)}
            </div>
            <div className="flex justify-start mb-2">
              <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block">
                {product.brand || "No brand"}
              </span>
            </div>

            <div className="space-y-1 mb-4">
              <p className="text-xs text-gray-500">Цена:</p>
              <p className="text-lg font-bold text-pink-500">
                {(product.price || 0).toLocaleString()}{" "}
                <span className="text-sm">{product.currency || "UZS"}</span>
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
