import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBox, FaCheckCircle, FaBoxOpen, FaWarehouse, FaTruck } from 'react-icons/fa';
import { gsap } from 'gsap';

const steps = [
  {
    icon: <FaBox className="text-4xl" />,
    title: 'Sourcing',
    description: 'We procure premium grains and pulses from Farmer Producer Organizations (FPOs) to support fair trade and government initiatives.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaCheckCircle className="text-4xl" />,
    title: 'Quality Control',
    description: 'Each batch undergoes rigorous multi-stage testing for food safety and compliance.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaBoxOpen className="text-4xl" />,
    title: 'Packaging',
    description: 'Products are packed with precision to retain freshness and quality.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <FaWarehouse className="text-4xl" />,
    title: 'Storage & Inventory',
    description: 'Managed by JVS Foods Limited, ensuring smooth stock handling.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaTruck className="text-4xl" />,
    title: 'Distribution',
    description: 'Our efficient logistics team ensures timely delivery to retailers and wholesalers.',
    color: 'from-red-500 to-red-600'
  }
];

const ProcessStep = ({ step, index }) => {
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2
          }
        }
      }}
      className="relative"
    >
      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="absolute top-1/2 left-[calc(50%+4rem)] w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -translate-y-1/2 hidden lg:block" />
      )}

      {/* Step Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        {/* Icon Circle */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>

        {/* Step Number */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
            {index + 1}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
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
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our streamlined process ensures quality at every step
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-20">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;