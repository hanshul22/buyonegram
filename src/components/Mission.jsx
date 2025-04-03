import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaTruck, FaGlobe } from 'react-icons/fa';

const missionPoints = [
  {
    icon: <FaHandshake className="text-4xl text-primary-600" />,
    title: "Direct Farmer Connection",
    description: "Connecting farmers directly with exporters, wholesalers, and stores to eliminate middlemen and increase farmer income."
  },
  {
    icon: <FaUsers className="text-4xl text-primary-600" />,
    title: "Empowering Farmers",
    description: "Providing farmers with a logging panel for daily updates, market demands, and direct selling opportunities."
  },
  {
    icon: <FaTruck className="text-4xl text-primary-600" />,
    title: "Efficient Logistics",
    description: "Reducing delivery time and transportation costs through optimized warehouse management and delivery systems."
  },
  {
    icon: <FaGlobe className="text-4xl text-primary-600" />,
    title: "Wide Network",
    description: "Connected to 20 big marts and 56 small outlets, providing extensive market reach for farmers."
  }
];

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Buy One Gram is a revolutionary platform bridging the gap between farmers and consumers. 
            Through technology, we're creating a seamless connection that benefits both parties while 
            ensuring quality, safety, and efficiency in agricultural commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-600 text-white rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Technology-Driven Approach
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Through our innovative wholesale application and digital platform, we're revolutionizing 
              agricultural commerce. We ensure payment safety, quality assurance, and timely delivery 
              while connecting farmers directly with exporters, agro-industries, and retail stores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;