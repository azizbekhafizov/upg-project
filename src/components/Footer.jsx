"use client";

import { Phone, MapPin, Clock, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    company: {
      title: "Компания",
      links: [
        { name: "Контакты", href: "#" },
        { name: "О нас", href: "#" },
        { name: "Почему мы?", href: "#" },
      ],
    },
    services: {
      title: "Услуги",
      links: [
        { name: "Апгрейд", href: "#" },
        { name: "Сборка ПК", href: "#" },
        { name: "Ремонт", href: "#" },
      ],
    },
    support: {
      title: "Поддержка",
      links: [
        { name: "Доставка", href: "#" },
        { name: "Способ оплаты", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    projects: {
      title: "Проекты",
      links: [
        { name: "Блогеры", href: "#" },
        { name: "Игровые клубы", href: "#" },
        { name: "Киберспорт", href: "#" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      followers: "177 тыс. подписчиков",
      color: "text-pink-500",
      bgColor: "bg-pink-500",
      href: "#",
    },
    {
      name: "YouTube",
      icon: Youtube,
      followers: "114 тыс. подписчиков",
      color: "text-red-500",
      bgColor: "bg-red-500",
      href: "#",
    },
    {
      name: "Telegram",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.548c-.121.546-.44.68-.892.424l-2.463-1.815-1.187 1.142c-.131.131-.242.242-.495.242l.177-2.506 4.589-4.147c.2-.177-.044-.275-.31-.098L9.732 13.2l-2.426-.759c-.527-.165-.537-.527.11-.78L19.538 7.04c.438-.165.822.11.68.78-.002-.001-.002-.001-.002 0z" />
        </svg>
      ),
      followers: "23.4 тыс. подписчиков",
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      href: "#",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      followers: "30 тыс. подписчиков",
      color: "text-black",
      bgColor: "bg-black",
      href: "#",
    },
  ];

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6">
              <span className="text-black">UPG</span>
              <span className="text-pink-500">RADE</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-pink-500 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-gray-900">Телефоны</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>+ 998 (99) 124-24-24</div>
                <div>+ 998 (97) 124-24-24</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-gray-900">Адреса</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>г. Ташкент, ул. Навои 37</div>
                <div>г. Ташкент, Трц. Малика, Магазин 24</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-gray-900">Режим работы</span>
              </div>
              <div className="text-sm text-gray-600">Ежедневно с 10:00 до 20:00</div>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-pink-500 my-8 rounded-full"></div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 ${social.bgColor} rounded-lg flex items-center justify-center text-white`}
                >
                  <IconComponent />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{social.name}</div>
                  <div className="text-xs text-gray-500">{social.followers}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
