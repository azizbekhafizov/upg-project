import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faWallet,
  faSlidersH,
  faShoppingCart,
  faCommentDots,
  faSun,
  faUser,
  faTh,
  faCogs,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [compareCount, setCompareCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const compare = JSON.parse(localStorage.getItem("compare")) || [];

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
      setWishlistCount(wishlist.length);
      setCompareCount(compare.length);
    };

    updateCounts();
    window.addEventListener("storage", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
    };
  }, []);

  return (
    <header className="w-full container bg-white text-gray-800 transition-colors duration-300">
      {/* 1-qator */}
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="/">
          <div className="text-2xl font-bold">
            <span className="text-gray-900">UPG</span>
            <span className="text-pink-600">RADE</span>
          </div>
        </Link>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full border rounded px-4 py-[6px] pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-black"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          {/* Currency */}
          <div className="flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faWallet} />
            <span>UZS/USD</span>
          </div>

          {/* Compare */}
          <Link to="/productList">
            <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faSlidersH} />
              <span>Сравнение</span>
              {compareCount > 0 && (
                <span className="absolute -top-2 -right-0.5 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {compareCount}
                </span>
              )}
            </div>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist">
            <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faHeart} />
              <span>Избранное</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* Contacts */}
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Контакты</span>
          </div>

          {/* Theme toggle */}
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faSun} />
            <span>Тема</span>
          </div>

          {/* Account */}
          <Link
            to="/account"
            className="flex flex-col mt-2 w-9 h-9 border rounded-full items-center justify-center hover:border-pink-600 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" />
          </Link>
        </div>
      </div>

      {/* 2-qator */}
      <div className="flex items-center px-4 py-2 gap-6 text-sm text-gray-700">
        <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded">
          <FontAwesomeIcon icon={faTh} />
          <span>Каталог</span>
        </button>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faCogs} />
            <span>Конфигуратор</span>
          </div>
          <Link to="/kupit">
            <div className="flex items-center gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faDesktop} />
              <span>Купить компьютер</span>
            </div>
          </Link>
          <Link to='/novinki'>
          
              <span className="cursor-pointer hover:text-pink-600">Новинки</span>
          </Link>
          <span className="cursor-pointer text-pink-600 border-b-2 border-pink-600">
            HyperX
          </span>
          <span className="cursor-pointer text-pink-600 border-b-2 border-pink-600">
            Все бренды
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
