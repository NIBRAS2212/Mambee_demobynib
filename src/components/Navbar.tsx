import React from 'react';
import { ShoppingCart, Menu, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-extrabold text-brand-dark">MAMBEE</span>
              <span className="text-brand-amber text-2xl font-display font-extrabold ml-1">STORE</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-semibold hover:text-brand-amber transition-colors">Shop</Link>
              <Link to="/story" className="text-sm font-semibold hover:text-brand-amber transition-colors">Our Story</Link>
              <Link to="/contact" className="text-sm font-semibold hover:text-brand-amber transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 bg-brand-amber text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
