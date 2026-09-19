import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 Social media not linked yet!",
      description: "You can ask me to add your social media links!",
      duration: 4000
    });
  };
  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">Family Cuisine</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              The ultimate barbecue and multi-cuisine dining experience in Kolathur, Chennai.
            </p>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block text-white">Navigate</span>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('cuisines')} className="hover:text-orange-500 transition-colors">Cuisines</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block text-white">Order Online</span>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => handleSocialClick()} className="hover:text-orange-500 transition-colors">Swiggy</button></li>
              <li><button onClick={() => handleSocialClick()} className="hover:text-orange-500 transition-colors">Zomato</button></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block text-white">Follow Us</span>
            <div className="flex gap-4">
              <button onClick={handleSocialClick} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2025 Family Cuisine Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;