import { motion } from 'framer-motion';
import { FaHandshake, FaLeaf, FaCheckCircle, FaChartLine, FaTruck, FaUserShield, FaUsers, FaBox, FaIndustry, FaGlobe, FaWarehouse, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Direct Trading Platform",
    description: "Connect directly with buyers and sellers worldwide, eliminating intermediaries and maximizing your profits.",
    category: "Trading"
  },
  {
    icon: <FaLeaf className="text-3xl" />,
    title: "Quality Processing",
    description: "Professional post-harvest services including cleaning, grading, and packaging to enhance product value.",
    category: "Processing"
  },
  {
    icon: <FaCheckCircle className="text-3xl" />,
    title: "Quality Certification",
    description: "Comprehensive quality checks and certification processes ensuring premium product standards.",
    category: "Quality"
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Market Intelligence",
    description: "Real-time market data and analytics for informed decision-making and optimal pricing strategies.",
    category: "Analytics"
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: "Logistics Solutions",
    description: "End-to-end transportation and delivery services with real-time tracking and optimization.",
    category: "Logistics"
  },
  {
    icon: <FaUserShield className="text-3xl" />,
    title: "Secure Trading",
    description: "Protected transactions and verified profiles ensuring safe and transparent trading.",
    category: "Security"
  },
  {
    icon: <FaUsers className="text-3xl" />,
    title: "Farmer Support",
    description: "Comprehensive support including training, financial assistance, and access to resources.",
    category: "Support"
  },
  {
    icon: <FaBox className="text-3xl" />,
    title: "Smart Packaging",
    description: "Sustainable packaging solutions that maintain product quality and freshness.",
    category: "Packaging"
  },
  {
    icon: <FaIndustry className="text-3xl" />,
    title: "Value Addition",
    description: "Processing services to enhance product value and meet market demands.",
    category: "Processing"
  },
  {
    icon: <FaGlobe className="text-3xl" />,
    title: "Global Market Access",
    description: "Connect with international buyers and expand your market reach worldwide.",
    category: "Market"
  },
  {
    icon: <FaWarehouse className="text-3xl" />,
    title: "Storage Solutions",
    description: "Modern storage facilities with temperature control and inventory management.",
    category: "Storage"
  },
  {
    icon: <FaSearch className="text-3xl" />,
    title: "Product Traceability",
    description: "Complete tracking system for product origin and journey transparency.",
    category: "Traceability"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-8">
        {/* Icon with gradient background */}
        <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Category Tag */}
        <div className="mt-6 inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
          {service.category}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive solutions to support your agricultural business at every step
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;