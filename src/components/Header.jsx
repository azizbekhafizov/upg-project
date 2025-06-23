import { useDarkMode } from "../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faWallet, faSlidersH, faShoppingCart,
  faCommentDots, faSun, faMoon, faUser, faTh,
  faCogs, faDesktop
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const headerClass = darkMode
    ? "w-full  bg-black text-white transition-colors duration-300"
    : "w-full  bg-white text-gray-800 transition-colors duration-300 px-8 ";

  const inputClass = darkMode
    ? "w-full border rounded px-4 py-[6px] pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600 bg-gray-800 text-white"
    : "w-full border rounded px-4 py-[6px] pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-black";

  const textClass = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <header className={headerClass}>
      {/* 1-qator: logo, search, icons */}
      <div className=" flex justify-between items-center px-4 py-2">
        <div className="text-2xl font-bold">
          <span className={darkMode ? "text-white" : "text-gray-900"}>UPG</span>
          <span className="text-pink-600">RADE</span>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className={inputClass}
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
          <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Сравнение</span>
            <span className="absolute -top-2 -right-0.5 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </div>
          <div className="relative flex flex-col items-center mt-2 gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faHeart} />
            <span>Избранное</span>
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
          </div>
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Корзина</span>
          </div>
          <div className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Контакты</span>
          </div>
          <div onClick={toggleDarkMode} className="flex flex-col mt-2 items-center gap-1 cursor-pointer hover:text-pink-600">
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            <span>Тема</span>
          </div>
          <div className="flex flex-col mt-2 w-9 h-9 border rounded-full items-center justify-center hover:border-pink-600 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
          </div>
        </div>
      </div>

      {/* 2-qator: menyular */}
      <div className={`flex items-center px-4 py-2 gap-6 text-sm ${textClass}`}>
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
          <span className="cursor-pointer text-pink-600 border-b-2 border-pink-600">HyperX</span>
          <span className="cursor-pointer text-pink-600 border-b-2 border-pink-600">Все бренды</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
