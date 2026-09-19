import React from 'react';
    import { motion } from 'framer-motion';
    import { toast } from '@/components/ui/use-toast';
    import { ArrowRight } from 'lucide-react';
    const Cuisines = () => {
      const cuisines = [{
        name: 'Sizzling BBQ',
        description: 'Smoky, grilled-to-perfection meats and veggies.',
        image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/2025-03-25-TUtw1.webp'
      }, {
        name: 'North Indian',
        description: 'Rich curries, tandoori delights, and aromatic biryanis.',
        image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/ed7445004d820ef69ba16206f3570b6f-kc4y8.jpg'
      }, {
        name: 'Indo-Chinese',
        description: 'A tantalizing fusion of bold and spicy flavors.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }, {
        name: 'South Indian',
        description: 'Crispy dosas, fluffy idlis, and flavorful sambar.',
        image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/a716b8be166299cf10ebdc5715693b01.jpg'
      }, {
        name: 'Continental',
        description: 'Classic pastas, creamy sauces, and gourmet pizzas.',
        image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }, {
        name: 'Fresh Seafood',
        description: 'Coastal delicacies prepared with aromatic spices.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }];
      const handleViewMenu = () => {
        toast({
          title: "🚧 Menu Coming Soon!",
          description: "Our full, delicious menu will be available here shortly.",
          duration: 4000
        });
      };
      const cardVariants = {
        offscreen: {
          y: 100,
          opacity: 0
        },
        onscreen: i => ({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            delay: i * 0.15
          }
        })
      };
      return <section id="cuisines" className="py-24 px-4 bg-gray-900">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: -30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                A World of Flavors
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From smoky grills to exotic curries, every dish is an adventure.
              </p>
            </motion.div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuisines.map((cuisine, index) => <motion.div key={index} custom={index} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{
              once: true,
              amount: 0.3
            }} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer h-96" onClick={handleViewMenu}>
                  <img className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt={cuisine.name} src={cuisine.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent shimmer-effect"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{cuisine.name}</h3>
                      <p className="text-gray-300 text-sm">{cuisine.description}</p>
                    </div>
                    <div className="transform translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>;
    };
    export default Cuisines;