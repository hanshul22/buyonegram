import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaRocket } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';
import { useEffect, useState } from 'react';
import { 
  MobileMotionDiv, 
  MobileStaggerList, 
  MobileTapButton, 
  useMobileDetect 
} from '../components/MobileAnimations';
import {
  mahendraSinghSaran,
  rahulChoudhary,
  hemaRam,
  balveerBajiya,
  pawanKumar,
  aparanaJadon,
  rohit,
  vinodGurjar
} from '../assets';

const AboutPage = () => {
  const isMobile = useMobileDetect();

  // Regular animations for desktop
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Mobile-specific animations
  const mobileCardAnimation = {
    offscreen: { opacity: 0, scale: 0.9 },
    onscreen: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const leadership = [
    {
      name: "Mahendra Singh Saran",
      position: "Director",
      image: mahendraSinghSaran
    },
    {
      name: "Rahul Choudhary",
      position: "Director",
      image: rahulChoudhary
    },
    {
      name: "Hema Ram",
      position: "Chief Marketing Officer (CMO)",
      image: hemaRam
    },
    {
      name: "Balveer Bajiya",
      position: "Chief Technology Officer (CTO)",
      image: balveerBajiya
    },
    {
      name: "Pawan Kumar",
      position: "Chief Operating Officer",
      image: pawanKumar
    },
    {
      name: "Aparana Jadon",
      position: "Chief HR",
      image: aparanaJadon
    },
    {
      name: "Rohit",
      position: "Warehouse Manager",
      image: rohit
    },
    {
      name: "Vinod Gurjar",
      position: "Chief Sales Officer",
      image: vinodGurjar
    }
  ];

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
    <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 text-white md:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className={`container px-4 mx-auto ${isMobile ? 'about-hero-mobile' : ''}`}>
          {isMobile ? (
            <>
              <MobileMotionDiv animation="fadeInUp" className="mb-4">
                <h1 className="text-3xl font-bold text-center">
                  About BuyOne Gram
                </h1>
              </MobileMotionDiv>
              <MobileMotionDiv animation="fadeInUp" delay={0.2} className="max-w-3xl mx-auto">
                <p className="text-center">
                  A leading name in the wholesale and export industry for premium grains and pulses
                </p>
              </MobileMotionDiv>
            </>
          ) : (
            <>
              <motion.h1 
                className="mb-4 text-3xl font-bold text-center md:mb-6 md:text-4xl lg:text-5xl"
                {...fadeIn}
              >
                About BuyOne Gram
              </motion.h1>
              <motion.p 
                className="max-w-3xl mx-auto text-lg text-center md:text-xl"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                A leading name in the wholesale and export industry for premium grains and pulses
              </motion.p>
            </>
          )}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10 bg-white md:py-16">
        <div className="container px-4 mx-auto">
          {isMobile ? (
            <MobileMotionDiv animation="fadeInUp" className="max-w-4xl mx-auto">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Who We Are</h2>
              <p className="mb-4 text-base text-gray-600">
                BuyOne Gram Private Limited is a leading name in the wholesale and export industry for premium grains and pulses. With a strong commitment to quality, sustainability, and farmer empowerment, we bridge the gap between producers and retailers, ensuring fresh and high-quality products reach customers efficiently.
              </p>
              <p className="text-base text-gray-600">
                Founded by a team of passionate entrepreneurs and industry experts, our company operates with the vision of transforming agricultural trade through technology-driven solutions and ethical sourcing practices.
              </p>
            </MobileMotionDiv>
          ) : (
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">Who We Are</h2>
              <p className="mb-4 text-base text-gray-600 md:mb-6 md:text-lg">
                BuyOne Gram Private Limited is a leading name in the wholesale and export industry for premium grains and pulses. With a strong commitment to quality, sustainability, and farmer empowerment, we bridge the gap between producers and retailers, ensuring fresh and high-quality products reach customers efficiently.
              </p>
              <p className="text-base text-gray-600 md:text-lg">
                Founded by a team of passionate entrepreneurs and industry experts, our company operates with the vision of transforming agricultural trade through technology-driven solutions and ethical sourcing practices.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 md:mb-12 md:text-3xl">
            <span className="relative inline-block">
              Our Leadership
              <span className="absolute bottom-0 w-16 h-1 -translate-x-1/2 md:w-24 left-1/2 bg-primary-600"></span>
            </span>
          </h2>
          
          {isMobile ? (
            <MobileStaggerList animation="scaleIn" className="grid grid-cols-1 gap-6 sm:grid-cols-2 mobile-stagger-container">
              {leadership.map((leader, index) => (
                <div 
                  key={index}
                  className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage
                      src={leader.image}
                      alt={leader.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.src = '/leaders/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow p-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-800">{leader.name}</h3>
                    <p className="pb-2 mb-2 font-medium border-b text-primary-600 border-primary-200">{leader.position}</p>
                    {leader.qualification && (
                      <p className="text-sm text-gray-600">{leader.qualification}</p>
                    )}
                    {leader.note && (
                      <p className="mt-2 text-sm italic text-gray-500">{leader.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </MobileStaggerList>
          ) : (
            <div className="grid grid-cols-1 gap-6 mx-auto md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden sm:h-64 md:h-72">
                    <LazyImage
                      src={leader.image}
                      alt={leader.name}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/leaders/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow p-4 md:p-6">
                    <h3 className="mb-1 text-lg font-semibold text-gray-800 md:mb-2 md:text-xl">{leader.name}</h3>
                    <p className="pb-2 mb-2 font-medium border-b text-primary-600 border-primary-200">{leader.position}</p>
                    {leader.qualification && (
                      <p className="text-sm text-gray-600">{leader.qualification}</p>
                    )}
                    {leader.note && (
                      <p className="mt-2 text-sm italic text-gray-500">{leader.note}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Factory & Operations */}
      <section className="py-10 bg-white md:py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {isMobile ? (
              <MobileMotionDiv animation="fadeInUp">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Factory & Operations</h2>
                <div className="p-4 mb-6 bg-gray-50 rounded-xl">
                  <p className="text-base text-gray-600">
                    Located in RIICO Industrial Area, Sitapura, our state-of-the-art manufacturing facility is dedicated to the packaging and distribution of high-quality grains and pulses. With a production capacity of 600MT, we ensure efficient supply chain management through advanced packaging technology and strict hygiene protocols.
                  </p>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-800">Manufacturing Process</h3>
                <MobileStaggerList animation="fadeInLeft" className="space-y-4 mobile-stagger-container">
                  {[
                    { title: "Sourcing", content: "We procure premium grains and pulses from Farmer Producer Organizations (FPOs) to support fair trade and government initiatives." },
                    { title: "Quality Control", content: "Each batch undergoes rigorous multi-stage testing for food safety and compliance." },
                    { title: "Packaging", content: "Products are packed with precision to retain freshness and quality." },
                    { title: "Storage & Inventory", content: "Managed by JVS Foods Limited, ensuring smooth stock handling." },
                    { title: "Distribution", content: "Our efficient logistics team ensures timely delivery to retailers and wholesalers." }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </MobileStaggerList>
              </MobileMotionDiv>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">Our Factory & Operations</h2>
                <div className="p-4 mb-8 md:p-8 md:mb-12 bg-gray-50 rounded-xl md:rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <FaIndustry className="hidden mb-3 text-3xl md:block md:mt-1 md:text-4xl text-primary-600 md:mb-0" />
                    <div className="md:mt-0">
                      <p className="mb-4 text-base text-gray-600 md:text-lg">
                        Located in RIICO Industrial Area, Sitapura, our state-of-the-art manufacturing facility is dedicated to the packaging and distribution of high-quality grains and pulses. With a production capacity of 600MT, we ensure efficient supply chain management through advanced packaging technology and strict hygiene protocols.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">Manufacturing Process</h3>
                <div className="space-y-5 md:space-y-6">
                  {[
                    { title: "Sourcing", content: "We procure premium grains and pulses from Farmer Producer Organizations (FPOs) to support fair trade and government initiatives." },
                    { title: "Quality Control", content: "Each batch undergoes rigorous multi-stage testing for food safety and compliance." },
                    { title: "Packaging", content: "Products are packed with precision to retain freshness and quality." },
                    { title: "Storage & Inventory", content: "Managed by JVS Foods Limited, ensuring smooth stock handling." },
                    { title: "Distribution", content: "Our efficient logistics team ensures timely delivery to retailers and wholesalers." }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 md:space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-primary-600" />
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 md:text-lg">{step.title}</h4>
                        <p className="text-sm text-gray-600 md:text-base">{step.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Certifications & Future Plans */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:gap-12 max-w-7xl">
            {/* Certifications */}
            {isMobile ? (
              <MobileMotionDiv animation="fadeInUp" className="p-6 bg-white shadow-lg rounded-xl">
                <div className="mb-4 text-center">
                  <FaCertificate className="inline-block mb-3 text-4xl text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-800">Certifications & Standards</h3>
                </div>
                <MobileStaggerList animation="fadeInUp" className="space-y-3 mobile-stagger-container">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                      <p className="text-sm text-gray-600">{cert}</p>
                    </div>
                  ))}
                </MobileStaggerList>
              </MobileMotionDiv>
            ) : (
              <motion.div
                className="p-6 bg-white shadow-lg md:p-8 rounded-xl md:rounded-2xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center mb-6 md:mb-8">
                  <FaCertificate className="mb-3 text-4xl md:text-5xl text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-800 md:text-2xl">Certifications & Standards</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3 md:space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                      <p className="text-base text-gray-600">{cert}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Future Plans */}
            {isMobile ? (
              <MobileMotionDiv animation="fadeInUp" className="p-6 bg-white shadow-lg rounded-xl">
                <div className="mb-4 text-center">
                  <FaRocket className="inline-block mb-3 text-4xl text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-800">Our Future Plans</h3>
                </div>
                <div className="mb-4">
                  <h4 className="mb-2 text-base font-semibold text-gray-800">Short-term Goals</h4>
                  <MobileStaggerList animation="fadeInUp" className="space-y-3 mobile-stagger-container">
                    {shortTermPlans.map((plan, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                        <p className="text-sm text-gray-600">{plan}</p>
                      </div>
                    ))}
                  </MobileStaggerList>
                </div>
                <div>
                  <h4 className="mb-2 text-base font-semibold text-gray-800">Long-term Vision</h4>
                  <MobileStaggerList animation="fadeInUp" className="space-y-3 mobile-stagger-container">
                    {longTermPlans.map((plan, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                        <p className="text-sm text-gray-600">{plan}</p>
                      </div>
                    ))}
                  </MobileStaggerList>
                </div>
              </MobileMotionDiv>
            ) : (
              <motion.div
                className="p-6 bg-white shadow-lg md:p-8 rounded-xl md:rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center mb-6 md:mb-8">
                  <FaRocket className="mb-3 text-4xl md:text-5xl text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-800 md:text-2xl">Our Future Plans</h3>
                </div>
                <div className="mb-6 md:mb-8">
                  <h4 className="mb-4 text-lg font-semibold text-gray-800">Short-term Goals</h4>
                  <div className="space-y-3 md:space-y-4">
                    {shortTermPlans.map((plan, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3 md:space-x-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                        <p className="text-base text-gray-600">{plan}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-800">Long-term Vision</h4>
                  <div className="space-y-3 md:space-y-4">
                    {longTermPlans.map((plan, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3 md:space-x-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary-600" />
                        <p className="text-base text-gray-600">{plan}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;