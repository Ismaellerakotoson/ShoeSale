import React from 'react';
import NavBar from '../../layouts/NavBar';
import { Bell, Search, User } from 'lucide-react';
import MainGraph from '../../components/MainGraph';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:min-w-[300px] lg:block">
        <NavBar/>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 px-6 mt-3 mb-3 mr-3 bg-white">
      <div className="flex justify-between items-center mb-4 max-w-90vw">
        <h1 className="text-2xl font-bold flex">Dashboard <span className='hidden ml-2 md:block'>Admin</span></h1>

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
      </div>

      {/* Contenu principal */}
        <div className='flex gap-3 overflow-auto'>
            <div className='cards p-2 bg-transparent md:w-[30%]'>
                <div className="w-9 p-2 rounded-full bg-gray-200 mb-4">
                    <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className='text'>
                    <p className='text-xs'>Total Revenu</p>
                    <div className='flex'>
                        <p className='text-xl font-bold'>$7676,89</p>
                        <div className='text-xs p-1.5 bg-green-300 rounded-xl ml-8'>+12.56</div>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet </p>
            </div>

            <div className='cards p-2 bg-transparent md:w-[30%]'>
                <div className="w-9 p-2 rounded-full bg-gray-200 mb-4">
                    <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className='text'>
                    <p className='text-xs'>Total Revenu</p>
                    <div className='flex'>
                        <p className='text-xl font-bold'>$7676,89</p>
                        <div className='text-xs p-1.5 bg-green-300 rounded-xl ml-8'>+12.56</div>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet </p>
            </div>

            <div className='cards p-2 bg-transparent md:w-[30%]'>
                <div className="w-9 p-2 rounded-full bg-gray-200 mb-4">
                    <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className='text'>
                    <p className='text-xs'>Total Revenu</p>
                    <div className='flex'>
                        <p className='text-xl font-bold'>$7676,89</p>
                        <div className='text-xs p-1.5 bg-green-300 rounded-xl ml-8'>+12.56</div>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet </p>
            </div>

            <div className='cards p-2 bg-transparent md:w-[30%]'>
                <div className="w-9 p-2 rounded-full bg-gray-200 mb-4">
                    <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className='text'>
                    <p className='text-xs'>Total Revenu</p>
                    <div className='flex'>
                        <p className='text-xl font-bold'>$7676,89</p>
                        <div className='text-xs p-1.5 bg-green-300 rounded-xl ml-8'>+12.56</div>
                    </div>
                </div>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet </p>
            </div>
        </div>

        {/* 2eme Contenu principal */}
        <div className='flex mt-2'>
            <MainGraph/>
        </div>
    </main>
    </div>
  );
}
