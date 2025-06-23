import React from 'react'
import { ArrowRight, DollarSign, HelpCircle, Package, Star } from 'lucide-react'

export default function Podershka() {
  const supportData = [
    {
      title: 'Способ оплаты',
      subtitle: 'Все об оплате покупок',
      icon: <DollarSign className="w-10 h-10 text-pink-500" />,
      active: false,
    },
    {
      title: 'FAQ',
      subtitle: 'Часто задаваемые вопросы',
      icon: <HelpCircle className="w-10 h-10 text-pink-500" />,
      active: true,
    },
    {
      title: 'Доставка',
      subtitle: 'Информация о доставке',
      icon: <Package className="w-10 h-10 text-pink-500" />,
      active: false,
    },
  ]

  const reviewData = [
    {
      title: 'Общий рейтинг',
      value: '95%',
      subtitle: '',
    },
    {
      title: 'Yandex.uz',
      subtitle: 'Оставить свой отзыв',
    },
    {
      title: '★★★★★',
      subtitle: '93% покупателей купили бы здесь снова',
    },
    {
      title: '500+',
      subtitle: 'Положительных оценок за все время работы',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Поддержка */}
      <h2 className="text-2xl font-extrabold mb-6 uppercase">Поддержка</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {supportData.map((item, index) => (
          <div
            key={index}
            className={`p-6 flex flex-col items-center text-center gap-3 border border-gray-200 bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer `}
          >
            {item.icon}
            <div className="text-gray-800 font-semibold">{item.title}</div>
            <div className="text-sm text-gray-600">{item.subtitle}</div>
            <ArrowRight className="mt-3" />
          </div>
        ))}
      </div>

      {/* Отзывы клиентов */}
      <h2 className="text-2xl font-extrabold mt-14 mb-6 uppercase">Отзывы клиентов</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reviewData.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col gap-2 border border-gray-200 bg-gray-100 text-left justify-between hover:bg-gray-200 transition-all cursor-pointer"
          >
            <div className="text-pink-500 font-semibold">{item.title}</div>
            {item.value ? (
              <div className="text-4xl font-bold text-gray-800">{item.value}</div>
            ) : (
              <div className="text-sm text-gray-700">{item.subtitle}</div>
            )}
            <ArrowRight className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
