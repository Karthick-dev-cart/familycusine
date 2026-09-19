import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.2
      }
    })
  };

  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Our Fiery Passion for Food
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A family's love for authentic flavors, brought to life on a plate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div custom={0} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Family Recipes</h3>
            <p className="text-gray-400">Time-honored dishes that taste like home, crafted with love.</p>
          </motion.div>
          <motion.div custom={1} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Premium Ingredients</h3>
            <p className="text-gray-400">Only the freshest, locally-sourced produce make it to our kitchen.</p>
          </motion.div>
          <motion.div custom={2} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Cozy Ambiance</h3>
            <p className="text-gray-400">An intimate 10-seat dine-in experience, perfect for families.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mt-24 bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Our Story of Flavor</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                As a family of 10 food lovers, we opened our doors in Kolathur to share our passion. We've created a warm space for you to enjoy exceptional food and make lasting memories.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We believe great food brings people together. Whether you dine with us or order online, we promise an unforgettable culinary journey.
              </p>
            </div>
            <div className="relative h-80 md:h-auto">
              <img className="w-full h-full object-cover" alt="Happy family chefs cooking in a modern kitchen" src="https://images.unsplash.com/photo-1570890178293-32c6736fa013" />
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;