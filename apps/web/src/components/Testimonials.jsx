import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya S.',
      rating: 5,
      text: 'Absolutely phenomenal barbecue! The smoky flavor was perfect. Felt like a feast with the family. A must-visit in Kolathur!',
      image: 'Portrait of a happy young Indian woman'
    },
    {
      name: 'Arjun M.',
      rating: 4.5,
      text: "Great variety of cuisines. The North Indian dishes were authentic and delicious. The place is small but the service is warm and fast. Will be ordering again!",
      image: 'Portrait of a smiling young Indian man'
    },
    {
      name: 'Kavita R.',
      rating: 5,
      text: "Ordered online via Swiggy. The delivery was quick, and the food was packed perfectly. The Chinese combo was amazing. Highly recommended!",
      image: 'Portrait of a smiling professional woman'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />);
      } else if (i - 0.5 === rating) {
        stars.push(<StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-600 fill-current" />);
      }
    }
    return stars;
  };
  
  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: i * 0.2
      }
    })
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stories from happy customers who love our food.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-black p-8 rounded-2xl shadow-lg border border-gray-800 flex flex-col"
            >
              <div className="flex-grow mb-6">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img className="w-12 h-12 rounded-full object-cover" alt={testimonial.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Happy Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;