import React from 'react'

import toza from '../assets/images/toza.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
export default function WishListt() {
  return (
    <div className='container'>
      <div className="mt-4">
        <Link className='flex items-center text-gray-300' to='/'> Главная <FaArrowRight className='text-[20px] mt-1' /></Link>
      </div>
      <h1> wishlist</h1>

<img className='m-auto' src={toza} alt="" />
    </div>
  )
}
