import { useState } from 'react';
import { FaComments, FaTimes, FaUser, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    { text: 'Hello! How can I help you today?', isBot: true }
  ]);

  const quickResponses = [
    'Product Inquiry',
    'Pricing Information',
    'Shipping Details',
    'Become a Supplier'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 p-4 text-white transition rounded-full shadow-lg bottom-4 right-4 bg-primary hover:bg-primary/90"
      >
        <FaComments size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed z-50 bg-white rounded-lg shadow-xl bottom-20 right-4 w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white rounded-t-lg bg-primary">
              <div className="flex items-center">
                <LazyImage
                  src="/bot-avatar.png"
                  alt="Bot"
                  className="w-8 h-8 mr-2 rounded-full"
                />
                <span>BuyOneGram Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 overflow-y-auto h-80">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.isBot
                        ? 'bg-gray-100'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Quick Responses */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 text-sm text-gray-700 transition bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 text-white transition rounded-r-lg bg-primary hover:bg-primary/90">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;