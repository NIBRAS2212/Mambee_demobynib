import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, reviews } from '../data';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingCart, Minus, Plus, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-brand-surface min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-square rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-white border border-gray-100 opacity-50 hover:opacity-100 cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-brand-amber font-bold tracking-widest text-xs uppercase mb-2 block">{product.category}</span>
              <h1 className="text-4xl font-display font-extrabold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'fill-brand-amber text-brand-amber' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">4.8 (120+ reviews)</span>
              </div>
              <p className="text-3xl font-bold mb-6">${product.price}</p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-gray-50 flex items-center gap-2 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-amber" />
                  <span className="text-xs font-bold text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Add to Cart Area */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center bg-gray-100 rounded-xl p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-extrabold text-gray-400 mb-1">Total Price</p>
                  <p className="text-xl font-bold font-display">${(product.price * quantity).toFixed(2)}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowOrderForm(true)}
                className="w-full btn-primary py-4"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 border-x border-gray-100">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RefreshCw className="w-5 h-5 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-display font-bold">Customer Reviews</h2>
            <div className="h-[1px] flex-1 bg-gray-100" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-amber/10 rounded-full flex items-center justify-center font-bold text-brand-amber">
                      {review.userName[0]}
                    </div>
                    <div>
                      <p className="font-bold">{review.userName}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-3 h-3 ${star <= review.rating ? 'fill-brand-amber text-brand-amber' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Order Form Modal */}
      <AnimatePresence>
        {showOrderForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOrderForm(false)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl"
            >
              <h3 className="text-2xl font-display font-bold mb-6">Complete Your Order</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Order placed successfully!');
                setShowOrderForm(false);
              }}>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-amber" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-amber" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Delivery Address</label>
                  <textarea required rows={3} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-amber" />
                </div>
                <div className="bg-brand-surface p-4 rounded-xl mb-6">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total Amount</span>
                    <span className="text-xl text-brand-amber">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary py-4">Confirm Order</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
