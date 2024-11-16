import React from 'react';

interface Mine {
  id: number;
  name: string;
  type: string;
  location: string;
  description: string;
  image: string;
  status: 'active' | 'sold' | 'pending';
}

const mines: Mine[] = [
  {
    id: 1,
    name: 'معدن آلاباستر بزنگان',
    type: 'آلاباستر',
    location: 'بزنگان',
    description: 'معدن آلاباستر با کیفیت عالی و دسترسی مناسب',
    image: 'https://images.unsplash.com/photo-1582584116621-6f8583e9e686?auto=format&fit=crop&q=80',
    status: 'active'
  },
  {
    id: 2,
    name: 'معدن مس جوغتای',
    type: 'مس',
    location: 'جوغتای',
    description: 'معدن مس فعال با ظرفیت تولید بالا',
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80',
    status: 'active'
  }
];

export default function MineListings() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">معادن فعال</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mines.map((mine) => (
            <div key={mine.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={mine.image} 
                alt={mine.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{mine.name}</h3>
                <p className="text-gray-600 mb-4">{mine.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{mine.location}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    mine.status === 'active' ? 'bg-green-100 text-green-800' :
                    mine.status === 'sold' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {mine.status === 'active' ? 'فعال' :
                     mine.status === 'sold' ? 'فروخته شده' :
                     'در حال مذاکره'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}