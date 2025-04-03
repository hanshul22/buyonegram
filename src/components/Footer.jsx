import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">BuyOneGram</h3>
            <p className="mb-4 text-gray-400">
              Connecting farmers and buyers worldwide through our innovative B2B marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Our Location</h3>
            <button
              onClick={() => setIsMapOpen(true)}
              className="flex items-center space-x-2 text-gray-400 transition hover:text-white group"
            >
              <FaMapMarkerAlt className="text-2xl group-hover:text-primary-500" />
              <span>View on Map</span>
            </button>
            <p className="mt-2 text-gray-400">
              Rajasthan Centre of Advanced Technology (R-CAT)<br />
              Sitapura, Jaipur
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} BuyOneGram. All rights reserved.</p>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden bg-white rounded-xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMapOpen(false)}
                className="absolute z-10 text-gray-500 top-4 right-4 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>

              {/* Map */}
              <div className="w-full aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231.377084642247!2d75.814986!3d26.908437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7014dfc1693%3A0x53d6751a2228cb7d!2sRajasthan%20Centre%20of%20Advanced%20Technology%20(R-CAT)!5e0!3m2!1sen!2sin!4v1743696428677!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;