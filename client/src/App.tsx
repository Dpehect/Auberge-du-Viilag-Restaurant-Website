import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section (Simplified for demo) */}
        <section className="section-padding bg-bg-offwhite">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
                alt="Chef preparing food" 
                className="w-full h-[500px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-10 -right-10 bg-teal p-12 text-white hidden md:block">
                <span className="text-4xl font-serif text-gold block mb-2">25</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Années de<br />Passion</span>
              </div>
            </div>
            <div>
              <span className="text-gold uppercase tracking-widest text-xs font-medium">L'Esprit de l'Auberge</span>
              <h2 className="text-4xl md:text-5xl text-teal mt-2 mb-8">Une Histoire de Goût et de Partage</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Située au cœur d'un village pittoresque, notre auberge vous accueille dans une ambiance chaleureuse et raffinée. 
                Sous la direction du Chef Jean-Pierre, notre équipe s'efforce de sublimer les produits du terroir à travers une cuisine inventive et respectueuse des traditions.
              </p>
              <p className="text-text-muted mb-10 leading-relaxed italic border-l-2 border-gold pl-6">
                "La cuisine est le cœur d'une maison, et ici, nous cuisinons avec le nôtre pour vous offrir des moments inoubliables."
              </p>
              <button className="btn-primary">En savoir plus</button>
            </div>
          </div>
        </section>

        <MenuSection />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-teal text-white py-20 pb-32 md:pb-20">
        <div className="container grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-gold mb-6">L'Auberge</h3>
            <p className="text-sm opacity-60">Une tradition de gastronomie française depuis 1998.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Plan du Site</h4>
            <ul className="text-sm space-y-3 opacity-80">
              <li>Accueil</li>
              <li>La Cuisine</li>
              <li>Menus</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Suivez-nous</h4>
            <ul className="text-sm space-y-3 opacity-80">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>TripAdvisor</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Newsletter</h4>
            <div className="flex border-b border-white/20 py-2">
              <input type="email" placeholder="Votre email" className="bg-transparent text-sm outline-none w-full" />
              <button className="text-gold uppercase text-[10px] tracking-widest font-bold">OK</button>
            </div>
          </div>
        </div>
        <div className="container mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
          <p>© 2026 L'Auberge du Village. Tous droits réservés.</p>
          <p>Mentions Légales | Politique de Confidentialité</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
