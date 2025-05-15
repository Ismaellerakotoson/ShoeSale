import React from 'react'
import { Bell, Search, User } from 'lucide-react';

export default function TopAdmin() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-8 pr-4 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black "
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
        </div>
        <div className="group p-2 rounded-full hover:bg-gray-200 transition md:hidden">
          <Search className="w-6 h-6 text-gray-400  group-hover:text-black cursor-pointer" />
        </div>
        <div className="group p-2 rounded-full hover:bg-gray-200 transition">
          <Bell className="w-6 h-6 text-gray-500 group-hover:text-black cursor-pointer" />
        </div>
        <div className="group w-9 h-9 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-black transition">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
    </div>
  )
}
