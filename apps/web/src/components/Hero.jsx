import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="object-cover w-full h-full" alt="Dark, smoky barbecue grill background" src="https://images.unsplash.com/photo-1581866587268-3a2f1da854fd" />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-transparent"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white"
          >
            <span className="block mb-4">Unleash the Flavors of</span>
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              the Ultimate Grill
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Sizzling barbecue and diverse cuisines in the heart of Kolathur, Chennai.
            Your next great meal awaits!
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('cuisines')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-lg px-10 py-7 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transform hover:scale-105 transition-transform"
            >
              Explore Our Cuisines
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-10 py-7 font-bold rounded-lg transform hover:scale-105 transition-all"
            >
              Find Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;