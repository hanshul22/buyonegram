import { useState } from 'react';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white transition rounded-lg bg-primary hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="mt-1 text-2xl text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Office Location
                </h3>
                <p className="text-gray-600">
                  Rajasthan Centre of Advanced Technology(R-CAT)<br />
                  Sitapura,Jaipur<br />
                  India,
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="mt-1 text-2xl text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600">
                  buy1gram@gmail.com<br />
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="mt-1 text-2xl text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Call Us
                </h3>
                <p className="text-gray-600">
                  +91 8619641968<br />
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="mt-1 text-2xl text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;