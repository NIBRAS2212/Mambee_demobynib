import React from 'react';
import { products } from '../data';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80&w=2000" 
            alt="Honey Field" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
              Nature's Liquid <span className="text-brand-amber">Gold</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the purest form of honey, harvested with love and tradition. From our hives to your home.
            </p>
            <button className="btn-primary">Shop Collection</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display mb-2">Our Collection</h2>
              <p className="text-gray-500">Carefully curated selections for your health.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <span className="text-sm font-bold text-brand-amber cursor-pointer border-b-2 border-brand-amber">All Products</span>
              <span className="text-sm font-bold text-gray-400 hover:text-gray-600 cursor-pointer">Best Sellers</span>
              <span className="text-sm font-bold text-gray-400 hover:text-gray-600 cursor-pointer">New Arrivals</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group glass-card p-4 rounded-2xl flex flex-col"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    <Star className="w-4 h-4 text-brand-amber fill-brand-amber" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-widest text-brand-amber uppercase mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-amber transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="p-3 bg-brand-dark text-white rounded-xl hover:bg-brand-primary transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
