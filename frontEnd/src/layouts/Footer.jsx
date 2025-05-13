import React from 'react';
import instagram from '../assets/images/Instagram.png'
import twitter from '../assets/images/Twitter.png'
import youtube from '../assets/images/Youtube.png'
import logo from '../assets/images/icon.png'

export default function Footer() {
  return (
    <footer className="bg-black p-5 justify-end mt-10 w-full bottom-0">
      <div className="flex justify-between">
        <div className="flex items-center"> 
          <img src={logo} alt="no-image" className="w-6 h-6" />
          <p className="f-16 font-semi-bold uppercase text-white ml-2">Sun co.</p>
        </div>
        <div className="hidden md:block">
          <p className="text-white">© 2023 dot.cards text task. All rights reserved</p>
        </div>
        <div className="flex gap-4">
          <img src={instagram} alt="no-image" className="w-6 h-6" />
          <img src={twitter} alt="no-image" className="w-6 h-6" />
          <img src={youtube} alt="no-image" className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-5 block sm:hidden">
        <p className="text-white">© 2023 dot.cards text task.<br /> All rights reserved</p>
      </div>
    </footer>
  );
}
