import React, { useEffect, useState } from "react";
import { FaArrowRight, FaPlus, FaMinus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toza from "../assets/images/toza.png";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateCart(updated);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link className="flex items-center text-gray-300" to="/">
          Главная <FaArrowRight className="text-[20px] mt-1 mx-2" />
          <p className="text-[#FF0096] cursor-auto">Корзина</p>
        </Link>
      </div>

      <h1 className="text-[32px] text-[#FF0096] font-semibold mb-8">
        Корзина
        <span className="ml-3 text-gray-400 text-[16px]">
          {cartItems.length} товара
        </span>
      </h1>

      {cartItems.length === 0 ? (
        <div className="mt-20 text-center">
          <p className="text-gray-400">Ваша корзина пуста</p>
          <img className="mx-auto mt-6 w-52" src={toza} alt="empty-cart" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT: Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between border rounded-xl p-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain border rounded-lg"
                  />
                  <div className="ml-6">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.brand}</p>
                    <div className="flex items-center mt-3 space-x-2">
                      <button
                        onClick={() => decreaseQty(index)}
                        className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                      >
                        <FaMinus />
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(index)}
                        className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-pink-500 text-xl font-bold">
                    {formatPrice(item.price * item.quantity)} {item.currency}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    ({formatPrice(item.price)} за шт.)
                  </p>
                  <button
                    onClick={() => decreaseQty(index)}
                    className="mt-4 text-pink-500 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
            >
              <FaTrash />
              Очистить корзину
            </button>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="border rounded-xl p-6 h-fit shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Детали заказа</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>{cartItems.length} товара</span>
              <span>{formatPrice(totalPrice)} UZS</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Управлять скидками и бонусами вы сможете на шаге выбора способа
              оплаты
            </p>
            <div className="flex justify-between text-lg font-semibold border-t pt-4 mb-4">
              <span>Всего</span>
              <span>{formatPrice(totalPrice)} UZS</span>
            </div>
            <button className="w-full bg-[#FF0096] text-white py-2 rounded-md font-semibold hover:bg-pink-700">
              Оформить заказ
            </button>
            <button className="mt-4 w-full text-[#FF0096] hover:underline text-sm">
              Продолжить покупку
            </button>

            <div className="mt-6 text-gray-400 text-xs flex gap-2 items-start">
              <span>⏱️</span>
              <span>
                Доступные способы и время доставки можно выбрать при оформлении
                заказа
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
