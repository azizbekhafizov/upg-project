import React from 'react'


import toza from '../assets/images/toza.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

export default function Cart() {
  return (
    <div className='container'>
      <div className="mt-4">
        <Link className='flex items-center text-gray-300' to='/'> Главная <FaArrowRight className='text-[20px] mt-1' /><p className='text-[#FF0096] cursor-auto'>Корзина</p></Link>
      </div>

      <h1 className='text-[32px] text-[#FF0096] mt-7'>Корзина <span className='ml-3 text-gray-300 text-[16px]'>0 товара</span></h1>


<div className="mt-20">
  <p className='text-center text-gray-300'>Ваша корзина пуста</p>
<img className='mx-auto' src={toza} alt="" />

</div>
    </div>
  )
}
