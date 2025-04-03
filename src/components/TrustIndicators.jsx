import { motion } from 'framer-motion';
import { client1,client2,client3 } from '../assets/index';
import LazyImage from './LazyImage';

const clients = [
  { name: 'Aadhar Mart', logo: client1 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 3', logo: client3 }
];

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-white">
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
          
          {/* Centered Client Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-full p-8 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                    <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                      <LazyImage
                        src={client.logo}
                        alt={client.name}
                        className="object-contain w-full h-full transition-transform duration-300 transform hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/clients/placeholder.png';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;