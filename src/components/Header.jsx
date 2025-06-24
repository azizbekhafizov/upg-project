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
import { List } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full container bg-white text-gray-800 transition-colors duration-300">
      {/* 1-qator: logo, search, icons */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl font-bold">
          <span className="text-gray-900">UPG</span>
          <span className="text-pink-600">RADE</span>
        </div>

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
          <div className="flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faWallet} />
            <span>UZS/USD</span>
          </div>
          <List to="productList">
            <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faSlidersH} />
              <span>Сравнение</span>
              <span className="absolute -top-2 -right-0.5 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </List>
          <Link to="wishlist">
            <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faHeart} />
              <span>Избранное</span>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </Link>
          <Link to="cart">
            <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Корзина</span>
            </div>
          </Link>
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Контакты</span>
          </div>
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faSun} />
            <span>Тема</span>
          </div>
          <Link
            to="/account"
            className="flex flex-col mt-2 w-9 h-9 border rounded-full items-center justify-center hover:border-pink-600 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" />
          </Link>
        </div>
      </div>

      {/* 2-qator: menyular */}
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
          <div className="flex items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faDesktop} />
            <span>Купить компьютер</span>
          </div>
          <span className="cursor-pointer hover:text-pink-600">Новинки</span>
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
