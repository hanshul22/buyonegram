import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaGlobe, FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/bog/bog/IMG_6018.png'
import LazyImage from './LazyImage';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'Services', to: '/services' },
    { name: 'About', to: '/about' },
  ];

  return (
    <header className="fixed z-50 w-full shadow-md bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 container-padding">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center">
            <LazyImage src={logo} alt="BuyOneGram" className="w-auto h-12" />
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item) => (
              <RouterLink
                key={item.name}
                to={item.to}
                className={`text-neutral-600 hover:text-primary-600 font-medium transition-colors ${
                  location.pathname === item.to ? 'text-primary-600' : ''
                }`}
              >
                {item.name}
              </RouterLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="items-center hidden space-x-6 lg:flex">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSearch}
              className="transition-colors text-neutral-600 hover:text-primary-600"
            >
              <FaSearch size={20} />
            </motion.button>

            {/* Language Selector */}
            <button
              className="flex items-center transition-colors text-neutral-600 hover:text-primary-600"
              onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
            >
              <FaGlobe className="mr-2" />
              {language}
            </button>

            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSignup}
              className="flex items-center px-4 py-2 space-x-2 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              <FaUser />
              <span>Sign Up</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 transition-colors rounded-lg lg:hidden hover:bg-neutral-100"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="pb-6 bg-white border-t lg:hidden container-padding">
            {navItems.map((item) => (
              <RouterLink
                key={item.name}
                to={item.to}
                className={`block py-3 text-neutral-600 hover:text-primary-600 transition-colors ${
                  location.pathname === item.to ? 'text-primary-600' : ''
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </RouterLink>
            ))}
            <div className="flex items-center justify-between pt-4 mt-4 border-t">
              
              <button 
                className="flex items-center px-4 py-2 space-x-2 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
                onClick={toggleSignup}
              >
                <FaUser />
                <span>Sign Up</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;