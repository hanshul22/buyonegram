import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBox, FaCheckCircle, FaBoxOpen, FaWarehouse, FaTruck } from 'react-icons/fa';
import { gsap } from 'gsap';

const steps = [
  {
    icon: <FaBox className="text-4xl" />,
    title: 'Sourcing',
    description: 'We work with Farmer Producer Organization\'s (FPOs) and verified farm collectives to procure fresh, ethically grown produce.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaCheckCircle className="text-4xl" />,
    title: 'Quality Control',
    description: 'Every batch undergoes multi-level inspection to meet international food safety standards.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaBoxOpen className="text-4xl" />,
    title: 'Packaging',
    description: 'Sealed for freshness using food-grade materials to retain nutritional value and quality.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <FaWarehouse className="text-4xl" />,
    title: 'Storage & Inventory',
    description: 'Managed by Buy One Gram Pvt Ltd, our warehousing system ensures seamless handling and traceability.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaTruck className="text-4xl" />,
    title: 'Distribution',
    description: 'Our logistics team delivers products on time to wholesalers, exporters, and distributors across the globe.',
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
      <div className="relative p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
        {/* Icon Circle */}
        <div className="absolute -translate-x-1/2 -top-6 left-1/2">
          <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-primary-600">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-xl font-bold text-gray-800">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>

        {/* Step Number */}
        <div className="absolute -translate-x-1/2 -bottom-4 left-1/2">
          <div className="flex items-center justify-center w-8 h-8 font-bold rounded-full bg-primary-100 text-primary-600">
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-primary-50 blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-primary-50 blur-3xl opacity-30" />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-600"
          >
            Our end-to-end supply chain ensures you get the best quality—every time
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-12 mt-20 lg:grid-cols-5">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;