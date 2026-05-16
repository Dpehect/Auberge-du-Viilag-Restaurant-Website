import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Une erreur est survenue.');
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-gold uppercase tracking-widest text-xs font-medium">Contact</span>
            <h2 className="text-4xl md:text-5xl text-teal mt-2 mb-8">Nous Trouver</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-bg-offwhite p-4 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Adresse</h4>
                  <p className="text-text-muted text-sm">12 Rue de la Mairie,<br />77000 Village-sur-Seine, France</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-bg-offwhite p-4 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Téléphone</h4>
                  <p className="text-text-muted text-sm">+33 (0)1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-bg-offwhite p-4 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Horaires</h4>
                  <p className="text-text-muted text-sm">Mar - Sam: 12h-14h, 19h-22h<br />Dim: 12h-15h</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-offwhite p-10 shadow-sm"
          >
            <h3 className="text-2xl text-teal mb-8">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-text-muted mb-2">Nom Complet</label>
                <input 
                  type="text" 
                  className="w-full bg-white border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-text-muted mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-text-muted mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full">Envoyer</button>
              {status && <p className="text-center text-xs text-gold mt-4 italic">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
