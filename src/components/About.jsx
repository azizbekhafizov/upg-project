import React from 'react'
import hero from '../assets/images/bot.jpeg'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const features = [
    { title: 'Лидеры', text: 'на игровом рынке', active: true },
    { title: '500 положительных', text: 'Более отзывов' },
    { title: '32 киберспортивных', text: 'Провели турнира' },
    { title: 'Топовые блогеры', text: 'выбирают нас' },
    { title: '60 компьютерных клубов', text: 'Оборудовали под ключ' },
  ]

  return (
    <div className='container px-4 mx-auto '>
      <h1 className='font-bold text-4xl mt-10'>О КОМПАНИИ</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 border border-gray-200">
        <div>
          <img className='w-[675px] h-[455px] object-cover' src={hero} alt="" />
        </div>
        <div>
          <h2 className='text-3xl font-semibold'>О компании</h2>
          <div className='text-[14px] w-full md:w-[700px] mt-4 text-gray-600'>
            <p>С 2009 года мы продаем компьютерную технику в Узбекистане. Мы - официальные партнеры многих международных компаний, что гарантирует качество нашей продукции.</p>
            <p className='mt-3'>Наши опытные сотрудники всегда готовы помочь с выбором техники. В нашем шоуруме представлен широкий ассортимент товаров.</p>
            <p className='mt-2'>Мы предлагаем доставку по всей республике и поддерживаем все виды оплаты для вашего удобства.</p>
          </div>
          <button className='w-[135px] h-[40px] border-2 border-red-400 mt-4 hover:bg-red-400 hover:text-white transition'>Узнать больше</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-r border-b border-l border-gray-200 rounded overflow-hidden">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center p-6 gap-2 bg-white border border-gray-200 hover:bg-gray-100 transition-all cursor-pointer
            }`}
          >
            <div className="text-pink-500 font-medium">
              {item.text.includes(item.title) ? (
                <span>
                  {item.text.replace(item.title, '')}
                  <br />
                  <span className="text-pink-500">{item.title}</span>
                </span>
              ) : (
                <>
                  <span className="text-pink-500">{item.title}</span>
                  <br />
                  <span className="text-gray-700">{item.text}</span>
                </>
              )}
            </div>
            <ArrowRight className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
