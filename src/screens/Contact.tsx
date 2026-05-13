import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-brand-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-amber/10 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-brand-amber" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-gray-500">support@mambeestore.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-amber/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-brand-amber" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-gray-500">+94 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-amber/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-amber" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-500">123 Forest Lane, Honey Village, Sri Lanka</p>
                </div>
              </div>
            </div>

            <form className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3" />
              <button className="w-full btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
