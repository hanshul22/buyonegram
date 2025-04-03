import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { moong,
  kalaChanna,
  kaliMasoor,
  moongDal,
  uradSabut,
  arharDal,
  moongMogar,
  channaDal,
  mothSabut,
  whiteMatar,
  sabudana,
  uradChilka,
  chitraRajma,
  cholaMogar,
  mishriCutting,
  mixDal,
  jhamboRajma,
  kabuliChanna,
  lobiya,
  masoorDal,
  mufliDana,
  arharDal2 ,} from "../assets";
import LazyImage from '../components/LazyImage';

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
  image: masoorDal ,
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

const ProductCard = ({ product }) => {
  const [selectedWeight, setSelectedWeight] = useState('500gm');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden bg-white shadow-lg rounded-2xl"
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <LazyImage
          src={product.image || `/products/${product.product.toLowerCase().replace(/\s+/g, '-')}.jpg`}
          alt={product.product}
          className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
          onError={(e) => {
            e.target.src = '/products/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">{product.product}</h3>

        {/* Weight Selection */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['500gm', '1kg', '5kg', '30kg'].map((weight) => (
            product[weight] > 0 && (
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

        {/* Price Display */}
        <div className="p-4 text-center bg-gray-50 rounded-xl">
          <p className="mb-1 text-sm text-gray-500">Price</p>
          <p className="text-2xl font-bold text-primary-600">
            ₹{product[selectedWeight].toFixed(2)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('500gm');

  const filteredProducts = productsData.filter(product =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Featured Product Section */}
      <section className="py-16 text-white bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold">Featured Product</h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white rounded-2xl"
            >
              <h3 className="mb-6 text-4xl font-bold text-gray-800">{bestSeller.name}</h3>
              <div className="space-y-6">
                {/* Weight Options */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(bestSeller.prices).map(([weight, price]) => (
                    price > 0 && (
                      <div
                        key={weight}
                        className="p-4 bg-primary-50 rounded-xl"
                      >
                        <p className="font-semibold text-primary-600">{weight}</p>
                        <p className="text-2xl font-bold text-gray-800">₹{price}</p>
                      </div>
                    )
                  ))}
                </div>
                <p className="text-gray-600">{bestSeller.description}</p>
                <ul className="space-y-2">
                  {bestSeller.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-primary-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <LazyImage
                src={bestSeller.image}
                alt={bestSeller.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Products Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {/* Search Bar */}
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

          {/* Weight Filter */}
          <div className="flex justify-center gap-4 mb-8">
            {['500gm', '1kg', '5kg', '30kg'].map((weight) => (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedWeight === weight
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;