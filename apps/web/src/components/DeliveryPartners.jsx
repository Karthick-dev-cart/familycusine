import React from 'react';
import { motion } from 'framer-motion';
import { Bike, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DeliveryPartners = () => {
  const handleOrderClick = (platform) => {
    toast({
      title: `Redirecting to ${platform}...`,
      description: "This feature isn't implemented yet, but it can open your store link!",
      duration: 4000,
    });
  };

  const cardVariants = {
    offscreen: { opacity: 0, scale: 0.8 },
    onscreen: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Get It Delivered
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your favorite meals from our kitchen to your doorstep, hot and fresh.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 flex flex-col items-center text-center"
          >
            <img className="w-40 h-auto mb-6" alt="Swiggy logo" src="https://images.unsplash.com/photo-1619262045712-fcb75f41663a" />
            <p className="text-gray-400 mb-8 flex-grow">
              Order your favorite dishes through Swiggy for lightning-fast delivery!
            </p>
            <Button
              onClick={() => handleOrderClick('Swiggy')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6 text-white font-bold rounded-lg group"
            >
              Order on Swiggy
              <ExternalLink className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 flex flex-col items-center text-center"
          >
            <img className="w-40 h-auto mb-6" alt="Zomato logo" src="https://images.unsplash.com/photo-1619262045712-fcb75f41663a" />
            <p className="text-gray-400 mb-8 flex-grow">
              Explore our menu and place your order on Zomato for a seamless experience.
            </p>
            <Button
              onClick={() => handleOrderClick('Zomato')}
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 text-white font-bold rounded-lg group"
            >
              Order on Zomato
              <ExternalLink className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPartners;