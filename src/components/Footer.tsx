import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-display font-bold mb-4">MAMBEE STORE</h3>
            <p className="text-gray-500 max-w-sm">
              Bringing the authentic taste of the wild to every household. Pure, natural, and unprocessed honey from the heart of the forest.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-brand-amber">Products</a></li>
              <li><a href="/story" className="hover:text-brand-amber">Our Story</a></li>
              <li><a href="/reviews" className="hover:text-brand-amber">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-amber flex-1"
              />
              <button className="bg-brand-dark text-white rounded-lg px-4 py-2 text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t border-gray-50 pt-6">
          © 2024 Mambee Store. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
