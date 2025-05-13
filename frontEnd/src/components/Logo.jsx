import React from 'react'
import logo from '../assets/images/icon.png'

export default function Logo() {
  return (
    <div className='flex'>
        <img src={logo} alt="no-image" className="w-6 h-6" />
        <p className="text-base font-semibold uppercase ml-2">Sun co.</p>
    </div>
  )
}
