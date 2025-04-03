import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaHandshake, FaTruck, FaLock, FaChartLine, FaBoxes } from 'react-icons/fa';
import { gsap } from 'gsap';

const features = [
  {
    icon: <FaCheckCircle className="text-5xl text-primary" />,
    title: 'Quality Assurance',
    description: 'Rigorous quality control and certification processes ensuring premium products.'
  },
 
  {
    icon: <FaBoxes className="text-5xl text-primary" />,
    title: 'Bulk Ordering',
    description: 'Streamlined bulk ordering process with competitive volume discounts.'
  },
  {
    icon: <FaLock className="text-5xl text-primary" />,
    title: 'Secure Payments',
    description: 'Protected transactions with advanced escrow services for peace of mind.'
  },
  
 
];

const FeatureCard = ({ feature, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl"
    >
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="p-4 rounded-full bg-primary/5">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">
          {feature.title}
        </h3>
        <p className="leading-relaxed text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-secondary/5 blur-3xl" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <motion.h2 
            className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose BuyOneGram?
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of agricultural trade with our comprehensive suite of features
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;