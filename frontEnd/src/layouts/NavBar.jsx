import React from 'react';
import Logo from '../components/Logo';
import { LayoutDashboard, Package, ShoppingCart, Users, LogOut } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="hidden md:flex h-screen bg-hero border-6 border-white p-4 flex-col justify-between m-2">
      <div>
        <Logo />
        <ul className="space-y-2 mt-10">
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <LayoutDashboard className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <a href="#" className="text-gray-800 group-hover:text-white">Dashboard</a>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <Package className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <a href="#" className="text-gray-800 group-hover:text-white">Produits</a>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <ShoppingCart className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <a href="#" className="text-gray-800 group-hover:text-white">Commandes</a>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <Users className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <a href="#" className="text-gray-800 group-hover:text-white">Utilisateurs</a>
          </li>
        </ul>
      </div>

      {/* Bas : Logout */}
      <ul>
        <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
          <LogOut className="w-5 h-5 text-gray-800 group-hover:text-white" />
          <a href="#" className="text-gray-800 group-hover:text-white">Logout</a>
        </li>
      </ul>
    </nav>
  );
}
