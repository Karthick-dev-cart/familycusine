import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (simulation)!",
      description: "Thanks for reaching out! We'll get back to you soon.",
      duration: 4000,
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const leftVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, duration: 1 } }
  };
  
  const rightVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, duration: 1 } }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're here for your questions, reservations, and feedback.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={leftVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-lg">Address</h4>
                  <p className="text-gray-400">Kolathur, Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-lg">Phone</h4>
                  <p className="text-gray-400">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <p className="text-gray-400">info@familycuisine.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-lg">Opening Hours</h4>
                  <p className="text-gray-400">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 border border-gray-700">
               <img className="w-full h-full object-cover" alt="Map showing location in Chennai" src="https://images.unsplash.com/photo-1584735414166-8c436d5854ac" />
            </div>
          </motion.div>

          <motion.div variants={rightVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white transition-colors"
                  placeholder="Your Name"
                />
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white transition-colors"
                  placeholder="Your Email"
                />
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white transition-colors"
                  placeholder="Your Phone (Optional)"
                />
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows="5" required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white transition-colors resize-none"
                  placeholder="Your Message..."
                ></textarea>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-lg py-6 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transform hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;