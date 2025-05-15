import React from 'react'
import cart from '../assets/images/cart.png'
import { Link } from 'react-router-dom';

export default function ViewCart() {
  return (
    <div className="flex items-center border border-black rounded-lg px-4 py-2">
        <img src={cart} alt="cart" className="w-4 h-auto mr-3" />
        <p className="capitalize text-sm font-bold">
        <Link to="/bag" className="text-gray-800 group-hover:text-white">view cart</Link>
        </p>
    </div>
  )
}
