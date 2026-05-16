import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-medium">Bienvenue à</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            L'Auberge <br /> <span className="text-gold italic">du Village</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide opacity-90 mb-10">
            Une expérience culinaire authentique au cœur de la tradition française. 
            Savourez des produits de saison dans un cadre enchanteur.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="btn-primary border border-primary">Découvrir la Carte</button>
            <button className="border border-white text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-teal transition-all">Nous Contacter</button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
