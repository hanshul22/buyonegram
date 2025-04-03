import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroimg from '../assets/hero/heroimg.avif';
import LazyImage from './LazyImage';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    gsap.fromTo(text, 
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(image,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-[90vh] flex items-center pt-20 relative overflow-hidden bg-dot-pattern"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 rounded-full left-1/4 w-72 h-72 bg-primary-100 blur-3xl opacity-30" />
        <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-secondary-100 blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto container-padding">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
          <div 
            ref={textRef}
            className="w-full lg:w-1/2 lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-primary-100 text-primary-700">
                Trusted by 1000+ Businesses
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-balance">
                Connecting
                <span className="text-gradient"> Farmers </span>
                with Global Markets
              </h1>
              <p className="max-w-2xl mb-8 text-xl leading-relaxed text-neutral-600">
                Access premium quality pulses and beans directly from verified farmers worldwide through our innovative B2B marketplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Browse Products
                </button>
                <button className="btn-secondary">
                  Become a Supplier
                </button>
              </div>
            </motion.div>
          </div>

          <div 
            ref={imageRef}
            className="w-full lg:w-1/2"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-strong">
                <LazyImage 
                  src={heroimg} 
                  alt="Agricultural Products" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;