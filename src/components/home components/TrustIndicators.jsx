import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { client1, client2, client3 } from '../../assets';
import LazyImage from '../LazyImage';

const clients = [
  { name: 'Aadhar Mart', logo: client1 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 3', logo: client3 }
];

const TrustIndicators = () => {
  const sliderRef = useRef(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    
    const animate = async () => {
      await controls.start({
        x: -scrollWidth + clientWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    animate();
  }, [controls]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center text-gray-800"
        >
          Trusted by Industry Leaders
        </motion.h2>

        {/* Clients */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-center text-gray-700"
          >
            Our Clients
          </motion.h3>
          
          {/* Infinite Slider */}
          <div className="relative w-full overflow-hidden">
            <motion.div 
              ref={sliderRef}
              className="flex gap-8 py-4"
              animate={controls}
            >
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-64 h-40"
                >
                  <div className="flex items-center justify-center w-full h-full p-4 transition-all duration-500 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center justify-center w-full h-full overflow-hidden">
                      <LazyImage
                        src={client.logo}
                        alt={client.name}
                        className="object-contain w-3/4 h-3/4 transition-transform duration-500 transform hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/clients/placeholder.png';
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-64 h-40"
                >
                  <div className="flex items-center justify-center w-full h-full p-4 transition-all duration-500 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center justify-center w-full h-full overflow-hidden">
                      <LazyImage
                        src={client.logo}
                        alt={client.name}
                        className="object-contain w-3/4 h-3/4 transition-transform duration-500 transform hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/clients/placeholder.png';
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;