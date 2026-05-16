import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: '/images/dish.png', title: 'Signature Dish', span: 'md:col-span-2' },
  { url: '/images/hero.png', title: 'The Inn', span: '' },
  { url: 'https://images.unsplash.com/photo-1550966841-396ad886756b?auto=format&fit=crop&q=80', title: 'Cozy Interior', span: '' },
  { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80', title: 'Wine Cellar', span: 'md:col-span-2' },
];

const Gallery: React.FC = () => {
  return (
    <section className="section-padding bg-bg-offwhite">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-medium">Instants</span>
          <h2 className="text-4xl md:text-5xl text-teal mt-2">Galerie Photos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden group h-[400px] ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                <span className="text-xs uppercase tracking-widest text-gold mb-1 block">Atmosphère</span>
                <h4 className="text-2xl font-serif">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
