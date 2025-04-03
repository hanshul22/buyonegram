import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { masoorDal, arharDal2, channaDal, mixDal} from '../assets';
import LazyImage from './LazyImage';


gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Masoor Dal',
    image: masoorDal ,
    rating: 5
  },
  {
    id: 2,
    name: 'Arhar Dal',
    image: arharDal2 ,
    rating: 4
  },
  {
    id: 3,
    name: 'Channa Dal',
    image: channaDal,
    rating: 5
  },
  {
    id: 4,
    name: 'Mix Dal',
    image: mixDal,
    rating: 4
  }
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl bg-neutral-100">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold transition-colors duration-300 text-neutral-800 group-hover:text-primary-600">
          {product.name}
        </h3>
        
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(
      titleRef.current.children,
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-neutral-800">
            Featured Products
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-neutral-600">
            Discover our selection of premium quality pulses and beans sourced from trusted farmers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/products" className="inline-block px-8 py-4 text-lg btn-primary">
              VIEW ALL
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;