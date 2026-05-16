import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, MapPin, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'La Cuisine', path: '/cuisine' },
    { name: 'Nos Menus', path: '/menus' },
    { name: 'L\'Auberge', path: '/auberge' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-serif tracking-widest uppercase text-teal">
            L'Auberge <span className="text-gold">du Village</span>
          </NavLink>
          
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors ${isActive ? 'text-gold' : 'text-teal'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <a href="tel:+33123456789" className="btn-primary text-xs">Réserver</a>
          </div>

          <button className="md:hidden text-teal" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-teal hover:text-gold"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex gap-6 mt-8">
              <Camera className="text-gold" />
              <Phone className="text-gold" />
              <MapPin className="text-gold" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar (Inspired by original) */}
      <div className="fixed bottom-0 left-0 w-full bg-teal text-white py-3 px-6 flex justify-between items-center z-50 md:hidden border-t border-gold/20">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter opacity-70">Réserver une table</span>
          <a href="tel:+33123456789" className="text-sm font-medium text-gold">+33 (0)1 23 45 67 89</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-gold p-2 rounded-full text-teal">
          <MenuIcon size={20} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
