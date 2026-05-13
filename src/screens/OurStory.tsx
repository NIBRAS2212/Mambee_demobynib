import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Users, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurStory = () => {
  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      {/* Header */}
      <div className="flex items-center px-4 py-4 bg-white border-b border-gray-100">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="ml-4 text-xl font-display font-bold">Our Story</h1>
      </div>

      <div className="max-w-2xl mx-auto pb-12">
        {/* Hero Section */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1000" 
            alt="Abdul Hameed Founder" 
            className="w-full h-[500px] object-cover rounded-b-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-4xl font-display font-bold text-white mb-1">Abdul Hameed</h2>
            <p className="text-brand-amber font-display font-bold text-sm tracking-widest uppercase">FOUNDER, MAMBEE STORE</p>
          </div>
        </div>

        {/* Story Text */}
        <div className="px-6 py-10">
          <h3 className="text-brand-primary font-display font-bold text-lg mb-6 tracking-widest uppercase">THE BEGINNING</h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Over three decades ago, Abdul Hameed envisioned a future where the purity of nature's liquid gold could be preserved and shared without compromise. Starting with just a handful of bee colonies, his journey was fueled by a singular passion: to bring the authentic taste of the wild to every household.
            </p>
            <p>
              Mambee Store wasn't just built on business acumen; it was built on soil, sweat, and a deep respect for the ecosystem. Abdul spent years living alongside traditional bee-keeping communities, learning the ancient rhythms of the seasons and the intricate language of the hives. This dedication transformed a local passion into a legacy of trust.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <span className="block text-3xl font-display font-extrabold text-brand-dark">34+</span>
              <span className="text-sm text-gray-500 font-medium">Years of Heritage</span>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <span className="block text-3xl font-display font-extrabold text-brand-dark">1000+</span>
              <span className="text-sm text-gray-500 font-medium">Bee Colonies</span>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mx-6 bg-[#ffc107] rounded-3xl p-8 text-center mb-10 shadow-lg shadow-amber-200/50">
          <h4 className="text-4xl font-display font-extrabold text-brand-dark mb-1">3+ Decades</h4>
          <p className="font-display font-bold">of Vision & Purity</p>
        </div>

        {/* Commitment */}
        <div className="px-6 space-y-10">
          <h3 className="text-xl font-display font-bold">Our Commitment</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-[#90f4b7]/30 p-3 rounded-xl h-fit">
                <CheckCircle2 className="w-6 h-6 text-[#006d41]" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Uncompromising Purity</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Raw, unfiltered, and strictly tested. We ensure every drop maintains its natural enzymes and nutritional value.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#ffdf9e]/30 p-3 rounded-xl h-fit">
                <Users className="w-6 h-6 text-[#785900]" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Farmer Partnerships</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We support local apiarists with fair wages and sustainable tools, fostering a community of ethical honey production.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-200 p-3 rounded-xl h-fit">
                <HeartPulse className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Health First</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Designing wellness products that blend traditional medicine with modern science for holistic health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-6 py-12">
          <img 
            src="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?auto=format&fit=crop&q=80&w=1000" 
            alt="Honey Pouring" 
            className="w-full h-80 object-cover rounded-3xl mb-8"
          />
          <Link to="/" className="w-full btn-primary py-4 rounded-full">
            Shop the Collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center text-gray-400 text-[10px] mt-8">
          © 2024 Mambee Store. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
