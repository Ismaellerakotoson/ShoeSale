import React from 'react';
import Logo from '../components/Logo';
import { LayoutDashboard, Package, ShoppingCart, Users, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="hidden md:flex h-screen bg-hero border-6 border-white p-4 flex-col justify-between m-2">
      <div>
        <div className='items-center text-center'>
           <Logo />
        </div>
        <ul className="space-y-2 mt-10">
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <LayoutDashboard className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <Link to="/dashboard" className="text-gray-800 group-hover:text-white">Dashboard</Link>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <Package className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <Link to="/productManagement" className="text-gray-800 group-hover:text-white">Produits</Link>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <ShoppingCart className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <Link to="/order" className="text-gray-800 group-hover:text-white">Commandes</Link>
          </li>
          <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
            <Users className="w-5 h-5 text-gray-800 group-hover:text-white" />
            <Link to="/user" className="text-gray-800 group-hover:text-white">Utilisateurs</Link>
          </li>
        </ul>
      </div>

      <ul>
        <li className="group flex items-center gap-3 p-2 rounded hover:bg-black cursor-pointer transition">
          <LogOut className="w-5 h-5 text-gray-800 group-hover:text-white" />
          <Link to="/logout" className="text-gray-800 group-hover:text-white">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
