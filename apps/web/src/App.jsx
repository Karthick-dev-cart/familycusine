import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Cuisines from '@/components/Cuisines';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import DeliveryPartners from '@/components/DeliveryPartners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Family Cuisine Restaurant - The Ultimate Barbecue Experience in Kolathur, Chennai</title>
        <meta name="description" content="Experience the ultimate barbecue and multi-cuisine restaurant in Kolathur, Chennai. Sizzling grills, dine-in, and fast online delivery via Swiggy and Zomato." />
      </Helmet>
      <div className="min-h-screen bg-black">
        <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800`} style={{ backgroundSize: '200% 200%', animation: 'animated-gradient 15s ease infinite' }}>
          <Header />
          <main>
            <Hero />
            <About />
            <Cuisines />
            <Testimonials />
            <Team />
            <DeliveryPartners />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;