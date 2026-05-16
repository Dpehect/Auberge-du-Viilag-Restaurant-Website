import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchMenu } from '../store/menuSlice';
import { motion } from 'framer-motion';

const MenuSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) return <div className="section-padding text-center">Chargement du menu...</div>;
  if (error) return <div className="section-padding text-center text-red-500">{error}</div>;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-medium">Gastronomie</span>
          <h2 className="text-4xl md:text-5xl text-teal mt-2">Notre Carte</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-3xl border-b border-gray-100 pb-4 text-teal">{category.title}</h3>
              
              {category.items && (
                <div className="space-y-8">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xl font-medium group-hover:text-gold transition-colors">{item.name}</h4>
                        <span className="text-gold font-serif italic">{item.price}</span>
                      </div>
                      <p className="text-sm text-text-muted italic">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {category.subcategories && category.subcategories.map((sub, sidx) => (
                <div key={sidx} className="space-y-6">
                  <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold">{sub.name}</h4>
                  <div className="space-y-8">
                    {sub.items.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-xl font-medium group-hover:text-gold transition-colors">{item.name}</h4>
                          <span className="text-gold font-serif italic">{item.price}</span>
                        </div>
                        <p className="text-sm text-text-muted italic">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
