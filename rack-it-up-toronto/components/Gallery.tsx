import React, { useState } from 'react';

type Category = 'All' | 'Pallet' | 'Push-Back' | 'Cantilever' | 'Mezzanine';

interface GalleryItem {
  id: number;
  category: Category;
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Pallet',
    title: 'Standard Selective Pallet Racking',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Cantilever',
    title: 'Heavy Duty Cantilever for Lumber',
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'Mezzanine',
    title: 'Multi-Level Mezzanine Platform',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'Push-Back',
    title: 'High Density Push-Back System',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'Pallet',
    title: 'Narrow Aisle Configuration',
    image: 'https://images.unsplash.com/photo-1628619623049-3732d847849e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'Cantilever',
    title: 'Pipe & Tubing Storage',
    image: 'https://images.unsplash.com/photo-1616401784845-180886ba9ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    category: 'Mezzanine',
    title: 'Custom Steel Mezzanine',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'Push-Back',
    title: '4-Deep Push-Back Racking',
    image: 'https://images.unsplash.com/photo-1628135899933-289b4f910404?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories: Category[] = ['All', 'Pallet', 'Push-Back', 'Cantilever', 'Mezzanine'];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Installation Gallery</h3>
          <p className="text-lg text-stone-600">
            Explore our recent projects showcasing precision installation across various racking systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white shadow-lg transform scale-105'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/5] md:aspect-square lg:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;