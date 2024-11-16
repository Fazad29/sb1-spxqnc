import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-pattern min-h-screen pt-20 flex items-center text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              بازار خرید و فروش معدن در ایران
            </h1>
            <p className="text-xl opacity-90">
              معتبرترین پلتفرم خرید، فروش و سرمایه‌گذاری در معادن ایران
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 flex items-center gap-2">
                شروع کنید
                <ArrowLeft size={20} />
              </a>
              <a href="#bot" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">
                ربات تلگرام
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80"
              alt="معدن"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}