import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleOrderNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "You can ask to link this to your Swiggy or Zomato page!",
      duration: 5000
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-orange-500/10 shadow-lg">
      <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554941829-202a0b2403b8')] bg-repeat-x opacity-30`} style={{ animation: 'fire-scroll 10s linear infinite' }}></div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <nav className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <UtensilsCrossed className="w-8 h-8 text-orange-500" />
            </motion.div>
            <span 
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
              style={{ animation: 'text-glow 3s ease-in-out infinite' }}
            >
              The Family Cuisine
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('cuisines')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
              Cuisines
            </button>
             <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
              Team
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
              Contact
            </button>
            <Button onClick={handleOrderNow} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold shadow-lg shadow-orange-500/20">
              Order Now
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-orange-500 transition-transform duration-300" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-5 text-center"
          >
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-lg">
              About
            </button>
            <button onClick={() => scrollToSection('cuisines')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-lg">
              Cuisines
            </button>
             <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-lg">
              Team
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-lg">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-lg">
              Contact
            </button>
            <Button onClick={handleOrderNow} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold w-full py-3 text-lg mt-2">
              Order Now
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;