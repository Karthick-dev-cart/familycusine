import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [{
    name: 'Manojkumar M',
    role: 'Managing Director',
    image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/dcf6da256e42a499a0bf4597427edda2.png'
  }, {
    name: 'VijayaKumar J',
    role: 'Director',
    image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/a842857c0627006767070d35db2d9353.png'
  }, {
    name: 'Purushothaman G',
    role: 'Manager',
    image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/3606c773285f0aa8e0de4ee01429667a.png'
  }, {
    name: 'Kalpana G',
    role: 'Investor',
    image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/d510dab3dee68e2ace941e59646a7641.png'
  }, {
    name: 'Gajendiran',
    role: 'Chief Cook',
    image: 'https://horizons-cdn.hostinger.com/69e0a257-e050-4c07-be7f-d43866c6a952/b843be9daa784b5b8620ae523c71cbf5.png'
  }];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        delay: i * 0.2
      }
    })
  };

  const hexagonClipPath = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  };

  return (
    <section id="team" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Meet Our Passionate Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The driving force behind our delicious journey.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              custom={index} 
              variants={cardVariants} 
              initial="offscreen" 
              whileInView="onscreen" 
              viewport={{ once: true, amount: 0.4 }} 
              className="group w-full max-w-xs text-center"
            >
              <div 
                className="relative w-40 h-44 mx-auto mb-4 bg-gray-800 transition-all duration-300 group-hover:bg-orange-500/80"
                style={hexagonClipPath}
              >
                 <motion.img 
                  className="w-full h-full object-cover" 
                  alt={member.name} 
                  src={member.image}
                  style={hexagonClipPath}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-orange-400 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;