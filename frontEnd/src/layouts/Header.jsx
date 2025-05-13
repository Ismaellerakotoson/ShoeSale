import React from 'react'
import ViewCart from '../components/ViewCart'
import Logo from '../components/Logo'

export default function Header() {
  return (
    <header id="header">
      <div className="py-4 lg:mx-[13%] flex justify-between items-center">
        <div className="flex items-center"> 
          <Logo/>
        </div>
        <ViewCart/>
      </div>
      <hr className='border-t-2 border-gray-200'></hr>
    </header>
  )
}
