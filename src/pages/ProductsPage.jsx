import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaBriefcase, FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  moong, kalaChanna, kaliMasoor, moongDal, uradSabut, arharDal,moongMogar,channaDal,mothSabut,
  whiteMatar,sabudana,uradChilka,chitraRajma,cholaMogar,mishriCutting,mixDal,jhamboRajma,kabuliChanna,
  lobiya,masoorDal,mufliDana,arharDal2,} from "../assets";
import LazyImage from '../components/LazyImage';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const productsData = [
  {
    "product": "Arhar Dal",
    "image": arharDal,
    "500gm": 61.83,
    "1kg": 122.65,
    "5kg": 598.25,
    "30kg": 3390.00
  },
  {
    "product": "Bura",
    "image": mishriCutting,
    "500gm": 28.23,
    "1kg": 55.45,
    "5kg": 262.25,
    "30kg": 1470.00
  },
  {
    "product": "Channa Dal",
    "image": channaDal,
    "500gm": 41.35,
    "1kg": 81.70,
    "5kg": 393.50,
    "30kg": 2220.00
  },
  {
    "product": "Cholla Mogar",
    "image": cholaMogar,
    "500gm": 48.70,
    "1kg": 96.40,
    "5kg": 467.00,
    "30kg": 2640.00
  },
  {
    "product": "Kabuli Channa",
    "image": kabuliChanna,
    "500gm": 49.75,
    "1kg": 98.50,
    "5kg": 477.50,
    "30kg": 2700.00
  },
  {
    "product": "Kabuli Dollar",
    "image": kabuliChanna,
    "500gm": 69.70,
    "1kg": 138.40,
    "5kg": 677.00,
    "30kg": 3840.00
  },
  {
    "product": "Kala Channa",
    "image": kalaChanna,
    "500gm": 38.20,
    "1kg": 75.40,
    "5kg": 362.00,
    "30kg": 2040.00
  },
  {
    "product": "Lobiya",
    "image": lobiya,
    "500gm": 49.23,
    "1kg": 97.45,
    "5kg": 472.25,
    "30kg": 2670.00
  },
  {
    "product": "Masoor Dal",
    "image": masoorDal,
    "500gm": 44.50,
    "1kg": 88.00,
    "5kg": 425.00,
    "30kg": 2400.00
  },
  {
    "product": "Masoor Kali",
    "image": kaliMasoor,
    "500gm": 41.88,
    "1kg": 82.75,
    "5kg": 398.75,
    "30kg": 2250.00
  },
  {
    "product": "Masoor Malka",
    "image": masoorDal,
    "500gm": 43.98,
    "1kg": 86.95,
    "5kg": 419.75,
    "30kg": 2370.00
  },
  {
    "product": "Matar Green",
    "image": whiteMatar,
    "500gm": 47.65,
    "1kg": 0,
    "5kg": 456.50,
    "30kg": 2580.00
  },
  {
    "product": "Matar Safed",
    "image": whiteMatar,
    "500gm": 28.23,
    "1kg": 55.45,
    "5kg": 262.25,
    "30kg": 1470.00
  },
  {
    "product": "Mishri Cutting",
    "image": mishriCutting,
    "500gm": 31.90,
    "1kg": 62.80,
    "5kg": 299.00,
    "30kg": 1680.00
  },
  {
    "product": "Mix Dal",
    "image": mixDal,
    "500gm": 57.10,
    "1kg": 113.20,
    "5kg": 551.00,
    "30kg": 3120.00
  },
  {
    "product": "Moofhli Dana (Desi)",
    "image": mufliDana,
    "500gm": 51.33,
    "1kg": 101.65,
    "5kg": 493.25,
    "30kg": 2790.00
  },
  {
    "product": "Moong Chilka",
    "image": moong,
    "500gm": 53.43,
    "1kg": 105.85,
    "5kg": 514.25,
    "30kg": 2910.00
  },
  {
    "product": "Moong Mogar (Bold)",
    "image": moongMogar,
    "500gm": 57.63,
    "1kg": 114.25,
    "5kg": 556.25,
    "30kg": 3150.00
  },
  {
    "product": "Moong Sabut",
    "image": moong,
    "500gm": 52.90,
    "1kg": 104.80,
    "5kg": 509.00,
    "30kg": 2880.00
  },
  {
    "product": "Moth Sabut",
    "image": mothSabut,
    "500gm": 42.93,
    "1kg": 0,
    "5kg": 409.25,
    "30kg": 2310.00
  },
  {
    "product": "Rajma Chitra",
    "image": chitraRajma,
    "500gm": 67.08,
    "1kg": 0,
    "5kg": 650.75,
    "30kg": 3690.00
  },
  {
    "product": "Rajma Jhambu",
    "image": jhamboRajma,
    "500gm": 55.53,
    "1kg": 0,
    "5kg": 535.25,
    "30kg": 3030.00
  },
  {
    "product": "Rajma Red",
    "image": jhamboRajma,
    "500gm": 60.78,
    "1kg": 120.55,
    "5kg": 587.75,
    "30kg": 3330.00
  },
  {
    "product": "Sabu Dana",
    "image": sabudana,
    "500gm": 41.88,
    "1kg": 82.75,
    "5kg": 398.75,
    "30kg": 2250.00
  },
  {
    "product": "Soyabean Dana",
    "image": mufliDana,
    "500gm": 31.90,
    "1kg": 0,
    "5kg": 299.00,
    "30kg": 1680.00
  },
  {
    "product": "Urad Chilka Daal",
    "image": uradChilka,
    "500gm": 57.63,
    "1kg": 0,
    "5kg": 556.25,
    "30kg": 3150.00
  },
  {
    "product": "Urad Mogar",
    "image": uradChilka,
    "500gm": 59.20,
    "1kg": 117.40,
    "5kg": 572.00,
    "30kg": 3240.00
  },
  {
    "product": "Urad Sabut",
    "image": uradSabut,
    "500gm": 53.95,
    "1kg": 0,
    "5kg": 519.50,
    "30kg": 2940.00
  }
];

const bestSeller = {

  name: 'Masoor Dal',
  image: masoorDal,
  prices: {
    '500gm': 69.70,
    '1kg': 138.40,
    '5kg': 677.00,
    '30kg': 3840.00
  },
  description: 'Premium quality Kabuli Dollar, known for its superior size and cooking quality. Perfect for both home and commercial use.',
  features: [
    'Premium Grade',
    'Consistent Size',
    'High Protein Content',
    'No Chemical Processing'
  ]
};

const featuredProducts = [
  {
    name: 'Kabuli Dollar',
    image: kabuliChanna,
    prices: {
      '500gm': 69.70,
      '1kg': 138.40,
      '5kg': 677.00,
      '30kg': 3840.00
    },
    description: 'Premium quality Kabuli Dollar, known for its superior size and cooking quality. Perfect for both home and commercial use.',
    features: [
      'Premium Grade',
      'Consistent Size',
      'High Protein Content',
      'No Chemical Processing'
    ]
  },
  {
    name: 'Masoor Dal',
    image: masoorDal,
    prices: {
      '500gm': 44.50,
      '1kg': 88.00,
      '5kg': 425.00,
      '30kg': 2400.00
    },
    description: 'High-quality Masoor Dal with perfect texture and rich nutritional value. Ideal for everyday cooking.',
    features: [
      'Natural Color',
      'Quick Cooking',
      'Rich in Protein',
      'Carefully Sorted'
    ]
  },
  {
    name: 'Urad Dal',
    image: uradChilka,
    prices: {
      '500gm': 57.63,
      '1kg': 114.25,
      '5kg': 556.25,
      '30kg': 3150.00
    },
    description: 'Premium Urad Dal, perfect for South Indian delicacies. Maintains its shape and texture after cooking.',
    features: [
      'Superior Quality',
      'Pure White Color',
      'High Nutrition',
      'Traditional Processing'
    ]
  },
  {
    name: 'Channa Dal',
    image: channaDal,
    prices: {
      '500gm': 41.35,
      '1kg': 81.70,
      '5kg': 393.50,
      '30kg': 2220.00
    },
    description: 'Premium quality Channa Dal with excellent taste and cooking properties. Perfect for various Indian dishes.',
    features: [
      'Golden Color',
      'Even Size',
      'High Fiber Content',
      'Quality Assured'
    ]
  },
  {
    name: 'Moong Dal',
    image: moongDal,
    prices: {
      '500gm': 57.63,
      '1kg': 114.25,
      '5kg': 556.25,
      '30kg': 3150.00
    },
    description: 'Superior quality Moong Dal, perfect for both everyday cooking and special dishes. Easy to digest.',
    features: [
      'Premium Selection',
      'Natural Processing',
      'Rich in Nutrients',
      'Uniform Size'
    ]
  }
];


const FeaturedProduct = ({ product, direction }) => {
  if (!product) return null;
  
  const productName = product?.name || 'Product';
  const productDescription = product?.description || '';
  const productImage = product?.image || '';
  const productPrices = product?.prices || {};
  const productFeatures = product?.features || [];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 'left' ? 100 : -100 }}
      transition={{ duration: 0.5 }}
      className="grid items-center gap-8 md:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 bg-white shadow-lg rounded-2xl"
      >
        <h3 className="mb-6 text-4xl font-bold text-gray-800">{productName}</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(productPrices).map(([weight, price]) => (
              <motion.div
                key={weight}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-primary-50 rounded-xl"
              >
                <p className="font-semibold text-primary-600">{weight}</p>
                <p className="text-2xl font-bold text-gray-800">₹{price}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600"
          >
            {productDescription}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            {productFeatures.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2 text-gray-700"
              >
                <span className="w-2 h-2 rounded-full bg-primary-600" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden"
      >
        <img
          src={productImage}
          alt={productName}
          className="object-cover w-full h-full"
        />

      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ product, onBuyNowClick, selectedWeight, setSelectedWeight }) => {
  const productName = product?.product || 'Product';
  const price = product?.[selectedWeight] || 0;
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';
  const productImage = product?.image || `/products/${productName.toLowerCase().replace(/\s+/g, '-')}.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden bg-white shadow-lg rounded-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
          onError={(e) => {
            e.target.src = '/products/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">{productName}</h3>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {['500gm', '1kg', '5kg', '30kg'].map((weight) => (
            product?.[weight] > 0 && (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedWeight === weight
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {weight}
              </button>
            )
          ))}
        </div>

        <div className="p-4 mb-4 text-center bg-gray-50 rounded-xl">
          <p className="mb-1 text-sm text-gray-500">Price</p>
          <p className="text-2xl font-bold text-primary-600">
            ₹{formattedPrice}
          </p>
        </div>
        
        <button
          onClick={() => onBuyNowClick(product, selectedWeight)}
          className="w-full py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('500gm');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // For inquiry modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('500gm');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    product: '',
    weight: '',
    price: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleOpenModal = (product, weight) => {
    const productName = product?.product || 'Product';
    const price = product?.[weight] || 0;
    
    setSelectedProduct(product);
    setSelectedSize(weight);
    setFormData({
      ...formData,
      product: productName,
      weight: weight,
      price: price,
      message: `I'm interested in purchasing ${productName} (${weight}) at ₹${price.toFixed(2)}.`
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitResult(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_contact: formData.contact,
          product_name: formData.product,
          product_weight: formData.weight,
          product_price: typeof formData.price === 'number' ? formData.price.toFixed(2) : '0.00',
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitResult({
        success: true,
        message: 'Your inquiry has been sent successfully!'
      });
      
      // Reset form fields but keep modal open to show success message
      setFormData({
        name: '',
        email: '',
        contact: '',
        message: '',
        product: '',
        weight: '',
        price: 0
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitResult({
        success: false,
        message: 'Failed to send inquiry. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    const initEmailJS = () => {
      try {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initialized successfully");
      } catch (error) {
        console.error('Error initializing EmailJS:', error);
      }
    };
    
    initEmailJS();
  }, []);

  const nextProduct = () => {
    setSlideDirection('right');
    setCurrentProductIndex((prev) =>
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setSlideDirection('left');
    setCurrentProductIndex((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextProduct, 5000);
    return () => clearInterval(timer);
  }, []);

  // Category mapping for products
  const productCategories = {
    // Pulses
    'Arhar Dal': 'pulses',
    'Channa Dal': 'pulses',
    'Lobiya': 'pulses',
    'Masoor Dal': 'pulses',
    'Masoor Kali': 'pulses',
    'Masoor Malka': 'pulses',
    'Moong Chilka': 'pulses',
    'Moong Mogar (Bold)': 'pulses',
    'Moong Sabut': 'pulses',
    'Rajma Chitra': 'pulses',
    'Rajma Jhambu': 'pulses',
    'Rajma Red': 'pulses',
    'Urad Chilka Daal': 'pulses',
    'Urad Mogar': 'pulses',
    'Urad Sabut': 'pulses',
    'Kala Channa': 'pulses',
    'Kabuli Channa': 'pulses',
    'Kabuli Dollar': 'pulses',
    'Cholla Mogar': 'pulses',
    'Moth Sabut': 'pulses',
    'Mix Dal': 'pulses',
    
    // Grains
    'Matar Green': 'grains',
    'Matar Safed': 'grains',
    'Sabu Dana': 'grains',
    'Soyabean Dana': 'grains',
    'Moofhli Dana (Desi)': 'grains',
    
    // Millets (assuming some products are millets)
    'Bura': 'millets',
    'Mishri Cutting': 'millets',
  };

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      productCategories[product.product] === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate product details for modal
  const productName = selectedProduct?.product || 'Product';
  const price = selectedProduct?.[selectedSize] || 0;
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="relative py-16 text-white bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold">Featured Product</h2>

          <div className="absolute z-10 -translate-y-1/2 top-1/2 left-4">
            <button
              onClick={prevProduct}
              className="p-3 transition-colors rounded-full bg-white/20 hover:bg-white/30"
            >
              <FaChevronLeft className="text-xl text-white" />
            </button>
          </div>
          <div className="absolute z-10 -translate-y-1/2 top-1/2 right-4">
            <button
              onClick={nextProduct}
              className="p-3 transition-colors rounded-full bg-white/20 hover:bg-white/30"
            >
              <FaChevronRight className="text-xl text-white" />
            </button>
          </div>

          <AnimatePresence>
            <FeaturedProduct
              key={currentProductIndex}
              product={featuredProducts[currentProductIndex]}
              direction={slideDirection}
            />
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentProductIndex ? 'right' : 'left');
                  setCurrentProductIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentProductIndex ? 'bg-white' : 'bg-white/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pl-12 pr-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
              />
              <FaSearch className="absolute text-xl text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg shadow-sm ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Categories
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setSelectedCategory('pulses')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg shadow-sm ${
                selectedCategory === 'pulses'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Pulses
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setSelectedCategory('grains')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg shadow-sm ${
                selectedCategory === 'grains'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Grains
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setSelectedCategory('millets')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg shadow-sm ${
                selectedCategory === 'millets'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Millets
            </motion.button>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {['500gm', '1kg', '5kg', '30kg'].map((weight) => (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedWeight === weight
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {weight}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onBuyNowClick={handleOpenModal}
                selectedWeight={selectedWeight}
                setSelectedWeight={setSelectedWeight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal - Placed at the page level, outside of product cards */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Product Inquiry</h3>
                <button 
                  onClick={handleCloseModal}
                  className="p-1 text-gray-500 transition-colors rounded-full hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mb-6 text-gray-600">
                {productName} ({selectedSize}) - ₹{formattedPrice}
              </p>

              {submitResult ? (
                <div className={`p-4 mb-6 rounded-lg ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <p>{submitResult.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Contact Number</label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
              
              {submitResult && submitResult.success && (
                <button
                  onClick={handleCloseModal}
                  className="w-full px-4 py-2 mt-4 font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700"
                >
                  Close
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;