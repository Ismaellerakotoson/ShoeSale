import React from 'react';
import NavBar from '../../layouts/NavBar';
import { Bell, Search, User } from 'lucide-react';
import MainGraph from '../../components/MainGraph';
import TopAdmin from '../../components/TopAdmin';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:min-w-[300px] lg:block">
        <NavBar/>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 px-1 mt-3 mb-3 mr-3 bg-white md:px-3">
      <div className="flex justify-between items-center mb-4 max-w-90vw">
        <h1 className="text-2xl font-bold flex">Tableau de bord <span className='hidden ml-2 md:block'>Admin</span></h1>
        <TopAdmin/>
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
        <div className=''>
            <MainGraph/>
        </div>
    </main>
    </div>
  );
}
