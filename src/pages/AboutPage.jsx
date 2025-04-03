import { motion } from 'framer-motion';
import { FaUsers, FaIndustry, FaCertificate, FaGlobe, FaRocket } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const leadership = [
    {
      name: "Mahendra Saran",
      position: "Director & CEO",
      qualification: "B.Tech, IIT Kharagpur",
      note: "Young Entrepreneur",
      image: "/leaders/mahendra-saran.jpg"
    },
    {
      name: "Rahul Choudhary",
      position: "Director",
      image: "/leaders/rahul-choudhary.jpg"
    },
    {
      name: "Hemraj",
      position: "Chief Marketing Officer (CMO)",
      image: "/leaders/hemraj.jpg"
    },
    {
      name: "Balveer Bajiya",
      position: "Chief Technology Officer (CTO)",
      image: "/leaders/balveer-bajiya.jpg"
    },
    {
      name: "Pawan Kumar",
      position: "General Manager",
      image: "/leaders/pawan-kumar.jpg"
    }
  ];

  const clients = ["IPer Mart", "NR Mart", "Aadhar Super-mart"];

  const certifications = [
    "FSSAI Certified – Ensuring Indian food safety standards",
    "ISO Compliant – Following global best practices",
    "Government-approved FPO sourcing – Ethical procurement policies"
  ];

  const shortTermPlans = [
    "Strengthening partnerships with more FPOs for a robust supply chain",
    "Enhancing nationwide logistics for faster delivery",
    "Developing an online ordering system for seamless B2B transactions"
  ];

  const longTermPlans = [
    "Establishing BuyOne Gram as a global wholesale brand",
    "Expanding into international markets with premium Indian grains and pulses",
    "Investing in automation & AI-driven solutions for optimized operations"
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            {...fadeIn}
          >
            About BuyOne Gram
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            A leading name in the wholesale and export industry for premium grains and pulses
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6">
              BuyOne Gram Private Limited is a leading name in the wholesale and export industry for premium grains and pulses. With a strong commitment to quality, sustainability, and farmer empowerment, we bridge the gap between producers and retailers, ensuring fresh and high-quality products reach customers efficiently.
            </p>
            <p className="text-lg text-gray-600">
              Founded by a team of passionate entrepreneurs and industry experts, our company operates with the vision of transforming agricultural trade through technology-driven solutions and ethical sourcing practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/leaders/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{leader.position}</p>
                  {leader.qualification && (
                    <p className="text-sm text-gray-600">{leader.qualification}</p>
                  )}
                  {leader.note && (
                    <p className="text-sm text-gray-500 italic mt-2">{leader.note}</p>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-600/0 hover:bg-primary-600/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Operations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Factory & Operations</h2>
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="flex items-start space-x-4">
                  <FaIndustry className="text-4xl text-primary-600 mt-1" />
                  <div>
                    <p className="text-lg text-gray-600 mb-4">
                      Located in RIICO Industrial Area, Sitapura, our state-of-the-art manufacturing facility is dedicated to the packaging and distribution of high-quality grains and pulses. With a production capacity of 600MT, we ensure efficient supply chain management through advanced packaging technology and strict hygiene protocols.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-800">Manufacturing Process</h3>
              <div className="space-y-6">
                {[
                  { title: "Sourcing", content: "We procure premium grains and pulses from Farmer Producer Organizations (FPOs) to support fair trade and government initiatives." },
                  { title: "Quality Control", content: "Each batch undergoes rigorous multi-stage testing for food safety and compliance." },
                  { title: "Packaging", content: "Products are packed with precision to retain freshness and quality." },
                  { title: "Storage & Inventory", content: "Managed by JVS Foods Limited, ensuring smooth stock handling." },
                  { title: "Distribution", content: "Our efficient logistics team ensures timely delivery to retailers and wholesalers." }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Future Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FaCertificate className="text-3xl text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary-600 text-xl">✓</span>
                    <span className="text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FaRocket className="text-3xl text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">Future Plans</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Short-Term (1-2 Years)</h4>
                <ul className="space-y-3">
                  {shortTermPlans.map((plan, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary-600">📌</span>
                      <span className="text-gray-600">{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Long-Term (5+ Years)</h4>
                <ul className="space-y-3">
                  {longTermPlans.map((plan, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary-600">📌</span>
                      <span className="text-gray-600">{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span> G-220, RIICO, Sitapura Industrial Area, Tonk Road, Jaipur – 302019
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span> +91 8619641968
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> buy1gram@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;